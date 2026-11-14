import React, { useState } from "react";
import { Mail, Phone, Send, Check, Copy } from "lucide-react";

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
  const [diceRoll, setDiceRoll] = useState(6);

  const rollTransmissionDice = () => {
    let next = Math.floor(Math.random() * 6) + 1;
    while (next === diceRoll) next = Math.floor(Math.random() * 6) + 1;
    setDiceRoll(next);
  };

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
      className="py-16 sm:py-24 border-b-[1.5px] border-ink bg-paper scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div
          className="flex flex-col sm:flex-row sm:items-baseline justify-between
            gap-2 pb-4 border-b-[1.5px] border-ink mb-12"
        >
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs font-bold bg-posterRed text-paper px-2
                py-0.5 border border-ink"
            >
              SEC. 05
            </span>
            <h2
              className="font-mono font-bold text-2xl sm:text-3xl text-ink
                tracking-tight uppercase"
            >
              TRANSMISSION & DISPATCH
            </h2>
          </div>
          <span className="font-mono text-xs text-posterRed uppercase font-bold tracking-wider">
            DIRECT COMMUNICATION CHANNEL
          </span>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Inquiries & Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="poster-card p-6 sm:p-8 bg-white border-[1.5px] border-ink">
              <span
                className="font-mono text-xs font-bold text-posterRed uppercase
                  tracking-wider block mb-2"
              >
                LET'S BUILD SOMETHING RELIABLE
              </span>
              <h3
                className="font-mono font-bold text-2xl text-ink uppercase tracking-tight
                  leading-snug"
              >
                Initiate a project or explore engineering roles.
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-ink/80 leading-relaxed font-normal">
                Whether you need full-stack architecture, institutional ERP scaling, or
                cross-platform mobile engineering, I'm ready to collaborate.
              </p>

              {/* Quick Channels */}
              <div className="mt-6 space-y-3">
                <div className="p-3 bg-paper border border-ink flex items-center justify-between">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail className="w-4 h-4 text-posterRed shrink-0" />
                    <a
                      href="mailto:karthikmudappilakkil@gmail.com"
                      className="text-xs font-mono font-bold text-ink hover:text-posterRed
                        transition-colors truncate"
                    >
                      karthikmudappilakkil@gmail.com
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-1.5 hover:bg-paperDark text-ink/70 hover:text-ink
                      transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                <div className="p-3 bg-paper border border-ink flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-posterRed shrink-0" />
                  <a
                    href="tel:+919995678189"
                    className="text-xs font-mono font-bold text-ink hover:text-posterRed
                      transition-colors"
                  >
                    +91 9995678189
                  </a>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-6 pt-5 border-t-[1.5px] border-ink flex items-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-btn-secondary py-2 px-3.5 text-xs flex items-center gap-2"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GITHUB</span>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="poster-btn-secondary py-2 px-3.5 text-xs flex items-center gap-2"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4 text-[#0077b5]" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>

            {/* Interactive Transmission Dice Box */}
            <div
              className="poster-card p-5 bg-paperDark border-[1.5px] border-ink
                flex items-center justify-between"
            >
              <div>
                <div className="font-mono text-xs font-bold uppercase text-ink">
                  LUCKY TRANSMISSION KEY:
                </div>
                <div className="font-mono text-xs text-posterRed font-bold mt-0.5">
                  CURRENT VALUE: PIP [{diceRoll}]
                </div>
              </div>
              <button
                type="button"
                onClick={rollTransmissionDice}
                className="poster-btn-primary px-3 py-1.5 text-xs font-bold"
              >
                ROLL DICE
              </button>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7">
            <div className="poster-card p-6 sm:p-8 bg-white border-[1.5px] border-ink">
              <div
                className="flex items-center justify-between pb-4 border-b-[1.5px]
                  border-ink mb-6"
              >
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-ink">
                  DISPATCH CONSOLE
                </span>
                <span className="font-mono text-xs text-posterRed font-bold">
                  [ READY ]
                </span>
              </div>

              {submitted ? (
                <div className="p-8 bg-paper border-[1.5px] border-ink text-center space-y-4">
                  <div
                    className="w-12 h-12 bg-posterRed text-paper border border-ink mx-auto
                      flex items-center justify-center font-mono font-bold text-xl"
                  >
                    ✓
                  </div>
                  <h4 className="font-mono font-bold text-xl text-ink uppercase">
                    TRANSMISSION RECORDED
                  </h4>
                  <p className="text-xs sm:text-sm text-ink/80 max-w-md mx-auto leading-relaxed">
                    Thank you, {formData.name}. Your message has been dispatched to Karthik.
                    Expect an electronic response within 24 hours.
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
                    className="poster-btn-secondary text-xs px-4 py-2 mt-4"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block font-mono text-xs font-bold uppercase
                          text-ink mb-1.5"
                      >
                        YOUR NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Jane Doe"
                        className="w-full p-2.5 bg-paper border border-ink text-xs font-mono
                          text-ink focus:outline-none focus:border-posterRed"
                      />
                    </div>

                    <div>
                      <label
                        className="block font-mono text-xs font-bold uppercase
                          text-ink mb-1.5"
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. jane@company.com"
                        className="w-full p-2.5 bg-paper border border-ink text-xs font-mono
                          text-ink focus:outline-none focus:border-posterRed"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-ink mb-1.5">
                      PURPOSE OF TRANSMISSION
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full p-2.5 bg-paper border border-ink text-xs font-mono
                        text-ink focus:outline-none focus:border-posterRed"
                    >
                      <option value="Full-Stack Project">Full-Stack Web Engineering</option>
                      <option value="Mobile Application">React Native / Mobile App</option>
                      <option value="ERP Consulting">College ERP / Institutional Platform</option>
                      <option value="Career Role">Engineering Job Opportunity</option>
                      <option value="General Inquiry">General Conversation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-mono text-xs font-bold uppercase text-ink mb-1.5">
                      MESSAGE CONTENT *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Outline your timeline, scope, or opportunity..."
                      className="w-full p-2.5 bg-paper border border-ink text-xs font-mono
                        text-ink focus:outline-none focus:border-posterRed resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="poster-btn-primary w-full py-3 flex items-center
                        justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>DISPATCH TRANSMISSION</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
