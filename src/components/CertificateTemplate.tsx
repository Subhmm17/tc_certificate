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
    <div className="certificate-template font-serif text-black w-[210mm] mx-auto bg-white\" style={{ minHeight: '297mm' }}>
      {/* School Header */}
      <div className="text-center mb-2 text-[10pt]">
        <div style={{display:'flex' , justifyContent:'space-between'}}>
        <span>Reg. No: {formData.registrationNo}</span>
        <span>DiseCode: {formData.diseCode}</span>
        </div>
        <div className="text-[14pt] font-bold">{formData.schoolName}</div>
        <div>{formData.schoolAddress}</div>
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
            <div>Scholar No. {formData.scholarNo}</div>
            <div>No. {formData.admissionNo}</div>
          </div>
          
          <div className="flex justify-between">
            <div>Date: {formatDate(formData.certificateDate)}</div>
          </div>
          
          <div>
            This is to certify that Miss/Master {formData.studentName}
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>Mother Name: {formData.motherName}</div>
            <div>Father Name: {formData.fatherName}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>Language: {formData.language}</div>
            <div>Caste: {formData.caste}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>Village: {formData.village}</div>
            <div>Tha: {formData.district}</div>
          </div>
          
          <div>
            Date from {formatDate(formData.dateFrom)} to {formatDate(formData.dateTo)} was present and now today on dated {formatDate(formData.certificateDate)}
          </div>
          
          <div>
            Leaves School. He/She has paid fees as shown on the below.
          </div>
          
          <div>
            According to Scholar No. {formData.scholarNo}, His/Her date of Birth (in figures)
            <div className="inline-block mx-1">
              {formData.dateOfBirth && format(formData.dateOfBirth, 'ddMMyyyy').split('').map((digit, index) => (
                <div key={index} className="border border-black px-1 py-0.5 inline-block w-5 text-center">
                  {digit}
                </div>
              ))}
            </div>
          </div>
          
          <div>(in words) {formData.dateOfBirthWords}</div>
          
          <div>
            {formData.isVaccinated ? "He/She has been vaccinated and He/She is safe from the agitation small pox." : ""}
          </div>
          
          <div className="grid grid-cols-3 gap-2">
            <div>Class: {formData.lastClass}</div>
            <div>Medium: {formData.medium}</div>
            <div>Year: {formData.year}</div>
          </div>
          
          <div>Conduct: {formData.conduct}</div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>Incharge Scholar Register: {formData.inchargeRegister}</div>
          </div>
          
          <div>Date: {formatDate(formData.leavingDate)}</div>
          
          <div>Mother and Father Name: {formData.motherFatherName}</div>
          
          <div className="grid grid-cols-2 gap-2">
            <div>Present Class: {formData.presentClass}</div>
            <div>No. of Attendance: {formData.attendanceCount}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="border border-black p-2">
              <table className="w-full text-[9pt]">
                <tbody>
                  <tr>
                    <td>Aadhar No.</td>
                    <td>{formData.aadharNo}</td>
                  </tr>
                  <tr>
                    <td>SSSM.ID.No.</td>
                    <td>{formData.sssmIdNo}</td>
                  </tr>
                  <tr>
                    <td>Family.ID.No.</td>
                    <td>{formData.familyIdNo}</td>
                  </tr>
                  <tr>
                    <td>APAAR ID</td>
                    <td>{formData.apaarId}</td>
                  </tr>
                  <tr>
                    <td>PEN No.</td>
                    <td>{formData.penNo}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="border border-black p-2">
              <table className="w-full text-[9pt]">
                <tbody>
                  <tr>
                    <td>Bank/P.O. Name</td>
                    <td>{formData.bankName}</td>
                  </tr>
                  <tr>
                    <td>Account No.</td>
                    <td>{formData.accountNo}</td>
                  </tr>
                  <tr>
                    <td>IFS Code No.</td>
                    <td>{formData.ifscCode}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div>
              <div className="mb-1">By Details of Fees Paid</div>
              <table className="w-full text-[9pt]">
                <tbody>
                  <tr>
                    <td>1.</td>
                    <td>Tution Fees Paid Upto</td>
                    <td>{formData.tuitionFeesPaid}</td>
                  </tr>
                  <tr>
                    <td>2.</td>
                    <td>Hostel Fees Paid Upto</td>
                    <td>{formData.hostelFeesPaid}</td>
                  </tr>
                  <tr>
                    <td>3.</td>
                    <td>Other Fees Paid Upto</td>
                    <td>{formData.otherFeesPaid}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              {formData.inchargeSignature && (
                <img 
                  src={formData.inchargeSignature} 
                  alt="Incharge Signature" 
                  className="h-12"
                />
              )}
              <div className="mt-4 pt-4">Incharge Scholar Register</div>
            </div>
            <div className="text-right">
              {formData.principalSignature && (
                <img 
                  src={formData.principalSignature} 
                  alt="Principal Signature" 
                  className="h-12 ml-auto"
                />
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