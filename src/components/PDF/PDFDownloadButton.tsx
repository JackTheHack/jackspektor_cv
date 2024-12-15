import React from 'react';
import { twMerge } from 'tailwind-merge';
import { buttonVariants } from '../Button/Button';
import toast from 'react-hot-toast';

interface PDFDownloadButtonProps {
  secret?: string;
}

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {
  return (
    <a
      onClick={() => toast('Downloading CV...')}
      target="_blank"
      href={`${secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}`}
      className={twMerge(buttonVariants({ size: 'lg' }))}
      download={'JackSpektorCV.pdf'}
    >
      Download CV
    </a>
  );
};

export default PDFDownloadButton;
