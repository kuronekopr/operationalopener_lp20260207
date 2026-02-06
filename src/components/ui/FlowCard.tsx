import clsx from 'clsx';
import { LucideIcon } from 'lucide-react';

interface FlowCardProps {
    icon: LucideIcon;
    title: string;
    description?: string;
    iconColor?: string; // e.g., "bg-blue-500"
    className?: string;
    onClick?: () => void;
    isTrigger?: boolean; // Special styling for triggers
}

export default function FlowCard({
    icon: Icon,
    title,
    description,
    iconColor = "bg-brand-blue",
    className,
    onClick,
    isTrigger = false,
}: FlowCardProps) {
    return (
        <div
            className={clsx(
                "relative flex items-start gap-4 p-4 rounded-lg border border-card-border bg-card-bg shadow-sm transition-all duration-200",
                "hover:shadow-md hover:border-brand-blue/50 cursor-default",
                isTrigger && "rounded-t-2xl", // Triggers often have rounded tops in some flow diagrams
                className
            )}
            onClick={onClick}
        >
            {/* Connector Point Top (visual only) */}
            <div className="absolute -top-3 left-8 w-0.5 h-3 bg-connector opacity-50"></div>

            {/* Icon Box */}
            <div className={clsx(
                "flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center text-white shadow-sm",
                iconColor
            )}>
                <Icon size={20} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 truncate">{title}</h3>
                {description && (
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                )}
            </div>

            {/* Connector Point Bottom (visual only) */}
            <div className="absolute -bottom-3 left-8 w-0.5 h-3 bg-connector opacity-50"></div>
        </div>
    );
}
