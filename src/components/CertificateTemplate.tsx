import React from 'react';
import { format } from 'date-fns';
import { FormData } from '../contexts/FormContext';

interface CertificateTemplateProps {
  formData: FormData;
}

const formatDate = (date: Date | null): string => {
  if (!date) return '';
  return format(date, 'dd/MM/yyyy');
};

const CertificateTemplate: React.FC<CertificateTemplateProps> = ({ formData }) => {
  return (
    <div
      className="certificate-template font-serif text-black w-[210mm] mx-auto bg-white print:border print:border-black print:p-8 print:rounded"
      style={{ minHeight: '297mm' }}
    >
      {/* School Header */}
      <div className="text-center mb-2 text-[10pt]">
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Reg. No: <span className="font-bold">{formData.registrationNo}</span></span>
          <span>DiseCode: <span className="font-bold">{formData.diseCode}</span></span>
        </div>
        <div className="text-[14pt] font-bold"><span className="font-bold">{formData.schoolName}</span></div>
        <div><span className="font-bold">{formData.schoolAddress}</span></div>
      </div>

      {/* Certificate Title */}
      <div className="p-4">
        <div className="text-center mb-3">
          <h1 className="text-[16pt] font-bold uppercase">SCHOOL TRANSFER CERTIFICATE</h1>
          <div className="border-2 border-black w-2/3 mx-auto my-1 p-0.5">
            <h2 className="text-[12pt] font-bold">स्थानान्तरण प्रमाण—पत्र</h2>
          </div>
          <div className="text-[10pt]">(Education Act Part 3 From 4)</div>
          <div className="text-[10pt]">(शिक्षा संहिता भाग 3 फार्म 4)</div>
        </div>

        {/* Certificate Content */}
        <div className="space-y-2 text-[10pt]">
          <div className="flex justify-between">
            <div>Scholar No. <span className="font-bold">{formData.scholarNo}</span></div>
            <div>No. <span className="font-bold">{formData.admissionNo}</span></div>
          </div>

          <div>Date: <span className="font-bold">{formatDate(formData.certificateDate)}</span></div>

          <div>
            This is to certify that Miss/Master <span className="font-bold">{formData.studentName}</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>Mother Name: <span className="font-bold">{formData.motherName}</span></div>
            <div>Father Name: <span className="font-bold">{formData.fatherName}</span></div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>Language: <span className="font-bold">{formData.language}</span></div>
            <div>Caste: <span className="font-bold">{formData.caste}</span></div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>Village: <span className="font-bold">{formData.village}</span></div>
            <div>Tha: <span className="font-bold">{formData.district}</span></div>
          </div>

          <div>
            Date from <span className="font-bold">{formatDate(formData.dateFrom)}</span> to <span className="font-bold">{formatDate(formData.dateTo)}</span> was present and now today on dated <span className="font-bold">{formatDate(formData.certificateDate)}</span>
          </div>

          <div>Leaves School. He/She has paid fees as shown on the below.</div>

          <div>
            According to Scholar No. <span className="font-bold">{formData.scholarNo}</span>, His/Her date of Birth (in figures)
            <div className="inline-block mx-1">
              {formData.dateOfBirth && format(formData.dateOfBirth, 'ddMMyyyy').split('').map((digit, index) => (
                <div key={index} className="border border-black px-1 py-0.5 inline-block w-5 text-center font-bold">
                  {digit}
                </div>
              ))}
            </div>
          </div>

          <div>(in words) <span className="font-bold">{formData.dateOfBirthWords}</span></div>

          {formData.isVaccinated && (
            <div>
              <span className="font-bold">He/She has been vaccinated and He/She is safe from the agitation small pox.</span>
            </div>
          )}

          <div className="grid grid-cols-3 gap-2">
            <div>Class: <span className="font-bold">{formData.lastClass}</span></div>
            <div>Medium: <span className="font-bold">{formData.medium}</span></div>
            <div>Year: <span className="font-bold">{formData.year}</span></div>
          </div>

          <div>Conduct: <span className="font-bold">{formData.conduct}</span></div>

          <div>Incharge Scholar Register: <span className="font-bold">{formData.inchargeRegister}</span></div>
          <div>Date: <span className="font-bold">{formatDate(formData.leavingDate)}</span></div>
          <div>Mother and Father Name: <span className="font-bold">{formData.motherFatherName}</span></div>

          <div className="grid grid-cols-2 gap-2">
            <div>Present Class: <span className="font-bold">{formData.presentClass}</span></div>
            <div>No. of Attendance: <span className="font-bold">{formData.attendanceCount}</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border border-black p-2">
              <table className="w-full text-[9pt]">
                <tbody>
                  <tr><td>Aadhar No.</td><td className="font-bold">{formData.aadharNo}</td></tr>
                  <tr><td>SSSM.ID.No.</td><td className="font-bold">{formData.sssmIdNo}</td></tr>
                  <tr><td>Family.ID.No.</td><td className="font-bold">{formData.familyIdNo}</td></tr>
                  <tr><td>APAAR ID</td><td className="font-bold">{formData.apaarId}</td></tr>
                  <tr><td>PEN No.</td><td className="font-bold">{formData.penNo}</td></tr>
                </tbody>
              </table>
            </div>
            <div className="border border-black p-2">
              <table className="w-full text-[9pt]">
                <tbody>
                  <tr><td>Bank/P.O. Name</td><td className="font-bold">{formData.bankName}</td></tr>
                  <tr><td>Account No.</td><td className="font-bold">{formData.accountNo}</td></tr>
                  <tr><td>IFS Code No.</td><td className="font-bold">{formData.ifscCode}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <div className="mb-1">By Details of Fees Paid</div>
              <table className="w-full text-[9pt]">
                <tbody>
                  <tr><td>1.</td><td>Tuition Fees Paid Upto</td><td className="font-bold">{formData.tuitionFeesPaid}</td></tr>
                  <tr><td>2.</td><td>Hostel Fees Paid Upto</td><td className="font-bold">{formData.hostelFeesPaid}</td></tr>
                  <tr><td>3.</td><td>Other Fees Paid Upto</td><td className="font-bold">{formData.otherFeesPaid}</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              {formData.inchargeSignature && (
                <img src={formData.inchargeSignature} alt="Incharge Signature" className="h-12" />
              )}
              <div className="mt-4 pt-4">Incharge Scholar Register</div>
            </div>
            <div className="text-right">
              {formData.principalSignature && (
                <img src={formData.principalSignature} alt="Principal Signature" className="h-12 ml-auto" />
              )}
              <div className="mt-4 pt-4">Head of School</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateTemplate;