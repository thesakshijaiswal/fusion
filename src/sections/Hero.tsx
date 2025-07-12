import Button from "@/components/Button";
export default function Hero() {
  return (
    <section className="px-3 py-24">
      <div className="container">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ $7.5M Seed round raised
          </div>
        </div>
        <h1 className="mt-6 text-center text-6xl font-medium">
          Impactful Design Created Effortlessly
        </h1>
        <p className="mt-8 text-center text-xl text-white/50">
          Design without distractions. Fusion blends power and simplicity,
          helping you stay focused, fast, and fully in flow.
        </p>
        <form className="mt-8 flex rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter Your email"
            className="bg-transparent px-4"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}
