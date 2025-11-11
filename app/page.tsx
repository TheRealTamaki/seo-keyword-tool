export default function Home() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to SEO Keyword Tool</h1>
        <p className="text-lg text-muted-foreground">
          Personal SEO Keyword Research & Rank Tracking Tool
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2">🔍 Rank Tracking</h2>
          <p className="text-muted-foreground mb-4">
            Track your keyword rankings across Google, Bing, and YouTube in real-time.
          </p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Get Started
          </button>
        </div>

        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2">🎯 Keyword Research</h2>
          <p className="text-muted-foreground mb-4">
            Discover high-value keywords with volume, difficulty, and CPC data.
          </p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Get Started
          </button>
        </div>

        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2">📊 Competitor Analysis</h2>
          <p className="text-muted-foreground mb-4">
            Analyze competitors, find keyword gaps, and identify growth opportunities.
          </p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Get Started
          </button>
        </div>

        <div className="p-6 border border-border rounded-lg hover:shadow-lg transition-shadow">
          <h2 className="text-2xl font-bold mb-2">📈 Dashboard</h2>
          <p className="text-muted-foreground mb-4">
            View comprehensive analytics and generate detailed reports.
          </p>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
            Get Started
          </button>
        </div>
      </div>

      <div className="mt-12 p-6 bg-muted rounded-lg">
        <h3 className="text-lg font-bold mb-2">🚀 Getting Started</h3>
        <p className="text-muted-foreground mb-4">
          This application is currently under development. Check back soon for full functionality.
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
          <li>Phase 1: MVP (Weeks 1-3) - Rank tracking and basic dashboard</li>
          <li>Phase 2: Keyword Research (Weeks 4-6) - Discovery and analysis tools</li>
          <li>Phase 3: Competitor Analysis (Weeks 7-9) - Gap analysis and benchmarking</li>
          <li>Phase 4: Reporting & Polish (Weeks 10-12) - Reports and optimization</li>
        </ul>
      </div>
    </div>
  )
}
