import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { type IntegrationsType } from "@/sections/Integration";

export default function IntegrationColumns(props: {
  integrations: IntegrationsType;
  className?: string;
}) {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="rounded-3xl border border-white/20 bg-neutral-800 p-6"
        >
          <div className="flex justify-center">
            <div className="h-24 w-24 rounded-3xl bg-white p-4">
              <Image src={integration.icon} alt={integration.name} />
            </div>
          </div>
          <h3 className="mt-6 text-center text-3xl">{integration.name}</h3>
          <p className="mt-2 text-center text-white/50">
            {integration.Description}
          </p>
        </div>
      ))}
    </div>
  );
}
