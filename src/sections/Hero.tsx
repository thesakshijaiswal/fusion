import Image from "next/image";
import Button from "@/components/Button";
import Pointer from "@/components/Pointer";
import designExample1Image from "@/assets/Images/Design-Ex-1.png";
import designExample2Image from "@/assets/Images/Design-Ex-2.png";
export default function Hero() {
  return (
    <section className="flex items-center justify-center overflow-x-clip px-3 py-24">
      <div className="relative container">
        <div className="custom:block absolute top-16 -left-28 hidden">
          <Image
            src={designExample1Image}
            alt="Design-Ex-1 image"
            className="h-[500px] w-full"
          />
        </div>
        <div className="custom:block absolute -top-16 -right-28 hidden">
          <Image
            src={designExample2Image}
            alt="Design-Ex-2 image"
            className="h-[500px] w-full"
          />
        </div>
        <div className="custom:block absolute top-96 left-72 hidden">
          <Pointer name="Leonardo" />
        </div>
        <div className="custom:block absolute -top-4 right-90 hidden">
          <Pointer name="Sakshi" color="blue" />
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
            className="bg-transparent px-4 outline-none md:flex-1 w-full"
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
