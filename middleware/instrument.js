import * as Sentry from "@sentry/node";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://f95fe21fe07abbfb8d244c4cfcaa974d@o4507772744695808.ingest.de.sentry.io/4507772754460752",

  // Add Tracing by setting tracesSampleRate
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});
