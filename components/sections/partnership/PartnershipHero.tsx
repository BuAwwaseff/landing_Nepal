import type { NepalContent } from "@/content/nepal-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

type PartnershipHeroProps = {
  content: NepalContent["partnership"]["hero"];
};

export function PartnershipHero({ content }: PartnershipHeroProps) {
  return (
    <section className="section hero" id="top">
      <div className="container">
        <div className="business-hero__grid">
          <Reveal className="business-hero__copy" variant="up">
            <Eyebrow>
              <span data-reveal-item>{content.eyebrow}</span>
            </Eyebrow>
            <h1 className="type-display business-hero__title" data-reveal-item>
              {content.title}
            </h1>
            <p className="type-subheading business-hero__body" data-reveal-item>
              {content.body}
            </p>
            <div className="business-hero__actions" data-reveal-item>
              <ButtonLink {...content.primaryCta} />
              <ButtonLink {...content.secondaryCta} />
              {content.supportCtas.map((cta) => (
                <ButtonLink
                  {...cta}
                  className="business-hero__support-action"
                  key={cta.label}
                />
              ))}
            </div>
            <div className="business-hero__metrics">
              {content.metrics.map((metric) => (
                <article className="metric-card" data-reveal-item key={metric.label}>
                  <p className="metric-card__value">
                    <span className="ltr-inline">{metric.value}</span>
                  </p>
                  <p className="metric-card__label">{metric.label}</p>
                </article>
              ))}
            </div>
          </Reveal>

          <Reveal className="business-hero__stage" variant="scale">
            <div className="business-hero__stage-frame surface-stage" data-reveal-item>
              <MediaSlot priority slotId={content.mediaSlotId} />
            </div>
            <div className="business-hero__summary surface-accent" data-reveal-item>
              <Eyebrow tone="soft">{content.railsLabel}</Eyebrow>
              <ul className="business-hero__rails">
                {content.rails.map((rail) => (
                  <li key={rail}>{rail}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
