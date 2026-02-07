import Link from "next/link";
import { ArrowLeft, Monitor, AlertTriangle, CheckCircle, HelpCircle, ArrowRight, Lightbulb, Code, MousePointer, Layout, FileText } from "lucide-react";

export const metadata = {
    title: "Power Automate Desktop(PAD)仕様書作成：AI依存の罠と正しい自動化アプローチ | Operational Opener",
    description: "2026年最新のPower Automate Desktop(PAD)仕様書作成TIPS。CopilotやRobinスクリプト解析の活用法と、属人化を防ぐ構造化解析のアプローチ。",
    openGraph: {
        title: "Power Automate Desktop(PAD)仕様書作成：AI依存の罠と正しい自動化アプローチ",
        description: "デスクトップフロー特有の課題と解決策。",
        type: "article",
        images: [{ url: "/og-pad-automation.png" }],
    },
};

export default function ArticlePage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <article className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">

                {/* Header Image / Title Area */}
                <div className="bg-[#4B5563] text-white p-8 md:p-12 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    <Link href="/insights" className="inline-flex items-center gap-2 text-gray-200 hover:text-white mb-6 transition-colors z-10 relative">
                        <ArrowLeft size={16} /> Back to Insights
                    </Link>
                    <div className="relative z-10">
                        <span className="bg-gray-700 text-gray-100 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Methodology</span>
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4">
                            【2026年最新】Power Automate Desktop(PAD)<br className="hidden md:block" />
                            仕様書作成AI活用TIPSと「構造化解析」
                        </h1>
                        <div className="flex items-center gap-4 text-gray-300 text-sm">
                            <span>2026.02.01</span>
                            <span>•</span>
                            <span>10 min read</span>
                        </div>
                    </div>
                </div>

                {/* Content Body */}
                <div className="p-8 md:p-12 text-gray-800 leading-relaxed md:text-lg">

                    <p className="border-l-4 border-[#4B5563] pl-6 py-2 bg-gray-50 text-gray-700 italic mb-12">
                        2026年現在、Power Automate Desktop（PAD）の仕様書作成は、「フローのスクリーンショットを撮って説明を添える」という苦行ってから、<br />
                        <strong>「フローの構造をAIに読み込ませて自動生成させる」</strong>スマートな手法へと完全にシフトしています。
                    </p>

                    {/* Section: AI TIPS */}
                    <div className="space-y-12 mb-16">

                        {/* Level 1 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#374151] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-gray-200 text-[#374151] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                                標準機能「Copilotに説明を作成させる」で概要を自動化
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">2025年後半のアップデートにより、PADのコンソールおよびポータルサイト上でフローの概要を自動生成できるようになりました。</p>
                                <div className="bg-gray-50 p-4 rounded-md border border-gray-200 space-y-2 text-base">
                                    <div className="flex gap-2">
                                        <span className="font-bold text-gray-700 min-w-[60px]">TIPS:</span>
                                        <p>フローのプロパティ画面にある<strong className="text-gray-900">「Let Copilot create description」</strong>ボタンをクリックします。</p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="font-bold text-gray-700 min-w-[60px]">最新:</span>
                                        <p>単なる要約だけでなく、フロー内で使用されている<strong className="text-gray-900">「主なアクション」「使用変数」「外部アプリケーション名（Excel, Chrome等）」</strong>を箇条書きで抽出してくれるため、仕様書の「はじめに」にそのまま転用可能です。</p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Level 2 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#374151] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-gray-200 text-[#374151] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                                アクションの「テキストコピー」をAIに解析させる（詳細設計）
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">PADの最大の特徴は、アクションを選択して Ctrl + C を押すと、その中身がRobinスクリプト（テキスト）としてコピーできる点です。</p>
                                <ol className="list-decimal list-inside space-y-2 mb-4 ml-2">
                                    <li><strong>コピー:</strong> PADエディタで全アクションを選択し、コピーします。</li>
                                    <li><strong>AI指示:</strong> 「以下のPADアクションを解析し、入出力変数、条件分岐のロジック、例外処理の設定内容を詳細な仕様書形式でまとめて」と依頼します。</li>
                                    <li><strong>結果:</strong> 2026年のAIモデルは、PAD独自のスクリプト形式を完全に理解しているため、変数名から役割を推論し、正確なロジック説明を生成します。</li>
                                </ol>
                            </div>
                        </section>

                        {/* Level 3 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#374151] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-gray-200 text-[#374151] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                                「UI要素（セレクター）」の意味を言語化させる
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">PADの仕様書で最も難解なのが「どのボタンをクリックしているか」の定義です。</p>
                                <ul className="space-y-3">
                                    <li className="flex gap-2">
                                        <MousePointer size={18} className="text-gray-600 mt-1 flex-shrink-0" />
                                        <span><strong>最新手法:</strong> セレクターの構成（HTMLタグやIDなど）をAIに渡し、「このセレクターが操作している画面要素を、業務的な名称で推測して命名して」と指示します。</span>
                                    </li>
                                    <li className="flex gap-2">
                                        <CheckCircle size={18} className="text-green-600 mt-1 flex-shrink-0" />
                                        <span><strong>メリット:</strong> <code>div &gt; span:nth-child(2)</code> のような記述を、「請求書一覧画面の『承認』ボタン」といった読みやすい言葉に変換できます。</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        {/* Level 4 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#374151] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-gray-200 text-[#374151] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                                Mermaid.js で「処理フロー図」を自動生成
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">クラウドフローと同様、PADのロジックもテキストベースでMermaid記法のフローチャートに変換するのが2026年の標準です。</p>
                                <div className="bg-gray-800 text-gray-200 p-4 rounded font-mono text-sm mb-4">
                                    「コピーしたPADのアクションから、エラーハンドリングを含めた全体の処理フローをMermaid.js形式で図解してください。特にループ処理と条件分岐を明確にしてください。」
                                </div>
                                <p className="text-sm text-gray-600">修正不可能な「画像としてのフロー図」ではなく、後からAIで修正・更新可能な<strong>「コードとしての図解」</strong>を仕様書に埋め込めます。</p>
                            </div>
                        </section>

                        {/* Level 5 */}
                        <section>
                            <h2 className="text-xl font-bold text-[#374151] mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                                <span className="bg-gray-200 text-[#374151] w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                                M365 Copilot Word連携で「外部設計書」を完成させる
                            </h2>
                            <div className="pl-10">
                                <p className="mb-4">最後は、WordのCopilot（エージェントモード）を使って、バラバラの情報を一つの文書に統合します。</p>
                                <ol className="list-decimal list-inside space-y-2 text-base">
                                    <li>Wordで社内指定の「システム仕様書テンプレート」を開きます。</li>
                                    <li>Copilotに「上記で生成した処理概要、変数一覧、Mermaidのフロー図を、このテンプレートの各章に適切に配置して清書して」と指示します。</li>
                                    <li>Work IQにより、文脈も自動で補完され、数分でドラフトが完成します。</li>
                                </ol>
                            </div>
                        </section>

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
                    <h2 className="text-3xl font-black text-gray-900 mb-8 text-center text-[#374151]">
                        それでも、「手動」と「AI」には限界がある
                    </h2>

                    <div className="bg-red-50 border border-red-100 rounded-lg p-8 mb-12">
                        <h3 className="font-bold text-red-700 text-lg mb-4 flex items-center gap-2">
                            <AlertTriangle className="fill-red-100" />
                            AI生成における3つの落とし穴
                        </h3>
                        <p className="mb-6">
                            上記の手法は非常に強力ですが、以下の問題は解決されません。
                        </p>
                        <ul className="grid md:grid-cols-3 gap-6">
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">1. UI要素の誤認</h4>
                                <p className="text-sm text-gray-600">セレクター情報だけでは、画面上の正確な位置関係や、動的に変化する要素（Dynamic Selector）の意図までは読み取れません。</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">2. コピーの手間</h4>
                                <p className="text-sm text-gray-600">何十もあるフローを開いて、全選択して、コピーして、AIに貼り付ける。この手作業自体が属人化の温床となります。</p>
                            </li>
                            <li className="bg-white p-4 rounded shadow-sm">
                                <h4 className="font-bold text-gray-800 mb-2">3. 継続性の欠如</h4>
                                <p className="text-sm text-gray-600">フロー修正のたびにドキュメントを再生成するのはコストがかかり、形骸化します。</p>
                            </li>
                        </ul>
                    </div>

                    {/* Section: The Solution - Structural Analysis */}
                    <div className="mb-16">
                        <h2 className="text-2xl font-bold text-[#1F2937] mb-6 flex items-center gap-3">
                            <CheckCircle className="text-[#374151]" />
                            答えは「構造化解析」による完全自動化
                        </h2>
                        <p className="mb-6">
                            Operational Openerのアプローチは、PADのフロー定義ファイルやRobinスクリプトを直接解析し、構造化データとしてデータベース化します。<br />
                            <span className="font-bold text-[#374151]">Power Automate Desktop (PAD) にも完全対応可能です。</span>
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-100 p-6 rounded border border-gray-200">
                                <h3 className="font-bold text-gray-800 mb-2">Accuracy (100%の精度)</h3>
                                <p className="text-sm text-gray-700">PAD独自のUIセレクター情報や、例外処理（On Error）ブロックも正確に抽出。見落としがありません。</p>
                            </div>
                            <div className="bg-gray-100 p-6 rounded border border-gray-200">
                                <h3 className="font-bold text-gray-800 mb-2">Consistency (継続性)</h3>
                                <p className="text-sm text-gray-700">端末内のフローファイルを定期スキャンし、変更があれば自動でドキュメントを更新します。</p>
                            </div>
                        </div>
                    </div>

                    {/* Strong CTA */}
                    <div className="bg-[#4B5563] text-white rounded-xl p-8 md:p-12 text-center shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10">
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">デスクトップフローも、「資産」に変える。</h2>
                            <p className="mb-8 text-gray-200 max-w-2xl mx-auto">
                                <span className="font-bold underline decoration-blue-400 decoration-2 underline-offset-4">Power Automate Desktop (PAD) も対応可能。</span><br />
                                クラウドフローと同様に、ブラックボックス化したPADフローの解析・仕様書化を自動化します。
                            </p>
                            <Link href="/program" className="inline-flex items-center gap-2 bg-white text-[#374151] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-md">
                                <Monitor size={20} />
                                プログラム詳細を見る（PAD対応）
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
                        "headline": "【2026年最新】Power Automate Desktop(PAD)仕様書作成：AI活用TIPSと構造化解析",
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
