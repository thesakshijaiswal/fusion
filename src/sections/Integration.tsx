import Tag from "@/components/Tag";
import Image from "next/image";
import figmaIcon from "@/assets/Images/figma-logo.png";
import notionIcon from "@/assets/Images/notion-logo.png";
import slackIcon from "@/assets/Images/slack-logo.png";
import relumeIcon from "@/assets/Images/relume-logo.png";
import framerIcon from "@/assets/Images/framer-logo.png";
import githubIcon from "@/assets/Images/github-logo.png";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    Description: "Figma is a collaborative interface design tools.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    Description: "Notion is all in one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    Description:
      "Slack is a messaging platform for teams to collaborate and communicate in real time.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    Description:
      "Relume helps you design and build websites faster with AI-powered wireframes and components.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    Description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "Github",
    icon: githubIcon,
    Description: "Github is the leading platform for code collaboration",
  },
];

export default function Integration() {
  return (
    <section className="flex justify-center overflow-hidden py-24">
      <div className="container">
        <Tag>Integrations</Tag>
        <h2 className="mt-6 text-6xl font-medium">
          Plays well with <span className="text-lime-400">others</span>
        </h2>
        <p className="mt-4 text-lg text-white/50">
          Fusion seamlessly connects with your favourite tool, making it easy to
          plug into any workflow and collaborate across platforms.
        </p>
        <div className="rounded-3xl border border-white/20 bg-neutral-800 p-6">
          {integrations.map((integration) => (
            <div key={integration.name}>
              <div className="h-28 w-28 rounded-3xl bg-white p-4">
                <Image src={integration.icon} alt={integration.name} />
              </div>
              <h3>{integration.name}</h3>
              <p>{integration.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
