'use client';

import { Check, X } from 'lucide-react';
import { useState } from 'react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Pay Only For What You Use
          </h1>
          <p className="text-xl text-zinc-400">
            No enterprise contracts. No minimums. Start free, scale as you grow.
          </p>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          <PricingCard
            name="Free"
            price="$0"
            period="mo"
            description="Perfect for development and testing"
            features={[
              { name: "1,000 API calls/month", included: true },
              { name: "/instruments endpoint only", included: true },
              { name: "Limited historical data (7 days)", included: true },
              { name: "No credit card required", included: true },
              { name: "Community support", included: true },
              { name: "Full historical data", included: false },
              { name: "SLA guarantee", included: false }
            ]}
            cta="Start Free"
            ctaLink="/signup"
          />

          <PricingCard
            name="Starter"
            price="$99"
            period="mo"
            description="For individuals and small teams"
            features={[
              { name: "100,000 API calls/month", included: true },
              { name: "All endpoints", included: true },
              { name: "1 year historical data", included: true },
              { name: "Email support", included: true },
              { name: "Standard rate limits", included: true },
              { name: "Full historical data (2017+)", included: false },
              { name: "Priority support", included: false }
            ]}
            cta="Get Started"
            ctaLink="/signup?plan=starter"
          />

          <PricingCard
            name="Pro"
            price="$499"
            period="mo"
            description="For professional traders and teams"
            features={[
              { name: "1,000,000 API calls/month", included: true },
              { name: "All endpoints", included: true },
              { name: "Full historical data (2017+)", included: true },
              { name: "Priority support", included: true },
              { name: "Rate limits lifted", included: true },
              { name: "99.9% uptime SLA", included: true },
              { name: "Custom integrations", included: false }
            ]}
            cta="Start Pro Trial"
            ctaLink="/signup?plan=pro"
            popular={true}
          />

          <PricingCard
            name="Enterprise"
            price="Custom"
            period=""
            description="For institutions and hedge funds"
            features={[
              { name: "Unlimited API calls", included: true },
              { name: "All endpoints + custom feeds", included: true },
              { name: "Full historical data (2017+)", included: true },
              { name: "Dedicated support engineer", included: true },
              { name: "No rate limits", included: true },
              { name: "99.99% uptime SLA", included: true },
              { name: "On-premise deployment option", included: true }
            ]}
            cta="Contact Sales"
            ctaLink="/contact"
          />

        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Feature Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-zinc-800">
                  <th className="text-left py-4 px-4 text-zinc-400 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 text-zinc-400 font-semibold">Free</th>
                  <th className="text-center py-4 px-4 text-zinc-400 font-semibold">Starter</th>
                  <th className="text-center py-4 px-4 text-zinc-400 font-semibold bg-emerald-950/20">Pro</th>
                  <th className="text-center py-4 px-4 text-zinc-400 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow feature="API Calls / Month" free="1,000" starter="100,000" pro="1,000,000" enterprise="Unlimited" />
                <ComparisonRow feature="Endpoints" free="/instruments only" starter="All endpoints" pro="All endpoints" enterprise="All + custom" />
                <ComparisonRow feature="Historical Data" free="7 days" starter="1 year" pro="Full (2017+)" enterprise="Full (2017+)" />
                <ComparisonRow feature="Rate Limit" free="10 req/s" starter="50 req/s" pro="No limit" enterprise="No limit" />
                <ComparisonRow feature="Support" free="Community" starter="Email" pro="Priority" enterprise="Dedicated" />
                <ComparisonRow feature="SLA" free="-" starter="-" pro="99.9%" enterprise="99.99%" />
                <ComparisonRow feature="On-Premise" free="-" starter="-" pro="-" enterprise="Available" />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* API Call Calculator */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Estimate Your Costs</h2>
          <APICalculator />
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <FAQItem 
              question="What counts as an API call?"
              answer="Each HTTP request to our API endpoints counts as one API call. For example, fetching trades data for BTC/USD on Binance for a specific time range = 1 call. Streaming connections count as 1 call per second of stream time."
            />
            <FAQItem 
              question="Can I upgrade or downgrade anytime?"
              answer="Yes. You can upgrade or downgrade your plan at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. Unused API calls do not roll over to the next month."
            />
            <FAQItem 
              question="Do you offer refunds?"
              answer="We offer a 14-day money-back guarantee on all paid plans. If you're not satisfied within the first 14 days, contact support for a full refund. No questions asked."
            />
            <FAQItem 
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, Amex), ACH transfers (Enterprise only), and wire transfers for Enterprise annual contracts. All payments are processed securely through Stripe."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Start for Free Today</h2>
          <p className="text-xl text-zinc-400 mb-8">
            No credit card required. Full API access included.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold text-lg transition">
            Create Free Account
          </button>
        </div>
      </section>
    </div>
  );
}

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: { name: string; included: boolean }[];
  cta: string;
  ctaLink: string;
  popular?: boolean;
}

