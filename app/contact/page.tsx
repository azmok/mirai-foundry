import ContactClient from '@/components/ContactClient';

export const metadata = {
  title: 'Contact | Mirai Foundry',
  description: 'Start your next project with us.',
};

export default function Contact() {
  return (
    <main className="min-h-screen pt-32">
      <ContactClient />
    </main>
  );
}
