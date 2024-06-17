// PDFViewerWrapper.jsx
import React from 'react';
import { Worker } from '@react-pdf-viewer/core';

const PDFViewerWrapper = ({ children }) => (
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
    {children}
  </Worker>
);

export default PDFViewerWrapper;
