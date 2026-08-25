import {
  AirplaneTilt,
  Briefcase,
  Coins,
  Compass,
  GraduationCap,
  HeartStraight,
  House,
  Scales,
  Translate,
  UsersThree,
} from '@phosphor-icons/react/dist/ssr';

/**
 * Maps the `icon` string on each category to a real component.
 * Keeping this in one place means `categories.ts` stays plain data.
 */
const ICONS: Record<string, typeof Compass> = {
  Compass,
  Translate,
  Briefcase,
  House,
  Scales,
  UsersThree,
  HeartStraight,
  Coins,
  AirplaneTilt,
  GraduationCap,
};

export function CategoryIcon({
  name,
  size = 20,
}: {
  name: string;
  size?: number;
}) {
  const Glyph = ICONS[name] ?? Compass;
  return <Glyph size={size} weight="regular" aria-hidden />;
}
