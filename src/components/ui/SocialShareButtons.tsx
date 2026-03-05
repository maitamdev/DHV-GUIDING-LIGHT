import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaLink } from 'react-icons/fa';
interface Props { url: string; title: string; className?: string; }
const SocialShareButtons: React.FC<Props> = ({ url, title, className = '' }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const copyLink = () => { navigator.clipboard.writeText(url); };
  return (
    <div className={'flex items-center gap-2 ' + className}>
      <a href={'https://facebook.com/sharer/sharer.php?u=' + encodedUrl} target='_blank' rel='noopener noreferrer' className='w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors'><FaFacebook /></a>
      <a href={'https://twitter.com/intent/tweet?url=' + encodedUrl + '&text=' + encodedTitle} target='_blank' rel='noopener noreferrer' className='w-9 h-9 flex items-center justify-center rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors'><FaTwitter /></a>
      <a href={'https://linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '&title=' + encodedTitle} target='_blank' rel='noopener noreferrer' className='w-9 h-9 flex items-center justify-center rounded-full bg-blue-800 text-white hover:bg-blue-900 transition-colors'><FaLinkedin /></a>
      <button onClick={copyLink} className='w-9 h-9 flex items-center justify-center rounded-full bg-gray-600 text-white hover:bg-gray-700 transition-colors'><FaLink /></button>
    </div>
  );
};
export default SocialShareButtons;
