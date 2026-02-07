import Link from "next/link";
import { ArrowLeft, Users, MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
    title: "About Us | Operational Opener",
    description: "止まらない、説明できる業務へ。属人化した業務プロセスを「企業の資産」に戻すための取り組み。",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <div className="w-full max-w-4xl bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">

                {/* Header Section */}
                <div className="bg-[#1E3A8A] text-white p-8 md:p-12 text-center">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors text-sm font-medium absolute top-8 left-8">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-8">オペレーショナル・オープナーについて</h1>
                    <p className="text-xl md:text-2xl font-light text-blue-100 tracking-wide">
                        止まらない、説明できる業務へ。
                    </p>
                </div>

                <div className="p-8 md:p-16 text-gray-700 leading-relaxed space-y-16">

                    {/* Introduction */}
                    <section className="text-center md:text-left">
                        <p className="text-lg mb-6">
                            オペレーショナル・オープナーは、<br className="hidden md:inline" />
                            <span className="font-bold text-gray-900">属人化した業務プロセスを、誰でも説明できる「業務資産」に戻す</span><br className="hidden md:inline" />
                            ことを目的とした取り組みです。
                        </p>
                        <p className="mb-6">
                            私たちが向き合うのは、新しいツールや派手な自動化ではありません。
                        </p>
                        <p className="font-medium text-gray-900 bg-gray-50 p-4 rounded inline-block">
                            すでに現場で動いている、しかし「作った人がいないと分からない」<br />
                            そんな業務の中身です。
                        </p>
                    </section>

                    {/* Why */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-2 mb-6 inline-block">
                            なぜ、この取り組みを始めたのか
                        </h2>
                        <div className="space-y-4">
                            <p>Power AutomateやSharePointをはじめとする業務自動化は、多くの現場で成果を上げてきました。</p>
                            <p>一方で、次のような状況も数多く見てきました。</p>
                            <ul className="list-disc pl-6 space-y-2 bg-red-50 p-6 rounded-lg text-gray-800">
                                <li>自動化した業務が、特定の人にしか直せない</li>
                                <li>仕様書がなく、引き継ぎができない</li>
                                <li>「なぜこうなっているのか」を誰も説明できない</li>
                            </ul>
                            <p className="pt-2">
                                これはツールの問題ではありません。<br />
                                業務の判断や設計意図が、組織に残っていないことが原因です。
                            </p>
                            <p className="font-bold">
                                オペレーショナル・オープナーは、この構造的な問題に向き合うために生まれました。
                            </p>
                        </div>
                    </section>

                    {/* Philosophy */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-2 mb-6 inline-block">
                            私たちの考え方
                        </h2>
                        <div className="space-y-4">
                            <p>私たちは、次の前提に立っています。</p>
                            <div className="grid md:grid-cols-3 gap-4 text-center my-6">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100 font-bold text-[#1E3A8A]">業務は、人と一緒に<br />消えてはいけない</div>
                                <div className="bg-blue-50 p-4 rounded border border-blue-100 font-bold text-[#1E3A8A]">自動化は、<br />動くだけでは不十分</div>
                                <div className="bg-blue-50 p-4 rounded border border-blue-100 font-bold text-[#1E3A8A]">「説明できること」は、<br />運用の最低条件</div>
                            </div>
                            <p>
                                だからこそ、フローを作り直す前に、まず「何が起きているのか」を言語化する。<br />
                                変更する前に、「なぜそうなっているのか」を残す。
                            </p>
                            <p className="font-bold">それが、業務停止を防ぐ最短ルートだと考えています。</p>
                        </div>
                    </section>

                    {/* Not Doing */}
                    <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-600 mb-4">私たちがやらないこと</h2>
                        <p className="mb-4">オペレーショナル・オープナーは、次のことを目的にはしていません。</p>
                        <ul className="space-y-2 text-gray-600 mb-6">
                            <li className="flex items-center gap-2"><span className="text-gray-400">×</span> 新規フローの大量開発</li>
                            <li className="flex items-center gap-2"><span className="text-gray-400">×</span> ツール導入ありきの提案</li>
                            <li className="flex items-center gap-2"><span className="text-gray-400">×</span> 現場を置き去りにした最適化</li>
                        </ul>
                        <p className="font-bold text-gray-800">重視しているのは、今ある業務が、明日も安全に使えることです。</p>
                    </section>

                    {/* Value */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-2 mb-6 inline-block">
                            提供している価値
                        </h2>
                        <div className="space-y-4">
                            <p>私たちが提供するのは、単なるドキュメント作成ではありません。</p>
                            <ul className="space-y-3 font-bold text-lg text-[#1E3A8A]">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span> 判断ロジックが分かる仕様</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span> 変更理由が追える履歴</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span> 誰が見ても説明できる構造</li>
                            </ul>
                            <p className="pt-4">これらを通じて、業務を <strong className="marker:text-blue-500 text-xl">「属人作業」から「組織の資産」</strong>へと変えていきます。</p>
                        </div>
                    </section>

                    {/* Operator */}
                    <section className="flex flex-col md:flex-row gap-8 items-start border-t border-gray-200 pt-10">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                            <Users size={40} className="text-gray-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">運営者について</h3>
                            <p className="text-sm text-gray-500 mb-4">皆川（みながわ） / オペレーショナル・オープナー 運営者</p>
                            <div className="text-gray-700 space-y-3">
                                <p>
                                    業務システムの設計・運用・改善に長年携わる中で、「技術的には正しいが、引き継げない仕組み」が現場に残り続ける現実に強い課題意識を持つ。
                                </p>
                                <p>
                                    ツールやAIそのものではなく、業務判断がどう残るかに焦点を当てた支援を行っている。
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="text-center space-y-6 pt-8">
                        <h2 className="text-2xl font-serif text-gray-800">最後に</h2>
                        <div className="space-y-2 text-lg italic text-gray-600">
                            <p>もし今、</p>
                            <p>「この業務、誰が説明できるだろう？」</p>
                            <p>「作った人がいなくなったら、どうなるだろう？」</p>
                        </div>
                        <p>
                            そんな疑問が少しでも浮かんだなら、それは十分なサインです。<br />
                            問題が起きる前に、業務を開いておく。
                        </p>
                        <p className="font-bold text-xl text-[#1E3A8A]">
                            それが、オペレーショナル・オープナーの考える<br />
                            “業務の当たり前”です。
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <div className="bg-[#1E3A8A] text-white rounded-xl p-8 text-center shadow-lg mt-12">
                        <h3 className="text-2xl font-bold mb-4">Contact</h3>
                        <p className="mb-8 text-blue-100">
                            業務の現状を整理するだけでも構いません。<br />
                            まずは一度、状況を聞かせてください。
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-md">
                            <MessageSquare size={20} />
                            お問い合わせフォームへ
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
}
