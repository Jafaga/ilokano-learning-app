"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { enableAdminMode } from "@/lib/adminAuth";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (username.trim() === "admin" && password === "password") {
      enableAdminMode();
      router.push("/home");
      return;
    }

    setError("For this MVP, the only test login is username “admin” and password “password”. Guest mode still works too.");
  }

  return (
    <section className="screen centered-screen">
      <div className="top-bar glass-bar">
        <Link className="stat-pill" href="/">← Back</Link>
        <span className="stat-pill">Account</span>
      </div>

      <div className="card elevated-card narrow-card">
        <p className="eyebrow">Admin Test Login</p>
        <h1>Welcome back.</h1>
        <p>
          Use the test admin account to unlock every lesson for reviewing and developing content without needing to earn XP first.
        </p>

        <form className="form" onSubmit={handleSubmit}>
          <label>
            Username
            <input
              className="input"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="admin"
              autoCapitalize="none"
              autoComplete="username"
            />
          </label>
          <label>
            Password
            <input
              className="input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="password"
              autoComplete="current-password"
            />
          </label>
          {error ? <div className="feedback wrong">{error}</div> : null}
          <button className="btn btn-primary" type="submit">Log in as Admin</button>
          <Link className="btn btn-secondary" href="/home">Continue as Guest</Link>
        </form>
      </div>

      <p className="dev-note">
        Admin credentials for the MVP: <strong>admin</strong> / <strong>password</strong>. Later, this can be replaced with Supabase authentication and role-based access.
      </p>
    </section>
  );
}
