# QuantXData Landing Page

Institutional-grade cryptocurrency market data for quant traders, hedge funds, and fintech developers.

## Stack

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **Lucide React** for icons

## Pages

1. **/** — Homepage with hero, stats, products grid, methodology
2. **/products** — 6 data products with full technical specifications
3. **/pricing** — 4 pricing tiers with comparison table and API cost calculator
4. **/docs** — Complete API documentation (12 endpoints)
5. **/about** — Mission, team, and company timeline
6. **/contact** — Sales contact form and direct email addresses

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
```

## Deploy

### Vercel (Recommended)

```bash
npx vercel --prod
```

Or connect the GitHub repo to your Vercel dashboard for automatic deployments.

### Manual Deployment

The project is configured for Vercel (`vercel.json` included). For other platforms, ensure you:

1. Run `npm run build`
2. Serve the `.next` directory
3. Set environment variables if needed

## Repository

https://github.com/appydam/quantxdata-landing

## License

Proprietary - All rights reserved
