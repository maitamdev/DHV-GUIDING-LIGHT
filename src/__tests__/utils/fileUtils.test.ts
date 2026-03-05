import { describe, it, expect } from 'vitest';
import { formatFileSize, getFileExtension, isImageFile, isVideoFile, generateFileName } from '../../utils/fileUtils';
describe('fileUtils', () => {
  describe('formatFileSize', () => { it('formats bytes', () => { expect(formatFileSize(0)).toBe('0 Bytes'); expect(formatFileSize(1024)).toBe('1 KB'); expect(formatFileSize(1048576)).toBe('1 MB'); }); });
  describe('getFileExtension', () => { it('gets extension', () => { expect(getFileExtension('photo.jpg')).toBe('jpg'); expect(getFileExtension('file.test.ts')).toBe('ts'); }); });
  describe('isImageFile', () => { it('detects images', () => { expect(isImageFile('photo.jpg')).toBe(true); expect(isImageFile('doc.pdf')).toBe(false); }); });
  describe('isVideoFile', () => { it('detects videos', () => { expect(isVideoFile('clip.mp4')).toBe(true); expect(isVideoFile('photo.jpg')).toBe(false); }); });
  describe('generateFileName', () => { it('generates unique names', () => { const a = generateFileName('test.jpg'); const b = generateFileName('test.jpg'); expect(a).not.toBe(b); expect(a.endsWith('.jpg')).toBe(true); }); });
});
