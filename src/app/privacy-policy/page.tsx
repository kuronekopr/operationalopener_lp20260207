import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
    title: "Privacy Policy | Operational Opener",
    description: "Operational Openerにおける個人情報の取り扱いについて。",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <div className="w-full max-w-3xl bg-white shadow-sm rounded-lg border border-gray-200 p-8 md:p-12">

                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1E3A8A] mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-3xl font-bold text-gray-900 mb-2 flex items-center gap-3">
                    <Shield className="text-[#1E3A8A]" />
                    Privacy Policy
                </h1>
                <p className="text-sm text-gray-500 mb-8 border-b pb-4">Last Updated: February 1, 2026</p>

                <div className="prose prose-slate max-w-none text-gray-700 space-y-8">
                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">1. 基本方針</h2>
                        <p>
                            Operational Opener（以下、「当方」といいます）は、個人事業主として提供するサービス（以下、「本サービス」といいます）において、ユーザーの個人情報を適切に取り扱うことを重要な責務と考え、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます）を定めます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">2. 収集する個人情報</h2>
                        <p>当方は、お問い合わせフォームの利用や本サービスの提供を通じて、以下の個人情報を取得する場合があります。</p>
                        <ul className="list-disc pl-5 space-y-1 bg-gray-50 p-4 rounded-md">
                            <li>氏名、会社名、部署名</li>
                            <li>メールアドレス、電話番号</li>
                            <li>お問い合わせ内容に含まれる情報</li>
                            <li>その他、本サービスの提供に必要な情報</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">3. 利用目的</h2>
                        <p>当方は、取得した個人情報を以下の目的の範囲内で利用します。</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>お問い合わせへの回答および連絡</li>
                            <li>本サービスの提供および運営</li>
                            <li>本サービスに関するご案内や情報提供</li>
                            <li>個人を特定できない形式での統計データの作成</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">4. 個人情報の第三者提供</h2>
                        <p>
                            当方は、法令に基づく場合を除き、あらかじめユーザーの同意を得ることなく、個人情報を第三者に提供することはありません。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">5. 業務委託先の利用</h2>
                        <p>
                            当方は、業務の円滑な遂行のため、個人情報の取扱いを外部サービス事業者に委託する場合があります。<br />
                            この場合、当方は適切な委託先を選定し、個人情報が適切に管理されるよう必要な監督を行います。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">6. 安全管理措置</h2>
                        <p>
                            当方は、個人情報の漏洩、滅失またはき損の防止その他の安全管理のために、必要かつ適切な措置を講じます。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">7. プライバシーポリシーの変更</h2>
                        <p>
                            本ポリシーの内容は、法令の改正や本サービスの内容変更等に応じて、予告なく変更されることがあります。<br />
                            変更後のプライバシーポリシーは、本ページに掲載した時点で効力を生じるものとします。
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-gray-900 border-l-4 border-[#1E3A8A] pl-3 mb-4">8. お問い合わせ窓口</h2>
                        <p>
                            本ポリシーに関するお問い合わせは、以下の窓口までお願いいたします。
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