function PricingCard({ name, price, period, description, features, cta, ctaLink, popular }: PricingCardProps) {
  return (
    <div className={`relative bg-zinc-900/50 border rounded-xl p-8 ${popular ? 'border-emerald-500 shadow-lg shadow-emerald-500/20' : 'border-zinc-800'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-emerald-500 text-sm font-bold rounded-full">
          Most Popular
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-4xl font-bold">{price}</span>
          {period && <span className="text-zinc-500">/{period}</span>}
        </div>
        <p className="text-sm text-zinc-400">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            {feature.included ? (
              <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
            ) : (
              <X className="w-5 h-5 text-zinc-600 flex-shrink-0 mt-0.5" />
            )}
            <span className={feature.included ? "text-zinc-300" : "text-zinc-600"}>
              {feature.name}
            </span>
          </li>
        ))}
      </ul>

      <a 
        href={ctaLink}
        className={`block w-full text-center px-6 py-3 rounded-lg font-semibold transition ${
          popular 
            ? 'bg-emerald-600 hover:bg-emerald-700 text-white' 
            : 'bg-zinc-800 hover:bg-zinc-700 text-white'
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

function ComparisonRow({ feature, free, starter, pro, enterprise }: { feature: string; free: string; starter: string; pro: string; enterprise: string }) {
  return (
    <tr className="border-b border-zinc-800/50">
      <td className="py-4 px-4 text-zinc-300">{feature}</td>
      <td className="text-center py-4 px-4 text-zinc-400 text-sm">{free}</td>
      <td className="text-center py-4 px-4 text-zinc-400 text-sm">{starter}</td>
      <td className="text-center py-4 px-4 bg-emerald-950/10 text-zinc-300 text-sm font-semibold">{pro}</td>
      <td className="text-center py-4 px-4 text-zinc-400 text-sm">{enterprise}</td>
    </tr>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="border-b border-zinc-800 pb-6">
      <h3 className="text-lg font-semibold mb-3">{question}</h3>
      <p className="text-zinc-400 leading-relaxed">{answer}</p>
    </div>
  );
}

function APICalculator() {
  const [endpoint, setEndpoint] = useState('trades');
  const [calls, setCalls] = useState(10000);

  const calculateCost = () => {
    if (calls <= 1000) return { plan: 'Free', cost: 0 };
    if (calls <= 100000) return { plan: 'Starter', cost: 99 };
    if (calls <= 1000000) return { plan: 'Pro', cost: 499 };
    return { plan: 'Enterprise', cost: 'Custom' };
  };

  const result = calculateCost();

  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-2">Endpoint Type</label>
          <select 
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white"
          >
            <option value="trades">Trades Data</option>
            <option value="orderbooks">Order Books</option>
            <option value="ohlcv">OHLCV Aggregated</option>
            <option value="options">Options Data</option>
            <option value="multi">Multi-Exchange</option>
            <option value="stream">Real-Time Streaming</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold mb-2">
            Estimated Monthly Calls: <span className="text-emerald-500">{calls.toLocaleString()}</span>
          </label>
          <input 
            type="range"
            min="100"
            max="2000000"
            step="1000"
            value={calls}
            onChange={(e) => setCalls(parseInt(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="pt-6 border-t border-zinc-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-zinc-400 mb-1">Recommended Plan</p>
              <p className="text-2xl font-bold">{result.plan}</p>
            </div>
            <div className="text-right">
              <p className="text-sm text-zinc-400 mb-1">Estimated Monthly Cost</p>
              <p className="text-3xl font-bold text-emerald-500">
                {typeof result.cost === 'number' ? `$${result.cost}` : result.cost}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
