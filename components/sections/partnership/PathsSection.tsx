import type { NepalContent } from "@/content/nepal-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

type PathsSectionProps = {
  content: NepalContent["partnership"]["paths"];
};

export function PathsSection({ content }: PathsSectionProps) {
  return (
    <SectionShell
      body={content.body}
      eyebrow={content.eyebrow}
      id="paths"
      title={content.title}
    >
      <Reveal className="route-grid" variant="scale">
        {content.cards.map((card) => (
          <article className="route-card surface-card" data-reveal-item key={card.title}>
            {card.asideLabel ? <span className="route-card__aside">{card.asideLabel}</span> : null}
            <div className="route-card__media feature-card__media--flush">
              <MediaSlot slotId={card.mediaSlotId} />
            </div>
            <h3 className="type-card-title route-card__title">{card.title}</h3>
            <p className="route-card__body">{card.body}</p>
            <ul className="bullet-list">
              {card.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
            <div className="route-card__actions">
              {card.ctas.map((cta) => (
                <ButtonLink {...cta} key={cta.label} />
              ))}
            </div>
          </article>
        ))}
      </Reveal>
    </SectionShell>
  );
}
