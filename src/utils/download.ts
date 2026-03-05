export function downloadFile(url: string, filename: string): void {
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
export function downloadBlob(data: BlobPart, filename: string, mimeType: string = 'application/octet-stream'): void {
  const blob = new Blob([data], { type: mimeType });
  const url = URL.createObjectURL(blob);
  downloadFile(url, filename);
  URL.revokeObjectURL(url);
}
export function downloadJSON(data: unknown, filename: string): void {
  downloadBlob(JSON.stringify(data, null, 2), filename, 'application/json');
}
export function downloadCSV(headers: string[], rows: string[][], filename: string): void {
  const csv = [headers.join(','), ...rows.map(row => row.join(','))].join(String.fromCharCode(10));
  downloadBlob(csv, filename, 'text/csv');
}
