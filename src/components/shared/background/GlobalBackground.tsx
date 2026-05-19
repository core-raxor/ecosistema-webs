import { sharedTokens } from "@/lib/design-system/tokens";

export function GlobalBackground() {
  const { depthTop, depthCenter } = sharedTokens.background;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--bg)]" />
      <div className="absolute inset-0" style={{ background: depthTop }} />
      <div className="absolute inset-0" style={{ background: depthCenter }} />
    </div>
  );
}
