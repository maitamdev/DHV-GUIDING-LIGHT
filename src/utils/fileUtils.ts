export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
export function getFileExtension(filename: string): string {
  return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
}
export function isImageFile(filename: string): boolean {
  return ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(getFileExtension(filename).toLowerCase());
}
export function isVideoFile(filename: string): boolean {
  return ['mp4', 'webm', 'ogg', 'mov'].includes(getFileExtension(filename).toLowerCase());
}
export function generateFileName(originalName: string): string {
  const ext = getFileExtension(originalName);
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).slice(2, 8);
  return timestamp + '-' + random + '.' + ext;
}
