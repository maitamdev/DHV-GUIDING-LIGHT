export function conditionalClass(condition: boolean, trueClass: string, falseClass: string = ''): string {
  return condition ? trueClass : falseClass;
}
export function joinClasses(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ');
}
export function variantClass<T extends string>(variant: T, map: Record<T, string>): string {
  return map[variant] || '';
}
export function sizeClass(size: 'sm' | 'md' | 'lg' | 'xl'): { text: string; padding: string; height: string } {
  const sizes = {
    sm: { text: 'text-sm', padding: 'px-3 py-1.5', height: 'h-8' },
    md: { text: 'text-base', padding: 'px-4 py-2', height: 'h-10' },
    lg: { text: 'text-lg', padding: 'px-5 py-2.5', height: 'h-12' },
    xl: { text: 'text-xl', padding: 'px-6 py-3', height: 'h-14' },
  };
  return sizes[size];
}
