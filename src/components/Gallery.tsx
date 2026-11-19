import Image from "next/image";
import type { Dictionary } from "@/data/translations";

/** Atmosphere frames from the live catalog staff. */
const atmosphere = [
  {
    src: "/products/daisy-set/01.jpg",
    alt: "Daisy gift box atmosphere",
  },
  {
    src: "/products/forest-green/01.jpg",
    alt: "Forest green gift box atmosphere",
  },
  {
    src: "/products/sage-wheat/01.jpg",
    alt: "Sage wheat gift box atmosphere",
  },
];

export function Gallery({ dict }: { dict: Dictionary }) {
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
          {atmosphere.map((item) => (
            <div
              key={item.src}
              className="relative aspect-square overflow-hidden rounded-sm bg-cream"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
