"use client";

import { useState } from "react";

export default function AssistantBox({ projectId }: { projectId: string }) {
  const [message, setMessage] = useState("");
  const [answer, setAnswer] = useState("Ask me to draft an update, summarize notes, find blockers, or list overdue work.");
  const [loading, setLoading] = useState(false);

  async function askAssistant(prompt?: string) {
    const finalMessage = prompt ?? message;
    if (!finalMessage.trim()) return;
    setLoading(true);
    setAnswer("Thinking...");
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ projectId, message: finalMessage }),
      });
      const data = await res.json();
      setAnswer(data.output ?? data.error ?? "No answer returned.");
      setMessage("");
    } catch (error) {
      setAnswer("Something went wrong. Check your OpenAI key and server logs.");
    } finally {
      setLoading(false);
    }
  }

  const prompts = [
    "Draft my weekly project update",
    "What is blocking this project?",
    "What should I focus on next?",
    "Turn my notes into action items",
    "What reminders should I set?",
  ];

  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-5 shadow-sm">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">AI Assistant</h2>
        <p className="text-sm text-slate-500 mt-1">Uses the selected project, tasks, notes, files, and reminders.</p>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        {prompts.map((p) => (
          <button key={p} onClick={() => askAssistant(p)} className="text-sm rounded-full border border-slate-300 px-3 py-2 hover:bg-slate-50">
            {p}
          </button>
        ))}
      </div>
      <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 min-h-28 text-sm text-slate-700 whitespace-pre-wrap mb-4">
        {answer}
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask about this project..."
        className="w-full border border-slate-300 rounded-xl p-3 min-h-24"
      />
      <button disabled={loading} onClick={() => askAssistant()} className="mt-3 rounded-xl bg-slate-900 text-white px-4 py-3 disabled:opacity-60">
        {loading ? "Working..." : "Ask assistant"}
      </button>
    </div>
  );
}
