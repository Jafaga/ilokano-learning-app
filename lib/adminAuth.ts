const ADMIN_KEY = "learn-ilokano-admin-mode";

export function isAdminMode(): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(ADMIN_KEY) === "true";
}

export function enableAdminMode(): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(ADMIN_KEY, "true");
}

export function disableAdminMode(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(ADMIN_KEY);
}
