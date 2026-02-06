import Link from "next/link";
import { Search, Filter, Lightbulb, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Insights | Operational Opener",
    description: "業務自動化の持続可能性、AI活用、仕様書管理に関する知見。",
};

export default function InsightsPage() {
    const articles = [
        {
            slug: "power-automate-specification-ai",
            title: "Power Automateの仕様書をAIで作成する最新TIPS（2026年版）",
            description: "Copilot活用と限界。なぜ「専門ツール」が必要になるのか、現場で起きる属人化の構造問題を解説します。",
            category: "Methodology",
            date: "2026.02.01",
            icon: Lightbulb,
            color: "bg-yellow-500"
        },
        // Future articles would go here
    ];

    return (
        <div className="container max-w-5xl mx-auto px-4 py-8">
            {/* Page Header styled like Power Automate list header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Insights</h1>
                    <p className="text-gray-500 text-sm mt-1">業務自動化の「維持・管理」に関する知見とTIPS</p>
                </div>
                <div className="flex gap-2">
                    <button className="px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 shadow-sm flex items-center gap-2">
                        <Filter size={16} /> Filter
                    </button>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input
                            type="text"
                            placeholder="Search insights..."
                            className="pl-9 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 w-64 shadow-sm"
                        />
                    </div>
                </div>
            </div>

            {/* Article Grid - Looking like Flow List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                    <Link
                        key={article.slug}
                        href={`/insights/${article.slug}`}
                        className="group block bg-white rounded-lg border border-card-border shadow-sm hover:shadow-md hover:border-brand-blue/50 transition-all duration-200 overflow-hidden"
                    >
                        {/* Top Color Line */}
                        <div className="h-1 bg-gradient-to-r from-gray-200 to-gray-100 group-hover:from-brand-blue group-hover:to-brand-light transition-colors" />

                        <div className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-2 rounded-md ${article.color} text-white shadow-sm`}>
                                    <article.icon size={20} />
                                </div>
                                <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                    {article.category}
                                </span>
                            </div>

                            <h2 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                                {article.description}
                            </p>

                            <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50">
                                <span>{article.date}</span>
                                <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform text-brand-blue font-medium">
                                    Read more <ArrowRight size={14} />
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}

                {/* Placeholder for "Coming Soon" styling */}
                <div className="bg-gray-50 rounded-lg border border-dashed border-gray-300 p-6 flex flex-col items-center justify-center text-center opacity-75">
                    <div className="p-3 bg-gray-200 rounded-full text-gray-400 mb-3">
                        <Lightbulb size={24} />
                    </div>
                    <h3 className="font-semibold text-gray-600">More Insights Coming Soon</h3>
                    <p className="text-xs text-gray-400 mt-1 max-w-xs">
                        SharePoint設計、業務継続性計画など、順次公開予定です。
                    </p>
                </div>
            </div>
        </div>
    );
}
