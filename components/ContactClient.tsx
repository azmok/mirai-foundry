'use client';

import { motion } from 'framer-motion';

export default function ContactClient() {
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
            Let's forge something new.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-white/50 text-xl tracking-widest"
          >
            新しいアイデアを形にしましょう。
          </motion.p>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-[var(--color-surface)]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="w-full md:w-2/3">
            <motion.form 
              action="#"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="name" className="text-xs uppercase tracking-widest text-[#FFFFFF50]">Name / お名前</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  autoComplete="name"
                  placeholder="山田 太郎" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[var(--color-accent)] transition-colors text-white"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="company" className="text-xs uppercase tracking-widest text-[#FFFFFF50]">Company / 会社名</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  autoComplete="organization"
                  placeholder="株式会社○○" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[var(--color-accent)] transition-colors text-white"
                />
              </div>
              
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-[#FFFFFF50]">Email / メールアドレス</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  autoComplete="email"
                  placeholder="name@example.com" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[var(--color-accent)] transition-colors text-white"
                  required
                />
              </div>
              
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="project" className="text-xs uppercase tracking-widest text-[#FFFFFF50]">Project Type / プロジェクトの種類</label>
                <select 
                  id="project" 
                  name="project" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[var(--color-accent)] transition-colors text-white appearance-none rounded-none"
                  required
                  defaultValue=""
                >
                  <option value="" disabled className="text-black">選択してください</option>
                  <option value="web" className="text-black">Web Design / Web制作</option>
                  <option value="branding" className="text-black">Branding / ブランディング</option>
                  <option value="ai" className="text-black">AI Consulting / AI導入支援</option>
                  <option value="other" className="text-black">Other / その他</option>
                </select>
              </div>
              
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="message" className="text-xs uppercase tracking-widest text-[#FFFFFF50]">Message / ご相談内容</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={4}
                  placeholder="プロジェクトの概要や相談事項をご記入ください。" 
                  className="bg-transparent border-b border-white/20 pb-4 text-xl focus:outline-none focus:border-[var(--color-accent)] transition-colors text-white resize-none"
                  required
                />
              </div>
              
              <button 
                type="submit" 
                className="self-start relative group overflow-hidden bg-white text-black px-12 py-5 font-bold tracking-widest uppercase text-sm"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Send →</span>
                <span className="absolute inset-0 bg-[var(--color-accent)] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></span>
              </button>
            </motion.form>
          </div>
          
          <div className="w-full md:w-1/3 mt-20 md:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="sticky top-40 flex flex-col gap-12"
            >
              <div>
                <h3 className="text-xs tracking-widest uppercase text-white/50 mb-4">Location</h3>
                <p className="text-xl">Tokyo, Japan</p>
                <p className="text-white/60 mt-2">リモートにて全国からのご相談に対応しております。</p>
              </div>
              
              <div>
                <h3 className="text-xs tracking-widest uppercase text-white/50 mb-4">Direct Email</h3>
                <a href="mailto:hello@example.com" className="text-xl hover:text-[var(--color-accent)] transition-colors">hello@miraifoundry.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
