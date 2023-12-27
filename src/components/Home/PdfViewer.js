import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import the default CSS to style the annotation layer

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PdfViewer = ({ pdfUrl }) => {
  const [numPages, setNumPages] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const { numPages } = await pdfjs.getDocument(pdfUrl).promise;
        setNumPages(numPages);
      } catch (error) {
        console.error('Error loading PDF:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    // Hide text layer after the document is loaded
    const textLayer = document.querySelector('.react-pdf__Page__textContent');
    if (textLayer) {
      textLayer.style.display = 'none';
    }
  };

  return (
    <div>
      {loading ? (
        <p></p>
      ) : (
        <div className=" scale-50 -mt-[19rem] -ml-[8rem]">
          <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
          </Document>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;
