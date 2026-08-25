import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from '@phosphor-icons/react/dist/ssr';
import { categories, getCategory } from '@/lib/categories';
import { resourcesByCategory } from '@/lib/resources';
import { CategoryIcon } from '@/components/CategoryIcon';
import { Footer } from '@/components/Footer';
import { ResourceCard } from '@/components/ResourceCard';
import styles from './category.module.css';

type Params = { category: string };

/** Pre-renders one static HTML file per category at build time. */
export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) return { title: 'Not found' };

  return {
    title: cat.title,
    description: cat.subtitle,
    openGraph: { title: `${cat.title} · Newcomers BC`, description: cat.subtitle },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { category } = await params;
  const cat = getCategory(category);
  if (!cat) notFound();

  const items = resourcesByCategory(cat.slug);

  return (
    <main className="wrap">
      <Link href="/" className={styles.back}>
        <ArrowLeft size={14} weight="bold" aria-hidden />
        Back to topics
      </Link>

      <header
        className={styles.header}
        style={{ '--cat': cat.color, '--cat-dark': cat.colorDark } as React.CSSProperties}
      >
        <span className={styles.badge}>
          <CategoryIcon name={cat.icon} size={26} />
        </span>
        <div className={styles.headerText}>
          <h1 className={styles.title}>{cat.title}</h1>
          <p className={styles.subtitle}>{cat.subtitle}</p>
          <p className={styles.count}>{items.length} resources</p>
        </div>
      </header>

      <div className={styles.grid}>
        {items.map((resource, i) => (
          <ResourceCard key={`${resource.category}-${i}`} resource={resource} />
        ))}
      </div>

      <Footer />
    </main>
  );
}
