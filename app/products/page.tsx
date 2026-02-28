import { Database, TrendingUp, BarChart3, Layers, Globe, Radio } from 'lucide-react';

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            The Data Behind Modern Trading
          </h1>
          <p className="text-xl text-zinc-400">
            Institutional-grade market data from 120+ exchanges. Built for systematic traders, quant researchers, and fintech developers.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          
          {/* Product 1: Trades Data */}
          <ProductCard
            icon={<TrendingUp className="w-8 h-8 text-emerald-500" />}
            title="Trades Data"
            endpoint="/trades"
            description="Real-time and historical trade execution data with microsecond-precision timestamps. Capture every trade, every exchange, with complete fill information including price, size, side, and unique trade IDs. Perfect for backtesting systematic strategies and analyzing execution quality."
            useCases={[
              "Backtest algorithmic trading strategies with tick-level accuracy",
              "Analyze price discovery and market microstructure",
              "Train ML models on complete execution history"
            ]}
            params={[
              { name: "ex", type: "string", required: true, desc: "Exchange identifier (e.g. binance, coinbase)" },
              { name: "ins", type: "string", required: true, desc: "Instrument/pair (e.g. BTC/USD)" },
              { name: "from", type: "timestamp", required: true, desc: "Start time (Unix ms)" },
              { name: "to", type: "timestamp", required: true, desc: "End time (Unix ms)" },
              { name: "limit", type: "integer", required: false, desc: "Max results (default: 1000)" }
            ]}
            sampleResponse="1703001600000 buy 42350.5 0.125\n1703001601234 sell 42348.0 0.250\n1703001602456 buy 42351.0 0.100"
          />

          {/* Product 2: Order Books */}
          <ProductCard
            icon={<Layers className="w-8 h-8 text-blue-500" />}
            title="Order Books"
            endpoint="/orderbooks, /data/ob/l1/top, /data/v2/ob/l2/snapshot"
            description="L1 top-of-book quotes and L2 order book snapshots with configurable depth. Track liquidity distribution, identify support/resistance levels, and monitor market depth in real-time. Sub-second snapshot frequency ensures you never miss a critical market shift."
            useCases={[
              "Monitor liquidity depth and identify thin order books",
              "Detect large order placements and market manipulation",
              "Calculate bid-ask spreads and slippage estimates"
            ]}
            params={[
              { name: "ex / e", type: "string", required: true, desc: "Exchange" },
              { name: "ins / fsym,tsym", type: "string", required: true, desc: "Instrument or base/quote symbols" },
              { name: "from / toTs", type: "timestamp", required: true, desc: "Timestamp" },
              { name: "limit / depth", type: "integer", required: false, desc: "Number of snapshots or depth levels" }
            ]}
            sampleResponse="timestamp bids_0_price bids_0_size asks_0_price asks_0_size\n1703001600000 42350.0 1.5 42351.0 2.3\n1703001601000 42349.5 0.8 42351.5 1.1"
          />

          {/* Product 3: OHLCV Aggregated */}
          <ProductCard
            icon={<BarChart3 className="w-8 h-8 text-purple-500" />}
            title="OHLCV Aggregated"
            endpoint="/trades_aggregated"
            description="Candlestick data aggregated at multiple timeframes: 1m, 15m, 1h, 1d. Pre-processed OHLCV bars with volume and trade count. Ideal for charting, backtesting bar-based strategies, and historical analysis."
            useCases={[
              "Build trading charts and technical indicators",
              "Backtest strategies on bar data without processing tick data",
              "Analyze long-term price trends and volatility"
            ]}
            params={[
              { name: "ex", type: "string", required: true, desc: "Exchange" },
              { name: "ins", type: "string", required: true, desc: "Instrument" },
              { name: "from", type: "timestamp", required: true, desc: "Start time" },
              { name: "to", type: "timestamp", required: true, desc: "End time" },
              { name: "aggregation", type: "string", required: true, desc: "Timeframe: 1m, 15m, 1h, 1d" },
              { name: "limit", type: "integer", required: false, desc: "Max bars" }
            ]}
            sampleResponse="timestamp open high low close volume trades\n1703001600000 42350.0 42380.0 42340.0 42365.0 125.4 342\n1703005200000 42365.0 42400.0 42360.0 42390.0 98.2 251"
          />

          {/* Product 4: Options Data */}
          <ProductCard
            icon={<Database className="w-8 h-8 text-orange-500" />}
            title="Options Data"
            endpoint="/option_quotes"
            description="Options Greeks (delta, gamma, theta, vega), implied volatility, and quote snapshots for BTC and ETH options on Binance and Deribit. Essential for volatility trading, hedging strategies, and risk management."
            useCases={[
              "Price options using Black-Scholes or custom models",
              "Hedge delta exposure in spot or futures positions",
              "Analyze implied volatility surfaces and skew"
            ]}
            params={[
              { name: "ex", type: "string", required: true, desc: "Exchange: binance/o or deribit" },
              { name: "ins", type: "string", required: true, desc: "Option contract (e.g. BTC-24FEB23-14000-P)" },
              { name: "from", type: "timestamp", required: true, desc: "Start time" },
              { name: "to", type: "timestamp", required: true, desc: "End time" }
            ]}
            sampleResponse="timestamp mark_price IV delta gamma theta vega\n1703001600000 1250.5 0.65 -0.42 0.00012 -15.3 0.08\n1703005200000 1268.0 0.67 -0.45 0.00011 -14.8 0.09"
          />

          {/* Product 5: Multi-Exchange */}
          <ProductCard
            icon={<Globe className="w-8 h-8 text-cyan-500" />}
            title="Multi-Exchange"
            endpoint="/multi/trades"
            description="Query trade data across multiple exchanges simultaneously. Aggregate liquidity, detect arbitrage opportunities, and analyze cross-exchange price divergence with a single API call."
            useCases={[
              "Identify arbitrage opportunities across venues",
              "Calculate volume-weighted average prices across exchanges",
              "Monitor cross-exchange spreads and liquidity"
            ]}
            params={[
              { name: "exchanges", type: "string[]", required: true, desc: "Comma-separated exchange list" },
              { name: "base_currencies", type: "string[]", required: true, desc: "Base assets (e.g. BTC,ETH)" },
              { name: "quote_currencies", type: "string[]", required: true, desc: "Quote assets (e.g. USD,USDT)" },
              { name: "from", type: "timestamp", required: true, desc: "Start time" },
              { name: "to", type: "timestamp", required: true, desc: "End time" },
              { name: "limit", type: "integer", required: false, desc: "Max results per exchange" }
            ]}
            sampleResponse="exchange timestamp side price quantity\nbinance 1703001600000 buy 42350.5 0.125\ncoinbase 1703001600100 sell 42355.0 0.200\nkraken 1703001600200 buy 42348.0 0.150"
          />

          {/* Product 6: Real-Time Streaming */}
          <ProductCard
            icon={<Radio className="w-8 h-8 text-pink-500" />}
            title="Real-Time Streaming"
            endpoint="/stream"
            description="Server-Sent Events (SSE) stream for real-time trade and order book updates. Subscribe to live market data with sub-second latency. Stream duration up to 120 seconds per connection."
            useCases={[
              "Build live trading dashboards and monitoring tools",
              "Execute high-frequency trading strategies",
              "Alert on specific market conditions in real-time"
            ]}
            params={[
              { name: "ex", type: "string", required: true, desc: "Exchange" },
              { name: "ins", type: "string", required: true, desc: "Instrument" },
              { name: "stream_time", type: "integer", required: true, desc: "Duration in seconds (1-120)" }
            ]}
            sampleResponse="! 1703001600000 buy 42350.5 0.125\n$ 1703001600100 42350.0 1.5 42351.0 2.3\n! 1703001600200 sell 42348.0 0.250\n# heartbeat"
            note="Response format: ! = trade, $ = orderbook update, # = comment/heartbeat"
          />

        </div>
      </section>

      {/* Supported Exchanges */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Supported Exchanges</h2>
          <p className="text-lg text-zinc-400 mb-8">
            Pre-normalized data from the world's leading cryptocurrency exchanges
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {['Binance', 'Coinbase', 'Kraken', 'Deribit', 'OKX', 'Bybit', 'Bitfinex', 'Bitstamp'].map(ex => (
              <span key={ex} className="px-4 py-2 bg-zinc-800/50 rounded-lg border border-zinc-700 text-sm">
                {ex}
              </span>
            ))}
          </div>
          <p className="text-sm text-zinc-500">+ 112 more exchanges</p>
        </div>
      </section>

      {/* Code Sample */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Quick Start</h2>
          <p className="text-center text-zinc-400 mb-8">
            Get started in minutes with our public <code className="text-emerald-500">/instruments</code> endpoint (no auth required)
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
            <pre className="text-sm text-zinc-300 overflow-x-auto">
{`import requests

# Get list of supported exchanges and instruments
response = requests.get('https://api.algohouse.ai/instruments')

for line in response.text.strip().split('\\n'):
    exchange, instrument = line.split()
    print(f"{exchange:15} {instrument}")

# Output example:
# binance         BTC/USDT
# coinbase        ETH/USD
# kraken          BTC/EUR`}
            </pre>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Build?</h2>
          <p className="text-xl text-zinc-400 mb-8">
            Start with a free 30-day trial. No credit card required.
          </p>
          <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-lg font-semibold text-lg transition">
            Request API Access
          </button>
        </div>
      </section>
    </div>
  );
}

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  endpoint: string;
  description: string;
  useCases: string[];
  params: { name: string; type: string; required: boolean; desc: string }[];
  sampleResponse: string;
  note?: string;
}

