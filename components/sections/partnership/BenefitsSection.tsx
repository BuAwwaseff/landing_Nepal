import type { NepalContent } from "@/content/nepal-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

type BenefitsSectionProps = {
  content: NepalContent["partnership"]["benefits"];
};

export function BenefitsSection({ content }: BenefitsSectionProps) {
  return (
    <SectionShell
      body={content.body}
      eyebrow={content.eyebrow}
      id="benefits"
      title={content.title}
    >
      <Reveal className="benefits-grid" variant="scale">
        {content.items.map((item) => (
          <article className="benefit-card surface-card" data-reveal-item key={item.title}>
            <span className="benefit-card__metric">{item.metric}</span>
            <h3 className="type-card-title benefit-card__title">{item.title}</h3>
            <p className="benefit-card__body">{item.body}</p>
          </article>
        ))}
      </Reveal>
    </SectionShell>
  );
}
