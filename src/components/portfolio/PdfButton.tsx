import { FileText, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

export function PdfButton({
  href,
  label = "View Certificate PDF",
  missingLabel = "Certificate PDF coming soon",
  dark = false,
}: {
  href: string | null;
  label?: string | undefined;
  missingLabel?: string | undefined;
  dark?: boolean | undefined;
}) {
  if (!href) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-xs font-medium",
          dark ? "border-cream/25 text-cream/55" : "border-border text-muted-foreground",
        )}
      >
        <Lock className="size-3.5" />
        {missingLabel}
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-semibold transition-all duration-300 hover:-translate-y-0.5",
        dark
          ? "bg-cream text-plum-deep hover:shadow-[0_14px_30px_-14px_rgba(0,0,0,0.8)]"
          : "bg-primary text-primary-foreground hover:shadow-[0_14px_30px_-14px_oklch(0.31_0.12_330)]",
      )}
    >
      <FileText className="size-3.5" />
      {label}
    </a>
  );
}