function ProductCard({ icon, title, endpoint, description, useCases, params, sampleResponse, note }: ProductCardProps) {
  return (
    <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-8 hover:border-zinc-700 transition">
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-zinc-800/50 rounded-lg">
          {icon}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <code className="text-sm text-zinc-500">{endpoint}</code>
        </div>
      </div>
      
      <p className="text-zinc-300 mb-6 leading-relaxed">
        {description}
      </p>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-zinc-400 uppercase mb-3">Key Use Cases</h4>
        <ul className="space-y-2">
          {useCases.map((use, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-zinc-400">
              <span className="text-emerald-500 mt-1">•</span>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="text-sm font-semibold text-zinc-400 uppercase mb-3">Parameters</h4>
        <div className="space-y-2 text-xs">
          {params.map((param, i) => (
            <div key={i} className="flex gap-3 py-2 border-b border-zinc-800/50">
              <code className="text-emerald-500 w-32 flex-shrink-0">
                {param.name}
                {param.required && <span className="text-red-400 ml-1">*</span>}
              </code>
              <span className="text-zinc-500 w-20 flex-shrink-0">{param.type}</span>
              <span className="text-zinc-400">{param.desc}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-sm font-semibold text-zinc-400 uppercase mb-3">Sample Response</h4>
        <pre className="bg-zinc-950 border border-zinc-800 rounded p-3 text-xs text-zinc-400 overflow-x-auto">
          {sampleResponse}
        </pre>
        {note && (
          <p className="text-xs text-zinc-500 mt-2 italic">{note}</p>
        )}
      </div>
    </div>
  );
}
