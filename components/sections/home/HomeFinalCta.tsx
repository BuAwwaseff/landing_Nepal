import Link from "next/link";
import type { NepalContent } from "@/content/nepal-content";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

type HomeFinalCtaProps = {
  content: NepalContent["home"]["finalCta"];
};

const isExternalHref = (href: string) =>
  href.startsWith("http://") ||
  href.startsWith("https://") ||
  href.startsWith("mailto:") ||
  href.startsWith("tel:");

export function HomeFinalCta({ content }: HomeFinalCtaProps) {
  const ctaIsExternal =
    ("external" in content.primaryCta && content.primaryCta.external) ||
    isExternalHref(content.primaryCta.href);

  return (
    <SectionShell
      body={content.body}
      className="final-cta"
      eyebrow={content.eyebrow}
      id="player-cta"
      title={content.title}
    >
      <div className="final-cta__stack">
        <Reveal className="final-cta__media" variant="scale">
          {ctaIsExternal ? (
            <a
              aria-label={content.primaryCta.label}
              className="final-cta__media-link"
              data-reveal-item
              href={content.primaryCta.href}
              rel={content.primaryCta.href.startsWith("http") ? "noreferrer" : undefined}
              target={content.primaryCta.href.startsWith("http") ? "_blank" : undefined}
            >
              <MediaSlot slotId={content.mediaSlotId} />
            </a>
          ) : (
            <Link
              aria-label={content.primaryCta.label}
              className="final-cta__media-link"
              data-reveal-item
              href={content.primaryCta.href}
            >
              <MediaSlot slotId={content.mediaSlotId} />
            </Link>
          )}
        </Reveal>
      </div>
    </SectionShell>
  );
}
