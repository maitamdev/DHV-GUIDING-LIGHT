import React, { useRef, useState } from 'react';
import { FaCloudUploadAlt, FaTimes, FaFile } from 'react-icons/fa';
interface Props { onUpload: (files: File[]) => void; accept?: string; multiple?: boolean; maxSize?: number; }
const FileUpload: React.FC<Props> = ({ onUpload, accept, multiple = false, maxSize = 10 * 1024 * 1024 }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const handleFiles = (fileList: FileList) => { const valid = Array.from(fileList).filter(f => f.size <= maxSize); setFiles(prev => [...prev, ...valid]); onUpload(valid); };
  const removeFile = (index: number) => setFiles(f => f.filter((_, i) => i !== index));
  return (
    <div>
      <div onClick={() => inputRef.current?.click()} onDragOver={e => { e.preventDefault(); setDragActive(true); }} onDragLeave={() => setDragActive(false)}
        onDrop={e => { e.preventDefault(); setDragActive(false); handleFiles(e.dataTransfer.files); }}
        className={'border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-colors ' + (dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 dark:border-gray-600 hover:border-blue-400')}>
        <FaCloudUploadAlt className='text-4xl text-gray-400 mx-auto mb-3' />
        <p className='text-sm text-gray-600 dark:text-gray-400'>Drag & drop or click to upload</p>
        <p className='text-xs text-gray-400 mt-1'>Max size: {Math.round(maxSize / 1024 / 1024)}MB</p>
        <input ref={inputRef} type='file' accept={accept} multiple={multiple} onChange={e => e.target.files && handleFiles(e.target.files)} className='hidden' />
      </div>
      {files.length > 0 && <div className='mt-3 space-y-2'>{files.map((f, i) => (
        <div key={i} className='flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm'>
          <FaFile className='text-gray-400' /><span className='flex-1 truncate'>{f.name}</span>
          <span className='text-gray-400 text-xs'>{(f.size / 1024).toFixed(1)}KB</span>
          <button onClick={() => removeFile(i)}><FaTimes className='text-red-400' /></button>
        </div>
      ))}</div>}
    </div>
  );
};
export default FileUpload;
