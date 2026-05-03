"use client"

import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

export type DevPreviewMode = "desktop" | "phone";

export function DevViewportSwitch({
    mode,
    onModeChange,
}: {
    mode: DevPreviewMode;
    onModeChange: (mode: DevPreviewMode) => void;
}) {
    return (
        <div className="fixed left-3 top-3 z-50 flex items-center gap-1 rounded-lg border border-[#ead0d4] bg-white/85 p-1 sm:shadow-md backdrop-blur">
            {(["desktop", "phone"] as const).map((previewMode) => (
                <Button
                    key={previewMode}
                    type="button"
                    variant="ghost"
                    size="sm"
                    className={cn(
                        "h-8 rounded-md px-3 text-xs capitalize text-[#4d3b3f] hover:bg-[#f8eef0] hover:text-[#994d59]",
                        mode === previewMode && "bg-[#f8eef0] text-[#994d59]"
                    )}
                    aria-pressed={mode === previewMode}
                    onClick={() => onModeChange(previewMode)}
                >
                    {previewMode}
                </Button>
            ))}
        </div>
    );
}
