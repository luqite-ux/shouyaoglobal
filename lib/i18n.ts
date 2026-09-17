/**
 * Locale-aware data interfaces are kept in place for future locale expansion,
 * but only English content is populated and exposed in routes today.
 * Resolution order: requested locale -> default locale -> first non-empty locale.
 */
export const DEFAULT_LOCALE = "en" as const
export type Locale = "en"

export type LocalizedText = Partial<Record<Locale, string>>

export function resolveLocalizedText(
  value: LocalizedText,
  requested: Locale = DEFAULT_LOCALE,
): string {
  if (value[requested]) return value[requested] as string
  if (value[DEFAULT_LOCALE]) return value[DEFAULT_LOCALE] as string
  const firstNonEmpty = Object.values(value).find((entry) => Boolean(entry))
  return firstNonEmpty ?? ""
}
