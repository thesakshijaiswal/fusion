import Logo from "@/assets/logo.svg";
import Image from "next/image";
const footerLinks = [
  { href: "https://github.com/thesakshijaiswal/fusion", label: "Github" },
  { href: "#", label: "Contact" },
  { href: "#", label: "Privacy Policy" },
];
export default function Footer() {
  return (
    <section className="flex justify-center px-2 py-16">
      <div className="container">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-4">
            <Image src={Logo} alt="Fusion Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-extrabold tracking-wider">Fusion</h1>
          </div>
          <div>
            <nav className="flex gap-6">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  className="text-sm text-white/50 transition hover:text-lime-400"
                  key={link.label}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
        <p className="mt-14 flex justify-center">
          Made with ❤️ by{" "}
          <a
            href="https://www.linkedin.com/in/thesakshijaiswal"
            className="pl-1.5 transition hover:text-lime-400"
          >
            Sakshi Jaiswal
          </a>
        </p>
      </div>
    </section>
  );
}
