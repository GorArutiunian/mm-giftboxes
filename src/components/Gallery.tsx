import { PlaceholderImage } from "@/components/PlaceholderImage";
import type { Dictionary } from "@/data/translations";

export function Gallery({ dict }: { dict: Dictionary }) {
  const slots = [
    { aspect: "wide" as const, label: "1" },
    { aspect: "square" as const, label: "2" },
    { aspect: "portrait" as const, label: "3" },
  ];

  return (
    <section className="section-space bg-cream/50" aria-labelledby="gallery-heading">
      <div className="container-page">
        <p className="eyebrow">{dict.common.gallery}</p>
        <h2
          id="gallery-heading"
          className="mt-3 max-w-xl font-display text-3xl text-coffee sm:text-4xl"
        >
          {dict.home.galleryHeading}
        </h2>
        <p className="prose-site mt-4">{dict.home.galleryLead}</p>
        <p className="mt-2 text-xs text-coffee-soft/80">{dict.home.galleryNote}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {slots.map((slot) => (
            <PlaceholderImage
              key={slot.label}
              dict={dict}
              aspect={slot.aspect}
              label={`${dict.common.imagePlaceholder} ${slot.label}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
