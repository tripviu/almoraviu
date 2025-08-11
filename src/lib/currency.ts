export function formatEUR(n: number, locale = "nl-NL") {
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
  } catch {
    return `€${Math.round(n)}`;
  }
}
