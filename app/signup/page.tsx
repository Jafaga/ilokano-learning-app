import Link from "next/link";

export default function SignupPage() {
  return (
    <section className="screen centered-screen">
      <div className="top-bar glass-bar">
        <Link className="stat-pill" href="/">← Back</Link>
        <span className="stat-pill">Create Account</span>
      </div>

      <div className="card elevated-card narrow-card">
        <p className="eyebrow">Sign Up</p>
        <h1>Start learning.</h1>
        <p>Create an account later to sync XP, streaks, and progress across devices.</p>

        <form className="form">
          <label>
            Name
            <input className="input" type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input className="input" type="email" placeholder="you@example.com" />
          </label>
          <label>
            Password
            <input className="input" type="password" placeholder="••••••••" />
          </label>
          <Link className="btn btn-primary" href="/home">Create Demo Account</Link>
        </form>
      </div>

      <p className="dev-note">
        Developer note: this page is intentionally simple for now. Add real Supabase signup after the local lesson flow is stable.
      </p>
    </section>
  );
}
