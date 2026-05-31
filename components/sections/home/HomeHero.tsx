import type { NepalContent } from "@/content/nepal-content";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { MediaSlot } from "@/components/ui/MediaSlot";
import { Reveal } from "@/components/ui/Reveal";

type HomeHeroProps = {
  content: NepalContent["home"]["hero"];
};

export function HomeHero({ content }: HomeHeroProps) {
  return (
    <section className="section hero" id="top">
      <div className="container">
        <div className="hero__grid">
          <Reveal className="hero__copy" variant="up">
            <Eyebrow>
              <span data-reveal-item>{content.eyebrow}</span>
            </Eyebrow>
            <h1 className="type-display hero__title" data-reveal-item>
              {content.title}
            </h1>
            <p className="type-subheading hero__body" data-reveal-item>
              {content.body}
            </p>

            <div className="hero__actions" data-reveal-item>
              <ButtonLink {...content.primaryCta} />
              <ButtonLink {...content.secondaryCta} />
            </div>

            <div className="hero__support-actions" data-reveal-item>
              {content.supportCtas.map((cta) => (
                <ButtonLink {...cta} className="hero__support-action" key={cta.label} />
              ))}
            </div>

            <ul className="hero__highlights">
              {content.highlights.map((item) => (
                <li data-reveal-item key={item}>
                  {item}
                </li>
              ))}
            </ul>

            <div className="hero__metrics">
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

          <Reveal className="hero__stage" variant="scale">
            <div className="hero__stage-frame surface-stage" data-reveal-item>
              <MediaSlot priority slotId={content.mediaSlotId} />
            </div>
            <div className="hero__stage-note-panel surface-card" data-reveal-item>
              <Eyebrow tone="soft">{content.stageNotesLabel}</Eyebrow>
              <ul className="hero__stage-notes">
                {content.stageNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
