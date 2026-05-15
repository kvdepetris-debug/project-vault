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

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Check your email for the newest magic link.");
    }
  }

  return (
    <main>
      <h1>Project Vault</h1>
      <p>Sign in to manage your projects, notes, files, timelines, reminders, and AI assistant.</p>

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        type="email"
      />

      <button onClick={signIn}>
        Send magic link
      </button>

      {message ? <p>{message}</p> : null}
    </main>
  );
}
