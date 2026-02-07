import Link from "next/link";
import { ArrowLeft, Scale, FileText } from "lucide-react";

export const metadata = {
    title: "特定商取引法に基づく表記 | Operational Opener",
    description: "Operational Openerの特定商取引法に基づく表記。",
};

export default function LegalNoticePage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <div className="w-full max-w-3xl bg-white shadow-sm rounded-lg border border-gray-200 p-8 md:p-12">

                <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#1E3A8A] mb-8 transition-colors text-sm font-medium">
                    <ArrowLeft size={16} /> Back to Home
                </Link>

                <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                    <FileText className="text-[#1E3A8A]" />
                    特定商取引法に基づく表記
                </h1>

                <div className="space-y-8 text-gray-700">

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">事業者名</h2>
                        <p className="text-lg font-medium text-gray-900">Operational Opener（オペレーショナル・オープナー）</p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">運営者</h2>
                        <p className="text-lg font-medium text-gray-900">皆川（個人事業主）</p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">所在地</h2>
                        <p className="text-lg font-medium text-gray-900">日本</p>
                        <p className="text-sm text-gray-500 mt-1">※請求があった場合には、遅滞なく開示いたします。</p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">連絡先</h2>
                        <p className="mb-2">お問い合わせは、以下のフォームよりご連絡ください。<br />内容を確認のうえ、必要に応じて返信いたします。</p>
                        <Link href="/contact" className="inline-flex items-center text-[#1E3A8A] font-bold underline hover:text-blue-800">
                            お問い合わせフォームへ
                        </Link>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">サービス内容</h2>
                        <p>
                            業務プロセスおよび業務自動化に関する整理、助言、文書化支援、<br />
                            ならびにこれらに付随するコンサルティングサービス。
                        </p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">費用について</h2>
                        <p>
                            提供するサービスの内容および条件により異なります。<br />
                            具体的な費用については、事前に内容を整理したうえで個別にご案内します。
                        </p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">お支払い方法・時期</h2>
                        <p>
                            お支払い方法および時期については、<br />
                            個別の契約内容またはご案内時に明示します。
                        </p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">サービス提供時期</h2>
                        <p>
                            サービスの提供開始時期は、<br />
                            内容の確定および双方の合意後となります。
                        </p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">キャンセル・変更について</h2>
                        <p>
                            サービスの性質上、提供開始後のキャンセルや返金については、原則としてお受けしておりません。<br />
                            ただし、個別の事情については誠意をもって協議いたします。
                        </p>
                    </div>

                    <div className="border-b border-gray-100 pb-6">
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">免責事項</h2>
                        <p className="mb-2">
                            本サービスは、業務上の判断や改善に関する助言および支援を行うものであり、特定の成果や効果を保証するものではありません。
                        </p>
                        <p>
                            最終的な判断およびその結果については、利用者自身の責任において行われるものとします。
                        </p>
                    </div>

                    <div>
                        <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">その他</h2>
                        <p>
                            本表記に定めのない事項については、<br />
                            利用規約および個別に合意した条件に従うものとします。
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
