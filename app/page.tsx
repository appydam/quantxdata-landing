import { AnimatedSection, AnimatedCard, AnimatedHero, StaggerContainer, StaggerItem } from './components/AnimatedSection';
import { AnimatedCounter } from './components/AnimatedCounter';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-blue-950/30 to-zinc-950">
      {/* Animated gradient orbs in background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 py-20 md:px-8 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedHero>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Institutional-Grade
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-gradient">
                Crypto Market Data — Now AI-Native
              </span>
            </h1>
          </AnimatedHero>
          
          <AnimatedSection delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Real-time and historical data from 120+ exchanges. Query with AI agents or REST API. 
              Pre-normalized for ML pipelines. Built for quant traders.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                Request API Access
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold transition-all border border-white/10 hover:border-white/20 hover:scale-105"
              >
                Download Sample Dataset
              </a>
            </div>
          </AnimatedSection>
          
          {/* Stats Bar - Animated counters */}
          <AnimatedSection delay={0.4}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <AnimatedCounter value="120+" label="Exchanges" />
              <AnimatedCounter value="99.9%" label="Uptime SLA" />
              <AnimatedCounter value="5+" label="Years Historical" />
              <AnimatedCounter value="10" label="ms Latency" />
            </div>
          </AnimatedSection>
          
          {/* AI-Native Badge */}
          <AnimatedSection delay={0.5}>
            <div className="mt-10 flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm hover:bg-emerald-500/20 transition-all cursor-default">
                <span className="text-emerald-400 animate-pulse">✨</span>
                <span className="text-sm font-semibold text-emerald-400">AI-Native (MCP)</span>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Trust Indicators */}
          <AnimatedSection delay={0.6}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <span className="text-green-400">🔒</span>
                <span>SOC-2 Compliant</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <span className="text-blue-400">✓</span>
                <span>Institutional-Grade Security</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <span className="text-cyan-400">⚡</span>
                <span>Sub-10ms Latency</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How Our Data Works - Methodology Section */}
      <section className="relative px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4">
              How Our Data Works
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Our infrastructure handles billions of data points daily with guaranteed accuracy
            </p>
          </AnimatedSection>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-4 gap-6">
              <StaggerItem>
                <MethodologyStep
                  number="1"
                  title="Collect"
                  description="Direct exchange connections with redundant feeds. Capture every trade, quote, and order book update."
                />
              </StaggerItem>
              <StaggerItem>
                <MethodologyStep
                  number="2"
                  title="Normalize"
                  description="Convert raw data into standardized schemas. Consistent timestamps, unified symbols, and ML-ready formats."
                />
              </StaggerItem>
              <StaggerItem>
                <MethodologyStep
                  number="3"
                  title="Verify"
                  description="Multi-layer validation checks. Detect anomalies, filter outliers, and ensure data integrity."
                />
              </StaggerItem>
              <StaggerItem>
                <MethodologyStep
                  number="4"
                  title="Deliver"
                  description="API, WebSocket, or bulk export. Sub-10ms latency from exchange to your infrastructure."
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Data Products Section */}
      <section className="relative px-4 py-16 md:px-8 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Comprehensive Data Products
            </h2>
          </AnimatedSection>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <ProductCard
                  title="Trade Data"
                  description="Real-time and historical trades with microsecond timestamps. Every execution, every exchange."
                />
              </StaggerItem>
              <StaggerItem>
                <ProductCard
                  title="Order Books"
                  description="L2/L3 order book depth with sub-second snapshots. Track liquidity and market microstructure."
                />
              </StaggerItem>
              <StaggerItem>
                <ProductCard
                  title="OHLCV"
                  description="Standardized candles from 1-second to 1-day intervals. Perfect for backtesting and analysis."
                />
              </StaggerItem>
              <StaggerItem>
                <ProductCard
                  title="Options Greeks"
                  description="Implied volatility, delta, gamma, vega, and theta for crypto options across all major venues."
                />
              </StaggerItem>
              <StaggerItem>
                <ProductCard
                  title="Streaming Data"
                  description="WebSocket streaming with <10ms latency. Real-time price discovery for algorithmic trading."
                />
              </StaggerItem>
              <StaggerItem>
                <ProductCard
                  title="Historical Archives"
                  description="7+ years of validated data. Query any trading pair, any exchange, any timeframe."
                />
              </StaggerItem>
              <StaggerItem>
                <ProductCard
                  title="AI Agent Access (MCP)"
                  description="Query crypto data using natural language through Claude, ChatGPT, or any MCP-compatible AI tool. No code required. 60-second setup."
                  href="/mcp"
                  featured
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* AI-Native Data Access Section */}
      <section className="relative px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                The First Crypto Data API Your AI Can Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                QuantXData is the only institutional data provider with native AI integration via Model Context Protocol (MCP). 
                Connect your AI tools in 60 seconds.
              </p>
            </div>
          </AnimatedSection>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <StaggerItem>
                <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🔬</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">For Researchers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Ask questions in plain English. No Python notebooks, no API boilerplate. Get instant analysis across 120+ exchanges.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💻</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">For Developers</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Install with one command. Works with Claude Desktop, VS Code, Cursor, Cline, and any MCP tool. Zero maintenance.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">For Traders</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Monitor funding rates, order books, and cross-exchange spreads in real time. Query with natural language, get actionable data.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
          
          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/mcp"
                className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-lg font-semibold transition-all text-center shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-105"
              >
                Install MCP Server
              </a>
              <a
                href="/mcp#examples"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold transition-all border border-white/10 hover:border-white/20 text-center hover:scale-105"
              >
                View AI Examples
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Delivery Methods Section */}
      <section className="relative px-4 py-16 md:px-8 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Flexible Delivery Methods
            </h2>
          </AnimatedSection>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-6">
              <StaggerItem>
                <DeliveryCard
                  title="REST API"
                  description="Query historical data with flexible parameters. Pagination, filtering, and aggregation built-in."
                  icon="🔌"
                />
              </StaggerItem>
              <StaggerItem>
                <DeliveryCard
                  title="WebSocket Streaming"
                  description="Subscribe to real-time market updates. Sub-10ms latency from exchange to your infrastructure."
                  icon="⚡"
                />
              </StaggerItem>
              <StaggerItem>
                <DeliveryCard
                  title="S3 Bulk Export"
                  description="Download complete datasets in Parquet format. Optimized for Pandas, Polars, and Spark."
                  icon="📦"
                />
              </StaggerItem>
              <StaggerItem>
                <DeliveryCard
                  title="Hosted Database"
                  description="Direct SQL access to our data warehouse. Run complex queries without managing infrastructure."
                  icon="🗄️"
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="relative px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
              Built for Professionals
            </h2>
          </AnimatedSection>
          
          <StaggerContainer>
            <div className="grid md:grid-cols-2 gap-8">
              <StaggerItem>
                <UseCaseCard
                  title="Algorithmic Trading"
                  description="Low-latency market data for systematic strategies. Timestamp-normalized across exchanges for reliable backtesting and execution."
                />
              </StaggerItem>
              <StaggerItem>
                <UseCaseCard
                  title="Research & Analytics"
                  description="Clean, validated data for market research. Identify trends, test hypotheses, and publish findings with reproducible datasets."
                />
              </StaggerItem>
              <StaggerItem>
                <UseCaseCard
                  title="Portfolio Management"
                  description="Real-time position tracking and risk assessment. Accurate pricing across multiple exchanges and asset types."
                />
              </StaggerItem>
              <StaggerItem>
                <UseCaseCard
                  title="Risk Management"
                  description="Monitor market depth, detect anomalies, and assess liquidity risk. Real-time alerts for critical market events."
                />
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative px-4 py-16 md:px-8 bg-gradient-to-b from-transparent via-zinc-900/50 to-transparent">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-6">
              Transparent, Pay-As-You-Go Pricing
            </h2>
            <p className="text-xl text-gray-300 text-center mb-12">
              No annual contracts. No minimum spend. Pay only for what you use.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all">
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
          </AnimatedSection>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" className="relative px-4 py-16 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Start Building with QuantXData
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              Pre-normalized, AI-ready datasets. Start with a free 30-day trial.
            </p>
            <p className="text-base text-gray-400 mb-8">
              No credit card required. Full API access included.
            </p>
          </AnimatedSection>
          
          <AnimatedSection delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:hello@quantxdata.ai"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105"
              >
                Request API Access
              </a>
              <a
                href="#"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold transition-all border border-white/10 hover:border-white/20 hover:scale-105"
              >
                View API Documentation
              </a>
            </div>
            <p className="text-sm text-gray-400">
              Questions? Email us at{" "}
              <a href="mailto:hello@quantxdata.ai" className="text-blue-400 hover:text-blue-300 transition-colors">
                hello@quantxdata.ai
              </a>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative px-4 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
          <p>&copy; 2026 QuantXData. Institutional-grade crypto market data infrastructure.</p>
        </div>
      </footer>
    </div>
  );
}

