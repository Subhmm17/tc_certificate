import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePDF } from 'react-to-pdf';
import { useFormContext } from '../contexts/FormContext';
import Header from '../components/Header';
import { Download, ArrowLeft, Printer } from 'lucide-react';
import CertificateTemplate from '../components/CertificateTemplate';

const PreviewPage: React.FC = () => {
  const { formData } = useFormContext();
  const navigate = useNavigate();
  const certificateRef = useRef<HTMLDivElement>(null);
  
  const { toPDF, targetRef } = usePDF({
    filename: `transfer_certificate_${formData.studentName || 'student'}.pdf`,
    page: {
      format: 'a4',
      orientation: 'portrait',
      margin: 10
    },
  });

  const handlePrint = () => {
    const printContent = targetRef.current;
    if (!printContent) return;

    // Clone the certificate node to preserve all styles and images
    const printNode = printContent.cloneNode(true) as HTMLElement;
    
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) {
      // Fallback if popup is blocked
      const originalContents = document.body.innerHTML;
      document.body.innerHTML = printContent.innerHTML;
      window.print();
      document.body.innerHTML = originalContents;
      return;
    }

    // Get all styles from the current document
    const styles = Array.from(document.querySelectorAll('style, link[rel="stylesheet"]'))
      .map(el => el.outerHTML)
      .join('\n');

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Certificate Print</title>
          ${styles}
          <style>
            @page {
              size: A4 portrait;
              margin: 0;
            }
            body {
              margin: 0;
              padding: 0;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .no-print {
              display: none !important;
            }
          </style>
        </head>
        <body>
          ${printNode.outerHTML}
          <script>
            setTimeout(function() {
              window.print();
              window.close();
            }, 300);
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Certificate Preview</h2>
            
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <button
                onClick={() => navigate('/')}
                className="btn btn-secondary flex items-center gap-2 w-full md:w-auto"
              >
                <ArrowLeft size={18} />
                Back to Form
              </button>
              
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={handlePrint}
                  className="btn bg-green-600 hover:bg-green-700 focus:ring-green-500 flex items-center gap-2 flex-1 md:flex-none justify-center"
                >
                  <Printer size={18} />
                  Print
                </button>
                
                <button
                  onClick={() => toPDF()}
                  className="btn btn-primary flex items-center gap-2 flex-1 md:flex-none justify-center"
                >
                  <Download size={18} />
                  Download PDF
                </button>
              </div>
            </div>
            
            <div 
              ref={targetRef as React.RefObject<HTMLDivElement>} 
              className="bg-white border border-gray-300 p-4 mb-6"
            >
              <CertificateTemplate formData={formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewPage;