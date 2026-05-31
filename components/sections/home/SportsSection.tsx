import type { NepalContent } from "@/content/nepal-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

type SportsSectionProps = {
  content: NepalContent["home"]["sports"];
};

export function SportsSection({ content }: SportsSectionProps) {
  return (
    <section className="section sports-trending" id="sports">
      <div className="container">
        <Reveal className="sports-trending__intro" variant="up">
          <Eyebrow className="sports-trending__eyebrow" tone="signal">
            <span data-reveal-item>{content.eyebrow}</span>
          </Eyebrow>
          <h2 className="type-heading sports-trending__title" data-reveal-item>
            {content.title}
          </h2>
          <p className="type-subheading sports-trending__body" data-reveal-item>
            {content.body}
          </p>
        </Reveal>

        <Reveal className="sports-trending__grid" variant="scale">
          {content.cards.map((card) => (
            <article className="sports-trending-card" data-reveal-item key={card.title}>
              <div className="sports-trending-card__media">
                <MediaSlot slotId={card.mediaSlotId} />
              </div>
              <div className="sports-trending-card__overlay" />

              <div className="sports-trending-card__inner">
                <div className="sports-trending-card__head">
                  {card.badge ? (
                    <span className="sports-trending-card__badge">{card.badge}</span>
                  ) : null}
                  <span className="sports-trending-card__accent">{card.accentLabel}</span>
                </div>

                <div className="sports-trending-card__content">
                  <h3 className="sports-trending-card__title">{card.title}</h3>
                  <p className="sports-trending-card__body">{card.body}</p>
                </div>

                <div className="sports-trending-card__tags">
                  {card.tags.map((tag) => (
                    <span className="sports-trending-card__tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="sports-trending-card__footer">
                  <ButtonLink {...card.cta} className="sports-trending-card__cta" />
                  <span className="sports-trending-card__note">{card.footerLabel}</span>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
