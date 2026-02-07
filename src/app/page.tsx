import Link from "next/link";
import { ArrowRight, Terminal, Minimize, Maximize, X, Shield, FileText, Database, Search, MessageSquare } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-8 flex items-center justify-center">
      {/* Main App Container */}
      <div className="w-full max-w-4xl legacy-window overflow-hidden flex flex-col min-h-[600px]">
        {/* Window Title Bar */}
        <div className="bg-[#1E3A8A] text-white px-3 py-1.5 flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <Terminal size={16} />
            <span className="font-bold text-sm tracking-wide">Operational Opener ver 2026.02</span>
          </div>
          <div className="flex items-center gap-1">
            <Link href="/program" className="p-1 hover:bg-red-500 rounded-sm transition-colors" aria-label="Close">
              <X size={14} />
            </Link>
          </div>
        </div>

        {/* Menu Bar (Visual Only) */}
        <div className="bg-[#E5E7EB] border-b border-gray-400 px-2 py-1 flex items-center gap-4 text-sm text-gray-700 select-none">
          <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-pointer">File</span>
          <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-pointer">Edit</span>
          <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-pointer">View</span>
          <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-pointer">Tools</span>
          <span className="hover:bg-gray-300 px-2 py-0.5 rounded cursor-pointer">Help</span>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-white p-6 md:p-12 md:flex md:gap-12 items-center">
          {/* Left Column: Text */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">


              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] leading-tight">
                止まらない、<br />
                説明できる業務へ。
              </h1>

              <div className="space-y-2 text-gray-700 font-medium">
                <p>Power Automateで自動化した業務。</p>
                <p>作った人がいなくなったら、<br />説明できますか？</p>
              </div>


            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/program" className="legacy-button flex items-center gap-2 font-bold px-4 py-2">
                <Shield size={16} />
                プログラム詳細
              </Link>
              <Link href="/insights" className="legacy-button flex items-center gap-2 px-4 py-2">
                <FileText size={16} />
                Insightsを読む
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Metaphor */}
          {/* Right Column: Visual Metaphor (Flow Chart) */}
          <div className="flex-1 mt-8 md:mt-0 relative flex justify-center">
            <div className="relative w-80 border border-gray-300 rounded bg-[#F3F2F1] p-6 shadow-inner flex flex-col items-center">
              {/* Flow Vertical Line */}
              <div className="absolute top-8 bottom-8 left-1/2 w-0.5 bg-[#8A8886] -translate-x-1/2 z-0"></div>

              {/* Step 1: Operational Opener (Trigger) */}
              <div className="z-10 w-full mb-4">
                <div className="bg-[#1E3A8A] text-white p-3 rounded-md shadow-sm border border-[#1E3A8A] flex items-center justify-center text-sm font-bold relative">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-4 bg-[#F3F2F1] z-[-1]"></div> {/* Hide line above */}
                  オペレーショナル・オープナー
                </div>
                <div className="h-4"></div> {/* Spacer for arrow */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#8A8886] mx-auto"></div>
              </div>

              {/* Step 2: Overview */}
              <div className="z-10 w-full mb-4">
                <div className="bg-white p-3 rounded-md shadow-sm border border-gray-300 flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-500">
                    <Search size={16} />
                  </div>
                  <span className="text-sm font-medium text-gray-700">サービス詳細と導入効果を確認</span>
                </div>
                <div className="h-4"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#8A8886] mx-auto"></div>
              </div>

              {/* Step 3: Power Automate Spec */}
              {/* Step 3: Power Automate Spec */}
              <div className="z-10 w-full mb-4">
                <Link href="/powerautomate" className="block group">
                  <div className="bg-white p-3 rounded-md shadow-sm border border-gray-300 flex items-center gap-3 transition-all group-hover:border-[#0078D4] group-hover:shadow-md group-hover:-translate-y-0.5 relative">
                    <div className="w-8 h-8 rounded bg-[#0078D4] flex items-center justify-center text-white">
                      <FileText size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#0078D4] transition-colors">パワーオートメイト仕様書作成</span>
                    <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-[#0078D4] opacity-0 group-hover:opacity-100 transition-all absolute right-2" />
                  </div>
                </Link>
                <div className="h-4"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#8A8886] mx-auto"></div>
              </div>

              {/* Step 4: SharePoint List */}
              <div className="z-10 w-full mb-4">
                <Link href="/sharepoint" className="block group">
                  <div className="bg-white p-3 rounded-md shadow-sm border border-gray-300 flex items-center gap-3 transition-all group-hover:border-[#037A7A] group-hover:shadow-md group-hover:-translate-y-0.5 relative">
                    <div className="w-8 h-8 rounded bg-[#037A7A] flex items-center justify-center text-white">
                      <Database size={16} />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#037A7A] transition-colors">SPリスト作成自動化</span>
                    <ArrowRight size={14} className="ml-auto text-gray-300 group-hover:text-[#037A7A] opacity-0 group-hover:opacity-100 transition-all absolute right-2" />
                  </div>
                </Link>
                <div className="h-4"></div>
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#8A8886] mx-auto"></div>
              </div>

              {/* Step 5: Assetization (Success) */}
              <div className="z-10 w-full">
                <div className="bg-[#DEF7E5] p-3 rounded-md shadow-sm border border-[#107C10] flex items-center justify-center gap-2">
                  <Shield size={16} className="text-[#107C10]" />
                  <span className="text-sm font-bold text-[#107C10]">業務資産化 (Completed)</span>
                </div>
              </div>

              {/* Call to Action for Contact */}
              <div className="mt-8 relative w-full flex flex-col items-center animate-bounce-slow">
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-[#8A8886] mb-4"></div>
                <Link href="/contact" className="inline-flex items-center gap-3 bg-[#1E3A8A] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-blue-800 transition-all hover:scale-105 group border-2 border-white/20 select-none">
                  <MessageSquare size={20} />
                  <span className="text-lg">無料診断を申し込む</span>
                  <ArrowRight size={20} className="opacity-70 group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-xs text-gray-400 mt-2 font-mono">Execute: Diagnostic.exe</p>
              </div>

            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="bg-[#E5E7EB] border-t border-gray-300 px-2 py-1 flex justify-between text-xs text-gray-600 font-mono">
          <span>Status: Operational</span>
          <div className="flex gap-4">
            <span>Ln 1, Col 1</span>
            <span>UTF-8</span>
            <span>Ready</span>
          </div>
        </div>
      </div>
    </div>
  );
}
