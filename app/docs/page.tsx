'use client';

import { useState } from 'react';
import { Hash } from 'lucide-react';

export default function DocsPage() {
  const [activeEndpoint, setActiveEndpoint] = useState('intro');

  const endpoints = [
    { id: 'intro', name: 'Introduction' },
    { id: 'instruments', name: 'GET /instruments' },
    { id: 'trades', name: 'GET /trades' },
    { id: 'orderbooks', name: 'GET /orderbooks' },
    { id: 'trades_aggregated', name: 'GET /trades_aggregated' },
    { id: 'multi_trades', name: 'GET /multi/trades' },
    { id: 'option_quotes', name: 'GET /option_quotes' },
    { id: 'histoday', name: 'GET /data/v2/histoday' },
    { id: 'histohour', name: 'GET /data/v2/histohour' },
    { id: 'histominute', name: 'GET /data/v2/histominute' },
    { id: 'l1_top', name: 'GET /data/ob/l1/top' },
    { id: 'l2_snapshot', name: 'GET /data/v2/ob/l2/snapshot' },
    { id: 'stream', name: 'GET /stream' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        {/* Sidebar Navigation */}
        <aside className="w-64 border-r border-zinc-800 min-h-screen sticky top-0 p-6 hidden md:block">
          <h2 className="text-sm font-semibold text-zinc-400 uppercase mb-4">API Reference</h2>
          <nav className="space-y-1">
            {endpoints.map(ep => (
              <button
                key={ep.id}
                onClick={() => setActiveEndpoint(ep.id)}
                className={`block w-full text-left px-3 py-2 rounded text-sm transition ${
                  activeEndpoint === ep.id 
                    ? 'bg-emerald-500/10 text-emerald-500' 
                    : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                }`}
              >
                {ep.name}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-12 max-w-5xl">
          
          {/* Quick Start */}
          <section id="intro" className="mb-16">
            <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
            <p className="text-xl text-zinc-400 mb-8">
              Complete reference for the QuantXData REST API
            </p>

            <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">Quick Start</h3>
              <pre className="bg-zinc-950 border border-zinc-800 rounded p-4 overflow-x-auto text-sm text-zinc-300">
{`import requests

# Get list of supported exchanges and instruments
# No authentication required for /instruments
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

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Base URL</h3>
                <code className="bg-zinc-900 px-3 py-1.5 rounded text-emerald-500">
                  https://api.algohouse.ai
                </code>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Authentication</h3>
                <p className="text-zinc-400 mb-3">
                  Most endpoints require HMAC-SHA256 signing. Each request must include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-zinc-400">
                  <li><code className="text-emerald-500">signerEmail</code> - Your registered email</li>
                  <li><code className="text-emerald-500">requestTimestamp</code> - Unix timestamp in milliseconds</li>
                  <li><code className="text-emerald-500">signature</code> - HMAC-SHA256(signingKey, requestTimestamp + signerEmail)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Response Format</h3>
                <p className="text-zinc-400">
                  All responses are in <strong>space-delimited plain text</strong> format, not JSON. 
                  Each line represents one record, with fields separated by spaces.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Rate Limiting</h3>
                <p className="text-zinc-400">
                  Rate limits vary by plan. Free: 10 req/s, Starter: 50 req/s, Pro+: no limit. 
                  Exceeding limits returns HTTP 429.
                </p>
              </div>
            </div>
          </section>

          {/* Endpoint 1: GET /instruments */}
          <EndpointSection
            id="instruments"
            method="GET"
            path="/instruments"
            description="Returns list of all supported exchanges and trading instruments. No authentication required."
            params={[]}
            sampleRequest={`curl https://api.algohouse.ai/instruments`}
            sampleResponse={`binance BTC/USDT
coinbase ETH/USD
kraken BTC/EUR
deribit BTC/USD`}
            authRequired={false}
          />

          {/* Endpoint 2: GET /trades */}
          <EndpointSection
            id="trades"
            method="GET"
            path="/trades"
            description="Historical trade execution data with microsecond timestamps."
            params={[
              { name: 'ex', type: 'string', required: true, desc: 'Exchange identifier (e.g., binance)' },
              { name: 'ins', type: 'string', required: true, desc: 'Instrument/pair (e.g., BTC/USDT)' },
              { name: 'from', type: 'integer', required: true, desc: 'Start timestamp (Unix ms)' },
              { name: 'to', type: 'integer', required: true, desc: 'End timestamp (Unix ms)' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max results (default: 1000)' },
              { name: 'signerEmail', type: 'string', required: true, desc: 'Your email' },
              { name: 'requestTimestamp', type: 'integer', required: true, desc: 'Current timestamp' },
              { name: 'signature', type: 'string', required: true, desc: 'HMAC-SHA256 signature' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/trades?ex=binance&ins=BTC/USDT&from=1703001600000&to=1703005200000&limit=10&signerEmail=you@example.com&requestTimestamp=1703005200000&signature=YOUR_SIGNATURE"`}
            sampleResponse={`1703001600000 buy 42350.5 0.125
1703001601234 sell 42348.0 0.250
1703001602456 buy 42351.0 0.100`}
            authRequired={true}
          />

          {/* Endpoint 3: GET /orderbooks */}
          <EndpointSection
            id="orderbooks"
            method="GET"
            path="/orderbooks"
            description="Historical order book deltas with configurable depth."
            params={[
              { name: 'ex', type: 'string', required: true, desc: 'Exchange' },
              { name: 'ins', type: 'string', required: true, desc: 'Instrument' },
              { name: 'from', type: 'integer', required: true, desc: 'Start timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max snapshots' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/orderbooks?ex=binance&ins=BTC/USDT&from=1703001600000&limit=5&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`timestamp bids_0_price bids_0_size asks_0_price asks_0_size
1703001600000 42350.0 1.5 42351.0 2.3
1703001601000 42349.5 0.8 42351.5 1.1`}
            authRequired={true}
          />

          {/* Endpoint 4: GET /trades_aggregated */}
          <EndpointSection
            id="trades_aggregated"
            method="GET"
            path="/trades_aggregated"
            description="OHLCV candlestick data at multiple timeframes (1m, 15m, 1h, 1d)."
            params={[
              { name: 'ex', type: 'string', required: true, desc: 'Exchange' },
              { name: 'ins', type: 'string', required: true, desc: 'Instrument' },
              { name: 'from', type: 'integer', required: true, desc: 'Start timestamp' },
              { name: 'to', type: 'integer', required: true, desc: 'End timestamp' },
              { name: 'aggregation', type: 'string', required: true, desc: 'Timeframe: 1m, 15m, 1h, 1d' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max bars' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/trades_aggregated?ex=binance&ins=BTC/USDT&from=1703001600000&to=1703088000000&aggregation=1h&limit=24&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`timestamp open high low close volume trades
1703001600000 42350.0 42380.0 42340.0 42365.0 125.4 342
1703005200000 42365.0 42400.0 42360.0 42390.0 98.2 251`}
            authRequired={true}
          />

          {/* Endpoint 5: GET /multi/trades */}
          <EndpointSection
            id="multi_trades"
            method="GET"
            path="/multi/trades"
            description="Query trades across multiple exchanges simultaneously."
            params={[
              { name: 'exchanges', type: 'string', required: true, desc: 'Comma-separated exchange list' },
              { name: 'base_currencies', type: 'string', required: true, desc: 'Base assets (e.g., BTC,ETH)' },
              { name: 'quote_currencies', type: 'string', required: true, desc: 'Quote assets (e.g., USD,USDT)' },
              { name: 'from', type: 'integer', required: true, desc: 'Start timestamp' },
              { name: 'to', type: 'integer', required: true, desc: 'End timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max results per exchange' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/multi/trades?exchanges=binance,coinbase,kraken&base_currencies=BTC&quote_currencies=USD,USDT&from=1703001600000&to=1703005200000&limit=10&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`exchange timestamp side price quantity
binance 1703001600000 buy 42350.5 0.125
coinbase 1703001600100 sell 42355.0 0.200
kraken 1703001600200 buy 42348.0 0.150`}
            authRequired={true}
          />

          {/* Endpoint 6: GET /option_quotes */}
          <EndpointSection
            id="option_quotes"
            method="GET"
            path="/option_quotes"
            description="Options Greeks (delta, gamma, theta, vega) and implied volatility."
            params={[
              { name: 'ex', type: 'string', required: true, desc: 'Exchange: binance/o or deribit' },
              { name: 'ins', type: 'string', required: true, desc: 'Option contract (e.g., BTC-24FEB23-14000-P)' },
              { name: 'from', type: 'integer', required: true, desc: 'Start timestamp' },
              { name: 'to', type: 'integer', required: true, desc: 'End timestamp' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/option_quotes?ex=deribit&ins=BTC-24FEB23-14000-P&from=1703001600000&to=1703005200000&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`timestamp mark_price IV delta gamma theta vega
1703001600000 1250.5 0.65 -0.42 0.00012 -15.3 0.08
1703005200000 1268.0 0.67 -0.45 0.00011 -14.8 0.09`}
            authRequired={true}
          />

          {/* Endpoint 7-9: histoday, histohour, histominute */}
          <EndpointSection
            id="histoday"
            method="GET"
            path="/data/v2/histoday"
            description="Daily OHLCV data (CryptoCompare-compatible endpoint)."
            params={[
              { name: 'fsym', type: 'string', required: true, desc: 'From symbol (e.g., BTC)' },
              { name: 'tsym', type: 'string', required: true, desc: 'To symbol (e.g., USD)' },
              { name: 'e', type: 'string', required: true, desc: 'Exchange' },
              { name: 'aggregate', type: 'integer', required: false, desc: 'Aggregate bars (default: 1)' },
              { name: 'toTs', type: 'integer', required: false, desc: 'End timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max bars (default: 30)' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/data/v2/histoday?fsym=BTC&tsym=USD&e=binance&limit=7&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`time open high low close volumefrom volumeto
1703001600 42350.0 42500.0 42200.0 42450.0 1250.4 53125000`}
            authRequired={true}
          />

          <EndpointSection
            id="histohour"
            method="GET"
            path="/data/v2/histohour"
            description="Hourly OHLCV data (same parameters as histoday)."
            params={[
              { name: 'fsym', type: 'string', required: true, desc: 'From symbol' },
              { name: 'tsym', type: 'string', required: true, desc: 'To symbol' },
              { name: 'e', type: 'string', required: true, desc: 'Exchange' },
              { name: 'aggregate', type: 'integer', required: false, desc: 'Aggregate bars' },
              { name: 'toTs', type: 'integer', required: false, desc: 'End timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max bars' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/data/v2/histohour?fsym=BTC&tsym=USD&e=binance&limit=24&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`time open high low close volumefrom volumeto
1703001600 42350.0 42380.0 42340.0 42365.0 125.4 5315000`}
            authRequired={true}
          />

          <EndpointSection
            id="histominute"
            method="GET"
            path="/data/v2/histominute"
            description="Minute OHLCV data (same parameters as histoday)."
            params={[
              { name: 'fsym', type: 'string', required: true, desc: 'From symbol' },
              { name: 'tsym', type: 'string', required: true, desc: 'To symbol' },
              { name: 'e', type: 'string', required: true, desc: 'Exchange' },
              { name: 'aggregate', type: 'integer', required: false, desc: 'Aggregate bars' },
              { name: 'toTs', type: 'integer', required: false, desc: 'End timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max bars' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/data/v2/histominute?fsym=BTC&tsym=USD&e=binance&limit=60&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`time open high low close volumefrom volumeto
1703001600 42350.0 42352.0 42348.0 42351.0 12.5 531500`}
            authRequired={true}
          />

          {/* Endpoint 10-11: L1/L2 orderbooks */}
          <EndpointSection
            id="l1_top"
            method="GET"
            path="/data/ob/l1/top"
            description="L1 top-of-book quotes (best bid/ask)."
            params={[
              { name: 'fsym', type: 'string', required: true, desc: 'From symbol' },
              { name: 'tsym', type: 'string', required: true, desc: 'To symbol' },
              { name: 'e', type: 'string', required: true, desc: 'Exchange' },
              { name: 'toTs', type: 'integer', required: false, desc: 'End timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Max snapshots' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/data/ob/l1/top?fsym=BTC&tsym=USD&e=binance&limit=10&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`timestamp bid_price bid_size ask_price ask_size
1703001600000 42350.0 1.5 42351.0 2.3
1703001601000 42349.5 0.8 42351.5 1.1`}
            authRequired={true}
          />

          <EndpointSection
            id="l2_snapshot"
            method="GET"
            path="/data/v2/ob/l2/snapshot"
            description="L2 order book snapshots with configurable depth."
            params={[
              { name: 'fsym', type: 'string', required: true, desc: 'From symbol' },
              { name: 'tsym', type: 'string', required: true, desc: 'To symbol' },
              { name: 'e', type: 'string', required: true, desc: 'Exchange' },
              { name: 'toTs', type: 'integer', required: false, desc: 'End timestamp' },
              { name: 'limit', type: 'integer', required: false, desc: 'Depth levels (default: 10)' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/data/v2/ob/l2/snapshot?fsym=BTC&tsym=USD&e=binance&limit=5&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`timestamp bids asks
1703001600000 [[42350.0,1.5],[42349.0,2.1]] [[42351.0,2.3],[42352.0,1.8]]`}
            authRequired={true}
          />

          {/* Endpoint 12: GET /stream */}
          <EndpointSection
            id="stream"
            method="GET"
            path="/stream"
            description="Real-time Server-Sent Events (SSE) stream for trades and order book updates."
            params={[
              { name: 'ex', type: 'string', required: true, desc: 'Exchange' },
              { name: 'ins', type: 'string', required: true, desc: 'Instrument' },
              { name: 'stream_time', type: 'integer', required: true, desc: 'Duration in seconds (1-120)' },
            ]}
            sampleRequest={`curl "https://api.algohouse.ai/stream?ex=binance&ins=BTC/USDT&stream_time=60&signerEmail=...&requestTimestamp=...&signature=..."`}
            sampleResponse={`! 1703001600000 buy 42350.5 0.125
$ 1703001600100 42350.0 1.5 42351.0 2.3
! 1703001600200 sell 42348.0 0.250
# heartbeat`}
            note="Response format: ! = trade, $ = orderbook update, # = comment/heartbeat"
            authRequired={true}
          />

        </main>
      </div>
    </div>
  );
}

interface EndpointSectionProps {
  id: string;
  method: string;
  path: string;
  description: string;
  params: { name: string; type: string; required: boolean; desc: string }[];
  sampleRequest: string;
  sampleResponse: string;
  authRequired: boolean;
  note?: string;
}

function EndpointSection({ id, method, path, description, params, sampleRequest, sampleResponse, authRequired, note }: EndpointSectionProps) {
  return (
    <section id={id} className="mb-16 scroll-mt-8">
      <div className="flex items-center gap-3 mb-4">
        <Hash className="w-5 h-5 text-zinc-600" />
        <h2 className="text-2xl font-bold">
          <span className="text-emerald-500">{method}</span> {path}
        </h2>
      </div>
      
      <p className="text-zinc-400 mb-6">{description}</p>

      {authRequired && (
        <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg px-4 py-2 mb-6 text-sm text-orange-400">
          <strong>Authentication required</strong> — Include signerEmail, requestTimestamp, and signature parameters
        </div>
      )}

      {params.length > 0 && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Parameters</h3>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-zinc-900">
                <tr className="text-left text-xs text-zinc-400 uppercase">
                  <th className="px-4 py-3">Parameter</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Required</th>
                  <th className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {params.map((param, i) => (
                  <tr key={i} className="border-t border-zinc-800">
                    <td className="px-4 py-3">
                      <code className="text-emerald-500">{param.name}</code>
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-500">{param.type}</td>
                    <td className="px-4 py-3 text-sm">
                      {param.required ? (
                        <span className="text-red-400">Yes</span>
                      ) : (
                        <span className="text-zinc-600">No</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-zinc-400">{param.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Sample Request</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto text-xs text-zinc-300">
          {sampleRequest}
        </pre>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Sample Response</h3>
        <pre className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 overflow-x-auto text-xs text-zinc-300">
          {sampleResponse}
        </pre>
        {note && (
          <p className="text-xs text-zinc-500 mt-2 italic">{note}</p>
        )}
      </div>
    </section>
  );
}
