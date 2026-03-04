// ClassName merge utility for conditional class composition

type ClassValue = string | number | boolean | undefined | null | ClassValue[];

/**
 * Merge class names conditionally - lightweight alternative to clsx
 */
export function cn(...classes: ClassValue[]): string {
  return classes.flat(Infinity).filter(Boolean).join(' ');
}

/**
 * Create conditional class string from object
 */
export function classMap(classes: Record<string, boolean | undefined>): string {
  return Object.entries(classes)
    .filter(([, condition]) => condition)
    .map(([className]) => className)
    .join(' ');
}
