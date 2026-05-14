import OpenAI from "openai";
import { createClient } from "@/lib/supabase/server";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: Request) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return Response.json({ error: "Unauthorized" }, { status: 401 });

  const { projectId, message } = await req.json();
  if (!projectId || !message) return Response.json({ error: "Missing projectId or message" }, { status: 400 });

  const { data: project } = await supabase
    .from("projects")
    .select("*")
    .eq("id", projectId)
    .eq("user_id", user.id)
    .single();

  if (!project) return Response.json({ error: "Project not found" }, { status: 404 });

  const [{ data: tasks }, { data: notes }, { data: reminders }, { data: files }] = await Promise.all([
    supabase.from("tasks").select("*").eq("project_id", projectId).order("created_at", { ascending: false }),
    supabase.from("notes").select("*").eq("project_id", projectId).order("created_at", { ascending: false }).limit(20),
    supabase.from("reminders").select("*").eq("project_id", projectId).order("remind_at", { ascending: true }),
    supabase.from("files").select("*").eq("project_id", projectId).order("created_at", { ascending: false }),
  ]);

  const context = { project, tasks, notes, reminders, files };

  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [
      {
        role: "system",
        content: "You are a practical project assistant. Be clear and direct. Help the user manage tasks, notes, reminders, timelines, project updates, risks, blockers, and missing documents.",
      },
      {
        role: "user",
        content: `Project context:\n${JSON.stringify(context, null, 2)}\n\nUser request:\n${message}`,
      },
    ],
  });

  const output = response.output_text;

  await supabase.from("assistant_messages").insert([
    { project_id: projectId, role: "user", content: message },
    { project_id: projectId, role: "assistant", content: output },
  ]);

  return Response.json({ output });
}
