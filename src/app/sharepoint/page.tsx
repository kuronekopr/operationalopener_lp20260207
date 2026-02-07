import Link from "next/link";
import { ArrowLeft, Database, Grid, Shield, CheckCheck, ArrowRightCircle, Table, AlertTriangle, FileSpreadsheet } from "lucide-react";

export const metadata = {
    title: "SharePointリスト構築支援 | Operational Opener",
    description: "脱Excel。業務データをSharePointリストで構造化し、安全な資産として管理します。",
};

export default function SharePointPage() {
    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center bg-[#E5E7EB]">
            {/* Window Container */}
            <div className="w-full max-w-5xl legacy-window flex flex-col min-h-[800px] bg-[#F3F4F6]">
                {/* Title Bar - Brand Navy */}
                <div className="bg-[#1E3A8A] text-white px-3 py-1.5 flex items-center justify-between select-none shadow-sm">
                    <div className="flex items-center gap-2">
                        <Database size={16} />
                        <span className="font-bold text-sm tracking-wide">ListArchitect_for_SharePoint.exe</span>
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
                        Data Model (Locked)
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-8 md:p-16 overflow-y-auto">

                    {/* Hero Section */}
                    <div className="mb-16 text-center">
                        <h1 className="text-2xl md:text-3xl font-extrabold text-[#1F2937] mb-6 leading-tight">
                            「最新ファイルはどれですか？」<br className="md:hidden" />脱Excelで実現する、<br />本当のデータ資産管理。
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            同時編集の競合、壊れやすいマクロ、属人化した管理台帳。<br />
                            Excel業務を<span className="font-bold text-[#037A7A] bg-teal-50 px-1 rounded">堅牢なSharePointリスト</span>へ移行し、<br className="md:hidden" />システム連携の基盤を作ります。
                        </p>
                    </div>

                    {/* Problem & Solution Visual */}
                    <div className="flex flex-col md:flex-row gap-8 mb-20 items-center justify-center">

                        {/* Before: Excel Chaos */}
                        <div className="w-full md:w-[400px] h-[320px] bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-6 relative group overflow-hidden">
                            <div className="absolute top-4 right-4 text-green-300">
                                <FileSpreadsheet size={48} />
                            </div>
                            <div className="font-mono text-sm text-gray-600 space-y-3 opacity-70 blur-[1px] group-hover:blur-0 transition-all duration-300">
                                <div className="bg-white border p-2 rounded shadow-sm text-xs">
                                    <span className="font-bold text-red-500">[Conflict]</span> 案件管理_2025_最新_final_v2.xlsx
                                </div>
                                <div className="bg-red-50 border border-red-200 p-2 rounded text-xs text-red-600">
                                    Error: このファイルは現在ロックされています。<br />(User: satou)
                                </div>
                                <div className="grid grid-cols-4 gap-1 text-[10px] text-gray-400 mt-4 opacity-50">
                                    <div className="border bg-white h-4"></div><div className="border bg-white h-4 col-span-3"></div>
                                    <div className="border bg-white h-4"></div><div className="border bg-white h-4 col-span-3"></div>
                                    <div className="border bg-yellow-100 h-4 col-span-4 border-yellow-200">#REF! #VALUE!</div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center bg-gray-100/30">
                                <span className="bg-gray-800 text-white px-4 py-2 rounded font-bold shadow-lg transform -rotate-6">
                                    EXCEL CHAOS
                                </span>
                            </div>
                        </div>

                        {/* Arrow */}
                        <div className="hidden md:block text-[#037A7A]">
                            <ArrowRightCircle size={48} />
                        </div>
                        <div className="md:hidden text-[#037A7A] transform rotate-90 my-2">
                            <ArrowRightCircle size={32} />
                        </div>

                        {/* After: Structured List */}
                        <div className="w-full md:w-[400px] h-[320px] bg-white border-2 border-[#037A7A] rounded-lg p-0 shadow-xl relative overflow-hidden flex flex-col">
                            <div className="bg-[#037A7A] text-white px-4 py-2 font-bold text-sm flex items-center gap-2">
                                <Database size={16} /> SharePoint List (Cloud DB)
                            </div>
                            <div className="p-6 flex-1 flex flex-col justify-center space-y-4">
                                <div className="flex items-start gap-3">
                                    <CheckCheck className="text-[#107C10] flex-shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">堅牢なデータ構造（スキーマ定義）</h4>
                                        <p className="text-xs text-gray-500">入力ミスを防ぐ「型」のある管理</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCheck className="text-[#107C10] flex-shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">セキュアな同時編集</h4>
                                        <p className="text-xs text-gray-500">何人でも同時に、安全に更新可能</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <CheckCheck className="text-[#107C10] flex-shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-bold text-gray-800 text-sm">Power Automate連携に最適</h4>
                                        <p className="text-xs text-gray-500">自動化トリガーとしての高い親和性</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-teal-50 px-4 py-2 text-xs text-[#037A7A] text-center font-mono border-t border-teal-100">
                                Status: Structured & Secure
                            </div>
                        </div>
                    </div>

                    {/* Detailed Services */}
                    <div className="max-w-4xl mx-auto mb-20">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-8 flex items-center gap-2 border-b border-gray-200 pb-4">
                            <Grid className="text-[#037A7A]" />
                            サービス内容の詳細
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">1. データモデリング・設計</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    現在のExcelや紙の台帳を分析し、システム的に扱いやすい最適な列構成（カラム定義）を設計します。ルックアップ列や計算列なども活用し、正規化されたデータベースを構築します。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">2. Power Automate連携設計</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    単なるデータ置き場ではなく、「ワークフローの起点」として機能するようにリストを設計します。トリガー条件の設定や、状態管理（ステータス）列の定義を含みます。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">3. ビュー・入力フォーム最適化</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    ユーザーが迷わず入力できるよう、入力フォームのカスタマイズ(JSON)や、業務シーンに応じたビュー（フィルタ・グループ化）の設定を行います。
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h3 className="text-lg font-bold text-gray-800">4. 権限設計・アクセス制御</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    「誰が見れて、誰が編集できるか」を厳格に定義します。アイテム単位の権限設定が必要な場合の実装方針も策定します。
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="bg-[#F0FDFA] border border-teal-100 rounded-lg p-10 text-center shadow-inner max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-4">
                            まずは「診断」から始めませんか？
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            「このExcel、毎回壊れて困っている...」<br />
                            「リストに移行したいけど、設計がわからない」<br />
                            といったお悩みをお聞かせください。既存ファイルを拝見しながらの無料診断を実施中です。
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/contact" className="legacy-button bg-[#037A7A] text-white hover:bg-[#026666] border border-[#025555] px-8 py-3 text-lg font-bold rounded shadow-md transition-all active:translate-y-0.5">
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
                        Database Online
                    </span>
                    <div className="flex gap-4">
                        <span>Target: SharePoint Online</span>
                        <span>Schema: Validated</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
