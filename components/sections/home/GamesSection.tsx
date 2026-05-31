import type { NepalContent } from "@/content/nepal-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

type GamesSectionProps = {
  content: NepalContent["home"]["games"];
};

export function GamesSection({ content }: GamesSectionProps) {
  return (
    <SectionShell
      body={content.body}
      eyebrow={content.eyebrow}
      id="games"
      title={content.title}
    >
      <Reveal className="feature-grid" variant="scale">
        {content.cards.map((card) => (
          <article className="feature-card surface-card" data-reveal-item key={card.title}>
            <div className="feature-card__media feature-card__media--flush">
              <MediaSlot slotId={card.mediaSlotId} />
            </div>
            {card.badge ? <span className="card-badge">{card.badge}</span> : null}
            <h3 className="type-card-title feature-card__title">{card.title}</h3>
            <p className="feature-card__body">{card.body}</p>
            {card.tags?.length ? (
              <div className="feature-card__tags">
                {card.tags.map((tag) => (
                  <span className="feature-card__tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            {card.cta ? <ButtonLink {...card.cta} className="feature-card__action" /> : null}
          </article>
        ))}
      </Reveal>
    </SectionShell>
  );
}
