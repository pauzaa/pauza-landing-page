export function trackEvent(name: string, params?: Record<string, string>) {
  if (process.env.NODE_ENV === "development") {
    console.log("[analytics]", name, params);
  }
}
