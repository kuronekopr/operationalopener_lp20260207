import Link from "next/link";
import { ArrowLeft, FileText, Database, Shield, CheckCheck, Coins, Settings, Check } from "lucide-react";

export const metadata = {
    title: "Program Details | Operational Opener",
    description: "業務自動化のブラックボックス解消プログラムの詳細。",
};

export default function ProgramPage() {
    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-[#E5E7EB]">
            {/* Main App Container */}
            <div className="w-full max-w-5xl legacy-window flex flex-col min-h-[800px] bg-[#F3F4F6]">

                {/* Window Title Bar */}
                <div className="bg-[#1E3A8A] text-white px-3 py-1.5 flex items-center justify-between select-none shadow-sm">
                    <div className="flex items-center gap-2">
                        <Settings size={16} />
                        <span className="font-bold text-sm tracking-wide">Operational Continuity Program.exe</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Link href="/" className="p-1 hover:bg-white/10 rounded-sm text-white/80 hover:text-white transition-colors" aria-label="Back">
                            <ArrowLeft size={14} />
                        </Link>
                    </div>
                </div>

                {/* Menu Bar (Tabs visual) */}
                <div className="bg-[#E5E7EB] border-b border-gray-400 px-2 pt-2 flex gap-1 text-sm text-gray-700 select-none overflow-x-auto">
                    <div className="px-6 py-2 bg-white border-t border-l border-r border-gray-400 rounded-t font-bold text-[#1E3A8A] relative -mb-[1px] z-10">
                        Overview
                    </div>
                    <div className="px-6 py-2 bg-[#D1D5DB] border-t border-l border-r border-gray-400 rounded-t text-gray-500 hover:bg-gray-200 cursor-not-allowed opacity-70">
                        Details (Locked)
                    </div>
                </div>

                {/* Content Area */}
                <div className="flex-1 bg-white p-8 md:p-12 overflow-y-auto">

                    {/* Header Section */}
                    <div className="mb-12 border-b border-gray-200 pb-8">
                        <h1 className="text-3xl font-bold text-[#1F2937] mb-6">Operational Continuity Program</h1>
                        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
                            属人化した自動化フローを「組織の資産」に変換するための、包括的なコンサルティング・実装支援プログラムです。<br />
                            現状のブラックボックス解析から、仕様書の作成、そして将来にわたる変更管理の仕組み構築までを一気通貫で提供します。
                        </p>
                    </div>

                    {/* Three Pillars Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        {/* Pillar 1 */}
                        <div className="p-6 bg-gray-50 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-blue-500 rounded-t opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-12 h-12 bg-blue-100 text-[#1E3A8A] rounded flex items-center justify-center mb-4">
                                <FileText size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">1. Documentation</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 h-20">
                                既存のPower Automateフローを解析し、人間が理解できる「業務仕様書」として再構築します。
                                ロジックの意図、例外処理、依存関係を明確化します。
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> フロー構造図の作成</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> 変数定義書</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-blue-600" /> エラーハンドリング仕様</li>
                            </ul>
                        </div>

                        {/* Pillar 2 */}
                        <div className="p-6 bg-gray-50 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-teal-500 rounded-t opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-12 h-12 bg-teal-100 text-teal-800 rounded flex items-center justify-center mb-4">
                                <Database size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">2. Standardization</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 h-20">
                                「誰が作っても同じ品質」になるよう、開発ルールを策定します。
                                命名規則、フォルダ構成、共通部品の利用ガイドラインを整備します。
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} className="text-teal-600" /> 命名規則ガイドライン</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-teal-600" /> SharePoint設計パターン</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-teal-600" /> 権限設定基準</li>
                            </ul>
                        </div>

                        {/* Pillar 3 */}
                        <div className="p-6 bg-gray-50 border border-gray-200 rounded shadow-sm hover:shadow-md transition-shadow relative group">
                            <div className="absolute top-0 left-0 w-full h-1 bg-green-500 rounded-t opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <div className="w-12 h-12 bg-green-100 text-green-800 rounded flex items-center justify-center mb-4">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-[#1F2937] mb-3">3. Asset Management</h3>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4 h-20">
                                作成したドキュメントとフローをGitHub等のバージョン管理システムで管理する体制を構築します。
                                「いつ、誰が、なぜ変えたか」を永続化します。
                            </p>
                            <ul className="text-sm text-gray-600 space-y-2">
                                <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> Git導入・運用支援</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> 変更履歴管理フロー</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-green-600" /> レビュー体制設計</li>
                            </ul>
                        </div>
                    </div>

                    {/* Pricing / CTA Section */}
                    <div className="bg-[#F9FAFB] border border-gray-300 rounded p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-inner">
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-[#1F2937] mb-3 flex items-center gap-2">
                                <Coins className="text-yellow-600" />
                                Pricing & Plans
                            </h2>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                対象となるフローの規模・数に応じて、最適なプランをご提案します。<br />
                                まずは無料の「ブラックボックス診断」からスタートできます。
                            </p>
                            <div className="flex gap-6 text-sm font-medium text-gray-500">
                                <span className="flex items-center gap-1.5"><CheckCheck size={18} className="text-green-600" /> 初期診断無料</span>
                                <span className="flex items-center gap-1.5"><CheckCheck size={18} className="text-green-600" /> 最短2週間で納品</span>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 w-full md:w-auto items-center">
                            <Link href="/contact" className="legacy-button bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 border border-[#172554] shadow-md px-8 py-3 text-center font-bold text-lg rounded-sm active:translate-y-0.5 active:shadow-none transition-all">
                                お問い合わせ・診断依頼
                            </Link>
                            <span className="text-xs text-center text-gray-400">
                                ※ 診断はオンライン会議(30分)にて行います
                            </span>
                        </div>
                    </div>

                </div>

                {/* Status Bar */}
                <div className="bg-[#E5E7EB] border-t border-gray-300 px-2 py-1 flex justify-between text-xs text-gray-600 font-mono">
                    <span>Ready</span>
                    <div className="flex gap-4">
                        <span>Memory: 64MB</span>
                        <span>Mode: Read Only</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
