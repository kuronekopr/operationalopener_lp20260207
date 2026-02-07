import Link from "next/link";
import { ArrowLeft, FileText, Code, Cpu, CheckCircle, ArrowRightCircle, Shield, AlertTriangle } from "lucide-react";

export const metadata = {
    title: "Power Automate仕様書作成 | Operational Opener",
    description: "複雑化したPower Automateフローを解析し、保守可能な仕様書・設計図を生成します。",
};

export default function PowerAutomatePage() {
    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-[#E5E7EB]">
            {/* Window Container */}
            <div className="w-full max-w-5xl legacy-window flex flex-col min-h-[800px] bg-[#F3F4F6]">
                {/* Title Bar - Power Automate Blue */}
                <div className="bg-[#0078D4] text-white px-3 py-1.5 flex items-center justify-between select-none shadow-sm">
                    <div className="flex items-center gap-2">
                        <FileText size={16} />
                        <span className="font-bold text-sm tracking-wide">SpecGenerator_for_PowerAutomate.exe</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Link href="/" className="p-1 hover:bg-white/10 rounded-sm text-white/80 hover:text-white transition-colors" aria-label="Back">
                            <ArrowLeft size={14} />
                        </Link>
                    </div>
                </div>

                {/* Menubar simulation */}
                <div className="bg-[#E5E7EB] border-b border-gray-400 px-3 py-1 text-sm text-gray-700 flex gap-6 select-none shadow-sm">
                    <span className="hover:bg-gray-200 px-2 rounded cursor-default">File</span>
                    <span className="hover:bg-gray-200 px-2 rounded cursor-default">Edit</span>
                    <span className="hover:bg-gray-200 px-2 rounded cursor-default">View</span>
                    <span className="hover:bg-gray-200 px-2 rounded cursor-default font-bold text-[#0078D4]">Generate Spec</span>
                    <span className="hover:bg-gray-200 px-2 rounded cursor-default">Help</span>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-8 md:p-16 overflow-y-auto">

                    {/* Hero Section */}
                    <div className="mb-16 text-center">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-[#1F2937] mb-6 leading-tight">
                            「そのフロー、<br className="md:hidden" />作った人しか直せません」<br />を終わらせる。
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            複雑怪奇になったPower Automateクラウドフローを解析。<br />
                            ロジック、変数、依存関係を可視化し、<span className="font-bold text-[#0078D4] bg-blue-50 px-1 rounded">「誰もが保守できる仕様書」</span>を作成します。
                        </p>
                    </div>

                    {/* Problem & Solution Visual */}
                    <div className="flex flex-col md:flex-row gap-8 mb-20 items-center justify-center">

                        {/* Before: Black Box */}
                        <div className="w-full md:w-[400px] h-[320px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 relative group overflow-hidden">
                            <div className="absolute top-4 right-4 text-gray-300">
                                <AlertTriangle size={48} />
                            </div>
                            <div className="font-mono text-sm text-gray-600 space-y-2 opacity-70 blur-[1px] group-hover:blur-0 transition-all duration-300">
                                <div className="text-xs text-gray-400 border-b pb-2 mb-2">/legacy/flow_v1_final_rev2.json</div>
                                <p>&gt; Trigger: When item created...</p>
                                <p>&gt; Condition: If (User == 'Admin') ...</p>
                                <p className="pl-4 text-red-400">&gt; Error: Connection broken</p>
                                <p className="pl-4">&gt; Apply to each (Item) ...</p>
                                <p className="pl-8">&gt; Switch (Case 1) ...</p>
                                <p className="pl-12">&gt; HTTP Request (Failed)</p>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100/30">
                                <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold shadow-lg transform -rotate-6">
                                    BLACK BOX
                                </span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:block text-[#0078D4]">
                            <ArrowRightCircle size={48} />
                        </div>
                        <div className="md:hidden text-[#0078D4] transform rotate-90 my-2">
                            <ArrowRightCircle size={32} />
                        </div>

                        {/* After: Spec Document */}
                        <div className="w-full md:w-[400px] h-[320px] bg-white border-2 border-[#0078D4] rounded-lg p-0 shadow-xl relative overflow-hidden flex flex-col">
                            <div className="bg-[#0078D4] text-white px-4 py-2 font-bold text-sm flex items-center gap-2">
                                <FileText size={16} /> Specification Document
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-center space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-[#107C10] flex-shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">フロー図の自動生成・整頓</h4>
                                        <p className="text-xs text-gray-500">処理の流れが一目でわかるビジュアル化</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-[#107C10] flex-shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">変数・コネクタ定義一覧</h4>
                                        <p className="text-xs text-gray-500">外部依存関係を完全網羅</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="text-[#107C10] flex-shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">エラー発生時の対応手順</h4>
                                        <p className="text-xs text-gray-500">「誰でも復旧できる」マニュアル化</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-blue-50 px-4 py-2 text-xs text-[#0078D4] text-center font-mono border-t border-blue-100">
                                Status: Optimized & Documented
                            </div>
                        </div>
                    </div>

                    {/* Detailed Services */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-8 flex items-center gap-2 border-b border-gray-200 pb-4">
                            <Shield className="text-[#0078D4]" />
                            サービス内容の詳細
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">1. 現状フローの完全解析</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    ブラックボックス化したフローの内部構造を解析ツールとエンジニアの目で調査。「何が起きているか分からない」状態から、一つ一つの処理の意味を解き明かします。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">2. 日本語仕様書の作成</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    Power Automateの画面キャプチャを貼っただけの手順書ではありません。ロジックの意図、条件分岐の背景、例外処理までを含めた「生きている仕様書」を作成します。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">3. リファクタリング（設計改善）</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    将来のメンテナンス性を考慮し、長すぎるフローの分割、変数の整理、共通処理の部品化など、具体的な改善案を提示・実装します。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">4. エラーハンドリング実装</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    「止まったまま放置される」ことを防ぐため、適切な通知設定や自動再試行ロジックなど、実運用に耐えうる堅牢な設計を組み込みます。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-[#F0F9FF] border border-blue-100 rounded-lg p-10 text-center shadow-inner max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                            まずは「診断」から始めませんか？
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            「このフロー、ドキュメント化できる？」<br />
                            「複雑すぎて手がつけられない...」<br />
                            といったご相談から承ります。実際の画面を共有いただきながらの無料診断を実施中です。
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="legacy-button bg-[#0078D4] text-white hover:bg-[#106EBE] border border-[#005A9E] px-8 py-3 text-lg font-bold rounded shadow-md transition-all active:translate-y-0.5">
                                無料診断・相談を予約する
                            </Link>
                        </div>
                        <p className="mt-4 text-xs text-gray-500">※ オンライン会議(30分)にて行います</p>
                    </div>

                </div>

                {/* Status Bar */}
                <div className="bg-[#E5E7EB] border-t border-gray-300 px-2 py-1 flex justify-between text-xs text-gray-600 font-mono">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Ready to Document
                    </span>
                    <div className="flex gap-4">
                        <span>Target: Power Automate Cloud Flow</span>
                        <span>Output: PDF, Markdown</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
