import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { createProject, createTask, createNote, createReminder, toggleTask, uploadProjectFile, signOut } from "@/lib/actions";
import AssistantBox from "@/components/assistant-box";

export default async function HomePage({ searchParams }: { searchParams?: Promise<{ project?: string }> }) {
  const params = await searchParams;
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/auth");

  const { data: projects = [] } = await supabase
    .from("projects")
    .select("*")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const selectedProject = projects.find((p) => p.id === params?.project) ?? projects[0] ?? null;

  const { data: tasks = [] } = selectedProject
    ? await supabase.from("tasks").select("*").eq("project_id", selectedProject.id).order("created_at", { ascending: false })
    : { data: [] as any[] };

  const { data: notes = [] } = selectedProject
    ? await supabase.from("notes").select("*").eq("project_id", selectedProject.id).order("created_at", { ascending: false })
    : { data: [] as any[] };

  const { data: reminders = [] } = selectedProject
    ? await supabase.from("reminders").select("*").eq("project_id", selectedProject.id).order("remind_at", { ascending: true })
    : { data: [] as any[] };

  const { data: files = [] } = selectedProject
    ? await supabase.from("files").select("*").eq("project_id", selectedProject.id).order("created_at", { ascending: false })
    : { data: [] as any[] };

  const openTasks = tasks.filter((t) => !t.done).length;

  return (
    <main className="min-h-screen bg-slate-50 p-5 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <header className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight">Project Vault</h1>
            <p className="text-slate-600 mt-2">Projects, documents, notes, finals, timelines, reminders, and AI help.</p>
          </div>
          <form action={signOut}>
            <button className="rounded-xl border border-slate-300 px-4 py-2 bg-white">Sign out</button>
          </form>
        </header>

        <section className="grid md:grid-cols-4 gap-4">
          <Card title="Projects" value={projects.length} note="Active workspaces" />
          <Card title="Open tasks" value={openTasks} note="Need attention" />
          <Card title="Notes" value={notes.length} note="For selected project" />
          <Card title="Files" value={files.length} note="Documents and finals" />
        </section>

        <section className="grid xl:grid-cols-[320px_1fr] gap-6">
          <aside className="space-y-6">
            <form action={createProject} className="rounded-3xl bg-white border border-slate-200 p-5 space-y-3 shadow-sm">
              <h2 className="text-xl font-semibold">Create project</h2>
              <input name="name" className="w-full border border-slate-300 rounded-xl p-3" placeholder="Project name" />
              <input name="description" className="w-full border border-slate-300 rounded-xl p-3" placeholder="Short description" />
              <input name="due_date" type="date" className="w-full border border-slate-300 rounded-xl p-3" />
              <button className="w-full rounded-xl bg-slate-900 text-white px-4 py-3 font-medium">Save project</button>
            </form>

            <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
              <h2 className="text-xl font-semibold mb-3">Your projects</h2>
              <div className="space-y-3">
                {projects.length ? projects.map((project) => (
                  <a key={project.id} href={`/?project=${project.id}`} className={`block rounded-2xl border p-4 ${selectedProject?.id === project.id ? "border-slate-900 bg-slate-50" : "border-slate-200"}`}>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-slate-500 mt-1">{project.status} • Due {project.due_date ?? "not set"}</p>
                  </a>
                )) : <p className="text-sm text-slate-500">Create your first project.</p>}
              </div>
            </div>
          </aside>

          {selectedProject ? (
            <section className="grid lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Panel title={selectedProject.name} subtitle={selectedProject.description ?? "No description yet."}>
                  <p className="text-sm text-slate-600">Next action: {selectedProject.next_action ?? "None set"}</p>
                  <p className="text-sm text-slate-600 mt-2">Progress: {selectedProject.percent}%</p>
                </Panel>

                <Panel title="Tasks" subtitle="Add work, due dates, and priorities.">
                  <form action={createTask} className="grid sm:grid-cols-[1fr_150px_120px_auto] gap-2 mb-4">
                    <input type="hidden" name="project_id" value={selectedProject.id} />
                    <input name="name" className="border border-slate-300 rounded-xl p-3" placeholder="Task" />
                    <input name="due_date" type="date" className="border border-slate-300 rounded-xl p-3" />
                    <select name="priority" className="border border-slate-300 rounded-xl p-3"><option>High</option><option>Medium</option><option>Low</option></select>
                    <button className="rounded-xl bg-slate-900 text-white px-4">Add</button>
                  </form>
                  <div className="space-y-3">
                    {tasks.length ? tasks.map((task) => (
                      <form key={task.id} action={async () => { "use server"; await toggleTask(task.id, !task.done); }} className="flex items-center justify-between gap-3 border border-slate-200 rounded-2xl p-4">
                        <div>
                          <p className={task.done ? "line-through text-slate-400" : "font-medium"}>{task.name}</p>
                          <p className="text-sm text-slate-500">{task.priority} • {task.due_date ?? "No due date"}</p>
                        </div>
                        <button className="rounded-xl border border-slate-300 px-3 py-2">{task.done ? "Undo" : "Done"}</button>
                      </form>
                    )) : <p className="text-sm text-slate-500">No tasks yet.</p>}
                  </div>
                </Panel>

                <Panel title="Notes" subtitle="Capture meetings, ideas, blockers, and decisions.">
                  <form action={createNote} className="space-y-2 mb-4">
                    <input type="hidden" name="project_id" value={selectedProject.id} />
                    <input name="title" className="w-full border border-slate-300 rounded-xl p-3" placeholder="Note title" />
                    <textarea name="content" className="w-full border border-slate-300 rounded-xl p-3 min-h-28" placeholder="Write note..." />
                    <button className="rounded-xl bg-slate-900 text-white px-4 py-3">Save note</button>
                  </form>
                  <div className="space-y-3">
                    {notes.length ? notes.map((note) => (
                      <div key={note.id} className="border border-slate-200 rounded-2xl p-4">
                        <p className="font-medium">{note.title}</p>
                        <p className="text-sm text-slate-600 mt-2 whitespace-pre-wrap">{note.content}</p>
                      </div>
                    )) : <p className="text-sm text-slate-500">No notes yet.</p>}
                  </div>
                </Panel>
              </div>

              <div className="space-y-6">
                <AssistantBox projectId={selectedProject.id} />

                <Panel title="Files, documents, finals, timelines" subtitle="Upload project files to Supabase Storage.">
                  <form action={uploadProjectFile} className="space-y-2 mb-4">
                    <input type="hidden" name="project_id" value={selectedProject.id} />
                    <select name="file_type" className="w-full border border-slate-300 rounded-xl p-3"><option>Document</option><option>Final</option><option>Timeline</option><option>Attachment</option></select>
                    <input name="file" type="file" className="w-full border border-slate-300 rounded-xl p-3 bg-white" />
                    <button className="rounded-xl bg-slate-900 text-white px-4 py-3">Upload file</button>
                  </form>
                  <div className="space-y-3">
                    {files.length ? files.map((file) => (
                      <div key={file.id} className="border border-slate-200 rounded-2xl p-4">
                        <p className="font-medium">{file.name}</p>
                        <p className="text-sm text-slate-500">{file.file_type}</p>
                      </div>
                    )) : <p className="text-sm text-slate-500">No files yet.</p>}
                  </div>
                </Panel>

                <Panel title="Reminders" subtitle="Track deadlines, updates, and follow-ups.">
                  <form action={createReminder} className="space-y-2 mb-4">
                    <input type="hidden" name="project_id" value={selectedProject.id} />
                    <input name="title" className="w-full border border-slate-300 rounded-xl p-3" placeholder="Reminder title" />
                    <input name="remind_at" type="datetime-local" className="w-full border border-slate-300 rounded-xl p-3" />
                    <select name="priority" className="w-full border border-slate-300 rounded-xl p-3"><option>High</option><option>Medium</option><option>Low</option></select>
                    <button className="rounded-xl bg-slate-900 text-white px-4 py-3">Save reminder</button>
                  </form>
                  <div className="space-y-3">
                    {reminders.length ? reminders.map((r) => (
                      <div key={r.id} className="border border-slate-200 rounded-2xl p-4">
                        <p className="font-medium">{r.title}</p>
                        <p className="text-sm text-slate-500">{r.priority} • {r.remind_at}</p>
                      </div>
                    )) : <p className="text-sm text-slate-500">No reminders yet.</p>}
                  </div>
                </Panel>
              </div>
            </section>
          ) : (
            <Panel title="No project selected" subtitle="Create your first project to begin." />
          )}
        </section>
      </div>
    </main>
  );
}

function Card({ title, value, note }: { title: string; value: number; note: string }) {
  return <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm"><p className="text-sm text-slate-500">{title}</p><p className="text-3xl font-semibold mt-1">{value}</p><p className="text-sm text-slate-500 mt-2">{note}</p></div>;
}

function Panel({ title, subtitle, children }: { title: string; subtitle?: string; children?: React.ReactNode }) {
  return <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm"><div className="mb-4"><h2 className="text-xl font-semibold">{title}</h2>{subtitle ? <p className="text-sm text-slate-500 mt-1">{subtitle}</p> : null}</div>{children}</div>;
}
