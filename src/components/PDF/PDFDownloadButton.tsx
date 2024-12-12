import { DocumentIcon } from '@heroicons/react/24/solid';
import {saveAs} from 'file-saver'
import React from 'react';
import ButtonLink from '../Button/ButtonLink';
import toast from 'react-hot-toast';

interface PDFDownloadButtonProps {
  secret?: string;
}



const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({ secret }) => {

  const saveFile = (secret:string) => {

    toast("Downloading CV...");

    saveAs(
      `${secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}`,
      "JackSpektorCV.pdf"
    );
  };

  return (
    <ButtonLink
      onClick={() => saveFile(secret || '')}
      href={`${secret ? `/api/pdf?secret=${secret}` : '/api/pdf'}`}
      size="lg"
    >
     Download CV
    </ButtonLink>
  );
};

export default PDFDownloadButton;
