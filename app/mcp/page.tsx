'use client';

import { useState } from 'react';
import { Sparkles, Terminal, MessageSquare, Code, CheckCircle, Github } from 'lucide-react';

export default function MCPPage() {
  const [activeTab, setActiveTab] = useState<'claude' | 'vscode' | 'cursor' | 'cline'>('claude');

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-blue-950/30 to-zinc-950">
      {/* Hero Section */}
      <section className="px-4 py-20 md:px-8 md:py-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            AI-Native Data Access
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your AI Can Now
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
              Query Crypto Data
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-12 max-w-3xl mx-auto">
            First institutional data provider with native AI integration. Connect Claude, ChatGPT, 
            and any MCP tool to QuantXData in 60 seconds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/appydam/quantxdata-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              Install MCP Server
            </a>
            <a
              href="#installation"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
            >
              View Documentation
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-16 md:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              icon={<Terminal className="w-8 h-8" />}
              title="Install"
              description="Run npx -y @quantxdata/mcp-server in one command. No dependencies, no setup files."
            />
            <StepCard
              number="2"
              icon={<Code className="w-8 h-8" />}
              title="Configure"
              description="Add your QuantXData API key to Claude Desktop, VS Code, Cursor, or any MCP-compatible tool settings."
            />
            <StepCard
              number="3"
              icon={<MessageSquare className="w-8 h-8" />}
              title="Ask"
              description="Query in plain English — your AI handles API calls, authentication, and data formatting automatically."
            />
          </div>
        </div>
      </section>

      {/* Example Queries */}
      <section id="examples" className="px-4 py-16 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Example Queries
          </h2>
          <p className="text-lg text-zinc-300 text-center mb-12 max-w-2xl mx-auto">
            Ask your AI assistant in natural language — no code required
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <ExampleCard
              title="Cross-Exchange Volume Analysis"
              query="Show me 24-hour trading volume for ETH/USDT across Binance, Coinbase, Kraken, OKX, and Bybit"
              result="Your AI fetches real-time volume data from all 5 exchanges and presents it in a single table."
            />
            <ExampleCard
              title="Funding Rate Monitoring"
              query="Get BTC perpetual funding rates from Binance and Deribit for the last 7 days"
              result="Track funding rate trends across exchanges to identify arbitrage opportunities."
            />
            <ExampleCard
              title="Order Book Depth Comparison"
              query="Compare SOL/USDT order book depth between Coinbase and Kraken right now"
              result="See bid-ask spreads and liquidity depth side-by-side in real time."
            />
            <ExampleCard
              title="High-Volume Token Discovery"
              query="Find all tokens on Binance with daily volume above $10 million"
              result="Filter 1,500+ trading pairs instantly based on volume, market cap, or price movement."
            />
            <ExampleCard
              title="Options Greeks Analysis"
              query="Show me delta and gamma for BTC call options expiring March 28 on Deribit"
              result="Get Greeks (delta, gamma, vega, theta) and implied volatility for any options contract."
            />
            <ExampleCard
              title="Real-Time Price Spread Tracking"
              query="What's the current bid-ask spread for BTC/USDT on Binance, Coinbase, Kraken, OKX, Bybit, Bitfinex, Gemini, Huobi, KuCoin, and Gate.io?"
              result="Monitor spreads across 10+ exchanges to identify execution quality and arbitrage gaps."
            />
          </div>
        </div>
      </section>

      {/* Supported Tools */}
      <section className="px-4 py-16 md:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Supported Tools
          </h2>
          <p className="text-lg text-zinc-300 text-center mb-12 max-w-2xl mx-auto">
            All QuantXData API endpoints are accessible via natural language
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <ToolCard
              name="get_instruments"
              description="List all supported exchanges and trading pairs (spot, futures, perpetuals, options)"
            />
            <ToolCard
              name="get_trades"
              description="Historical trade executions with microsecond timestamps, side (buy/sell), price, and quantity"
            />
            <ToolCard
              name="get_orderbooks"
              description="L1 top-of-book quotes and L2 order book snapshots with configurable depth"
            />
            <ToolCard
              name="get_ohlcv"
              description="Aggregated candle data across multiple timeframes (1m, 15m, 1h, 1d)"
            />
            <ToolCard
              name="get_multi_trades"
              description="Consolidated trade feeds from multiple exchanges in a single query"
            />
            <ToolCard
              name="get_option_quotes"
              description="Options market data including quotes, Greeks (delta, gamma, vega, theta), and implied volatility"
            />
            <ToolCard
              name="get_histoday"
              description="Daily OHLCV candles (CryptoCompare-compatible format)"
            />
            <ToolCard
              name="get_histohour"
              description="Hourly OHLCV candles for intraday analysis"
            />
            <ToolCard
              name="get_histominute"
              description="Minute-level OHLCV for high-frequency strategies"
            />
            <ToolCard
              name="get_ob_l1_top"
              description="L1 order book top (best bid/ask) with sub-millisecond precision"
            />
            <ToolCard
              name="get_ob_l2_snapshot"
              description="L2 order book snapshot with full depth (up to 100 levels)"
            />
            <ToolCard
              name="stream_realtime"
              description="Real-time market data polling (trades, quotes, order books)"
            />
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section id="installation" className="px-4 py-16 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Installation Guide
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            <TabButton
              active={activeTab === 'claude'}
              onClick={() => setActiveTab('claude')}
              label="Claude Desktop"
            />
            <TabButton
              active={activeTab === 'vscode'}
              onClick={() => setActiveTab('vscode')}
              label="VS Code"
            />
            <TabButton
              active={activeTab === 'cursor'}
              onClick={() => setActiveTab('cursor')}
              label="Cursor"
            />
            <TabButton
              active={activeTab === 'cline'}
              onClick={() => setActiveTab('cline')}
              label="Cline"
            />
          </div>

          {/* Tab Content */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            {activeTab === 'claude' && <ClaudeInstallation />}
            {activeTab === 'vscode' && <VSCodeInstallation />}
            {activeTab === 'cursor' && <CursorInstallation />}
            {activeTab === 'cline' && <ClineInstallation />}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-16 md:px-8 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Built For Your Workflow
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard
              title="For Researchers"
              benefits={[
                "No code required: Ask questions in plain English and get instant analysis. No Python notebooks, no API boilerplate.",
                "Reproducible queries: Save your prompts and rerun them anytime. Perfect for backtest iterations and strategy validation.",
                "Multi-exchange insights: Compare data across 120+ exchanges without writing integration code for each venue."
              ]}
            />
            <BenefitCard
              title="For Developers"
              benefits={[
                "60-second setup: Install with one command. No SDKs, no authentication libraries, no error handling.",
                "Zero maintenance: Updates to QuantXData APIs are handled automatically by the MCP server.",
                "Multi-tool access: Use the same data source across Claude Desktop, VS Code, Cursor, Cline, and any future MCP tool."
              ]}
            />
            <BenefitCard
              title="For Traders"
              benefits={[
                "Real-time intelligence: Monitor funding rates, order book depth, and cross-exchange spreads in real time.",
                "Cross-exchange visibility: Track arbitrage opportunities across dozens of venues without managing multiple API connections.",
                "Strategy backtesting: Query historical tick data, OHLCV candles, and options Greeks to validate trading strategies."
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Connect Your AI?
          </h2>
          <p className="text-xl text-zinc-300 mb-8">
            Install the MCP server and start querying QuantXData with natural language in 60 seconds
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/appydam/quantxdata-mcp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-semibold transition-colors"
            >
              <Github className="w-5 h-5" />
              View on GitHub
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-lg font-semibold transition-colors border border-white/20"
            >
              Get API Access
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Component: Step Card
function StepCard({ number, icon, title, description }: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition"></div>
      <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 font-bold text-xl">
            {number}
          </div>
          <div className="text-emerald-400">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

// Component: Example Card
function ExampleCard({ title, query, result }: {
  title: string;
  query: string;
  result: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-emerald-500/50 transition">
      <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
      <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 mb-4">
        <p className="text-sm text-emerald-400 font-mono">&quot;{query}&quot;</p>
      </div>
      <p className="text-sm text-zinc-400">{result}</p>
    </div>
  );
}

// Component: Tool Card
function ToolCard({ name, description }: {
  name: string;
  description: string;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-emerald-500/50 transition">
      <div className="flex items-start gap-3">
        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-mono font-semibold text-white mb-1">{name}</h4>
          <p className="text-xs text-zinc-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

// Component: Tab Button
function TabButton({ active, onClick, label }: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition ${
        active
          ? 'bg-emerald-600 text-white'
          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}

// Component: Benefit Card
function BenefitCard({ title, benefits }: {
  title: string;
  benefits: string[];
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
      <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
      <div className="space-y-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-zinc-300">{benefit}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Installation Instructions Components
function ClaudeInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 1: Install the MCP server</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-emerald-400">npx -y @quantxdata/mcp-server</code>
        </pre>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 2: Add configuration to Claude Desktop</h3>
        <p className="text-zinc-400 text-sm mb-3">
          <strong>macOS:</strong> <code className="text-emerald-400">~/Library/Application Support/Claude/claude_desktop_config.json</code><br />
          <strong>Windows:</strong> <code className="text-emerald-400">%APPDATA%\Claude\claude_desktop_config.json</code>
        </p>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-zinc-300">{`{
  "mcpServers": {
    "quantxdata": {
      "command": "npx",
      "args": ["-y", "@quantxdata/mcp-server"],
      "env": {
        "QUANTXDATA_EMAIL": "your-email@example.com",
        "QUANTXDATA_SIGNING_KEY": "your-signing-key-here"
      }
    }
  }
}`}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 3: Restart Claude Desktop</h3>
        <p className="text-zinc-400 text-sm">Close and reopen Claude Desktop to load the new MCP server configuration.</p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 4: Test with a query</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
          <code className="text-sm text-emerald-400">&quot;Get BTC/USDT price from Binance&quot;</code>
        </pre>
      </div>
    </div>
  );
}

function VSCodeInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 1: Install the MCP extension for VS Code</h3>
        <p className="text-zinc-400 text-sm">Search for &quot;MCP&quot; in the VS Code Extensions marketplace and install.</p>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 2: Add QuantXData MCP server to settings</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-zinc-300">{`{
  "mcp.servers": {
    "quantxdata": {
      "command": "npx",
      "args": ["-y", "@quantxdata/mcp-server"],
      "env": {
        "QUANTXDATA_EMAIL": "your-email@example.com",
        "QUANTXDATA_SIGNING_KEY": "your-signing-key-here"
      }
    }
  }
}`}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 3: Reload window</h3>
        <p className="text-zinc-400 text-sm">Press <code className="text-emerald-400">Cmd+Shift+P</code> → type &quot;Reload Window&quot;</p>
      </div>
    </div>
  );
}

function CursorInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 1: Open Cursor settings</h3>
        <p className="text-zinc-400 text-sm">Press <code className="text-emerald-400">Cmd+,</code> to open settings</p>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 2: Navigate to MCP Servers section</h3>
        <p className="text-zinc-400 text-sm mb-3">Find the MCP configuration area in settings</p>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 3: Add QuantXData server</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-zinc-300">{`{
  "quantxdata": {
    "command": "npx",
    "args": ["-y", "@quantxdata/mcp-server"],
    "env": {
      "QUANTXDATA_EMAIL": "your-email@example.com",
      "QUANTXDATA_SIGNING_KEY": "your-signing-key-here"
    }
  }
}`}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 4: Restart Cursor</h3>
        <p className="text-zinc-400 text-sm">Close and reopen Cursor to load the new MCP server.</p>
      </div>
    </div>
  );
}

function ClineInstallation() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 1: Install Cline extension in VS Code</h3>
        <p className="text-zinc-400 text-sm">Search for &quot;Cline&quot; in the VS Code Extensions marketplace and install.</p>
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 2: Add MCP server configuration</h3>
        <p className="text-zinc-400 text-sm mb-3">Follow the same steps as VS Code (shown in the VS Code tab)</p>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto">
          <code className="text-sm text-zinc-300">{`{
  "mcp.servers": {
    "quantxdata": {
      "command": "npx",
      "args": ["-y", "@quantxdata/mcp-server"],
      "env": {
        "QUANTXDATA_EMAIL": "your-email@example.com",
        "QUANTXDATA_SIGNING_KEY": "your-signing-key-here"
      }
    }
  }
}`}</code>
        </pre>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-3">Step 3: Use Cline chat to query QuantXData</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4">
          <code className="text-sm text-emerald-400">&quot;Fetch ETH order book from Coinbase&quot;</code>
        </pre>
      </div>
    </div>
  );
}
