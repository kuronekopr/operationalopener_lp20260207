import Link from "next/link";
import { ArrowLeft, TabletSmartphone, Terminal, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, Lightbulb, Code, Layout, FileText, Component } from "lucide-react";

export const metadata = {
    title: "Power Apps仕様書作成：AI依存の罠と正しい自動化アプローチ | Operational Opener",
    description: "2026年最新のPower Apps仕様書作成TIPS。YAML解析、Copilot、Mermaid活用法と、複雑化するアプリの属人化を防ぐ構造化解析のアプローチ。",
    openGraph: {
        title: "Power Apps仕様書作成：AI依存の罠と正しい自動化アプローチ",
        description: "ソースコード解析によるドキュメント自動化の最前線。",
        type: "article",
        images: [{ url: "/og-powerapps.png" }],
    },
};

export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <article className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">

                {/* Header Image / Title Area */}
                <div className="bg-[#742774] text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <Link href="/insights" className="inline-flex items-center gap-2 text-fuchsia-200 hover:text-white mb-6 transition-colors z-10 relative">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <div className="relative z-10">
                        <span className="bg-fuchsia-800 text-fuchsia-100 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Methodology</span>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            【2026年最新】Power Apps仕様書作成<br className="hidden md:block" />
                            AI活用TIPSと「構造化解析」の決定的な違い
                        </h1>
                        <div className="flex items-center gap-4 text-fuchsia-200 text-sm">
                            <span>2026.02.01</span>
                            <span>•</span>
                            <span>12 min read</span>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 text-gray-800 leading-relaxed md:text-lg">

                    <p className="border-l-4 border-[#742774] pl-6 py-2 bg-gray-50 text-gray-700 italic mb-12">
                        2026年現在、Power Appsの仕様書作成をAIで行う手法は、「アプリ内のCopilotに頼る」段階から、<br />
                        <strong>「ソースコード（YAML）をAIエージェントに読み込ませてドキュメントを生成させる」</strong>段階へと大きく進化しています。
                    </p>

                    {/* Section: AI TIPS */}
                    <div className="space-y-12 mb-16">

                        {/* Level 1 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#742774] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-fuchsia-100 text-[#742774] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                アプリを「コード（YAML）」として出力する
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">以前はアプリの画面を1枚ずつキャプチャして説明を書いていましたが、最新のベストプラクティスは、アプリの構造をYAML形式で書き出し、それをAIに解析させる手法です。</p>
                                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-2 text-base">
                                    <div className="flex gap-2">
                                        <span className="font-bold text-gray-700 min-w-[60px]">TIPS:</span>
                                        <p>Power Platform CLI (pac) を使用して、<code>.msapp</code> ファイルをソースコード展開します。</p>
                                    </div>
                                    <div className="bg-gray-800 text-gray-200 p-3 rounded font-mono text-sm my-2">
                                        pac canvas download --name "アプリ名" --targetDir "保存先フォルダ"
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-bold text-gray-700 min-w-[60px]">メリット:</span>
                                        <p>画面構成、プロパティ、関数（Power Fx）がすべてテキスト化されるため、AIが「仕様」を正確に読み取れるようになります。</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Level 2 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#742774] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-fuchsia-100 text-[#742774] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                Microsoft 365 Copilotの「エージェントモード」を活用
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">2026年の最新機能である<strong>Wordの「エージェントモード（Agent Mode）」</strong>を使用すると、参照ファイルを元にした高度な文書作成が可能です。</p>
                                <ol className="list-decimal list-inside space-y-2 mb-4 ml-2">
                                    <li><strong>読み込み:</strong> Wordを開き、Copilotに上記で書き出した「YAMLファイル」を読み込ませます。</li>
                                    <li><strong>指示:</strong> 「このソースコードを元に、機能一覧、画面遷移図の説明、使用されているDataverseテーブルの定義を含む外部設計書を作成して」と指示します。</li>
                                    <li><strong>Work IQ:</strong> 社内の用語集や過去のドキュメントスタイルに合わせた書き方で自動生成されます。</li>
                                </ol>
                            </div>
                        </section>

                        {/* Level 3 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#742774] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-fuchsia-100 text-[#742774] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                Mermaid.jsによる図解の自動生成
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">仕様書に欠かせない「画面遷移図」や「ER図」も、AIにコードを読み込ませてMermaid記法で出力させるのがトレンドです。</p>
                                <div className="flex gap-4 items-start bg-gray-50 p-4 rounded">
                                    <Code className="text-fuchsia-600 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-bold text-sm text-gray-700 mb-1">プロンプト例</p>
                                        <p className="text-gray-800 text-sm">「このPower Appsのソースコードから、画面遷移のロジックを抽出してMermaid形式のフローチャートで出力してください。」</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Level 4 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#742774] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-fuchsia-100 text-[#742774] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                「Cloud Agent Preview」による自動更新
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">2025年末から提供が開始されたCloud Agent（開発支援エージェント）を有効にすると、アプリを修正するたびにドキュメントの差分を自動で生成できるようになりました。</p>
                                <div className="flex gap-2">
                                    <span className="font-bold text-fuchsia-800 min-w-[60px]">TIPS:</span>
                                    <p>アプリの保存時や発行時に、Copilotが「今回の変更点（例：ボタンの追加、計算ロジックの変更）」をサマリーとして書き出します。これを仕様書の「改訂履歴」にそのまま転記するだけで、ドキュメントの鮮度を保てます。</p>
                                </div>
                            </div>
                        </section>

                        {/* Summary Table */}
                        <div className="overflow-x-auto mt-8">
                            <table className="w-full text-sm text-left text-gray-500 border border-gray-200 rounded-lg">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3">ステップ</th>
                                        <th className="px-6 py-3">使用ツール</th>
                                        <th className="px-6 py-3">アクション</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">1. 抽出</td>
                                        <td className="px-6 py-4">pac CLI</td>
                                        <td className="px-6 py-4">アプリをYAML形式で解凍</td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">2. 解析</td>
                                        <td className="px-6 py-4">AI (Claude/GPT/Copilot)</td>
                                        <td className="px-6 py-4">コードを読み込ませ、ロジックを言語化</td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">3. 構成</td>
                                        <td className="px-6 py-4">Copilot in Word</td>
                                        <td className="px-6 py-4">設計書のテンプレートに沿って清書</td>
                                    </tr>
                                    <tr className="bg-white border-b">
                                        <td className="px-6 py-4 font-bold text-gray-900">4. 図解</td>
                                        <td className="px-6 py-4">Mermaid.js</td>
                                        <td className="px-6 py-4">フローチャートやER図を自動生成</td>
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
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center text-[#742774]">
                        それでも、「手動」と「AI」には限界がある
                    </h2>

                    <div className="bg-red-50 border border-red-100 rounded-lg p-8 mb-12">
                        <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
                            <AlertTriangle className="fill-red-100" />
                            Power Apps開発における隠れたリスク
                        </h3>
                        <p className="mb-6">
                            上記の手法でドキュメント化は劇的に楽になりますが、Power Apps特有の「スパゲッティコード化」は防げません。
                        </p>
                        <ul className="grid md:grid-cols-3 gap-6">
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">1. 複雑すぎるPower Fx</h4>
                                <p className="text-sm text-gray-600">YAMLに出力しても、1つのボタンに数百行のロジックが書かれている場合、AIの要約も正確性を欠き始めます。</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">2. 暗黙の依存関係</h4>
                                <p className="text-sm text-gray-600">「この変数がどこで更新されているか」「OnStartとOnVisibleの順序」など、コードの静的解析だけでは見抜けない実行時の挙動があります。</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">3. CLI操作の壁</h4>
                                <p className="text-sm text-gray-600">pac CLIを使って毎回コードを展開し、AIに投げる作業は、市民開発者にとってハードルが高く、定着しません。</p>
                            </li>
                        </ul>
                    </div>

                    {/* Section: The Solution - Structural Analysis */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                            <CheckCircle className="text-[#742774]" />
                            答えは「構造化解析」による完全自動化
                        </h2>
                        <p className="mb-6">
                            Operational Openerのアプローチは、YAML解析を自動化し、Power Fxのロジックを構造化データとして抽出します。<br />
                            <span className="font-bold text-[#742774]">Power Apps Canvasアプリにも完全対応可能です。</span>
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-fuchsia-50 p-6 rounded border border-fuchsia-100">
                                <h3 className="font-bold text-fuchsia-900 mb-2">Visualization (ロジック可視化)</h3>
                                <p className="text-sm text-fuchsia-800">複雑に絡み合ったPower Fxを整理し、画面遷移やデータ操作の流れを直感的な図表として自動生成します。</p>
                            </div>
                            <div className="bg-fuchsia-50 p-6 rounded border border-fuchsia-100">
                                <h3 className="font-bold text-fuchsia-900 mb-2">Dependency (影響分析)</h3>
                                <p className="text-sm text-fuchsia-800">「このコレクションはどの画面で使われているか？」といった依存関係を瞬時に把握。改修時の影響範囲調査をゼロ秒にします。</p>
                            </div>
                        </div>
                    </div>

                    {/* Strong CTA */}
                    <div className="bg-[#742774] text-white rounded-xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">そのアプリ、作った本人以外も触れますか？</h2>
                            <p className="mb-8 text-fuchsia-100 max-w-2xl mx-auto">
                                <span className="font-bold underline decoration-white decoration-2 underline-offset-4">Power Apps も対応可能。</span><br />
                                属人化したアプリのブラックボックスを開き、誰もがメンテナンス可能な資産に変えます。
                            </p>
                            <Link href="/program" className="inline-flex items-center gap-2 bg-white text-[#742774] px-8 py-4 rounded-full font-bold text-lg hover:bg-fuchsia-50 hover:scale-105 transition-all shadow-md">
                                <TabletSmartphone size={20} />
                                プログラム詳細を見る（Power Apps対応）
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
                        "headline": "【2026年最新】Power Apps仕様書作成：AI活用TIPSと構造化解析の違い",
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
