// Awards.js
import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import PDFViewerWrapper from './PDFViewerWrapper';
import './awards.css'; // Import your CSS file

const Awards = () => {
  return (
    <div className="container">
      <h2 className="title">Awards</h2>
      <div className="pdfContainer">
        <PDFViewerWrapper>
          <div className="pdfViewer"> {/* Apply pdfViewer class here */}
            <Viewer fileUrl="/Awards.pdf" defaultScale={0.6} /> {/* Adjust defaultScale as needed */}
          </div>
        </PDFViewerWrapper>
      </div>
    </div>
  );
};

export default Awards;
