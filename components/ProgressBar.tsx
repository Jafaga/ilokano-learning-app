export function ProgressBar({ value }: { value: number }) {
  const clamped = Math.max(0, Math.min(100, value));
  return (
    <div className="progress-wrap" aria-label={`Progress ${clamped}%`}>
      <div className="progress-fill" style={{ width: `${clamped}%` }} />
    </div>
  );
}
