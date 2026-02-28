'use client';

import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    useCase: 'Trading Infrastructure',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would call an API
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Send className="w-8 h-8 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Thanks! We'll be in touch.</h1>
          <p className="text-zinc-400 mb-8">
            Our team will respond within 1 business day.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-emerald-500 hover:text-emerald-400 transition"
          >
            ← Send another message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">Talk to Sales</h1>
          <p className="text-xl text-zinc-400">
            We respond within 1 business day
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-emerald-500 focus:outline-none text-white"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Company <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-emerald-500 focus:outline-none text-white"
                  placeholder="Your company"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-emerald-500 focus:outline-none text-white"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Use Case <span className="text-red-500">*</span>
                </label>
                <select
                  required
                  value={formData.useCase}
                  onChange={(e) => setFormData({...formData, useCase: e.target.value})}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-emerald-500 focus:outline-none text-white"
                >
                  <option>Trading Infrastructure</option>
                  <option>Research</option>
                  <option>Backtesting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg focus:border-emerald-500 focus:outline-none text-white resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Or reach out directly</h2>
            
            <div className="space-y-6">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-emerald-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">General Sales</h3>
                    <p className="text-zinc-400 mb-3">
                      For pricing, demos, and general inquiries
                    </p>
                    <a 
                      href="mailto:sales@quantxdata.ai"
                      className="text-emerald-500 hover:text-emerald-400 transition"
                    >
                      sales@quantxdata.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Enterprise</h3>
                    <p className="text-zinc-400 mb-3">
                      For custom data feeds, SLAs, and on-premise deployments
                    </p>
                    <a 
                      href="mailto:enterprise@quantxdata.ai"
                      className="text-blue-500 hover:text-blue-400 transition"
                    >
                      enterprise@quantxdata.ai
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-3">Enterprise Benefits</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Dedicated support engineer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>99.99% uptime SLA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Custom data feeds and endpoints</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>On-premise deployment option</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-1">•</span>
                    <span>Volume discounts available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
