import { memo } from 'react'

function PageWrapperContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      {children}
    </main>
  )
}

export const PageWrapper = memo(PageWrapperContent)
PageWrapperContent.displayName = 'PageWrapperContent'