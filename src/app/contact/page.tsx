"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Trash2, Mail, User, Building, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
    const [contacts, setContacts] = useState([
        { department: "", name: "", email: "", phone: "" }
    ]);
    const [submitted, setSubmitted] = useState(false);

    // Add new contact field
    const addContact = () => {
        setContacts([...contacts, { department: "", name: "", email: "", phone: "" }]);
    };

    // Remove contact field
    const removeContact = (index: number) => {
        if (contacts.length > 1) {
            const newContacts = [...contacts];
            newContacts.splice(index, 1);
            setContacts(newContacts);
        }
    };

    // Update contact field
    const updateContact = (index: number, field: string, value: string) => {
        const newContacts = [...contacts];
        // @ts-ignore
        newContacts[index][field] = value;
        setContacts(newContacts);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Extract plain values from form elements
        const form = e.target as HTMLFormElement;
        const companyName = (form.elements.namedItem('companyName') as HTMLInputElement).value;
        const comment = (form.elements.namedItem('comment') as HTMLTextAreaElement).value;

        // Apps checks
        const checkedApps = Array.from(form.querySelectorAll('input[type="checkbox"]:checked'))
            .map(cb => (cb as HTMLInputElement).nextElementSibling?.textContent)
            .filter(Boolean)
            .join(', ');

        const body = `
【会社名】
${companyName}

【担当者】
${contacts.map(c => `${c.name} (${c.department} / ${c.email})`).join('\n')}

【対象アプリ】
${checkedApps}

【ご相談内容】
${comment}
        `.trim();

        // Formsubmit.co endpoint
        const endpoint = "https://formsubmit.co/ajax/minagawa@operationalopener.com";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: "【Web問合せ】無料診断のお申し込み",
                    _replyto: contacts[0]?.email || "",
                    message: body
                })
            });

            if (response.ok) {
                setSubmitted(true);
            } else {
                alert("送信に失敗しました。時間をおいて再度お試しください。");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("送信エラーが発生しました。");
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-[#E5E7EB] flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-white border border-gray-400 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] p-8 text-center">
                    <div className="flex justify-center mb-6 text-green-600">
                        <CheckCircle size={64} />
                    </div>
                    <h2 className="text-2xl font-bold mb-4 text-[#1E3A8A]">お問い合わせありがとうございます</h2>
                    <p className="text-gray-700 mb-8">
                        内容を確認の上、担当者（皆川）より24時間以内に<br />
                        日程調整のご連絡を差し上げます。
                    </p>
                    <Link href="/" className="px-6 py-2 bg-[#1E3A8A] text-white font-bold shadow hover:bg-blue-800 transition-colors">
                        トップページへ戻る
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#E5E7EB] py-8 px-4 flex justify-center items-start">
            <div className="w-full max-w-4xl legacy-window bg-[#F3F4F6] flex flex-col shadow-xl">

                {/* Title Bar */}
                <div className="bg-[#1E3A8A] text-white px-3 py-1.5 flex items-center justify-between select-none shadow-sm">
                    <div className="flex items-center gap-2">
                        <Mail size={16} />
                        <span className="font-bold text-sm tracking-wide">Contact Form - Operational Opener</span>
                    </div>
                    <Link href="/" className="hover:bg-white/20 p-1 rounded">
                        <ArrowLeft size={16} />
                    </Link>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 flex flex-col gap-10">

                    {/* Greeting Section */}
                    <div className="bg-white border-l-4 border-[#1E3A8A] p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden border-2 border-white shadow-md relative">
                                <Image
                                    src="/minagawa.jpg"
                                    alt="皆川代表"
                                    fill
                                    className="object-cover object-[50%_20%]"
                                />
                            </div>
                            <div>
                                <h2 className="font-bold text-lg text-[#1E3A8A] mb-1">Operational Opener 代表：皆川</h2>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    お問い合わせありがとうございます。<br />
                                    「自動化したはずの業務が、逆に属人化している」——そんな課題に直面されていませんか？<br />
                                    <span className="font-bold text-[#1E3A8A] bg-blue-50 px-1">30分の無料診断オンライン会議</span>にて、貴社の現状をお伺いし、最適な解決策（構造化解析・標準化）をご提案させてください。<br />
                                    <span className="block mt-2 text-xs text-gray-500 font-mono">
                                        Email: <a href="mailto:minagawa@operationalopener.com" className="underline hover:text-[#1E3A8A]">minagawa@operationalopener.com</a>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-8">

                        {/* Company Name */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                <Building size={16} /> 貴社名 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                required
                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-shadow"
                                placeholder="株式会社サンプル"
                            />
                        </div>

                        {/* Dynamic Contact Fields */}
                        <div className="bg-white p-6 border border-gray-300 rounded shadow-sm relative">
                            <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2 border-b pb-2">
                                <User size={16} /> ご担当者様情報
                                <span className="text-xs font-normal text-gray-500 ml-2">※複数名でのご参加も歓迎します</span>
                            </h3>

                            <div className="space-y-6">
                                {contacts.map((contact, index) => (
                                    <div key={index} className="relative bg-gray-50 p-4 rounded border border-gray-200 animate-fadeIn">
                                        {contacts.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeContact(index)}
                                                className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition-colors p-1"
                                                title="削除"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="部署名"
                                                    value={contact.department}
                                                    onChange={(e) => updateContact(index, 'department', e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded text-sm focus:border-[#1E3A8A] outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder="お名前 *"
                                                    required
                                                    value={contact.name}
                                                    onChange={(e) => updateContact(index, 'name', e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded text-sm focus:border-[#1E3A8A] outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    placeholder="メールアドレス *"
                                                    required
                                                    value={contact.email}
                                                    onChange={(e) => updateContact(index, 'email', e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded text-sm focus:border-[#1E3A8A] outline-none"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="tel"
                                                    placeholder="電話番号（任意）"
                                                    value={contact.phone}
                                                    onChange={(e) => updateContact(index, 'phone', e.target.value)}
                                                    className="w-full p-2 border border-gray-300 rounded text-sm focus:border-[#1E3A8A] outline-none"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={addContact}
                                className="mt-4 flex items-center gap-2 text-[#1E3A8A] text-sm font-bold hover:bg-blue-50 px-3 py-2 rounded transition-colors"
                            >
                                <Plus size={16} /> 担当者を追加する
                            </button>
                        </div>

                        {/* Target Apps */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <CheckCircle size={16} /> 課題を感じている対象（複数選択可）
                            </label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {[
                                    "Power Automate (Cloud)",
                                    "Power Automate Desktop",
                                    "Power Apps",
                                    "SharePoint / Dataverse"
                                ].map((app) => (
                                    <label key={app} className="flex items-center gap-3 p-3 bg-white border border-gray-300 rounded hover:border-[#1E3A8A] cursor-pointer transition-colors shadow-sm">
                                        <input type="checkbox" className="w-4 h-4 text-[#1E3A8A] rounded focus:ring-0" />
                                        <span className="text-sm text-gray-700 font-medium">{app}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Comment */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                                <MessageSquare size={16} /> ご相談内容・コメント
                            </label>
                            <textarea
                                name="comment"
                                rows={4}
                                className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none transition-shadow"
                                placeholder="例：作成者が退職してしまい、エラーが出ているフローの修正ができずに困っている。仕様書を作成してほしいなど。"
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center pt-4">
                            <button
                                type="submit"
                                className="bg-[#1E3A8A] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:bg-blue-800 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                            >
                                <Send size={20} />
                                無料診断を申し込む
                            </button>
                            <p className="text-xs text-gray-500 mt-4">
                                送信後、自動返信メールが届きます。<br />
                                プライバシーポリシーに同意の上、送信してください。
                            </p>
                        </div>

                    </form>
                </div>

                {/* Status Bar */}
                <div className="bg-[#E5E7EB] border-t border-gray-300 px-2 py-1 flex justify-between text-xs text-gray-600 font-mono mt-auto">
                    <span>Ready for inquiry...</span>
                    <span>Secure Connection</span>
                </div>
            </div>
        </div>
    );
}
