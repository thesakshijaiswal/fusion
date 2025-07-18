import Tag from "@/components/Tag";
import FeatureCard from "@/components/FeatureCard";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import Avatar1 from "@/assets/Images/user-1.png";
import Avatar2 from "@/assets/Images/user-2.png";
import Avatar3 from "@/assets/Images/user-3.png";
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
    <section className="flex justify-center py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="mt-6 text-center text-6xl font-medium">
          Where power meets <span className="text-lime-400">Simplicity</span>
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            title="Real-time Collaboration"
            description="Work together seamlessly with conflict-free team editing."
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
          >
            <div></div>
          </FeatureCard>
          <FeatureCard
            title="Keyboard Quick Actions"
            description="Powerful commands to help you create designs more quickly."
          >
            <div></div>
          </FeatureCard>
        </div>
        <div>
          {features.map((feature) => (
            <div key={feature}>
              <span></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
