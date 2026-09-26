import { ArrowUp } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 text-sm text-white/70">
        <p>Joseph Seoudy</p>

        <a
          href="#top"
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowUp className="h-4 w-4" />
        </a>

        <p>© 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
