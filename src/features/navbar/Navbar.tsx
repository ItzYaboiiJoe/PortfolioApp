import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="border-b border-white/10">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/JSLogo.png"
            alt="Joseph Seoudy Logo"
            width={36}
            height={36}
            className="rounded-lg"
            loading="eager"
          />

          <span className="font-semibold text-white">Joseph Seoudy</span>
        </Link>

        <div className="flex items-center gap-8 text-sm">
          <a
            href="#projects"
            className="text-white/70 transition-colors hover:text-white"
          >
            Projects
          </a>

          <a
            href="#skills"
            className="text-white/70 transition-colors hover:text-white"
          >
            Skills
          </a>

          <a
            href="#about"
            className="text-white/70 transition-colors hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-white/70 transition-colors hover:text-white"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
