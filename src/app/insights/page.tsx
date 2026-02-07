import Link from "next/link";
import { ArrowLeft, FileText, Folder, Search, Monitor, HardDrive, ChevronRight, FileCode, FileSpreadsheet } from "lucide-react";

export const metadata = {
    title: "Insights (Knowledge Base) | Operational Opener",
    description: "業務自動化の持続可能性、AI活用、仕様書管理に関する知見データベース。",
};

export default function InsightsPage() {
    const articles = [
        {
            slug: "power-automate-specification-ai",
            filename: "20260201_AI_Spec_Generation_Guide.pdf",
            title: "【最新TIPS】Power Automate仕様書作成とAI活用の限界",
            type: "PDF Document",
            size: "2.4 MB",
            date: "2026/02/01 10:00",
            icon: FileText,
            color: "text-red-500"
        },
        {
            slug: "#", // Placeholder
            filename: "SharePoint_List_Design_Pattern_v2.xlsx",
            title: "【設計】壊れないSharePointリスト設計のベストプラクティス",
            type: "Excel Sheet",
            size: "1.8 MB",
            date: "2026/01/28 14:30",
            icon: FileSpreadsheet,
            color: "text-green-600"
        },
        {
            slug: "#", // Placeholder
            filename: "LLM_Operational_Optimization.pptx",
            title: "【教育】LLM時代の業務オペレーション最適化とは",
            type: "PowerPoint",
            size: "5.1 MB",
            date: "2026/01/15 09:15",
            icon: Monitor,
            color: "text-orange-500"
        },
        {
            slug: "#",
            filename: "RPA_vs_PowerAutomate_Comparison.html",
            title: "【比較】従来型RPAとPower Automateクラウドフローの決定的な違い",
            type: "HTML File",
            size: "15 KB",
            date: "2025/12/20 18:45",
            icon: FileCode,
            color: "text-blue-500"
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

                    {/* Sidebar (Tree View) */}
                    <div className="w-64 border-r border-gray-200 p-2 bg-[#F9FAFB] hidden md:block overflow-y-auto">
                        <div className="text-sm">
                            <div className="flex items-center gap-1 px-2 py-1 hover:bg-blue-100 cursor-pointer text-gray-700">
                                <ChevronRight size={12} className="text-gray-400" />
                                <Monitor size={14} />
                                <span>Desktop</span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 hover:bg-blue-100 cursor-pointer text-gray-700">
                                <ChevronRight size={12} className="rotate-90 text-gray-600" />
                                <HardDrive size={14} />
                                <span>Local Disk (D:)</span>
                            </div>
                            <div className="pl-6">
                                <div className="flex items-center gap-1 px-2 py-1 bg-blue-100 border border-blue-200 rounded-sm cursor-pointer text-gray-800 font-medium">
                                    <Folder size={14} className="text-yellow-500" />
                                    <span>Insights & Knowledge</span>
                                </div>
                                <div className="pl-6 flex flex-col gap-0.5 mt-1 border-l border-gray-200 ml-2">
                                    <div className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-sm cursor-pointer text-gray-600">
                                        <Folder size={14} className="text-yellow-500" />
                                        <span>Methodology</span>
                                    </div>
                                    <div className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-sm cursor-pointer text-gray-600">
                                        <Folder size={14} className="text-yellow-500" />
                                        <span>Comparison</span>
                                    </div>
                                    <div className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded-sm cursor-pointer text-gray-600">
                                        <Folder size={14} className="text-yellow-500" />
                                        <span>Education</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main View (File List) */}
                    <div className="flex-1 overflow-y-auto bg-white">
                        <table className="w-full text-sm text-left border-collapse">
                            <thead className="bg-white sticky top-0 z-10">
                                <tr className="text-gray-500 border-b border-gray-200 select-none">
                                    <th className="font-normal px-4 py-2 border-r border-gray-200 hover:bg-gray-100 w-[40%]">Name</th>
                                    <th className="font-normal px-4 py-2 border-r border-gray-200 hover:bg-gray-100 w-[20%]">Date modified</th>
                                    <th className="font-normal px-4 py-2 border-r border-gray-200 hover:bg-gray-100 w-[20%]">Type</th>
                                    <th className="font-normal px-4 py-2 hover:bg-gray-100 w-[20%]">Size</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-700">
                                {articles.map((article, i) => (
                                    <tr key={i} className="hover:bg-blue-50 group cursor-pointer transition-colors border-b border-gray-50">
                                        <td className="px-4 py-2">
                                            <Link href={`/insights/${article.slug}`} className="flex items-center gap-3">
                                                <article.icon size={18} className={article.color} />
                                                <div className="flex flex-col">
                                                    <span className="font-medium text-gray-800 group-hover:text-blue-700">{article.filename}</span>
                                                    <span className="text-xs text-gray-400 md:hidden">{article.title}</span>
                                                    <span className="text-xs text-gray-500 hidden md:block">{article.title}</span>
                                                </div>
                                            </Link>
                                        </td>
                                        <td className="px-4 py-2 text-gray-500">{article.date}</td>
                                        <td className="px-4 py-2 text-gray-500">{article.type}</td>
                                        <td className="px-4 py-2 text-gray-500 font-mono text-xs">{article.size}</td>
                                    </tr>
                                ))}
                                {/* Empty rows filler */}
                                {[...Array(5)].map((_, i) => (
                                    <tr key={`empty-${i}`} className="h-10">
                                        <td className="px-4 border-b border-gray-50"></td>
                                        <td className="px-4 border-b border-gray-50"></td>
                                        <td className="px-4 border-b border-gray-50"></td>
                                        <td className="px-4 border-b border-gray-50"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
