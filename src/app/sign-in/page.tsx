"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useState } from "react";
import { toast } from "react-toastify";
import { COMPANY } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/useAppStore";
import { clsx } from "clsx";

type Mode = "signin" | "signup";

function AuthForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initial: Mode = searchParams.get("mode") === "signup" ? "signup" : "signin";
  const [mode, setMode] = useState<Mode>(initial);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const createAccount = useAppStore((s) => s.createAccount);
  const signIn = useAppStore((s) => s.signIn);
  const isSignedIn = useAppStore((s) => s.user.isSignedIn);
  const authAccount = useAppStore((s) => s.user.authAccount);

  if (isSignedIn && authAccount) {
    return (
      <div className="mx-auto max-w-md text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[var(--gold)]">Signed in</p>
        <h1 className="font-display mt-3 text-3xl">Welcome back, {authAccount.name.split(" ")[0]}</h1>
        <p className="mt-3 text-sm text-[var(--fg-muted)]">
          You’re signed in as {authAccount.email}. Continue to request a quote or explore projects.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/apply" className="!rounded-none">
            See my estimate
          </Button>
          <Button href="/energy/projects" variant="secondary" className="!rounded-none">
            Explore projects
          </Button>
        </div>
      </div>
    );
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (mode === "signup") {
      const result = createAccount({ name, email, password });
      if (!result.ok) {
        toast.error(result.error);
        return;
      }
      toast.success("Account created. You’re signed in.");
      router.push("/");
      return;
    }
    const result = signIn(email, password);
    if (!result.ok) {
      toast.error(result.error);
      return;
    }
    toast.success("Signed in successfully.");
    router.push("/");
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="mb-8 text-center">
        <Image
          src="/logo-light-inc-trans.png"
          alt="LiGHT Incorporation"
          width={160}
          height={76}
          className="mx-auto h-14 w-auto object-contain"
        />
        <p className="mt-3 text-[10px] tracking-[0.2em] uppercase text-[var(--gold)]">
          {COMPANY.tagline}
        </p>
        <h1 className="font-display mt-4 text-3xl sm:text-4xl">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h1>
        <p className="mt-2 text-sm text-[var(--fg-muted)]">
          {mode === "signin"
            ? "Access your LiGHT account to continue quotes and project conversations."
            : "New here? Create an account — it only takes a minute."}
        </p>
      </div>

      <div className="mb-6 grid grid-cols-2 border border-[var(--border)]">
        <button
          type="button"
          onClick={() => setMode("signin")}
          className={clsx(
            "py-3 text-sm font-medium transition",
            mode === "signin" ? "bg-[var(--gold)] text-black" : "text-[var(--fg-muted)] hover:text-white"
          )}
        >
          Sign in
        </button>
        <button
          type="button"
          onClick={() => setMode("signup")}
          className={clsx(
            "py-3 text-sm font-medium transition",
            mode === "signup" ? "bg-[var(--gold)] text-black" : "text-[var(--fg-muted)] hover:text-white"
          )}
        >
          Create account
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        {mode === "signup" ? (
          <label className="block">
            <span className="mb-1.5 block text-xs tracking-wide uppercase text-[var(--fg-muted)]">
              Full name
            </span>
            <input
              className="field-input !rounded-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </label>
        ) : null}
        <label className="block">
          <span className="mb-1.5 block text-xs tracking-wide uppercase text-[var(--fg-muted)]">
            Email
          </span>
          <input
            type="email"
            className="field-input !rounded-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs tracking-wide uppercase text-[var(--fg-muted)]">
            Password
          </span>
          <input
            type="password"
            className="field-input !rounded-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete={mode === "signup" ? "new-password" : "current-password"}
            minLength={6}
            required
          />
        </label>
        <Button type="submit" className="!w-full !justify-center !rounded-none">
          {mode === "signin" ? "Sign in" : "Create account"}
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-[var(--fg-muted)]">
        {mode === "signin" ? (
          <>
            Don’t have an account?{" "}
            <button
              type="button"
              className="text-[var(--gold)] hover:underline"
              onClick={() => setMode("signup")}
            >
              Create one
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              className="text-[var(--gold)] hover:underline"
              onClick={() => setMode("signin")}
            >
              Sign in
            </button>
          </>
        )}
      </p>

      <p className="mt-8 text-center text-xs text-[var(--fg-muted)]">
        <Link href="/" className="hover:text-[var(--gold)]">
          ← Back to site
        </Link>
      </p>
    </div>
  );
}

export default function SignInPage() {
  return (
    <section className="relative flex min-h-[calc(100vh-72px)] items-center justify-center px-4 py-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_55%)]" />
      <div className="relative w-full">
        <Suspense fallback={<p className="text-center text-sm text-[var(--fg-muted)]">Loading…</p>}>
          <AuthForm />
        </Suspense>
      </div>
    </section>
  );
}
