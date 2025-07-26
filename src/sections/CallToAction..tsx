export default function CallToAction() {
  return (
    <section className="flex justify-center py-24">
      <div className="flex overflow-x-clip p-4">
        <div className="flex flex-none gap-16 text-7xl font-medium">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-lime-400">&#10038;</span>
              <span>Try it for free</span>
            </div>
          ))}
        </div>
        <p className="flex justify-center">Made with ❤️ by Sakshi Jaiswal</p>
      </div>
    </section>
  );
}
