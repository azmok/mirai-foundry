import WorksClient from '@/components/WorksClient';

export const metadata = {
  title: 'Works | Mirai Foundry',
  description: 'Selected works and portfolio.',
};

export default function Works() {
  return (
    <main className="min-h-screen pt-32">
      <WorksClient />
    </main>
  );
}
