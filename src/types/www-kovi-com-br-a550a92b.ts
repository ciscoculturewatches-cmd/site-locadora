// Content structures observed on https://www.kovi.com.br/aluguel-carro-belo-horizonte
// Namespaced per site so a future clone of a different origin cannot collide.

export interface KoviNavLink {
  label: string;
  href: string;
  /** "Sobre nós" is the only item with a hover flyout. */
  children?: { label: string; href: string }[];
}

export type KoviCarBadge = "Zero Km" | "+ de 10 mil Km";

export interface KoviCarCard {
  /** e.g. "Fiat Argo" */
  model: string;
  /** Ribbon above the card, e.g. "Aceito na categoria Comfort". */
  categoryNote: string;
  badge: KoviCarBadge;
  /** Verbatim price string as rendered, e.g. "R$699". */
  price: string;
  /** e.g. "semana" */
  period: string;
  /** e.g. "20 dias para entrega em Belo Horizonte" */
  deliveryNote: string;
  image: string;
  imageAlt: string;
  href: string;
}

export interface KoviCarGroup {
  id: string;
  /** Rendered title; may contain a highlighted trailing fragment. */
  title: string;
  titleHighlight?: string;
  /** Text of the circular info tooltip, when the group has one. */
  tooltip?: string;
  cars: KoviCarCard[];
}

export interface KoviCatalogFilter {
  id: "todos" | "zero-km" | "seminovos";
  label: string;
  /** Group ids this pill reveals; empty array means "all groups". */
  groups: string[];
}

export interface KoviBenefit {
  id: string;
  text: string;
}

export interface KoviStep {
  /** Rendered as a small pink square badge. */
  number: string;
  title: string;
  description: string;
}

export interface KoviTestimonial {
  name: string;
  quote: string;
  /** YouTube id — the modal links out, the video is not mirrored. */
  videoId: string;
  thumb: string;
  thumbAlt: string;
}

export interface KoviFaqItem {
  id: string;
  question: string;
  answer: string;
  /** Only the first item ships open, matching the original. */
  defaultOpen?: boolean;
}

export interface KoviFooterColumn {
  title: string;
  titleHref: string;
  links: { label: string; href: string }[];
}

export interface KoviSocialLink {
  label: string;
  href: string;
}
