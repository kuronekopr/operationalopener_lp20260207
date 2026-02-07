import Link from "next/link";
import { ArrowLeft, FileText, Folder, Search, Monitor, HardDrive, ChevronRight, FileCode, FileSpreadsheet, Lightbulb, ArrowRight, TabletSmartphone } from "lucide-react";

export const metadata = {
    title: "Insights (Knowledge Base) | Operational Opener",
    description: "業務自動化の持続可能性、AI活用、仕様書管理に関する知見データベース。",
};

export default function InsightsPage() {
    const articles = [
        {
            slug: "power-automate-spec-ai-automation",
            title: "【2026年最新】Power Automate仕様書作成：AI活用TIPSと「構造化解析」の決定的な違い",
            description: "Copilot、JSON解析、Mermaid、Word Agent。2026年の最新AI活用手法4選と、それでも残る「属人化リスク」への決定解を徹底解説。",
            date: "2026.02.01",
            category: "Methodology",
            badgeColor: "bg-blue-100 text-blue-800",
            readTime: "12 min read",
            icon: FileText,
            color: "text-blue-500"
        },
        {
            slug: "sharepoint-list-design-best-practices",
            title: "【脱Excel】失敗しないSharePointリスト設計：3つの鉄則とデータ資産化",
            description: "「Excel感覚で作ると失敗する」SharePointリスト。5000件問題、委任警告、権限管理の泥沼を回避し、Power Automate連携を前提とした堅牢な設計手法を公開。",
            date: "2026.01.28",
            category: "Methodology",
            badgeColor: "bg-green-100 text-green-800",
            readTime: "10 min read",
            icon: FileSpreadsheet,
            color: "text-green-600"
        },
        {
            slug: "power-apps-spec-ai-automation",
            title: "【2026年最新】Power Apps仕様書作成：AI活用TIPSと「構造化解析」の決定的な違い",
            description: "PAC CLIによるYAML解析、Copilotでのドキュメント化。複雑化するCanvasアプリの仕様書作成を「ソースコードレベル」で自動化する最新手法。",
            date: "2026.02.01",
            category: "Methodology",
            badgeColor: "bg-fuchsia-100 text-fuchsia-800",
            readTime: "12 min read",
            icon: TabletSmartphone,
            color: "text-fuchsia-600"
        },
        {
            slug: "power-automate-desktop-spec-ai-automation",
            title: "【2026年最新】Power Automate Desktop(PAD)仕様書作成：AI活用TIPSと「構造化解析」",
            description: "Copilotの概要生成、Robinスクリプト解析、セレクター解読。2026年のPAD仕様書作成術と、デスクトップフロー特有の属人化を防ぐ「完全自動化」のアプローチ。",
            date: "2026.02.01",
            category: "Methodology",
            badgeColor: "bg-gray-100 text-gray-800",
            readTime: "10 min read",
            icon: Monitor,
            color: "text-gray-600"
        }
    ];

    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-[#E5E7EB]">
            {/* Window Container */}
            <div className="w-full max-w-5xl legacy-window flex flex-col h-[800px] bg-[#F3F4F6]">
                {/* Title Bar - Brand Navy */}
                <div className="bg-[#1E3A8A] text-white px-3 py-1.5 flex items-center justify-between select-none shadow-sm">
                    <div className="flex items-center gap-2">
                        <HardDrive size={16} />
                        <span className="font-bold text-sm tracking-wide">Knowledge_Base (D:)</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Link href="/" className="p-1 hover:bg-white/10 rounded-sm text-white/80 hover:text-white transition-colors" aria-label="Back">
                            <ArrowLeft size={14} />
                        </Link>
                    </div>
                </div>

                {/* Menu Bar */}
                <div className="bg-[#E5E7EB] border-b border-gray-400 px-2 py-1 flex items-center gap-4 text-sm text-gray-700 select-none shadow-sm">
                    <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-default">File</span>
                    <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-default">Home</span>
                    <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-default">Share</span>
                    <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-default">View</span>
                </div>

                {/* Address Bar Simulation */}
                <div className="bg-white border-b border-gray-300 p-2 flex items-center gap-2">
                    <div className="flex items-center gap-2 text-gray-500 px-2">
                        <ArrowLeft size={16} className="text-gray-300" />
                        <ArrowLeft size={16} className="rotate-180 text-gray-700 cursor-pointer hover:bg-gray-100 rounded" />
                    </div>
                    <div className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm text-gray-600 flex items-center gap-2 bg-white">
                        <Folder size={14} className="text-yellow-500" />
                        <span>This PC &gt; Local Disk (D:) &gt; Insights & Knowledge</span>
                    </div>
                    <div className="w-64 border border-gray-300 rounded px-2 py-1 text-sm bg-white flex items-center">
                        <Search size={14} className="text-gray-400 mr-2" />
                        <span className="text-gray-400">Search Insights</span>
                    </div>
                </div>

                {/* Content (Split View: Sidebar + Main) */}
                <div className="flex-1 flex overflow-hidden bg-white">

                    {/* Sidebar (Blog Categories) */}
                    <div className="w-64 border-r border-gray-200 p-4 bg-[#F9FAFB] hidden md:block overflow-y-auto">
                        <h3 className="font-bold text-gray-700 mb-4 px-2">Categories</h3>
                        <nav className="space-y-1">
                            <div className="flex items-center gap-2 px-3 py-2 bg-blue-100 text-blue-800 rounded-md font-medium cursor-pointer">
                                <Folder size={16} />
                                <span>All Insights</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                                <FileCode size={16} className="text-gray-400" />
                                <span>Methodology</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                                <Monitor size={16} className="text-gray-400" />
                                <span>Comparison</span>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-2 text-gray-600 hover:bg-gray-100 rounded-md cursor-pointer transition-colors">
                                <Lightbulb size={16} className="text-gray-400" />
                                <span>Education</span>
                            </div>
                        </nav>

                        <div className="mt-8 border-t border-gray-200 pt-6 px-2">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tags</h4>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">#PowerAutomate</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">#SharePoint</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">#RPA</span>
                                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full border border-gray-200">#DX</span>
                            </div>
                        </div>
                    </div>

                    {/* Main View (Blog List) */}
                    <div className="flex-1 overflow-y-auto bg-white p-6 md:p-10">
                        <div className="max-w-3xl mx-auto space-y-8">

                            {articles.map((article, i) => (
                                <Link key={i} href={`/insights/${article.slug}`} className="block group">
                                    <article className="border border-gray-200 rounded-lg p-6 hover:shadow-md hover:border-blue-300 transition-all bg-white relative overflow-hidden">
                                        <div className="absolute top-0 left-0 w-1 h-full bg-gray-200 group-hover:bg-blue-500 transition-colors"></div>

                                        <div className="pl-4">
                                            <div className="flex items-center gap-3 mb-3 text-sm">
                                                <span className={`px-2 py-0.5 rounded text-xs font-bold ${article.badgeColor} border`}>
                                                    {article.category}
                                                </span>
                                                <span className="text-gray-500">{article.date}</span>
                                            </div>

                                            <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors flex items-center gap-2">
                                                {article.title}
                                                <ArrowRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                                            </h2>

                                            <p className="text-gray-600 leading-relaxed mb-4">
                                                {article.description}
                                            </p>

                                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                                <div className="flex items-center gap-1">
                                                    <article.icon size={14} className={article.color} />
                                                    <span>{article.readTime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}

                            {/* Coming Soon */}
                            <div className="text-center py-12 border-t border-gray-100">
                                <p className="text-gray-400 text-sm">More insights are being processed...</p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Status Bar */}
                <div className="bg-[#E5E7EB] border-t border-gray-300 px-2 py-1 flex justify-between text-xs text-gray-600 font-mono">
                    <span className="flex items-center gap-2">
                        4 items
                    </span>
                    <div className="flex gap-4">
                        <span className="hidden md:inline">1 item selected</span>
                        <span>9.3 MB</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
