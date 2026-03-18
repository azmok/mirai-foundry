'use client';

import { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const HeroCanvas = dynamic(() => import('@/components/HeroCanvas'), { ssr: false });

gsap.registerPlugin(ScrollTrigger);

const headline = "Ideas are forged into reality.";
const words = headline.split(" ");

const processSteps = [
  { num: "01", title: "Discovery", desc: "要件と目的の徹底的な解明" },
  { num: "02", title: "Strategy", desc: "ビジネス成果へ直結する戦略立案" },
  { num: "03", title: "AI Design", desc: "最新AI技術を活用したプロトタイピング" },
  { num: "04", title: "Development", desc: "妥協のない実装とパフォーマンス最適化" },
  { num: "05", title: "Launch", desc: "持続的な価値を創造する本番公開" },
];

const services = [
  { num: "01", name: "Premium Web Design", label: "ハイエンドWeb制作" },
  { num: "02", name: "AI Strategy Consulting", label: "AI導入戦略コンサルティング" },
  { num: "03", name: "Brand Identity", label: "ブランドアイデンティティ構築" },
  { num: "04", name: "Creative Direction", label: "クリエイティブディレクション" },
  { num: "05", name: "Immersive Experiences", label: "没入型デジタルエクスペリエンス" },
];

const works = [
  { id: 1, name: "Nexus AI Platform", category: "Web App / UI Design", desc: "次世代AIプラットフォームのインターフェース構築" },
  { id: 2, name: "Lumina Vision", category: "Corporate Branding", desc: "光をテーマにした革新的な企業ブランディング" },
  { id: 3, name: "Echo E-Commerce", category: "Headless Commerce", desc: "シームレスな体験を提供する最新のEC構築" },
];

export default function HomeClient() {
  const manifestoRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const worksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Manifesto reveal
      gsap.fromTo('.manifesto-line',
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 1,
          ease: 'none',
          stagger: 0.2,
          scrollTrigger: {
            trigger: manifestoRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );

      // Process reveal
      gsap.fromTo('.process-step',
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
          }
        }
      );

      // Services reveal
      gsap.fromTo('.service-item',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
          }
        }
      );

      // Works reveal
      gsap.fromTo('.work-card',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: worksRef.current,
            start: 'top 80%',
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Section 1 - Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <HeroCanvas />
        <div className="max-w-6xl w-full mx-auto px-6 md:px-12 z-10 text-center flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs tracking-[0.2em] uppercase text-white/50 mb-6"
          >
            AI Era Creative Studio
          </motion.p>
          
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-black tracking-tighter leading-tight mb-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-[0.2em]"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.215, 0.61, 0.355, 1],
                  delay: 0.5 + i * 0.1,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-sm tracking-widest text-[#FFFFFF50] mb-8"
          >
            Strategy / Design / AI
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="text-sm leading-loose text-white/50 max-w-lg mb-12"
          >
            私たちは最先端のテクノロジーと洗練されたデザインを融合させ、
            ビジネスの可能性を押し広げるデジタルプロダクトを創造します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Link href="/contact" className="inline-block px-8 py-4 border border-white/30 text-sm tracking-widest uppercase hover:bg-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-300">
              Start a Project →
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Section 2 - Manifesto */}
      <section ref={manifestoRef} className="py-32 md:py-48 bg-black">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-white/50 block mb-12">Our Philosophy / 思想</span>
          <div className="text-[clamp(1.5rem,4vw,3.5rem)] font-bold leading-snug tracking-tight">
            <p className="manifesto-line text-white">デザインは単なる装飾ではない。</p>
            <p className="manifesto-line text-white">それは本質を抽出し、</p>
            <p className="manifesto-line text-white">未来の形を定義する知的なプロセスだ。</p>
            <p className="manifesto-line text-[var(--color-accent)] mt-4">AIの進化がすべてをコモディティ化する時代に、</p>
            <p className="manifesto-line text-white">本物のクリエイティビティだけが</p>
            <p className="manifesto-line text-white">心を揺さぶり、世界を動かす。</p>
          </div>
        </div>
      </section>

      {/* Section 3 - Process */}
      <section ref={processRef} className="py-32 md:py-48 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-xl font-medium tracking-widest mb-24 text-center">How Ideas Evolve / アイデアが形になるまで</h2>
          <div className="relative">
            <div className="hidden md:block absolute top-[40px] left-0 w-full h-[1px] bg-white/10" />
            <div className="flex flex-col md:flex-row gap-12 md:gap-6 justify-between">
              {processSteps.map((step, i) => (
                <div key={i} className="process-step md:w-1/5 relative z-10">
                  <div className="text-4xl text-[var(--color-accent)] font-bold mb-6 bg-[var(--color-surface)] inline-block pr-4">{step.num}</div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-sm leading-loose text-white/60">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - What We Create */}
      <section ref={servicesRef} className="py-32 md:py-48 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <h2 className="text-xl font-medium tracking-widest mb-24">What We Create / 私たちが作るもの</h2>
          <div className="flex flex-col">
            {services.map((service, i) => (
              <div key={i} className="service-item group relative border-b border-white/10 py-10 flex flex-col md:flex-row md:items-center justify-between overflow-hidden cursor-default">
                <div className="absolute top-0 left-0 w-0 h-full bg-white/5 transition-all duration-500 group-hover:w-full z-0" />
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[var(--color-accent)] transition-all duration-500 group-hover:w-full z-0" />
                <div className="relative z-10 flex gap-8 items-center border-l-2 border-transparent group-hover:border-[var(--color-accent)] pl-4 transition-all duration-300">
                  <span className="text-lg text-white/30 font-light">{service.num}</span>
                  <span className="text-[clamp(1.5rem,3vw,2.5rem)] font-bold">{service.name}</span>
                </div>
                <div className="relative z-10 mt-4 md:mt-0 md:text-right pl-12 md:pl-0">
                  <span className="text-sm tracking-wider text-white/50">{service.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5 - Selected Works */}
      <section ref={worksRef} className="py-32 md:py-48 bg-[var(--color-surface-2)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex justify-between items-end mb-20">
            <h2 className="text-xl font-medium tracking-widest">Selected Works / 制作事例</h2>
            <Link href="/works" className="hidden md:block text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
              View All Works →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {works.map((work) => (
              <div key={work.id} className="work-card group relative bg-black aspect-square lg:aspect-[4/5] overflow-hidden flex flex-col justify-end p-8 border border-white/5 hover:border-[var(--color-accent)] transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[var(--color-accent)] transition-opacity duration-500 z-0" />
                <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-xs text-[var(--color-accent)] tracking-widest uppercase mb-2 block">{work.category}</span>
                  <h3 className="text-2xl font-bold mb-3">{work.name}</h3>
                  <p className="text-sm text-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{work.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center md:hidden">
            <Link href="/works" className="text-sm tracking-widest uppercase hover:text-[var(--color-accent)] transition-colors">
              View All Works →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6 - Contact CTA */}
      <section className="py-32 md:py-48 bg-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter mb-6">Let's forge something new.</h2>
          <p className="text-base text-white/60 mb-12">新しいアイデアを形にしましょう。プロジェクトのご相談をお待ちしております。</p>
          <Link href="/contact" className="inline-block px-10 py-5 bg-white text-black text-sm tracking-widest uppercase hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300 font-bold">
            Contact Us →
          </Link>
        </div>
      </section>
    </>
  );
}
