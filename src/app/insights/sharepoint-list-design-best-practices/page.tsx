import Link from "next/link";
import { ArrowLeft, FileSpreadsheet, AlertTriangle, Shield, CheckCircle, HelpCircle, ArrowRight, Database } from "lucide-react";

export const metadata = {
    title: "【脱Excel】失敗しないSharePointリスト設計：3つの鉄則とデータ資産化 | Operational Opener",
    description: "「Excel感覚で作ると失敗する」SharePointリスト。5000件問題、委任警告、権限管理の泥沼を回避し、Power Automate連携を前提とした堅牢な設計手法を公開。",
    openGraph: {
        title: "【脱Excel】失敗しないSharePointリスト設計：3つの鉄則とデータ資産化",
        description: "プロフェッショナルなデータ移行。",
        type: "article",
    },
};

export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <article className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">

                {/* Header Image */}
                <div className="bg-[#037A7A] text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <Link href="/insights" className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6 transition-colors z-10 relative">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <div className="relative z-10">
                        <span className="bg-teal-800 text-teal-100 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Methodology</span>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            【脱Excel】失敗しないSharePointリスト設計：<br className="hidden md:block" />
                            3つの鉄則とデータ資産化
                        </h1>
                        <div className="flex items-center gap-4 text-teal-200 text-sm">
                            <span>2026.01.28</span>
                            <span>•</span>
                            <span>10 min read</span>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 text-gray-800 leading-relaxed md:text-lg">

                    <p className="font-bold text-xl mb-12 text-gray-600 border-l-4 border-[#037A7A] pl-6 py-2 bg-gray-50">
                        SharePointリストは単なる「Web版Excel」ではありません。<br />
                        Excel感覚で列を追加し、データを放り込んだ瞬間から、<br />
                        あなたのリストは「時限爆弾」を抱えることになります。
                    </p>

                    {/* Section 1 */}
                    <h2 className="text-2xl font-bold text-[#1F2937] mb-6 mt-12 flex items-center gap-3">
                        <AlertTriangle className="text-yellow-500" />
                        Excel感覚で作ると直面する「3つの壁」
                    </h2>
                    <div className="grid gap-6 mb-12">
                        <div className="bg-red-50 p-6 rounded border border-red-100 flex gap-4">
                            <span className="text-red-500 font-bold text-xl">1</span>
                            <div>
                                <h3 className="font-bold text-red-900 mb-2">5000件問題（ビューの閾値）</h3>
                                <p className="text-sm text-gray-700">データ件数が5000を超えた途端、フィルタや並べ替えができなくなり、Power Automateフローもエラーを吐き始めます。インデックス設計がないリストの寿命は短いのです。</p>
                            </div>
                        </div>
                        <div className="bg-red-50 p-6 rounded border border-red-100 flex gap-4">
                            <span className="text-red-500 font-bold text-xl">2</span>
                            <div>
                                <h3 className="font-bold text-red-900 mb-2">委任（Delegation）の警告</h3>
                                <p className="text-sm text-gray-700">Power AppsやAutomateから検索する際、「このクエリは委任できません」という警告が出ます。サーバー側に処理を任せられないため、全件取得しようとしてアプリが重くなります。</p>
                            </div>
                        </div>
                        <div className="bg-red-50 p-6 rounded border border-red-100 flex gap-4">
                            <span className="text-red-500 font-bold text-xl">3</span>
                            <div>
                                <h3 className="font-bold text-red-900 mb-2">権限管理の破綻</h3>
                                <p className="text-sm text-gray-700">「この行だけ部長に見せたい」。アイテム単位の権限設定を乱発すると、パフォーマンスが劇的に低下し、管理不能な状態に陥ります。</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <h2 className="text-2xl font-bold text-[#1F2937] mb-6 mt-12 flex items-center gap-3">
                        <Database className="text-teal-600" />
                        「データベース」としての設計思想
                    </h2>
                    <p className="mb-6">
                        SharePointリストを長期間安定して運用するためには、RDB（リレーショナルデータベース）の設計思想を取り入れる必要があります。
                    </p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-3 items-start">
                            <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
                            <div>
                                <strong>正規化（Normalization）</strong>
                                <p className="text-sm text-gray-600">マスタデータとトランザクションデータを分け、ルックアップ列で結合する。Excelの「1枚のシートに全部入り」をやめることが第一歩です。</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
                            <div>
                                <strong>インデックス列の定義</strong>
                                <p className="text-sm text-gray-600">検索頻度の高い列（ID、ステータス、日付など）には必ずインデックスを設定し、5000件を超えてもクエリが通るようにします。</p>
                            </div>
                        </li>
                        <li className="flex gap-3 items-start">
                            <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" />
                            <div>
                                <strong>内部名（Internal Name）の管理</strong>
                                <p className="text-sm text-gray-600">列を作成するときは、まず半角英数字で作成し、その後に日本語名に変更する。これにより、Power Automateから参照する際の内部名がきれいになり、バグを防げます。</p>
                            </div>
                        </li>
                    </ul>

                    {/* FAQ */}
                    <div className="mt-16 border-t border-gray-200 pt-12">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-8 flex items-center gap-2">
                            <HelpCircle /> よくある質問 (FAQ)
                        </h2>
                        <dl className="space-y-8">
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <dt className="font-bold text-lg text-[#037A7A] mb-2">Q. 既存のExcelファイルをインポートすればリストは作れますか？</dt>
                                <dd className="text-gray-700">A. 作れますが、お勧めしません。自動生成される列の内部名がランダムな英数字になり、後でAutomate連携する際に非常に扱いづらくなります。手動で空のリストから設計・作成するのがベストプラクティスです。</dd>
                            </div>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <dt className="font-bold text-lg text-[#037A7A] mb-2">Q. SharePointリストは何件までデータを格納できますか？</dt>
                                <dd className="text-gray-700">A. 理論上は3000万件ですが、実用上は数万件〜数十万件が目安です。ただし、適切なビュー設定とインデックス設計がなければ、わずか5000件で機能不全に陥ります。</dd>
                            </div>
                        </dl>
                    </div>

                    {/* Strong CTA */}
                    <div className="mt-16 bg-[#037A7A] text-white rounded-xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">そのリスト設計、本当に大丈夫ですか？</h2>
                            <p className="mb-8 text-teal-100 max-w-2xl mx-auto">
                                運用開始後に「データが開けない」「フローが動かない」というトラブルを防ぐために。<br />
                                プロフェッショナルによる設計レビューを受けてみませんか？
                            </p>
                            <Link href="/program" className="inline-flex items-center gap-2 bg-white text-[#037A7A] px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-50 hover:scale-105 transition-all shadow-md">
                                <Database size={20} />
                                設計プログラムを確認する
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                </div>
            </article>

            {/* Schema.org JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "失敗しないSharePointリスト設計：3つの鉄則とデータ資産化",
                        "datePublished": "2026-01-28",
                        "author": {
                            "@type": "Organization",
                            "name": "Operational Opener"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Operational Opener",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "http://localhost:3001/logo.png"
                            }
                        }
                    }),
                }}
            />
        </div>
    );
}
