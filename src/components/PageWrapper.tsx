export function PageWrapper({ children }: { children: React.ReactNode }) {
    return (
      <main className="min-h-screen pt-10 md:pt-18">
        {children}
      </main>
    )
  }