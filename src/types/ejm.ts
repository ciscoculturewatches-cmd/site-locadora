// Content structures for the EJM Locações site.

export interface EjmNavLink {
  label: string;
  href: string;
}

/** Weekly price tier. Replaces the "new vs used" split of the reference layout. */
export type EjmTierId = "tier-650" | "tier-790";

/** Body style, shown as the dark badge on each card. */
export type EjmCarBadge = "Hatch" | "Sedan";

export interface EjmCarCard {
  /** e.g. "Renault Kwid" */
  model: string;
  /** Ribbon above the card. */
  categoryNote: string;
  badge: EjmCarBadge;
  tier: EjmTierId;
  /** Verbatim price string, e.g. "R$650". */
  price: string;
  /** e.g. "semana" */
  period: string;
  /** Short reassurance under the price block. */
  deliveryNote: string;
  image: string;
  imageAlt: string;
  /** Intrinsic size of `image` — the cutouts differ in aspect ratio. */
  imageWidth: number;
  imageHeight: number;
}

export interface EjmCarGroup {
  id: EjmTierId;
  title: string;
  tooltip?: string;
  cars: EjmCarCard[];
}

export interface EjmBenefit {
  id: string;
  text: string;
}

export interface EjmStep {
  number: string;
  title: string;
  description: string;
}

/** A short brand promise shown in the highlights carousel. */
export interface EjmHighlight {
  id: string;
  title: string;
  text: string;
}

export interface EjmFaqItem {
  id: string;
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface EjmFooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface EjmSocialLink {
  label: string;
  href: string;
}
