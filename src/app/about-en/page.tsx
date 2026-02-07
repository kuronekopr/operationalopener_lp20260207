import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MessageSquare, ArrowRight } from "lucide-react";

export const metadata = {
    title: "About Us (English) | Operational Opener",
    description: "Operational Opener: Turning person-dependent operational processes into explainable, reusable assets.",
};

export default function AboutEnPage() {
    return (
        <div className="min-h-screen bg-[#F3F4F6] py-12 px-4 md:px-8 flex justify-center">
            <div className="w-full max-w-4xl bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">

                {/* Header Section */}
                <div className="bg-[#1E3A8A] text-white p-8 md:p-12 text-center relative">
                    <Link href="/" className="inline-flex items-center gap-2 text-blue-200 hover:text-white mb-6 transition-colors text-sm font-medium absolute top-8 left-8">
                        <ArrowLeft size={16} /> Back to Home
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 mt-8">About Operational Opener</h1>
                    <p className="text-xl md:text-2xl font-light text-blue-100 tracking-wide">
                        Make your operations explainable — and resilient.
                    </p>
                </div>

                <div className="p-8 md:p-16 text-gray-700 leading-relaxed space-y-16">

                    {/* Introduction */}
                    <section className="text-center md:text-left">
                        <p className="text-lg mb-6">
                            Operational Opener is an initiative focused on <span className="font-bold text-gray-900">turning person-dependent operational processes into explainable, reusable operational assets.</span>
                        </p>
                        <p className="mb-6">
                            We do not chase new tools or flashy automation.
                        </p>
                        <p className="font-medium text-gray-900 bg-gray-50 p-4 rounded inline-block">
                            What we work on are operations that already run in the real world —<br />
                            but only make sense to the people who built them.
                        </p>
                    </section>

                    {/* Why */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-2 mb-6 inline-block">
                            Why this initiative exists
                        </h2>
                        <div className="space-y-4">
                            <p>Automation platforms such as Power Automate and SharePoint have delivered real value to many organizations.</p>
                            <p>At the same time, we have repeatedly seen situations like these:</p>
                            <ul className="list-disc pl-6 space-y-2 bg-red-50 p-6 rounded-lg text-gray-800">
                                <li>Automated processes that only one person can fix</li>
                                <li>No specifications or documentation for handover</li>
                                <li>No one able to explain why the process works the way it does</li>
                            </ul>
                            <p className="pt-2">
                                This is not a tooling problem.<br />
                                It happens when operational decisions and design intent are not retained by the organization.
                            </p>
                            <p className="font-bold">
                                Operational Opener exists to address this structural issue.
                            </p>
                        </div>
                    </section>

                    {/* Perspective */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-2 mb-6 inline-block">
                            Our perspective
                        </h2>
                        <div className="space-y-4">
                            <p>We operate on a few simple principles:</p>
                            <div className="grid md:grid-cols-3 gap-4 text-center my-6">
                                <div className="bg-blue-50 p-4 rounded border border-blue-100 font-bold text-[#1E3A8A]">Operations should not disappear when people leave</div>
                                <div className="bg-blue-50 p-4 rounded border border-blue-100 font-bold text-[#1E3A8A]">Automation that merely “runs” is not enough</div>
                                <div className="bg-blue-50 p-4 rounded border border-blue-100 font-bold text-[#1E3A8A]">Explainability is a minimum requirement</div>
                            </div>
                            <p>
                                That is why we focus on:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Making existing automation understandable before changing it</li>
                                <li>Capturing why decisions were made, not just how things run</li>
                            </ul>
                            <p className="font-bold mt-4">We believe this is the most effective way to prevent operational downtime.</p>
                        </div>
                    </section>

                    {/* Not Doing */}
                    <section className="bg-gray-50 p-8 rounded-xl border border-gray-200">
                        <h2 className="text-xl font-bold text-gray-600 mb-4">What we do not aim to do</h2>
                        <p className="mb-4">Operational Opener is not about:</p>
                        <ul className="space-y-2 text-gray-600 mb-6">
                            <li className="flex items-center gap-2"><span className="text-gray-400">×</span> Mass-producing new workflows</li>
                            <li className="flex items-center gap-2"><span className="text-gray-400">×</span> Tool-first or vendor-driven proposals</li>
                            <li className="flex items-center gap-2"><span className="text-gray-400">×</span> Optimization that ignores on-the-ground reality</li>
                        </ul>
                        <p className="font-bold text-gray-800">Our priority is simple: making sure today’s operations are still safe and understandable tomorrow.</p>
                    </section>

                    {/* Value */}
                    <section>
                        <h2 className="text-2xl font-bold text-[#1E3A8A] border-b-2 border-[#1E3A8A] pb-2 mb-6 inline-block">
                            The value we provide
                        </h2>
                        <div className="space-y-4">
                            <p>What we deliver is more than documentation.</p>
                            <ul className="space-y-3 font-bold text-lg text-[#1E3A8A]">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span> Specifications that explain decision logic</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span> Change history that preserves context</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 bg-[#1E3A8A] rounded-full"></span> Structures that anyone responsible can explain</li>
                            </ul>
                            <p className="pt-4">Through this, operations move from <strong className="marker:text-blue-500 text-xl">individual know-how to organizational assets.</strong></p>
                        </div>
                    </section>

                    {/* Operator */}
                    <section className="flex flex-col md:flex-row gap-8 items-start border-t border-gray-200 pt-10">
                        <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                            <Image
                                src="/minagawa.jpg"
                                alt="Minagawa"
                                fill
                                className="object-cover object-[50%_20%]"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">About the operator</h3>
                            <p className="text-sm text-gray-500 mb-4">Minagawa / Operator, Operational Opener</p>
                            <div className="text-gray-700 space-y-3">
                                <p>
                                    With extensive experience in designing, operating, and improving business systems, Minagawa has consistently encountered systems that were technically correct but impossible to hand over.
                                </p>
                                <p>
                                    Rather than focusing on tools or AI themselves, his work centers on how operational decisions can be preserved over time.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="text-center space-y-6 pt-8">
                        <h2 className="text-2xl font-serif text-gray-800">In closing</h2>
                        <div className="space-y-2 text-lg italic text-gray-600">
                            <p>If you find yourself wondering:</p>
                            <p>“Who can explain this process?”</p>
                            <p>“What happens if the person who built this leaves?”</p>
                        </div>
                        <p>
                            that question alone is enough reason to act.<br />
                            Open your operations before problems surface.
                        </p>
                        <p className="font-bold text-xl text-[#1E3A8A]">
                            That is what Operational Opener considers<br />
                            a normal, responsible way to run operations.
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <div className="bg-[#1E3A8A] text-white rounded-xl p-8 text-center shadow-lg mt-12 mb-12">
                        <h3 className="text-2xl font-bold mb-4">Contact</h3>
                        <p className="mb-8 text-blue-100">
                            You don’t need a clear plan yet.<br />
                            If you simply want to clarify the current state of your operations, we’re happy to listen.
                        </p>
                        <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#1E3A8A] px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-md">
                            <MessageSquare size={20} />
                            Go to Contact Form
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Legal / Disclosure */}
                    <section className="border-t border-gray-200 pt-8 text-sm text-gray-500">
                        <h3 className="font-bold text-gray-700 mb-2">Legal / Disclosure (recommended)</h3>
                        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                            <div className="grid grid-cols-[120px_1fr]">
                                <dt>Operator:</dt>
                                <dd>Operational Opener (Sole Proprietorship)</dd>
                            </div>
                            <div className="grid grid-cols-[120px_1fr]">
                                <dt>Representative:</dt>
                                <dd>Minagawa</dd>
                            </div>
                            <div className="grid grid-cols-[120px_1fr]">
                                <dt>Location:</dt>
                                <dd>Japan (prefecture-level disclosure)</dd>
                            </div>
                            <div className="grid grid-cols-[120px_1fr]">
                                <dt>Contact:</dt>
                                <dd><Link href="/contact" className="underline hover:text-[#1E3A8A]">Contact form</Link></dd>
                            </div>
                        </dl>
                    </section>

                </div>
            </div>
        </div>
    );
}
