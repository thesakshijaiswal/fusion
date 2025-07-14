import Image from "next/image";
import Button from "@/components/Button";
import designExample1Image from "@/assets/Images/Design-Ex-1.png";
import designExample2Image from "@/assets/Images/Design-Ex-2.png";
export default function Hero() {
  return (
    <section className="flex items-center justify-center px-3 py-24">
      <div className="relative container">
        <div className="absolute top-16 -left-36">
          <Image
            src={designExample1Image}
            alt="Design-Ex-1 image"
            className="h-[500px] w-full"
          />
        </div>
        <div className="absolute -top-16 -right-40">
          <Image
            src={designExample2Image}
            alt="Design-Ex-2 image"
            className="h-[500px] w-full"
          />
        </div>
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-gradient-to-r from-purple-400 to-pink-400 px-3 py-1 font-semibold text-neutral-950">
            ✨ $7.5M Seed round raised
          </div>
        </div>
        <h1 className="mx-auto mt-6 max-w-5xl text-center text-6xl font-medium md:text-7xl lg:text-8xl">
          Impactful Design, Created effortlessly
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xl text-white/50">
          Design without distractions. Fusion blends power and simplicity,
          helping you stay focused, fast, and fully in flow.
        </p>
        <form className="mx-auto mt-8 flex max-w-lg rounded-full border border-white/15 p-2">
          <input
            type="email"
            placeholder="Enter Your email"
            className="bg-transparent px-4 outline-none md:flex-1"
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
