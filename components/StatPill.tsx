export function StatPill({ icon, label }: { icon: string; label: string }) {
  return (
    <span className="stat-pill">
      <span aria-hidden="true">{icon}</span>
      {label}
    </span>
  );
}
