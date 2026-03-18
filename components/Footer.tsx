import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12 mt-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[var(--color-text-muted)] tracking-wider">
        <Link href="/" className="uppercase font-medium text-white hover:text-[var(--color-accent)] transition-colors">
          MIRAI FOUNDRY
        </Link>
        <p>© 2025 Mirai Foundry. All rights reserved.</p>
        <p>Tokyo, Japan</p>
      </div>
    </footer>
  );
}
