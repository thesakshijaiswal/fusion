import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Avatar1 from "@/assets/Images/user-1.png";
import Avatar2 from "@/assets/Images/user-2.png";
import Avatar3 from "@/assets/Images/user-3.png";
import Key from "@/components/Key";
const features = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];

export default function Features() {
  return (
    <section className="xs:px-4 flex justify-center py-24" id="features">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="mx-auto mt-6 max-w-2xl text-center text-4xl font-medium sm:text-6xl">
          Where power meets <span className="text-lime-400">Simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-4 lg:grid-cols-3">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing."
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <Avatar className="z-40">
                <Image src={Avatar1} alt="Avatar 1" />
              </Avatar>

              <Avatar className="z-30 -ml-6 border-indigo-400">
                <Image src={Avatar2} alt="Avatar 2" />
              </Avatar>

              <Avatar className="z-20 -ml-6 border-amber-500">
                <Image src={Avatar3} alt="Avatar 3" />
              </Avatar>
              <Avatar className="-ml-6 border-transparent">
                <div className="inline-flex size-full items-center justify-center gap-1 rounded-full bg-neutral-700">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span
                      className="inline-flex size-1.5 rounded-full bg-white"
                      key={i}
                    ></span>
                  ))}
                </div>
              </Avatar>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Interactive Prototyping"
            description="Engage your client with prototypes that react to user actions."
            className="sm:col-span-2 lg:col-span-1"
          >
            <div className="flex aspect-video items-center justify-center">
              <p className="text-center text-4xl font-bold text-white/30">
                We&apos;ve achieved{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  incredible
                </span>{" "}
                growth this year
              </p>
            </div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
            className="sm:col-span-2 sm:col-start-2 lg:col-span-1 lg:col-start-auto"
          >
            <div className="flex aspect-video items-center justify-center gap-4">
              <Key className="w-28">Shift</Key>
              <Key>Alt</Key>
              <Key>C</Key>
            </div>
          </FeatureCard>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-neutral-700 px-3 py-1.5 md:px-5 md:py-2"
            >
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-lime-400 text-xl text-neutral-950">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
