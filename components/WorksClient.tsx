'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const works = [
  { id: 1, name: "Nexus AI Platform", category: "Web App / UI Design", desc: "次世代AIプラットフォームのインターフェース構築" },
  { id: 2, name: "Lumina Vision", category: "Corporate Branding", desc: "光をテーマにした革新的な企業ブランディング" },
  { id: 3, name: "Echo E-Commerce", category: "Headless Commerce", desc: "シームレスな体験を提供する最新のEC構築" },
];

export default function WorksClient() {
  return (
    <>
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-8"
          >
            Selected Works / <span className="text-xl font-medium tracking-widest block mt-4 md:inline md:mt-0 text-white/50">制作事例</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-[1px] bg-[var(--color-accent)] origin-left w-full max-w-2xl"
          />
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {works.map((work, index) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
                className="group relative bg-black aspect-square lg:aspect-[4/5] overflow-hidden flex flex-col justify-end p-8 border border-white/5 hover:border-[var(--color-accent)] transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 bg-[var(--color-accent)]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center backdrop-blur-sm">
                  <span className="text-white text-lg tracking-widest uppercase transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    View Project →
                  </span>
                </div>
                
                <div className="relative z-10 transform group-hover:translate-y-4 group-hover:opacity-0 transition-all duration-500">
                  <span className="text-xs text-[var(--color-accent)] tracking-widest uppercase mb-2 block">{work.category}</span>
                  <h3 className="text-2xl font-bold mb-3">{work.name}</h3>
                  <p className="text-sm text-white/60">{work.desc}</p>
                </div>
                <Link href="#" className="absolute inset-0 z-30"><span className="sr-only">View {work.name}</span></Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 md:py-48 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-black tracking-tighter mb-12"
          >
            Next project starts here.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link href="/contact" className="inline-block px-10 py-5 bg-[var(--color-accent)] text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 font-bold">
              Start your project →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
