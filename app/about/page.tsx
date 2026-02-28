import { Building2, Database, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About QuantXData</h1>
          <p className="text-xl text-zinc-400">
            Institutional-grade crypto data without institutional-grade contracts
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8">
            <p className="text-xl text-zinc-300 leading-relaxed mb-4">
              We built QuantXData because institutional-grade crypto data shouldn't require a $100k contract.
            </p>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Hedge funds and quant traders need reliable, normalized data to build systematic strategies. 
              But most providers lock data behind enterprise contracts with six-figure minimums. 
              We're changing that with transparent, pay-as-you-go pricing that scales from solo traders to institutions.
            </p>
          </div>
        </div>
      </section>

      {/* The Data */}
      <section className="container mx-auto px-6 py-16 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Powered by AlgoHouse Infrastructure</h2>
          <p className="text-center text-zinc-400 mb-12 max-w-3xl mx-auto">
            QuantXData is the developer-facing API layer built on top of AlgoHouse's institutional data platform. 
            We've been collecting and normalizing crypto market data since 2017.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Database className="w-12 h-12 text-emerald-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">120+ Exchanges</h3>
              <p className="text-zinc-400">
                Pre-normalized data from Binance, Coinbase, Kraken, Deribit, OKX, and 115+ more venues
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-12 h-12 text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Full Tick History</h3>
              <p className="text-zinc-400">
                Complete trade-by-trade and order book data since 2017, with microsecond precision timestamps
              </p>
            </div>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-center">
              <div className="flex justify-center mb-4">
                <Building2 className="w-12 h-12 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Real-Time Streaming</h3>
              <p className="text-zinc-400">
                Sub-second latency SSE streams for live trading and monitoring applications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Team</h2>
          
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-blue-500 flex items-center justify-center text-3xl font-bold mb-4">
              AD
            </div>
            <h3 className="text-2xl font-bold mb-2">Arpit Dhamija</h3>
            <p className="text-zinc-400 mb-4">CEO & Co-founder</p>
            <p className="text-center text-zinc-400 max-w-2xl mb-4">
              Former Amazon engineer (3M+ QPS systems). Built SageCombat's full-stack infrastructure. 
              Published AI researcher. Passionate about making institutional tools accessible to everyone.
            </p>
            <a 
              href="https://linkedin.com/in/arpitdhamija"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-500 hover:text-emerald-400 transition"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <div className="text-center">
            <p className="text-sm text-zinc-500">
              Built by the engineering team behind AlgoHouse
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="container mx-auto px-6 py-16 bg-zinc-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          
          <div className="space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-emerald-500">2019</span>
              </div>
              <div className="flex-1 border-l-2 border-zinc-800 pl-6 pb-8">
                <h3 className="text-xl font-semibold mb-2">AlgoHouse Founded</h3>
                <p className="text-zinc-400">
                  Started building institutional-grade crypto market data infrastructure
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-blue-500">2024</span>
              </div>
              <div className="flex-1 border-l-2 border-zinc-800 pl-6 pb-8">
                <h3 className="text-xl font-semibold mb-2">120+ Exchanges Connected</h3>
                <p className="text-zinc-400">
                  Expanded coverage to all major crypto venues with full historical depth
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-purple-500">2025</span>
              </div>
              <div className="flex-1 pl-6">
                <h3 className="text-xl font-semibold mb-2">QuantXData Launched</h3>
                <p className="text-zinc-400">
                  Opened institutional data platform to developers and traders worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Join Thousands of Traders</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Start building with QuantXData today. No credit card required.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold text-lg transition">
            Get Started Free
          </button>
        </div>
      </section>
    </div>
  );
}
