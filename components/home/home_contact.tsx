"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, ArrowRight, Check } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Bangkok, Thailand",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+66 63 594 4429",
  },
  {
    icon: Mail,
    label: "Email",
    value: "imageautomat@gmail.com",
  },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    message: "",
    website: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMsg(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "ส่งข้อมูลไม่สำเร็จ กรุณาลองใหม่อีกครั้ง");
      }
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        message: "",
        website: "",
      });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "เกิดข้อผิดพลาด กรุณาลองใหม่");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 md:py-40 bg-[#023047] relative"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Content */}
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-[#FB8500] mb-6">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl text-white mb-8"
            >
              ส่งข้อมูลหาเรา
              <br />
              Please lets me know.
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-12 max-w-md">
              ติดต่อเราเพื่อสอบถามข้อมูลและขอราคา
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center gap-5">
                  <div className="w-12 h-12 flex items-center justify-center border border-white/10">
                    <info.icon className="w-5 h-5 text-[#FB8500]" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.2em] uppercase text-white/40 mb-1">
                      {info.label}
                    </p>
                    <p className="text-white">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <div className="bg-white p-8 md:p-12">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#023047] mb-6">
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-[#023047] mb-3">
                    Thank You
                  </h3>
                  <p className="text-[#023047]/60">
                    We will respond within 24 hours.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="font-sans font-bold text-2xl text-[#023047] mb-8">
                    Get in Touch
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs tracking-[0.15em] uppercase text-[#023047]/60 mb-3"
                        >
                          Name
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full h-12 px-0 bg-transparent border-0 border-b border-[#023047]/20 rounded-none focus:border-[#FB8500] focus:ring-0 text-[#023047] placeholder:text-[#023047]/30"
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs tracking-[0.15em] uppercase text-[#023047]/60 mb-3"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="w-full h-12 px-0 bg-transparent border-0 border-b border-[#023047]/20 rounded-none focus:border-[#FB8500] focus:ring-0 text-[#023047] placeholder:text-[#023047]/30"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs tracking-[0.15em] uppercase text-[#023047]/60 mb-3"
                        >
                          Phone
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="w-full h-12 px-0 bg-transparent border-0 border-b border-[#023047]/20 rounded-none focus:border-[#FB8500] focus:ring-0 text-[#023047] placeholder:text-[#023047]/30"
                          placeholder="+66 62 424 9936"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="eventDate"
                          className="block text-xs tracking-[0.15em] uppercase text-[#023047]/60 mb-3"
                        >
                          Event Date
                        </label>
                        <Input
                          id="eventDate"
                          type="date"
                          value={formData.eventDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              eventDate: e.target.value,
                            })
                          }
                          className="w-full h-12 px-0 bg-transparent border-0 border-b border-[#023047]/20 rounded-none focus:border-[#FB8500] focus:ring-0 text-[#023047]"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="eventType"
                        className="block text-xs tracking-[0.15em] uppercase text-[#023047]/60 mb-3"
                      >
                        Event Type
                      </label>
                      <select
                        id="eventType"
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({ ...formData, eventType: e.target.value })
                        }
                        className="w-full h-12 px-0 bg-transparent border-0 border-b border-[#023047]/20 rounded-none focus:border-[#FB8500] focus:ring-0 text-[#023047]"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="brand">Brand Activation</option>
                        <option value="party">Private Party</option>
                        <option value="gala">Gala</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs tracking-[0.15em] uppercase text-[#023047]/60 mb-3"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        className="w-full px-0 py-3 bg-transparent border-0 border-b border-[#023047]/20 rounded-none focus:border-[#FB8500] focus:ring-0 text-[#023047] placeholder:text-[#023047]/30 resize-none"
                        placeholder="Tell us about your event..."
                        rows={3}
                      />
                    </div>

                    {/* Honeypot — hidden from real users; bots fill anything */}
                    <div aria-hidden="true" className="absolute left-[-9999px] w-px h-px overflow-hidden">
                      <label htmlFor="website">Website (do not fill)</label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website}
                        onChange={(e) =>
                          setFormData({ ...formData, website: e.target.value })
                        }
                      />
                    </div>

                    {errorMsg && (
                      <p
                        role="alert"
                        className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2"
                      >
                        {errorMsg}
                      </p>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#023047] hover:bg-[#023047]/90 disabled:opacity-60 disabled:cursor-not-allowed text-white h-14 text-sm tracking-[0.15em] uppercase mt-4 transition-all duration-300 group"
                    >
                      {isSubmitting ? "Sending..." : "Send Request"}
                      {!isSubmitting && (
                        <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