// Component: Product Card
function ProductCard({ title, description, href, featured }: { title: string; description: string; href?: string; featured?: boolean }) {
  const baseClasses = "h-full bg-white/5 border rounded-2xl p-6 backdrop-blur-sm transition-all";
  const hoverClasses = featured
    ? "hover:bg-emerald-500/10 hover:border-emerald-500/30 hover:shadow-lg hover:shadow-emerald-500/20"
    : "hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-blue-500/10";
  const borderClasses = featured ? "border-emerald-500/20" : "border-white/10";

  const content = (
    <>
      {featured && (
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
          <span className="text-emerald-400 text-xs font-semibold">NEW</span>
        </div>
      )}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
      {href && (
        <div className="mt-4">
          <span className="text-emerald-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
            Learn More →
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${borderClasses} ${hoverClasses} block group`}>
        {content}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${borderClasses} ${hoverClasses}`}>
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
    <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  );
}

// Component: Use Case Card
function UseCaseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <h3 className="text-2xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
    </div>
  );
}

// Component: Pricing Item
function PricingItem({ label, price }: { label: string; price: string }) {
  return (
    <div className="flex justify-between items-center group hover:scale-105 transition-transform">
      <span className="text-lg text-white">{label}</span>
      <span className="text-lg font-semibold text-blue-400 group-hover:text-cyan-400 transition-colors">{price}</span>
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
    <div className="group h-full bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-blue-500/10">
      <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-3 group-hover:scale-110 transition-transform inline-block">
        {number}
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
