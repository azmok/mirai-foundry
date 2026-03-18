'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const workflowSteps = [
  { id: 1, name: 'Human', label: '戦略と直感' },
  { id: 2, name: 'AI', label: '拡張と生成' },
  { id: 3, name: 'Output', label: '未知の価値' },
];

export default function AboutClient() {
  const storyRef = useRef<HTMLDivElement>(null);
  const philosophyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Story fade up
      gsap.fromTo('.story-content',
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
          }
        }
      );

      // Philosophy line-by-line
      gsap.fromTo('.phil-line',
        { opacity: 0.15 },
        {
          opacity: 1,
          duration: 1,
          ease: 'none',
          stagger: 0.15,
          scrollTrigger: {
            trigger: philosophyRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          }
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Section 1 - Page Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-8"
          >
            About / <span className="text-xl font-medium tracking-widest block mt-4 md:inline md:mt-0 text-white/50">スタジオについて</span>
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
            className="h-[1px] bg-[var(--color-accent)] origin-left w-full max-w-2xl"
          />
        </div>
      </section>

      {/* Section 2 - Studio Story */}
      <section ref={storyRef} className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="md:w-1/3">
            <h2 className="story-content text-[clamp(2rem,4vw,3.5rem)] font-bold leading-tight">
              Forging <br/> The Future <br/> Of Digital.
            </h2>
          </div>
          <div className="md:w-2/3 space-y-8 text-white/70 leading-loose">
            <p className="story-content text-lg">
              Mirai Foundry（未来ファウンドリー）は、AI技術とハイエンドなデザインを掛け合わせることで、
              これまでにないデジタル体験を創出するクリエイティブスタジオです。
            </p>
            <p className="story-content text-lg">
              私たちは単なる制作会社ではありません。クライアントのビジネス課題を深く理解し、
              戦略立案からプロトタイピング、そして最終的な実装に至るまで、
              AIをクリエイティブのパートナーとして最大限に活用します。
            </p>
            <p className="story-content text-lg">
              人間の直感や感情への深い理解と、AIの圧倒的な処理能力や生成力。
              この二つが交わる場所にこそ、真のイノベーションが生まれると私たちは信じています。
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 - AI Workflow */}
      <section className="py-32 md:py-48 bg-black">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-2xl font-bold mb-24">AI Creative Workflow / <span className="text-xl font-medium tracking-widest text-white/50">AIとクリエイティブ</span></h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            {workflowSteps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-white/20 flex flex-col items-center justify-center relative group"
                >
                  <div className="absolute inset-0 bg-[var(--color-accent)] opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-500 blur-xl" />
                  <motion.div
                    animate={{ boxShadow: ['0 0 0px var(--color-accent)', '0 0 40px var(--color-accent)', '0 0 0px var(--color-accent)'] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index }}
                    className="absolute inset-x-4 inset-y-4 border border-[var(--color-accent)] rounded-full opacity-30"
                  />
                  <span className="text-2xl font-bold z-10">{step.name}</span>
                  <span className="text-xs tracking-widest text-white/50 mt-2 z-10">{step.label}</span>
                </motion.div>
                
                {index < workflowSteps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, width: 0 }}
                    whileInView={{ opacity: 1, width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
                    className="hidden md:block absolute top-1/2 left-full w-16 h-[1px] bg-gradient-to-r from-[var(--color-accent)] to-transparent -translate-y-1/2 z-0"
                  />
                )}
                
                {index < workflowSteps.length - 1 && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    whileInView={{ opacity: 1, height: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.3 }}
                    className="md:hidden w-[1px] h-16 bg-gradient-to-b from-[var(--color-accent)] to-transparent my-4"
                  />
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-24 max-w-2xl mx-auto text-left text-white/60 leading-loose">
            <p>AIは目的ではなく、手段です。私たちは、AIを人間のクリエイティビティを拡張するためのツールとして位置づけています。膨大なデータ分析やアイデアのバリエーション出しをAIに任せることで、人間は「本質的な価値の定義」と「最終的なクオリティへのこだわり」に集中することができます。この独自のハイブリッド・ワークフローが、これまでにないスピードとクオリティの両立を実現します。</p>
          </div>
        </div>
      </section>

      {/* Section 4 - Philosophy */}
      <section ref={philosophyRef} className="py-32 md:py-48 bg-[var(--color-surface-2)]">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <span className="text-xs tracking-[0.2em] uppercase text-white/50 block mb-12">Manifesto</span>
          <div className="text-[clamp(1.2rem,3vw,2.5rem)] font-bold leading-relaxed tracking-tight">
            <p className="phil-line text-white">美しいだけのデザインは、もういらない。</p>
            <p className="phil-line text-white">情報があふれる現代において、</p>
            <p className="phil-line text-[var(--color-accent)]">人々の記憶に残るのは「体験」だけだ。</p>
            <p className="phil-line text-white mt-8">私たちは、デジタルの中に血を通わせる。</p>
            <p className="phil-line text-white">論理と直感、テクノロジーと感性。</p>
            <p className="phil-line text-[var(--color-accent-blue)]">対極にあるものを結びつけることで、</p>
            <p className="phil-line text-white">新たなパラダイムを創出する。</p>
            <p className="phil-line text-white mt-8 font-black text-[clamp(2rem,5vw,4rem)]">Ideas are forged into reality.</p>
          </div>
        </div>
      </section>
    </>
  );
}
