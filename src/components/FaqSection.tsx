import { JsonLd } from "@/components/JsonLd";
import type { Dictionary } from "@/data/translations";

export function FaqSection({
  dict,
  withSchema = true,
}: {
  dict: Dictionary;
  withSchema?: boolean;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dict.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="section-space" aria-labelledby="faq-heading">
      {withSchema ? <JsonLd data={schema} /> : null}
      <div className="container-page max-w-3xl">
        <p className="eyebrow">{dict.common.faq}</p>
        <h2 id="faq-heading" className="mt-3 font-display text-3xl text-coffee sm:text-4xl">
          {dict.faq.heading}
        </h2>
        <dl className="mt-10 space-y-6">
          {dict.faq.items.map((item) => (
            <div
              key={item.q}
              className="border-b border-coffee/10 pb-6 last:border-none"
            >
              <dt className="font-display text-xl text-coffee">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-coffee-soft sm:text-base">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
