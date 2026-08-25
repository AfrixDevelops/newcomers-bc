/**
 * Emits a schema.org block for crawlers.
 *
 * The "<" escape matters: a literal "</script>" anywhere in the data
 * would close the tag early and spill the rest into the document. None
 * of the current data contains one, but the guard costs nothing and the
 * data is a growing list of third-party titles and URLs.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
