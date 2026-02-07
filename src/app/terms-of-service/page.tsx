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
                            この利用規約（以下、「本規約」といいます）は、Operational Opener（以下、「当方」といいます）が提供するウェブサイトおよびサービス（以下、「本サービス」といいます）の利用条件を定めるものです。<br />
                            ユーザーは、本サービスを利用することにより、本規約に同意したものとみなされます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">2. 知的財産権</h2>
                        <p>
                            本サービス上のすべてのコンテンツ（文章、画像、動画、ロゴ、プログラム等）に関する著作権、商標権、その他の知的財産権は、当方または正当な権利を有する第三者に帰属します。<br />
                            ユーザーは、私的使用など法律で認められる範囲を超えて、これらを無断で複製、転載、改変、配布することはできません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">3. 禁止事項</h2>
                        <p>ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。</p>
                        <ul className="list-disc pl-5 space-y-1 bg-red-50 p-4 rounded-md text-red-800">
                            <li>法令または公序良俗に違反する行為</li>
                            <li>犯罪行為に関連する行為</li>
                            <li>当方のサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                            <li>当方のサービスの運営を妨害するおそれのある行為</li>
                            <li>他のユーザーに関する個人情報等を収集または蓄積する行為</li>
                            <li>不正アクセスをし、またはこれを試みる行為</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">4. 免責事項</h2>
                        <p>
                            当方は、本サービスに掲載する情報の正確性について細心の注意を払っておりますが、その内容の完全性、正確性、安全性等について保証するものではありません。<br />
                            ユーザーが本サービスを利用したことにより生じた損害について、当方は一切の責任を負いません。<br />
                            また、当方は予告なしに本サービスの内容を変更し、または提供を中止することがあります。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">5. 準拠法・裁判管轄</h2>
                        <p>
                            本規約の解釈にあたっては、日本法を準拠法とします。<br />
                            本サービスに関して紛争が生じた場合には、当方の所在地を管轄する裁判所を専属的合意管轄とします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">6. お問い合わせ</h2>
                        <p>
                            本規約に関するお問い合わせは、お問い合わせフォームよりお願いいたします。
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
