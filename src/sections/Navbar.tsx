import Image from "next/image";
import LogoImage from "@/assets/logo.svg";
import Button from "@/components/Button";
const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
  return (
    <section className="py-4 lg:py-8">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 items-center rounded-full border border-white/15 p-2 px-4 md:pr-2 lg:grid-cols-3">
          <div className="flex items-center gap-4">
            <Image src={LogoImage} alt="Fusion Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-extrabold tracking-wider">Fusion</h1>
          </div>
          <div className="hidden items-center justify-center lg:flex">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="hover:text-lime-400"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex justify-end gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
            <Button
              variant="secondary"
              className="hidden items-center md:inline-flex"
            >
              Log In
            </Button>
            <Button
              variant="primary"
              className="hidden items-center md:inline-flex"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
