// String utility functions

export function removeVietnameseTones(str: string): string {
  return str.normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u0111/g, 'd')
    .replace(/\u0110/g, 'D');
}

export function maskEmail(email: string): string {
  const parts = email.split('@');
  if (parts.length !== 2) return email;
  const name = parts[0];
  const masked = name.charAt(0) + '***' + name.charAt(name.length - 1);
  return masked + '@' + parts[1];
}

export function maskPhone(phone: string): string {
  if (phone.length < 4) return phone;
  return phone.slice(0, -4).replace(/./g, '*') + phone.slice(-4);
}

export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1
    ? count + ' ' + singular
    : count + ' ' + (plural || singular + 's');
}

export function highlightSearchTerm(text: string, term: string): string {
  if (!term.trim()) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp('(' + escaped + ')', 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}
