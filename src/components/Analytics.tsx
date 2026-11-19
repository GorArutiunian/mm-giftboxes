/**
 * Optional privacy-conscious analytics.
 * Disabled until NEXT_PUBLIC_ANALYTICS_ID is configured.
 * Do not invent tracking scripts or claim ChatGPT attribution.
 */
export function Analytics() {
  const id = process.env.NEXT_PUBLIC_ANALYTICS_ID;
  if (!id) return null;

  // Owner can wire a chosen provider here after configuring the env var.
  return (
    <div
      data-analytics-ready="pending-provider"
      data-analytics-id={id}
      hidden
      aria-hidden
    />
  );
}
