export default function FeatureCard(props: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const { title, description, children } = props;
  return (
    <div className="rounded-3xl border border-white/10 bg-neutral-800 p-6">
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="mt-6 text-3xl font-medium">{title}</h3>
        <p className="mt-2 text-white/50">{description}</p>
      </div>
    </div>
  );
}
