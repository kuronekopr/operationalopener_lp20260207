import Link from "next/link";
import { ArrowRight, Terminal, Minimize, Maximize, X, Shield, FileText, Database } from "lucide-react";

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
            <button className="p-1 hover:bg-white/10 rounded-sm" aria-label="Minimize"><Minimize size={14} /></button>
            <button className="p-1 hover:bg-white/10 rounded-sm" aria-label="Maximize"><Maximize size={14} /></button>
            <button className="p-1 hover:bg-red-500 rounded-sm" aria-label="Close"><X size={14} /></button>
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
              <div className="inline-block px-2 py-1 bg-yellow-100 border border-yellow-300 text-yellow-800 text-xs font-mono mb-2">
                WARNING: PERSON_DEPENDENCY_DETECTED
              </div>

              <h1 className="text-3xl md:text-4xl font-extrabold text-[#1F2937] leading-tight">
                止まらない、<br />
                説明できる業務へ。
              </h1>

              <div className="space-y-2 text-gray-700 font-medium">
                <p>Power Automateで自動化した業務。</p>
                <p>作った人がいなくなったら、<br />説明できますか？</p>
              </div>

              <div className="pt-4 p-4 bg-gray-50 border border-gray-200 rounded text-sm text-gray-600 font-mono">
                &gt; Detecting black box flows...<br />
                &gt; Critical logic found in user's head.<br />
                &gt; Risk assessment: HIGH
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
          <div className="flex-1 mt-8 md:mt-0 relative flex justify-center">
            {/* Visual representation of "Assetizing" */}
            <div className="relative w-64 h-64 border-2 border-dashed border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center bg-gray-50">
              <div className="text-gray-400 absolute top-2 left-2 text-xs font-mono">/repository/assets</div>

              <div className="grid grid-cols-2 gap-4 w-full h-full p-4">
                <div className="bg-white border border-gray-300 shadow-sm p-2 flex flex-col items-center justify-center gap-1 group">
                  <FileText className="text-[#1E3A8A] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-gray-500">Spec.md</span>
                </div>
                <div className="bg-white border border-gray-300 shadow-sm p-2 flex flex-col items-center justify-center gap-1 group">
                  <Database className="text-[#1E3A8A] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-gray-500">Logic.json</span>
                </div>
                <div className="bg-white border border-gray-300 shadow-sm p-2 flex flex-col items-center justify-center gap-1 group">
                  <Terminal className="text-[#1E3A8A] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-gray-500">Config.yaml</span>
                </div>
                <div className="bg-white border border-gray-300 shadow-sm p-2 flex flex-col items-center justify-center gap-1 group">
                  <Shield className="text-[#059669] group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] text-gray-500">Policy</span>
                </div>
              </div>

              {/* Overlay Label */}
              <div className="absolute -bottom-4 bg-[#1E3A8A] text-white text-xs px-3 py-1 rounded shadow-md font-bold tracking-wider">
                ASSETIZED
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
