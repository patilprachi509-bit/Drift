const colorTokens = [
  "background",
  "surface",
  "foreground",
  "muted-foreground",
  "border",
  "primary",
  "primary-hover",
  "success",
  "orb-start",
  "orb-end",
] as const;

const radiusTokens = ["sm", "md", "lg", "pill"] as const;

const shadowTokens = ["soft", "medium"] as const;

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[var(--max-content-width)] flex-col gap-16 px-[var(--section-padding)] py-[var(--section-padding)]">
      <section className="space-y-4">
        <p className="text-muted-foreground">/design-system</p>
        <h1 className="text-[length:var(--font-size-heading-1)]">Drift Design Tokens</h1>
        <p className="max-w-2xl text-muted-foreground">
          Temporary verification page for global theme tokens.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-[length:var(--font-size-heading-2)]">Typography</h2>
        <div className="space-y-3">
          <p className="font-heading text-5xl">Instrument Serif heading sample</p>
          <p className="font-body text-lg text-muted-foreground">
            Inter body sample for calm editorial reading.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-[length:var(--font-size-heading-2)]">Colors</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {colorTokens.map((token) => (
            <div key={token} className="space-y-2">
              <div className="h-24 rounded-sm border" style={{ background: `var(--${token})` }} />
              <p className="text-sm text-muted-foreground">--{token}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-[length:var(--font-size-heading-2)]">Radius</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {radiusTokens.map((token) => (
            <div
              key={token}
              className="grid h-28 place-items-center border bg-surface text-sm text-muted-foreground"
              style={{ borderRadius: `var(--radius-${token})` }}
            >
              --radius-{token}
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-[length:var(--font-size-heading-2)]">Shadows</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {shadowTokens.map((token) => (
            <div
              key={token}
              className="h-32 rounded-md border bg-surface p-6 text-muted-foreground"
              style={{ boxShadow: `var(--shadow-${token})` }}
            >
              --shadow-{token}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
