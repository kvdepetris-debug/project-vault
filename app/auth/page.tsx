"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function signIn() {
    setMessage("Sending magic link...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setMessage(error ? error.message : "Check your email for the newest magic link.");
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-xl p-8 space-y-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Project Vault
          </h1>
          <p className="mt-3 text-slate-600 leading-6">
            Sign in to manage your projects, notes, files, timelines, reminders, and AI assistant.
          </p>
        </div>

        <div className="space-y-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            type="email"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-slate-900 outline-none focus:ring-2 focus:ring-slate-900"
          />

          <button
            onClick={signIn}
            className="w-full rounded-2xl bg-slate-900 text-white px-4 py-3 font-medium hover:bg-slate-700 transition"
          >
            Send magic link
          </button>
        </div>

        {message ? (
          <p className="rounded-2xl bg-slate-100 border border-slate-200 p-4 text-sm text-slate-700">
            {message}
          </p>
        ) : null}
      </div>
    </main>
  );
}
