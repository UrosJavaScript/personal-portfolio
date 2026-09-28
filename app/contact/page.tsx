"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageCircle,
  CheckCircle2,
  Copy,
  ExternalLink,
} from "lucide-react";
import { contactPageStyles } from "@/lib/dummyStyles";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const email = "kowcicuros70@gmail.com";
  const phone = "+381691217273";
  const whatsappUrl = `https://api.whatsapp.com/send?phone=+381691217273&text=${encodeURIComponent(
    "Hello Uros! I checked your portfolio and would like to connect."
  )}`;
  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    email
  )}`;

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <div className={contactPageStyles.container}>
      <div className={contactPageStyles.innerContainer}>
        <div className="pb-8 border-b border-zinc-800/80">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-blue-400 mb-2">
            <Mail className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className={contactPageStyles.title}>Let's Collaborate</h1>
          <p className={contactPageStyles.description}>
            Have an exciting project, job opportunity, or just want to say hi? Feel free to reach out directly through any of the channels below.
          </p>
        </div>

        <div className={contactPageStyles.grid}>
          <a
            href={`mailto:${email}`}
            className={contactPageStyles.contactCard}
          >
            <div className={contactPageStyles.contactIconContainer}>
              <Mail className={contactPageStyles.contactIcon} />
            </div>
            <h3 className={contactPageStyles.cardTitle}>Direct Email</h3>
            <p className={contactPageStyles.cardValue}>{email}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-medium group-hover:text-blue-400 transition-colors">
              <span>Send an email</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={contactPageStyles.contactCard}
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
              <MessageCircle className={contactPageStyles.contactIcon} />
            </div>
            <h3 className={contactPageStyles.cardTitle}>WhatsApp Chat</h3>
            <p className={contactPageStyles.cardValue}>{phone}</p>
            <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-medium group-hover:text-emerald-400 transition-colors">
              <span>Open WhatsApp</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </a>

          <div className={contactPageStyles.contactCard}>
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
              <MapPin className={contactPageStyles.contactIcon} />
            </div>
            <h3 className={contactPageStyles.cardTitle}>Location</h3>
            <p className={contactPageStyles.cardValue}>Belgrade, Serbia</p>
            <div className="mt-3 text-xs text-zinc-500 font-medium">
              CET (UTC +1) Timezone
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4">
            <div className="p-6 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm">
              <h3 className="text-lg font-bold text-white mb-2">Quick Connect</h3>
              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Prefer email clients or instant messaging? Click below for immediate redirection:
              </p>

              <div className="space-y-3">
                <a
                  href={gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-semibold text-zinc-200 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-red-400" />
                    Compose in Gmail
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500" />
                </a>

                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-800/60 hover:bg-zinc-800 border border-zinc-700/50 text-xs font-semibold text-zinc-200 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <Copy className="w-4 h-4 text-blue-400" />
                    {copied ? "Copied to Clipboard!" : "Copy Email Address"}
                  </span>
                  {copied && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-emerald-950/30 hover:bg-emerald-950/50 border border-emerald-800/40 text-xs font-semibold text-emerald-300 transition-all"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4 text-emerald-400" />
                    Direct WhatsApp Message
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-emerald-500" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-6 sm:p-8 rounded-3xl border border-zinc-800/80 bg-zinc-900/40 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill in the details below and I will get back to you within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                  <h4 className="text-lg font-bold text-white">Message Received!</h4>
                  <p className="text-sm text-zinc-400 mt-1 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. You can also connect directly at {email}.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="mt-5 px-4 py-2 rounded-xl bg-zinc-800 text-xs font-semibold text-zinc-200 hover:bg-zinc-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Opportunity"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Describe your project, ideas, or role..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl bg-zinc-950/80 border border-zinc-800 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-zinc-100 text-zinc-950 font-bold text-sm hover:bg-white transition-all shadow-lg hover:scale-105 active:scale-95"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
