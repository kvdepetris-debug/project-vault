"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function signIn() {
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/auth/callback` },
    });
    setMessage(error ? error.message : "Check your email for the sign-in link.");
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-6 bg-slate-50">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 shadow-sm p-8 space-y-5">
        <div>
          <h1 className="text-3xl font-semibold">Project Vault</h1>
          <p className="text-slate-600 mt-2">Sign in to manage your projects, notes, files, timelines, reminders, and AI assistant.</p>
        </div>
        <input
          className="w-full border border-slate-300 rounded-xl p-3"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="w-full rounded-xl bg-slate-900 text-white p-3 font-medium" onClick={signIn}>
          Send magic link
        </button>
        {message ? <p className="text-sm text-slate-600">{message}</p> : null}
      </div>
    </main>
  );
}
