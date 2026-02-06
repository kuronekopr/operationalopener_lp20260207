import Link from "next/link";
import {
  Play,
  AlertTriangle,
  CheckCircle2,
  FileText,
  GitBranch,
  Search,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import FlowCard from "@/components/ui/FlowCard";

export default function Home() {
  return (
    <div className="min-h-screen pb-20 relative overflow-hidden">
      {/* Background Dot Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 py-12 flex flex-col items-center">

        {/* === START NODE / TRIGGER === */}
        <div className="mb-2 text-xs font-semibold text-gray-400 tracking-wider uppercase">Trigger</div>
        <div className="w-full">
          <div className="bg-white rounded-lg border border-card-border shadow-md p-6 relative overflow-hidden group hover:border-brand-blue transition-colors">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue"></div>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-brand-blue/10 rounded-md text-brand-blue">
                <Play size={24} />
              </div>
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  止まらない、説明できる業務へ。
                </h1>
                <p className="text-gray-600 leading-relaxed">
                  Power Automateで自動化した業務。<br className="md:hidden" />
                  作った人がいなくなったら、<br className="md:hidden" />
                  説明できますか？
                </p>
              </div>
            </div>

            {/* Decoration */}
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded border border-gray-200">Manual Trigger</span>
              <span className="px-2 py-1 bg-blue-50 text-brand-blue text-xs rounded border border-blue-100">Operational Continuity</span>
            </div>
          </div>
        </div>

        {/* CONNECTOR */}
        <div className="h-12 w-0.5 bg-connector relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-connector rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-connector rounded-full"></div>
          </div>
        </div>

        {/* === CONDITION NODE (PROBLEM) === */}
        <div className="mb-2 text-xs font-semibold text-gray-400 tracking-wider uppercase">Condition: 担当者が不在になったら？</div>
        <div className="w-full bg-white rounded-lg border border-card-border shadow-md p-1 relative">
          <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-3">
            <GitBranch className="text-gray-500" size={20} />
            <span className="font-semibold text-gray-700">条件分岐: 自動化の属人化チェック</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* YES BRANCH (Current State) */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-100 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 text-xs font-bold text-gray-500 border border-gray-200 rounded">
                Yes (現状)
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3 opacity-75">
                  <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-600">何を判断しているか分からない</p>
                </div>
                <div className="flex items-start gap-3 opacity-75">
                  <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-600">なぜこの分岐があるのか説明できない</p>
                </div>
                <div className="flex items-start gap-3 opacity-75">
                  <AlertTriangle className="text-orange-500 shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-600">変更履歴が残っていない</p>
                </div>

                <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded text-red-700 text-sm font-medium text-center">
                  業務停止リスクあり
                </div>
              </div>
            </div>

            {/* NO BRANCH (Ideal State) */}
            <div className="p-6 bg-blue-50/30 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-0.5 text-xs font-bold text-brand-blue border border-brand-blue rounded">
                No (理想)
              </div>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">判断ロジックが文書化されている</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">変更の理由を誰でも追える</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-blue shrink-0 mt-1" size={18} />
                  <p className="text-sm text-gray-700">人が辞めても業務は止まらない</p>
                </div>

                <div className="mt-4 p-3 bg-brand-blue/10 border border-brand-blue/20 rounded text-brand-dark text-sm font-medium text-center">
                  Operational Continuity
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CONNECTOR - Merging back */}
        <div className="h-12 w-0.5 bg-connector"></div>

        {/* === ACTION NODE (SOLUTION) === */}
        <div className="mb-2 text-xs font-semibold text-gray-400 tracking-wider uppercase">Action: Apply to each "Black Box"</div>
        <div className="w-full space-y-4">
          {/* Card 1 */}
          <FlowCard
            icon={Search}
            iconColor="bg-purple-600"
            title="Power Automateの構造解析"
            description="フロー構造を解析し、トリガー、判断基準、例外処理を特定します。"
          />
          {/* Connector between Items */}
          <div className="h-4 w-0.5 bg-connector mx-8"></div>

          {/* Card 2 */}
          <FlowCard
            icon={FileText}
            iconColor="bg-blue-600"
            title="業務仕様書として整理"
            description="何をトリガーに、どんな判断を行い、例外時にどう振る舞うかを文書化します。"
          />
          {/* Connector between Items */}
          <div className="h-4 w-0.5 bg-connector mx-8"></div>

          {/* Card 3 */}
          <FlowCard
            icon={ShieldCheck}
            iconColor="bg-green-600"
            title="GitHubによるバージョン管理"
            description="仕様書はGitHubで管理。どこが、いつ、なぜ変わったかを永続的に記録します。"
          />
        </div>

        {/* CONNECTOR */}
        <div className="h-16 w-0.5 bg-connector relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-connector rounded-full flex items-center justify-center">
            <div className="w-px h-2 bg-connector rotate-45"></div>
            <div className="w-px h-2 bg-connector -rotate-45 absolute"></div>
          </div>
        </div>

        {/* === FINAL NODE (CTA) === */}
        <div className="w-full bg-white rounded-lg border border-card-border shadow-lg p-8 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-purple-500 to-brand-blue"></div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            その自動化、何年後でも安全に使えますか？
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg mx-auto">
            私たちは、既にあるフローを作り直すことなく、<br />
            「会社として説明できる業務資産」に戻します。
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/program"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-blue text-white font-semibold rounded-md hover:bg-brand-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              詳細プログラムを見る <ArrowRight size={18} />
            </Link>
            <Link
              href="/insights"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-700 font-medium rounded-md border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              まずはInsightsを読む
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
