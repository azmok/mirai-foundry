import AboutClient from '@/components/AboutClient';

export const metadata = {
  title: 'About | Mirai Foundry',
  description: 'Learn about our studio, story, and AI creative workflow.',
};

export default function About() {
  return (
    <main className="min-h-screen pt-32">
      <AboutClient />
    </main>
  );
}
