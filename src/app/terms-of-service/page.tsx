import Link from "next/link";
import { ArrowLeft, Scale } from "lucide-react";

export const metadata = {
    title: "Terms of Service | Operational Opener",
    description: "Operational Openerの利用規約について。",
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <div className="w-full max-w-3xl bg-white shadow-sm rounded-lg border border-gray-200 p-8 md:p-12">

                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1E3A8A] mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <Scale className="text-[#1E3A8A]" />
                    Terms of Service
                </h1>
                <p className="text-sm text-gray-500 mb-8 border-b pb-4">Last Updated: February 1, 2026</p>

                <div className="prose prose-slate max-w-none text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">1. 利用規約の適用</h2>
                        <p>
                            この利用規約（以下、「本規約」といいます）は、Operational Opener（以下、「当方」といいます）が個人事業主として提供するウェブサイトおよび各種サービス（以下、「本サービス」といいます）の利用条件を定めるものです。<br />
                            ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">2. 知的財産権</h2>
                        <p>
                            本サービス上に掲載される文章、画像、資料、ロゴその他のコンテンツに関する著作権、商標権その他の知的財産権は、当方または正当な権利を有する第三者に帰属します。<br />
                            ユーザーは、法令により認められる場合を除き、当方の事前の承諾なく、これらを複製、転載、改変、配布することはできません。
                        </p>
                        <p className="mt-4 bg-gray-50 p-4 rounded text-sm">
                            なお、本サービスを通じて提供される個別の成果物（仕様書、レポート、助言内容等）の取扱いについては、別途定める契約条件がある場合には、当該条件が優先されます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">3. 禁止事項</h2>
                        <p>ユーザーは、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
                        <ul className="list-disc pl-5 space-y-1 bg-red-50 p-4 rounded-md text-red-800">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為またはこれに関連する行為</li>
                            <li>当方または第三者の権利・利益を侵害する行為</li>
                            <li>本サービスの運営を妨害するおそれのある行為</li>
                            <li>不正アクセス、またはこれを試みる行為</li>
                            <li>その他、当方が不適切と判断する行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">4. 免責事項</h2>
                        <p>
                            当方は、本サービスにおいて提供する情報、助言、資料等について、その正確性、完全性、有用性、特定の目的への適合性を保証するものではありません。
                        </p>
                        <p className="mt-2">
                            本サービスの利用に基づく業務上の判断、意思決定およびその結果については、すべてユーザー自身の責任において行われるものとし、当方はこれにより生じた損害について一切の責任を負いません。
                        </p>
                        <p className="mt-2 text-gray-500 text-sm">
                            また、当方は、予告なく本サービスの内容を変更、停止または中止することがあります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">5. 準拠法・裁判管轄</h2>
                        <p>
                            本規約の解釈および適用にあたっては、日本法を準拠法とします。<br />
                            本サービスに関連して当方とユーザーとの間に生じた紛争については、当方の所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">6. お問い合わせ</h2>
                        <p>
                            本規約に関するお問い合わせは、当方のお問い合わせフォームよりお願いいたします。
                        </p>
                        <div className="mt-4">
                            <Link href="/contact" className="text-[#1E3A8A] font-bold underline hover:text-blue-800">
                                お問い合わせフォームへ
                            </Link>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
