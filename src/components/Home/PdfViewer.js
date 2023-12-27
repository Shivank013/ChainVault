import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import the default CSS to style the annotation layer

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);

    // Hide text layer after the document is loaded
    const textLayer = document.querySelector('.react-pdf__Page__textContent');
    if (textLayer) {
      textLayer.style.display = 'none';
    }
  };

  return (
    <div className=" scale-50 -mt-[19rem] -ml-[8rem]">
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default PdfViewer;
