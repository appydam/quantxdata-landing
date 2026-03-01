export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Institutional-Grade
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Crypto Market Data — Now AI-Native
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Real-time and historical data from 120+ exchanges. Query with AI agents or REST API. 
            Pre-normalized for ML pipelines. Built for quant traders.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Request API Access
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
            >
              Download Sample Dataset
            </a>
          </div>
          
          {/* Stats Bar - Positioned immediately below CTAs */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <StatItem value="120+" label="Exchanges" />
            <StatItem value="99.9%" label="Uptime SLA" />
            <StatItem value="5+ Years" label="Historical Data" />
            <StatItem value="Sub-10ms" label="Latency" />
          </div>
          
          {/* AI-Native Badge */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-emerald-400">✨</span>
              <span className="text-sm font-semibold text-emerald-400">AI-Native (MCP)</span>
            </div>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-green-400">🔒</span>
              <span>SOC-2 Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✓</span>
              <span>Institutional-Grade Security</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-cyan-400">⚡</span>
              <span>Sub-10ms Latency</span>
            </div>
          </div>
        </div>
      </section>

      {/* How Our Data Works - Methodology Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            How Our Data Works
          </h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Our infrastructure handles billions of data points daily with guaranteed accuracy
          </p>
          <div className="grid md:grid-cols-4 gap-6">
            <MethodologyStep
              number="1"
              title="Collect"
              description="Direct exchange connections with redundant feeds. Capture every trade, quote, and order book update."
            />
            <MethodologyStep
              number="2"
              title="Normalize"
              description="Convert raw data into standardized schemas. Consistent timestamps, unified symbols, and ML-ready formats."
            />
            <MethodologyStep
              number="3"
              title="Verify"
              description="Multi-layer validation checks. Detect anomalies, filter outliers, and ensure data integrity."
            />
            <MethodologyStep
              number="4"
              title="Deliver"
              description="API, WebSocket, or bulk export. Sub-10ms latency from exchange to your infrastructure."
            />
          </div>
        </div>
      </section>

      {/* Data Products Section */}
      <section className="px-4 py-16 md:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Comprehensive Data Products
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              title="Trade Data"
              description="Real-time and historical trades with microsecond timestamps. Every execution, every exchange."
            />
            <ProductCard
              title="Order Books"
              description="L2/L3 order book depth with sub-second snapshots. Track liquidity and market microstructure."
            />
            <ProductCard
              title="OHLCV"
              description="Standardized candles from 1-second to 1-day intervals. Perfect for backtesting and analysis."
            />
            <ProductCard
              title="Options Greeks"
              description="Implied volatility, delta, gamma, vega, and theta for crypto options across all major venues."
            />
            <ProductCard
              title="Streaming Data"
              description="WebSocket streaming with <10ms latency. Real-time price discovery for algorithmic trading."
            />
            <ProductCard
              title="Historical Archives"
              description="7+ years of validated data. Query any trading pair, any exchange, any timeframe."
            />
            <ProductCard
              title="AI Agent Access (MCP)"
              description="Query crypto data using natural language through Claude, ChatGPT, or any MCP-compatible AI tool. No code required. 60-second setup."
              href="/mcp"
            />
          </div>
        </div>
      </section>

      {/* AI-Native Data Access Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The First Crypto Data API Your AI Can Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              QuantXData is the only institutional data provider with native AI integration via Model Context Protocol (MCP). 
              Connect your AI tools in 60 seconds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">For Researchers</h3>
              <p className="text-gray-300">
                Ask questions in plain English. No Python notebooks, no API boilerplate. Get instant analysis across 120+ exchanges.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">For Developers</h3>
              <p className="text-gray-300">
                Install with one command. Works with Claude Desktop, VS Code, Cursor, Cline, and any MCP tool. Zero maintenance.
              </p>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-3">For Traders</h3>
              <p className="text-gray-300">
                Monitor funding rates, order books, and cross-exchange spreads in real time. Query with natural language, get actionable data.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/mcp"
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors text-center"
            >
              Install MCP Server
            </a>
            <a
              href="/mcp#examples"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20 text-center"
            >
              View AI Examples
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Methods Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Flexible Delivery Methods
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <DeliveryCard
              title="REST API"
              description="Query historical data with flexible parameters. Pagination, filtering, and aggregation built-in."
              icon="🔌"
            />
            <DeliveryCard
              title="WebSocket Streaming"
              description="Subscribe to real-time market updates. Sub-10ms latency from exchange to your infrastructure."
              icon="⚡"
            />
            <DeliveryCard
              title="S3 Bulk Export"
              description="Download complete datasets in Parquet format. Optimized for Pandas, Polars, and Spark."
              icon="📦"
            />
            <DeliveryCard
              title="Hosted Database"
              description="Direct SQL access to our data warehouse. Run complex queries without managing infrastructure."
              icon="🗄️"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="px-4 py-16 md:px-8 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Built for Professionals
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <UseCaseCard
              title="Algorithmic Trading"
              description="Low-latency market data for systematic strategies. Timestamp-normalized across exchanges for reliable backtesting and execution."
            />
            <UseCaseCard
              title="Research & Analytics"
              description="Clean, validated data for market research. Identify trends, test hypotheses, and publish findings with reproducible datasets."
            />
            <UseCaseCard
              title="Portfolio Management"
              description="Real-time position tracking and risk assessment. Accurate pricing across multiple exchanges and asset types."
            />
            <UseCaseCard
              title="Risk Management"
              description="Monitor market depth, detect anomalies, and assess liquidity risk. Real-time alerts for critical market events."
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
            Transparent, Pay-As-You-Go Pricing
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12">
            No annual contracts. No minimum spend. Pay only for what you use.
          </p>
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="space-y-6">
              <PricingItem label="API Calls (REST)" price="$0.001 per call" />
              <PricingItem label="WebSocket Streaming" price="$0.005 per minute" />
              <PricingItem label="Exchange Data Bundle" price="$99/month per exchange" />
              <PricingItem label="Full Access (120+ exchanges)" price="$1,999/month" />
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 text-center">
                Volume discounts available. Enterprise SLAs starting at $2,999/month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="px-4 py-16 md:px-8 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Building with QuantXData
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            Pre-normalized, AI-ready datasets. Start with a free 30-day trial.
          </p>
          <p className="text-base text-gray-400 mb-8">
            No credit card required. Full API access included.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="mailto:hello@quantxdata.ai"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
            >
              Request API Access
            </a>
            <a
              href="#"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
            >
              View API Documentation
            </a>
          </div>
          <p className="text-sm text-gray-400">
            Questions? Email us at{" "}
            <a href="mailto:hello@quantxdata.ai" className="text-blue-400 hover:text-blue-300">
              hello@quantxdata.ai
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>&copy; 2026 QuantXData. Institutional-grade crypto market data infrastructure.</p>
        </div>
      </footer>
    </div>
  );
}

// Component: Product Card
function ProductCard({ title, description, href }: { title: string; description: string; href?: string }) {
  const content = (
    <>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
      {href && (
        <div className="mt-4">
          <span className="text-emerald-400 text-sm font-medium inline-flex items-center gap-1">
            Learn More →
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all backdrop-blur-sm block group">
        {content}
      </a>
    );
  }

  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
      {content}
    </div>
  );
}

// Component: Delivery Card
function DeliveryCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}

// Component: Use Case Card
function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 backdrop-blur-sm">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-lg">{description}</p>
    </div>
  );
}

// Component: Pricing Item
function PricingItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-center">
      <span className="text-lg text-white">{label}</span>
      <span className="text-lg font-semibold text-blue-400">{price}</span>
    </div>
  );
}

// Component: Stat Item (for stats bar below hero)
function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
        {value}
      </div>
      <div className="text-sm md:text-base text-gray-300">{label}</div>
    </div>
  );
}

// Component: Methodology Step (for How Our Data Works section)
function MethodologyStep({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors backdrop-blur-sm">
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
}
