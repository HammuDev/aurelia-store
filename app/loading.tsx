export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading Aurelia" className="min-h-screen bg-ivory px-5 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="h-5 w-32 animate-pulse bg-sand" />
        <div className="h-12 w-64 animate-pulse bg-sand" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => <div key={item} className="aspect-[3/4] animate-pulse bg-sand" />)}
        </div>
      </div>
    </main>
  )
}
