import Image from "next/image";
import Logo1 from "@/assets/Images/algopipe.svg";
import Logo2 from "@/assets/Images/be-commerce.svg";
import Logo3 from "@/assets/Images/fundverse.png";
import Logo4 from "@/assets/Images/rewarder.svg";
import Logo5 from "@/assets/Images/tailxpense.png";
import Logo6 from "@/assets/Images/mediGo.png";
import Logo7 from "@/assets/Images/fusion.svg";

const logos = [
  { name: "Algopipe", image: Logo1, href: "https://algopipe.vercel.app" },
  {
    name: "Be-commerce",
    image: Logo2,
    href: "https://be-commerce-q7nw.onrender.com",
  },
  {
    name: "Fundverse",
    image: Logo3,
    href: "https://fundverse-by-us.vercel.app",
  },
  {
    name: "Rewarder",
    image: Logo4,
    href: "https://rewarder-dashboard.onrender.com",
  },
  { name: "TailXpense", image: Logo5, href: "https://tail-xpense.vercel.app" },
  { name: "Medigo", image: Logo6, href: "https://medigo-by-me.vercel.app" },
  { name: "Fusion", image: Logo7, href: "" },
];

export default function LogoTicker() {
  return (
    <section className="flex justify-center overflow-x-clip py-24">
      <div className="container">
        <h3 className="text-center text-xl text-white/50">
          Already chosen by these market leaders
        </h3>
        <div
          className="mt-12 overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div className="flex gap-24 pr-24">
            {logos.map((logo) => (
              <div
                className="flex items-center justify-center gap-1 whitespace-nowrap"
                key={logo.name}
              >
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className="h-20 w-20 object-contain"
                />
                <a href={logo.href} className="text-2xl font-semibold italic">
                  {logo.name}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
