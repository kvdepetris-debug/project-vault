"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  revalidatePath("/");
}

export async function createProject(formData: FormData) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) throw new Error("Not signed in");

  const name = String(formData.get("name") || "").trim();
  const description = String(formData.get("description") || "").trim() || null;
  const due_date = String(formData.get("due_date") || "").trim() || null;
  if (!name) throw new Error("Project name is required");

  const { error } = await supabase.from("projects").insert({
    user_id: user.id,
    name,
    description,
    due_date,
    status: "Planning",
    percent: 0,
    next_action: "Define the first tasks and timeline.",
  });
  if (error) throw error;
  revalidatePath("/");
}

export async function createTask(formData: FormData) {
  const supabase = await createClient();
  const project_id = String(formData.get("project_id") || "");
  const name = String(formData.get("name") || "").trim();
  const due_date = String(formData.get("due_date") || "").trim() || null;
  const priority = String(formData.get("priority") || "Medium");
  if (!project_id || !name) throw new Error("Missing task data");

  const { error } = await supabase.from("tasks").insert({
    project_id,
    name,
    due_date,
    priority,
    done: false,
  });
  if (error) throw error;
  revalidatePath("/");
}

export async function toggleTask(taskId: string, done: boolean) {
  const supabase = await createClient();
  const { error } = await supabase.from("tasks").update({ done }).eq("id", taskId);
  if (error) throw error;
  revalidatePath("/");
}

export async function createNote(formData: FormData) {
  const supabase = await createClient();
  const project_id = String(formData.get("project_id") || "");
  const title = String(formData.get("title") || "").trim() || "Untitled note";
  const content = String(formData.get("content") || "").trim();
  if (!project_id) throw new Error("Missing project id");

  const { error } = await supabase.from("notes").insert({ project_id, title, content });
  if (error) throw error;
  revalidatePath("/");
}

export async function createReminder(formData: FormData) {
  const supabase = await createClient();
  const project_id = String(formData.get("project_id") || "");
  const title = String(formData.get("title") || "").trim();
  const remind_at = String(formData.get("remind_at") || "").trim();
  const priority = String(formData.get("priority") || "Medium");
  if (!project_id || !title || !remind_at) throw new Error("Missing reminder data");

  const { error } = await supabase.from("reminders").insert({ project_id, title, remind_at, priority });
  if (error) throw error;
  revalidatePath("/");
}

export async function uploadProjectFile(formData: FormData) {
  const supabase = await createClient();
  const project_id = String(formData.get("project_id") || "");
  const file_type = String(formData.get("file_type") || "Document");
  const file = formData.get("file") as File | null;
  if (!project_id || !file || file.size === 0) throw new Error("Missing file");

  const path = `${project_id}/${Date.now()}-${file.name}`;
  const { error: uploadError } = await supabase.storage
    .from("project-files")
    .upload(path, file, { contentType: file.type, upsert: false });
  if (uploadError) throw uploadError;

  const { error: dbError } = await supabase.from("files").insert({
    project_id,
    name: file.name,
    file_type,
    storage_path: path,
  });
  if (dbError) throw dbError;
  revalidatePath("/");
}
