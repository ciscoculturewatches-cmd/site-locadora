// Shared constants for the EJM Locações site.

export const EJM = {
  name: "EJM Locações",
  city: "Belo Horizonte - MG",
  address: "Rua Santa Maria, 425 - Pedra Azul, Contagem - MG",
  instagram: "@ejmlocacoes",
  instagramUrl: "https://www.instagram.com/ejmlocacoes/",
  /** Digits only, in international format, for wa.me links. */
  whatsappNumber: "5531975465236",
  /** Human-readable form used in copy. */
  whatsappDisplay: "(31) 97546-5236",
} as const;

/** Builds a wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${EJM.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Default CTA copy used across the page. */
export const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Vim pelo site e quero alugar um carro para rodar de aplicativo.";
