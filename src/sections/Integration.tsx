import Tag from "@/components/Tag";
import IntegrationColumns from "@/components/IntegrationColumns";
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
    Description: "Slack is a messaging platform for teams to collaborate.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    Description: "Relume helps you design and build websites faster.",
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

export type IntegrationsType = typeof integrations;

export default function Integration() {
  return (
    <section className="flex justify-center overflow-hidden py-24">
      <div className="container">
        <div className="grid items-center lg:grid-cols-2 lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="mt-6 text-5xl font-medium sm:text-6xl">
              Plays well with <span className="text-lime-400">others</span>
            </h2>
            <p className="mt-4 text-lg text-white/50">
              Fusion seamlessly connects with your favourite tool, making it
              easy to plug into any workflow and collaborate across platforms.
            </p>
          </div>
          <div>
            <div
              className="mt-8 grid h-[400px] gap-4 overflow-hidden sm:grid-cols-2 lg:mt-0 lg:h-[800px]"
              style={{
                maskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
              }}
            >
              <IntegrationColumns integrations={integrations} />
              <IntegrationColumns
                integrations={integrations.slice().reverse()}
                className="hidden sm:flex"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
