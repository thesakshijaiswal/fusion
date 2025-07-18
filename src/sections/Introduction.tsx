import Tag from "@/components/Tag";
const text =
  "You're racing to create outstanding work, yet conventional design tools hinder your progress with their excessive complexity and steep learning curves.";
export default function Introduction() {
  return (
    <section className="flex justify-center py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Fusion</Tag>
        </div>
        <div className="mt-10 text-center text-4xl font-medium md:text-6xl lg:text-7xl">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-white/35">{text}</span>
          <span className="block text-lime-400">
            That&apos;s why we built Fusion.
          </span>
        </div>
      </div>
    </section>
  );
}
