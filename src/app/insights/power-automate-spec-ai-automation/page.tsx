import Link from "next/link";
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, Lightbulb, Code, FileJson, Layout, FileType } from "lucide-react";

export const metadata = {
    title: "Power Automate仕様書作成：AI依存の罠と正しい自動化アプローチ | Operational Opener",
    description: "2026年最新のPower Automate仕様書作成TIPS。Copilot、JSON解析、Mermaid.js、Word Agentの活用法と、それでも残る属人化リスクへの「構造化解析」という答え。",
    openGraph: {
        title: "Power Automate仕様書作成：AI依存の罠と正しい自動化アプローチ",
        description: "最新AI活用術と、その先にある本質的な解決策。",
        type: "article",
    },
};

export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <article className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">

                {/* Header Image / Title Area */}
                <div className="bg-[#1E3A8A] text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <Link href="/insights" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors z-10 relative">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <div className="relative z-10">
                        <span className="bg-blue-800 text-blue-100 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Methodology</span>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            【2026年最新】Power Automate仕様書作成<br className="hidden md:block" />
                            AI活用TIPSと「構造化解析」の決定的な違い
                        </h1>
                        <div className="flex items-center gap-4 text-blue-200 text-sm">
                            <span>2026.02.01</span>
                            <span>•</span>
                            <span>12 min read</span>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 text-gray-800 leading-relaxed md:text-lg">

                    <p className="border-l-4 border-[#1E3A8A] pl-6 py-2 bg-gray-50 text-gray-700 italic mb-12">
                        2026年現在、Power Automate（クラウドフロー）の仕様書作成をAIで効率化する手法は、単なる「要約」から「構成定義の完全なドキュメント化」へと進化しています。<br />
                        まずは、今すぐ使える最新のTIPSを、初心者からプロフェッショナル向けまで4つのレベルで整理して紹介します。
                    </p>

                    {/* Section: AI TIPS */}
                    <div className="space-y-12 mb-16">

                        {/* Level 1 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                Copilotの「フロー説明生成」をベースにする（初級）
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">2026年のアップデートにより、クラウドフローの「詳細」画面にあるAI機能が強化されました。</p>
                                <div className="bg-blue-50 p-4 rounded-md border border-blue-100 space-y-2 text-base">
                                    <div className="flex gap-2">
                                        <span className="font-bold text-blue-700 min-w-[60px]">TIPS:</span>
                                        <p>フロー一覧または詳細画面で<strong className="text-blue-900">「Copilotに説明を作成させる（Let Copilot create description）」</strong>ボタンをクリックします。</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-bold text-blue-700 min-w-[60px]">効果:</span>
                                        <p>以前は数行の要約でしたが、最新版では<strong className="text-blue-900">「トリガー」「主要なアクション」「使用されている接続先」</strong>を網羅した構造化されたテキストが生成されます。これをコピーしてWordやWikiの冒頭に貼り付けるだけで、概要説明が完了します。</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Level 2 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                フローの定義（JSON）をAIに解析させる（中級）
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">より詳細な「変数一覧」や「条件分岐のロジック」を書き出したい場合は、フローの「コード」をAIに読み込ませるのが最も正確です。</p>
                                <ol className="list-decimal list-inside space-y-2 mb-4 ml-2">
                                    <li><strong>JSONの取得:</strong> フローエディタで「コードのプレビュー（Peek code）」を開くか、フローを「エクスポート（パッケージ/JSON）」します。</li>
                                    <li><strong>AI（Claude 3.5 / GPT-5.2等）への投入:</strong> 以下のプロンプトと共にJSONを貼り付けます。</li>
                                </ol>
                                <div className="bg-gray-800 text-gray-200 p-4 rounded font-mono text-sm mb-4">
                                    「このPower AutomateのJSON定義を解析し、以下の項目で技術仕様書を作成してください。<br />
                                    1. フロー名と目的 2. トリガー詳細 3. 使用変数一覧 4. ロジックフロー（箇条書き） 5. エラーハンドリングの有無」
                                </div>
                                <p className="text-sm text-gray-600"><strong className="text-gray-800">メリット:</strong> 手入力による転記ミスがゼロになり、複雑なif式やcomposeの中身も正確に言語化されます。</p>
                            </div>
                        </section>

                        {/* Level 3 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                Mermaid.jsによる「画面遷移図・フロー図」の自動生成（上級）
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">仕様書で最も時間がかかる「図解」も、AIなら数秒です。</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-2">
                                        <Layout size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                        <span><strong>最新手法:</strong> AIに対して「このフローの構造をMermaid.jsのflowchart形式で出力して」と指示します。</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Code size={18} className="text-blue-600 mt-1 flex-shrink-0" />
                                        <span><strong>出力例:</strong> AIが生成したコードを Mermaid Live Editor や、Markdown対応のドキュメント（Notion, GitHub, Obsidian等）に貼り付けるだけで、プロフェッショナルなフロー図が完成します。</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <Lightbulb size={18} className="text-amber-500 mt-1 flex-shrink-0" />
                                        <span><strong>TIPS:</strong> 2026年時点では、Wordの「エージェントモード」に直接Mermaidコードを渡すと、そのまま画像として文書内にレンダリングしてくれる連携機能も一般化しています。</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Level 4 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-blue-100 text-[#1E3A8A] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                Microsoft 365 Copilot「エージェントモード」での清書（最新）
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">2026年の目玉機能である<strong>Wordの「エージェントモード」</strong>を活用すると、バラバラの情報が一瞬で整います。</p>
                                <div className="bg-white border border-gray-200 rounded p-4 shadow-sm mb-4">
                                    <h4 className="font-bold text-sm text-gray-500 uppercase mb-2">活用フロー</h4>
                                    <ol className="list-decimal list-inside space-y-2 text-base">
                                        <li>Wordで空のドキュメントを開き、Copilotを起動。</li>
                                        <li>「参照」から、上記で書き出した「JSONファイル」や「フローのスクリーンショット」を指定。</li>
                                        <li><strong>「弊社の標準設計書テンプレートに従って、このフローの外部設計書を完成させて」</strong>と指示。</li>
                                    </ol>
                                </div>
                                <p><strong>ポイント:</strong> Work IQ機能により、社内の他の仕様書とトーン＆マナーを合わせることが可能です。</p>
                            </div>
                        </section>

                        {/* Summary Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3">項目</th>
                                        <th className="px-6 py-3">使用するAI/ツール</th>
                                        <th className="px-6 py-3">2026年の最新ポイント</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">概要生成</td>
                                        <td className="px-6 py-4">標準Copilot機能</td>
                                        <td className="px-6 py-4">ボタン一つで「接続先」まで網羅</td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">詳細定義</td>
                                        <td className="px-6 py-4">LLM (GPT-5.2 / Claude 3.5)</td>
                                        <td className="px-6 py-4">JSONを直接読み解き、ロジックを言語化</td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">図解作成</td>
                                        <td className="px-6 py-4">Mermaid.js</td>
                                        <td className="px-6 py-4">テキストから修正可能な図を自動生成</td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">清書・整形</td>
                                        <td className="px-6 py-4">Copilot Agent in Word</td>
                                        <td className="px-6 py-4">社内テンプレートに沿った自動ドキュメント化</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/* Transition to Solution */}
                    <div className="relative py-16">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                            <div className="w-full border-t-2 border-gray-200 border-dashed"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-[#F3F4F6] px-6 text-xl text-gray-500 font-bold tracking-widest">HOWEVER</span>
                        </div>
                    </div>

                    {/* Section: The Problem - Manual/AI Limits */}
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center">
                        それでも、「手動」と「AI」には限界がある
                    </h2>

                    <div className="bg-red-50 border border-red-100 rounded-lg p-8 mb-12">
                        <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
                            <AlertTriangle className="fill-red-100" />
                            AI生成における3つの落とし穴
                        </h3>
                        <p className="mb-6">
                            上記の手法は非常に強力ですが、あくまで<strong>「人間がAIを使って作成する」</strong>プロセスです。
                            大規模な組織でこれを標準化しようとすると、以下の問題に直面します。
                        </p>
                        <ul className="grid md:grid-cols-3 gap-6">
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">1. ハルシネーション</h4>
                                <p className="text-sm text-gray-600">JSONが長すぎると、AIは「おそらくこうだろう」と推測して記述します。条件分岐のYes/Noを逆に出力するリスクはゼロではありません。</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">2. JSON取得の手間</h4>
                                <p className="text-sm text-gray-600">全フローの「コードのプレビュー」を開き、コピーしてAIに投げる作業は、フローが10個を超えた時点で破綻します。</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">3. 継続性の欠如</h4>
                                <p className="text-sm text-gray-600">フローを修正するたびに、また同じ手順でドキュメントを作り直す必要があります。結局、ドキュメントは更新されなくなります。</p>
                            </li>
                        </ul>
                    </div>

                    {/* Section: The Solution - Structural Analysis */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                            <CheckCircle className="text-blue-600" />
                            答えは「構造化解析」による完全自動化
                        </h2>
                        <p className="mb-6">
                            Operational Openerのアプローチは、AIに「読ませる」のではなく、プログラムによってJSONを<strong>「構造的に解析する」</strong>ことです。<br />
                            確率論ではなく、論理演算としてフローを読み解くため、以下のことが可能になります。
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-6 rounded border border-blue-100">
                                <h3 className="font-bold text-blue-900 mb-2">Accuracy (<span className="text-blue-600">100%</span>の精度)</h3>
                                <p className="text-sm text-blue-800">条件分岐、ループ、変数の依存関係を論理的に抽出。AIのような「嘘」をつくことが原理的にありません。</p>
                            </div>
                            <div className="bg-purple-50 p-6 rounded border border-purple-100">
                                <h3 className="font-bold text-purple-900 mb-2">Consistency (継続性)</h3>
                                <p className="text-sm text-purple-800">人間がJSONを取得・貼り付けする必要はありません。システムが定期的にフロー定義を取得し、仕様書を最新の状態に保ちます。</p>
                            </div>
                        </div>
                    </div>

                    {/* Strong CTA */}
                    <div className="bg-[#0078D4] text-white rounded-xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">AIの「補助」ではなく、解析の「自動化」を。</h2>
                            <p className="mb-8 text-blue-100 max-w-2xl mx-auto">
                                ブラックボックス化したフローの解析、仕様書の自動生成を体験してください。<br />
                                単なるTIPS活用を超えた、組織としての「資産化」を実現します。
                            </p>
                            <Link href="/program" className="inline-flex items-center gap-2 bg-white text-[#0078D4] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-md">
                                <FileText size={20} />
                                プログラム詳細を見る
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
                        "headline": "【2026年最新】Power Automate仕様書作成：AI活用TIPSと構造化解析の違い",
                        "datePublished": "2026-02-01",
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
