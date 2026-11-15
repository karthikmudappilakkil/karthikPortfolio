import { useState } from "react";
import { Mail, Phone, Send, Check, Copy } from "lucide-react";
import { CornerCross, CornerTicks } from "@/components/ui/PosterMarks";
import { CornerDice } from "@/components/ui/CornerDice";
import { MiniWavingCharacter } from "@/components/ui/MiniWavingCharacter";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504"
      />
      <path
        fillRule="evenodd"
        d="M8.839 21.521c.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703"
      />
      <path
        fillRule="evenodd"
        d="M6.726 19.939c-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466"
      />
      <path
        fillRule="evenodd"
        d="M2.247 17.13c-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032"
      />
      <path
        fillRule="evenodd"
        d="M3.846 17.554c.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338"
      />
      <path
        fillRule="evenodd"
        d="M7.392 17.048c-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688"
      />
      <path
        fillRule="evenodd"
        d="M3.866 9.409c-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026"
      />
      <path
        fillRule="evenodd"
        d="M6.714 7.785A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337"
      />
      <path
        fillRule="evenodd"
        d="M14.504 7.181c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651"
      />
      <path
        fillRule="evenodd"
        d="M17.351 8.805c.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943"
      />
      <path
        fillRule="evenodd"
        d="M13.813 16.436c.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747"
      />
      <path
        fillRule="evenodd"
        d="M14.479 21.038c0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14" />
      <path d="M24 5c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11z" />
      <path d="M6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764" />
      <path d="M8.25 4.968c-.783 1.764-1.75 1.764-1.75 1.764zm13.5 12.268h-3v-5.604" />
      <path d="M18.75 11.632c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765" />
      <path d="M14.75 7.997c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Stack Project",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("karthikmudappilakkil@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 border-b-2 border-ink bg-paper scroll-mt-16 relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <CornerCross className="absolute -top-3 left-4 hidden sm:block" />
        <CornerCross className="absolute -top-3 right-4 hidden sm:block" />

        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-3 pb-4 border-b-2 border-ink mb-12"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2.5
                py-1 border-2 border-ink shadow-[2px_2px_0_#141414] uppercase tracking-wider"
            >
              SEC. 05
            </span>
            <h2
              className="font-poster text-4xl sm:text-6xl text-ink
                tracking-wide uppercase leading-none"
            >
              TRANSMISSION CONSOLE
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-widest">
            [OPEN CHANNELS & DIRECT INQUIRY]
          </span>
        </div>

        {/* 2-Column Broadside Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Channels & Interactive Mascot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="poster-card p-6 sm:p-7 bg-[#ede8e0] relative">
              <CornerTicks />

              <div className="pb-4 border-b-2 border-ink mb-4">
                <span className="font-mono text-[10px] bg-posterRed text-paper px-2 py-0.5 font-bold uppercase tracking-wider">
                  DIRECT DISPATCH
                </span>
                <h3 className="font-poster text-2xl sm:text-3xl text-ink uppercase tracking-wide leading-none mt-1">
                  START A CONVERSATION
                </h3>
              </div>

              <p className="text-xs font-mono text-ink/80 leading-relaxed mb-6">
                Whether you need a scalable full-stack web application, high-throughput backend
                APIs, or a cross-platform mobile app in React Native, reach out below.
              </p>

              {/* Direct Buttons */}
              <div className="space-y-3 font-mono text-xs">
                {/* Email with copy */}
                <div className="p-3 bg-white border-2 border-ink shadow-[2px_2px_0_#141414]">
                  <div className="flex items-center gap-1.5 text-[10px] text-ink/60 font-bold uppercase mb-1">
                    <Mail className="w-3.5 h-3.5 text-posterRed" />
                    <span>PRIMARY INBOX</span>
                  </div>
                  <div className="flex items-center justify-between gap-2">
                    <a
                      href="mailto:karthikmudappilakkil@gmail.com"
                      className="text-ink font-bold hover:text-posterRed truncate"
                    >
                      karthikmudappilakkil@gmail.com
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 bg-paper hover:bg-posterRed hover:text-paper border border-ink text-ink transition-colors shrink-0"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Phone */}
                <div className="p-3 bg-white border-2 border-ink shadow-[2px_2px_0_#141414]">
                  <div className="text-[10px] text-ink/60 font-bold uppercase mb-1">
                    TELEPHONE / VOICE
                  </div>
                  <a
                    href="tel:+919995678189"
                    className="text-ink font-bold hover:text-posterRed flex items-center gap-2"
                  >
                    <Phone className="w-3.5 h-3.5 text-posterRed" />
                    <span>+91 9995678189</span>
                  </a>
                </div>

                {/* Social Channels */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <a
                    href="https://github.com/karthikmudappilakkil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poster-btn-secondary py-2 text-xs flex items-center justify-center gap-1.5"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GITHUB</span>
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="poster-btn-secondary py-2 text-xs flex items-center justify-center gap-1.5"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LINKEDIN</span>
                  </a>
                </div>
              </div>

              {/* Hand-inked mascot cameo */}
              <div className="mt-6 pt-5 border-t-2 border-ink flex items-center justify-between">
                <div>
                  <div className="font-mono text-xs font-bold text-ink uppercase">
                    KARTHIK M P
                  </div>
                  <div className="font-mono text-[10px] text-posterRed font-bold">
                    KERALA, INDIA // UTC+5:30
                  </div>
                </div>
                <MiniWavingCharacter message="LET'S BUILD SOMETHING GREAT!" size={105} />
              </div>
            </div>
          </div>

          {/* Right Column: Transmission Console Form */}
          <div className="lg:col-span-7">
            <div className="poster-card p-6 sm:p-8 bg-white relative">
              <CornerTicks />
              <div className="absolute top-4 right-4">
                <CornerDice initialValue={6} size={36} />
              </div>

              <div className="pb-4 border-b-2 border-ink mb-6">
                <div className="font-mono text-[10px] text-posterRed font-bold uppercase tracking-wider mb-1">
                  SECURE TELEGRAPH
                </div>
                <h3 className="font-poster text-3xl sm:text-4xl text-ink uppercase tracking-wide leading-none">
                  TRANSMIT A MESSAGE
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 bg-paperDark border-2 border-ink text-center space-y-3">
                  <div className="w-10 h-10 mx-auto bg-posterRed text-paper border-2 border-ink flex items-center justify-center font-bold">
                    ✓
                  </div>
                  <div className="font-poster text-3xl text-ink uppercase tracking-wide">
                    TRANSMISSION RECEIVED
                  </div>
                  <p className="text-xs font-mono text-ink/80 max-w-md mx-auto">
                    Thank you, {formData.name}. Your message has been logged into the terminal.
                    I will respond via {formData.email} promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: "",
                        email: "",
                        subject: "Full-Stack Project",
                        message: "",
                      });
                    }}
                    className="poster-btn-secondary text-xs mt-3"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-bold text-ink uppercase mb-1">
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Sarah Connor"
                        className="w-full bg-paper border-2 border-ink px-3 py-2 text-xs font-mono
                          text-ink focus:outline-none focus:bg-white focus:border-posterRed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold text-ink uppercase mb-1">
                        YOUR EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="name@company.com"
                        className="w-full bg-paper border-2 border-ink px-3 py-2 text-xs font-mono
                          text-ink focus:outline-none focus:bg-white focus:border-posterRed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-ink uppercase mb-1">
                      TOPIC / SUBJECT
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full bg-paper border-2 border-ink px-3 py-2 text-xs font-mono
                        text-ink focus:outline-none focus:bg-white focus:border-posterRed"
                    >
                      <option value="Full-Stack Project">Full-Stack Web Development</option>
                      <option value="Mobile Application">Mobile Application (React Native)</option>
                      <option value="API / Backend Engineering">Fastify / Node.js Backend</option>
                      <option value="Shopify Storefront">Shopify Liquid Storefront</option>
                      <option value="Full-Time Engineering Role">Full-Time Software Engineer Role</option>
                      <option value="General Inquiry">General Technical Discussion</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-ink uppercase mb-1">
                      PROJECT BRIEF / MESSAGE *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share project scope, target timeline, or tech stack requirements..."
                      className="w-full bg-paper border-2 border-ink px-3 py-2 text-xs font-mono
                        text-ink focus:outline-none focus:bg-white focus:border-posterRed resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="poster-btn-primary w-full py-3 text-xs flex items-center justify-center gap-2"
                  >
                    <span>TRANSMIT DISPATCH NOW</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
