"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function AuthPage() {
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function signIn() {
    setMessage("Sending secure magic link...");

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    setMessage(error ? error.message : "Check your email for the newest magic link.");
  }

  return (
    <main className="min-h-screen bg-[#050608] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(198,156,91,0.18),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.08),transparent_30%)]" />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0b0d10] to-[#030303]" />

      <section className="relative min-h-screen grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden lg:flex flex-col justify-between p-12 border-r border-white/10">
          <div>
            <div className="flex items-center gap-4 mb-24">
              <div className="h-14 w-14 border border-[#c9a064] text-[#d6b06f] flex items-center justify-center text-3xl font-bold">
                M
              </div>
              <div>
                <p className="tracking-[0.35em] text-[#d6b06f] font-semibold">MONOLITH</p>
                <p className="tracking-[0.32em] text-xs text-white/70">ENGINEERING</p>
              </div>
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight">
              ENGINEERING
              <br />
              BUILT LIKE A
              <br />
              <span className="text-[#d6b06f]">MONOLITH.</span>
            </h1>

            <div className="h-px w-16 bg-[#d6b06f] my-8" />

            <p className="max-w-md text-lg leading-8 text-white/70">
              Monolith Engineering delivers end-to-end solutions in structural
              engineering, project management, and construction execution.
            </p>

            <div className="mt-14 space-y-8">
              {[
                ["STRUCTURAL INTEGRITY", "Built to last."],
                ["PRECISION PLANNING", "Every detail. No exceptions."],
                ["EXPERT EXECUTION", "Managed from start to finish."],
                ["BUILT ON TRUST", "Strong foundations. Stronger relationships."],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-5">
                  <div className="h-10 w-10 border border-[#d6b06f] rounded-full flex items-center justify-center text-[#d6b06f]">
                    ◆
                  </div>
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-white/55 text-sm mt-1">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-white/35">
            © 2025 Monolith Engineering. Monolith Projects is a proprietary project platform.
          </p>
        </div>

        <div className="relative flex items-center justify-center p-6 lg:p-12">
          <div className="w-full max-w-2xl rounded-[2rem] border border-white/15 bg-white/[0.035] shadow-2xl backdrop-blur-xl overflow-hidden">
            <div className="p-8 lg:p-14 text-center">
              <div className="mx-auto mb-8 h-24 w-24 border border-[#d6b06f] text-[#d6b06f] flex items-center justify-center text-6xl font-bold">
                M
              </div>

              <h2 className="text-5xl font-black tracking-[0.28em]">MONOLITH</h2>

              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="h-px w-16 bg-[#d6b06f]" />
                <p className="text-[#d6b06f] tracking-[0.35em] font-semibold">
                  PROJECTS
                </p>
                <div className="h-px w-16 bg-[#d6b06f]" />
              </div>

              <p className="mt-10 text-white/65 leading-7 max-w-md mx-auto">
                Your command center for projects, documents, timelines, reminders,
                and AI-powered engineering intelligence.
              </p>

              <div className="h-px bg-white/10 my-10" />

              <div className="text-left max-w-md mx-auto">
                <p className="text-lg font-bold tracking-wide">SIGN IN</p>
                <p className="text-white/55 mt-2">
                  Enter your email to receive a secure magic link.
                </p>

                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  type="email"
                  className="mt-6 w-full rounded-xl border border-white/15 bg-black/30 px-5 py-4 text-white placeholder:text-white/35 outline-none focus:border-[#d6b06f]"
                />

                <button
                  onClick={signIn}
                  className="mt-5 w-full rounded-xl bg-[#d6b06f] px-5 py-4 font-black tracking-wide text-black hover:bg-[#e6c17d] transition"
                >
                  SEND MAGIC LINK
                </button>

                {message ? (
                  <p className="mt-5 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-white/70">
                    {message}
                  </p>
                ) : null}
              </div>

              <div className="mt-10 text-white/45 text-sm">
                Secure. Private. Built for professionals.
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-[#d6b06f]">10+</p>
                  <p className="text-xs text-white/55 mt-2">YEARS EXPERIENCE</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#d6b06f]">100+</p>
                  <p className="text-xs text-white/55 mt-2">PROJECTS DELIVERED</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#d6b06f]">1</p>
                  <p className="text-xs text-white/55 mt-2">STANDARD</p>
                </div>
              </div>

              <div className="mt-12 rounded-2xl border border-white/10 bg-black/25 p-6">
                <p className="text-xl text-white/85">
                  “We don’t just manage projects. We build legacies.”
                </p>
                <p className="mt-4 text-white/45">— Monolith Engineering</p>
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-white/10 text-center text-xs text-white/45">
              <div className="p-5 border-r border-white/10">INDUSTRY STANDARDS</div>
              <div className="p-5 border-r border-white/10">CLIENT FOCUSED</div>
              <div className="p-5">BUILT LONG TERM</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
