import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-white border-t border-card-border mt-auto">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 bg-gray-700 rounded-md flex items-center justify-center text-white text-xs font-bold">
                                Op
                            </div>
                            <span className="font-bold text-gray-800">Operational Opener</span>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed">
                            止まらない、説明できる業務へ。<br />
                            属人化した自動化を、会社資産に変える。
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/program" className="hover:text-brand-blue">Operational Continuity</Link>
                            </li>
                            <li>
                                <Link href="/powerautomate" className="hover:text-brand-blue">Power Automate Spec</Link>
                            </li>
                            <li>
                                <Link href="/sharepoint" className="hover:text-brand-blue">SharePoint Design</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/insights" className="hover:text-brand-blue">Insights</Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-brand-blue">About Us</Link>
                            </li>
                            <li className="pl-3 text-sm text-gray-500">
                                <Link href="/about-en" className="hover:text-brand-blue flex items-center gap-1">
                                    └ English
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <Link href="/privacy-policy" className="hover:text-brand-blue">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:text-brand-blue">Terms of Service</Link>
                            </li>
                            <li>
                                <Link href="/legal-notice" className="hover:text-brand-blue">特定商取引法に基づく表記</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-100 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <p>© 2026 Operational Opener. All rights reserved.</p>
                    <p>Designed with Operational Clarity.</p>
                </div>
            </div>
        </footer>
    );
}
