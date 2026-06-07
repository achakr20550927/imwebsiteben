import { useEffect, useState } from 'react';

type FadeInProps = {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
};

function FadeIn({ children, delay = 0, duration = 1000, className = '' }: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${visible ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
}

function AnimatedHeading({ text }: { text: string }) {
  const [visible, setVisible] = useState(false);
  const charDelay = 30;
  const lines = text.split('\n');

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <h1
      className="mb-4 text-4xl font-normal leading-[0.95] md:text-5xl lg:text-6xl xl:text-7xl"
      style={{ letterSpacing: '-0.04em' }}
    >
      {lines.map((line, lineIndex) => (
        <span className="block" key={lineIndex}>
          {line.split('').map((char, charIndex) => {
            const delay = lineIndex * line.length * charDelay + charIndex * charDelay;
            return (
              <span
                className="inline-block transition-all ease-out"
                key={`${lineIndex}-${charIndex}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-18px)',
                  transitionDuration: '500ms',
                  transitionDelay: `${delay}ms`,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}

const tabs = [
  { href: '#topic', label: 'Topic' },
  { href: '#background', label: 'Background' },
  { href: '#research', label: 'My Research' },
  { href: '#about', label: 'About Ben' },
];

const findings = [
  'AI can reduce administrative strain through SOAP notes, recordkeeping, billing support, and electronic medical record tools.',
  'Movement analysis systems can read data from wearables, motion capture, smartphone sensors, and remote rehab platforms.',
  'Interview participants consistently said AI should support therapists, not replace clinical reasoning, empathy, ethical judgment, or hands-on care.',
  'Bias, privacy, reliability, and unequal access to advanced technology remain major concerns for real clinics.',
];

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className="relative z-10 flex min-h-screen flex-col">
        <div className="px-6 pt-6 md:px-12 lg:px-16">
          <nav className="liquid-glass flex items-center justify-between rounded-xl px-4 py-2">
            <a href="#" className="text-2xl font-semibold tracking-tight">
              DIGNAN
            </a>
            <div className="hidden items-center gap-8 md:flex">
              {tabs.map((tab) => (
                <a className="text-sm text-white transition hover:text-gray-300" href={tab.href} key={tab.href}>
                  {tab.label}
                </a>
              ))}
            </div>
            <a
              className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-gray-100 md:px-6"
              href="/Ben-Dignan-Final-Synthesis-Essay.pdf"
              download
            >
              <span className="md:hidden">PDF</span>
              <span className="hidden md:inline">Download</span>
            </a>
          </nav>
        </div>

        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:grid lg:grid-cols-2 lg:items-end lg:px-16 lg:pb-16">
          <div>
            <AnimatedHeading text={'Hands-on care\nmeets AI.'} />
            <FadeIn delay={800} duration={1000}>
              <p className="mb-5 max-w-2xl text-base text-gray-300 md:text-lg">
                A research portfolio on how artificial intelligence is reshaping physical therapy while keeping
                patient-centered care at the center.
              </p>
            </FadeIn>
            <FadeIn delay={1200} duration={1000}>
              <div className="flex flex-wrap gap-4">
                <a className="rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-100" href="#research">
                  Read Research
                </a>
                <a
                  className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black"
                  href="#topic"
                >
                  Explore Topic
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={1400} duration={1000} className="mt-8 flex items-end justify-start lg:justify-end">
            <div className="liquid-glass rounded-xl border border-white/20 px-6 py-3">
              <p className="text-lg font-light md:text-xl lg:text-2xl">AI. Rehabilitation. Human Care.</p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div className="mb-10 max-w-4xl">
      <p className="mb-3 text-sm font-medium uppercase tracking-[0.24em] text-gray-400">{eyebrow}</p>
      <h2 className="mb-5 text-3xl font-normal leading-tight md:text-5xl">{title}</h2>
      <p className="text-base leading-7 text-gray-300 md:text-lg">{intro}</p>
    </div>
  );
}

function App() {
  return (
    <main className="bg-black text-white">
      <Hero />

      <section className="section-shell px-6 py-20 md:px-12 lg:px-16" id="topic">
        <SectionHeader
          eyebrow="About the Topic"
          title="Physical therapy is becoming more data-driven, but it is still a human practice."
          intro="My research focuses on the growing role of artificial intelligence in physical therapy and rehabilitation science. The topic matters because AI tools are already being used to analyze movement, support documentation, predict recovery patterns, and expand access to remote care."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Movement Analysis', 'AI systems can evaluate posture, joint position, balance, fatigue, and exercise form using camera, sensor, or wearable data.'],
            ['Clinical Efficiency', 'Documentation assistants and medical record tools can reduce repetitive paperwork so therapists can spend more time with patients.'],
            ['Human Oversight', 'Therapists remain responsible for ethical judgment, hands-on treatment, communication, and individualized care decisions.'],
          ].map(([title, body]) => (
            <article className="liquid-glass rounded-xl p-6" key={title}>
              <h3 className="mb-3 text-xl font-medium">{title}</h3>
              <p className="leading-7 text-gray-300">{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell px-6 py-20 md:px-12 lg:px-16" id="background">
        <SectionHeader
          eyebrow="Background"
          title="The research started with a question: can AI help therapists without replacing them?"
          intro="Secondary research showed that AI has expanded from administrative recordkeeping into movement analysis, tele-rehabilitation, robotic monitoring, and predictive recovery tools. The strongest evidence supports AI when it works alongside therapists, not when it replaces professional judgment."
        />
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {['Literature review', 'Professional interviews', 'Synthesis and conclusion'].map((item, index) => (
              <div className="flex items-center gap-4" key={item}>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-sm font-semibold text-black">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-200">{item}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {findings.map((finding) => (
              <div className="border-l border-white/20 pl-5" key={finding}>
                <p className="leading-7 text-gray-300">{finding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-20 md:px-12 lg:px-16" id="research">
        <SectionHeader
          eyebrow="My Research"
          title="Hands-On vs. High-Tech: How AI is Reshaping Physical Therapy Practices"
          intro="The paper combines scholarly research with interviews from physical therapists, professors, healthcare researchers, a sports medicine specialist, and a Doctor of Physical Therapy graduate student."
        />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="liquid-glass rounded-xl p-6 md:p-8">
            <h3 className="mb-4 text-2xl font-medium">Abstract</h3>
            <p className="leading-8 text-gray-300">
              Artificial intelligence is becoming increasingly integrated into healthcare systems, including
              physical therapy and rehabilitation sciences. This paper investigates the role of AI in physical
              therapy, focusing on machine learning movement analysis, AI-assisted documentation systems,
              predictive recovery models, and tele-rehabilitation platforms. The findings show that AI can
              improve efficiency, documentation, movement analysis, and patient accessibility. However,
              interviews and literature consistently emphasized that AI cannot replace clinical reasoning,
              empathy, ethical judgment, and manual treatment techniques. Overall, AI is most likely to
              function as a supportive clinical tool rather than a replacement for therapists.
            </p>
          </article>
          <aside className="space-y-4">
            <div className="liquid-glass rounded-xl p-6">
              <p className="mb-2 text-sm uppercase tracking-[0.24em] text-gray-400">Primary Research</p>
              <p className="text-3xl font-light">5 interviews</p>
              <p className="mt-3 leading-7 text-gray-300">Professionals and students connected to rehabilitation, sports medicine, and AI systems.</p>
            </div>
            <a
              className="block rounded-xl bg-white px-6 py-5 text-center font-medium text-black transition hover:bg-gray-100"
              href="/Ben-Dignan-Final-Synthesis-Essay.pdf"
              download
            >
              Download Full Research Paper
            </a>
          </aside>
        </div>
      </section>

      <section className="section-shell px-6 py-20 md:px-12 lg:px-16" id="about">
        <SectionHeader
          eyebrow="About Ben"
          title="Ben Dignan, 11th Grade, Centennial High School"
          intro="I created this portfolio for my Intern/Mentor class. This year, my research explored how new healthcare technology can improve physical therapy while protecting the trust, judgment, and personal connection that patients need during rehabilitation."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="border-t border-white/20 pt-6">
            <h3 className="mb-3 text-xl font-medium">What I Learned</h3>
            <p className="leading-7 text-gray-300">
              The most important takeaway from my research is that technology is strongest when it helps
              professionals do their work better. AI may improve access and efficiency, but physical therapy
              depends on human communication, trust, and individualized decision-making.
            </p>
          </div>
          <div className="border-t border-white/20 pt-6">
            <h3 className="mb-3 text-xl font-medium">Acknowledgements</h3>
            <p className="leading-7 text-gray-300">
              Thank you to the professionals and mentors who shared their time and perspective, including
              the interview participants who helped me understand the real-world future of AI in rehabilitation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
