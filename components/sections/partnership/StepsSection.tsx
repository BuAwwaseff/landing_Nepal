import type { NepalContent } from "@/content/nepal-content";
import { Reveal } from "@/components/ui/Reveal";
import { SectionShell } from "@/components/ui/SectionShell";

type StepsSectionProps = {
  content: NepalContent["partnership"]["steps"];
};

export function StepsSection({ content }: StepsSectionProps) {
  return (
    <SectionShell
      body={content.body}
      eyebrow={content.eyebrow}
      id="steps"
      title={content.title}
    >
      <Reveal className="steps-timeline" variant="up">
        {content.items.map((item) => (
          <article className="steps-timeline__item" data-reveal-item key={item.step}>
            <span className="steps-timeline__step ltr-inline">{item.step}</span>
            <h3 className="type-card-title steps-timeline__title">{item.title}</h3>
            <p className="steps-timeline__body">{item.body}</p>
          </article>
        ))}
      </Reveal>
    </SectionShell>
  );
}
