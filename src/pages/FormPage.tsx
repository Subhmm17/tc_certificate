import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { TextField, DateField, CheckboxField } from '../components/FormField';
import SignatureField from '../components/SignatureField';
import { useFormContext } from '../contexts/FormContext';
import { ArrowRight, Save } from 'lucide-react';

const FormPage: React.FC = () => {
  const { formData, updateFormData } = useFormContext();
  const navigate = useNavigate();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    updateFormData({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleDateChange = (name: string, date: Date | null) => {
    updateFormData({
      [name]: date,
    });
  };

  const handleSignatureChange = (name: string, signatureData: string) => {
    updateFormData({
      [name]: signatureData,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Check for required fields before navigating
    const requiredFields = ['studentName', 'scholarNo', 'dateOfBirth'];
    const isValid = requiredFields.every(field => 
      formData[field as keyof typeof formData]
    );
    
    if (isValid) {
      navigate('/preview');
    } else {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">School Transfer Certificate Form</h2>
            
            {formSubmitted && (
              <div className="mb-6 p-4 border-l-4 border-yellow-500 bg-yellow-50 text-yellow-700">
                Please fill in all required fields marked with an asterisk (*).
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              {/* Student Information */}
              <div className="form-section">
                <h3 className="form-section-title">Student Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Scholar No."
                    name="scholarNo"
                    value={formData.scholarNo}
                    onChange={handleChange}
                    required
                  />
                  <TextField
                    label="Admission No."
                    name="admissionNo"
                    value={formData.admissionNo}
                    onChange={handleChange}
                  />
                  <DateField
                    label="Certificate Date"
                    name="certificateDate"
                    value={formData.certificateDate}
                    onChange={(date) => handleDateChange('certificateDate', date)}
                  />
                  <TextField
                    label="Student Name"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    placeholder="Miss/Master..."
                    required
                  />
                  <TextField
                    label="Mother Name"
                    name="motherName"
                    value={formData.motherName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Father Name"
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Language"
                    name="language"
                    value={formData.language}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Caste"
                    name="caste"
                    value={formData.caste}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* School & Location Information */}
              <div className="form-section">
                <h3 className="form-section-title"> Location</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Village"
                    name="village"
                    value={formData.village}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <DateField
                    label="Date From"
                    name="dateFrom"
                    value={formData.dateFrom}
                    onChange={(date) => handleDateChange('dateFrom', date)}
                  />
                  <DateField
                    label="Date To"
                    name="dateTo"
                    value={formData.dateTo}
                    onChange={(date) => handleDateChange('dateTo', date)}
                  />
                </div>
              </div>
              
              {/* Birth & Medical Information */}
              <div className="form-section">
                <h3 className="form-section-title">Birth & Medical Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <DateField
                    label="Date of Birth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={(date) => handleDateChange('dateOfBirth', date)}
                    required
                  />
                  <TextField
                    label="Date of Birth (in words)"
                    name="dateOfBirthWords"
                    value={formData.dateOfBirthWords}
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4">
                  <CheckboxField
                    label="Student has been vaccinated and is safe from the agitation small pox"
                    name="isVaccinated"
                    checked={formData.isVaccinated}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Academic Information */}
              <div className="form-section">
                <h3 className="form-section-title">Academic Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextField
                    label="Last Class Passed"
                    name="lastClass"
                    value={formData.lastClass}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Medium"
                    name="medium"
                    value={formData.medium}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label="Admitted in Class"
                    name="admittedClass"
                    value={formData.admittedClass}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Conduct"
                    name="conduct"
                    value={formData.conduct}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label="Incharge Scholar Register"
                    name="inchargeRegister"
                    value={formData.inchargeRegister}
                    onChange={handleChange}
                  />
                  <DateField
                    label="Date Before Leaving School"
                    name="leavingDate"
                    value={formData.leavingDate}
                    onChange={(date) => handleDateChange('leavingDate', date)}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label="Mother and Father Name"
                    name="motherFatherName"
                    value={formData.motherFatherName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Present Class"
                    name="presentClass"
                    value={formData.presentClass}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label="No. of Attendance"
                    name="attendanceCount"
                    value={formData.attendanceCount}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Fees Information */}
              <div className="form-section">
                <h3 className="form-section-title">Fees Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextField
                    label="Tuition Fees Paid Upto"
                    name="tuitionFeesPaid"
                    value={formData.tuitionFeesPaid}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Hostel Fees Paid Upto"
                    name="hostelFeesPaid"
                    value={formData.hostelFeesPaid}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Other Fees Paid Upto"
                    name="otherFeesPaid"
                    value={formData.otherFeesPaid}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Bank & ID Information */}
              <div className="form-section">
                <h3 className="form-section-title">Bank & ID Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Aadhar No."
                    name="aadharNo"
                    value={formData.aadharNo}
                    onChange={handleChange}
                  />
                  <TextField
                    label="SSSM.ID.No."
                    name="sssmIdNo"
                    value={formData.sssmIdNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label="Family.ID.No."
                    name="familyIdNo"
                    value={formData.familyIdNo}
                    onChange={handleChange}
                  />
                  <TextField
                    label="APAAR ID"
                    name="apaarId"
                    value={formData.apaarId}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <TextField
                    label="PEN No."
                    name="penNo"
                    value={formData.penNo}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <TextField
                    label="Bank/P.O. Name"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleChange}
                  />
                  <TextField
                    label="Account No."
                    name="accountNo"
                    value={formData.accountNo}
                    onChange={handleChange}
                  />
                  <TextField
                    label="IFSC Code"
                    name="ifscCode"
                    value={formData.ifscCode}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              {/* Signatures */}
              <div className="form-section">
                <h3 className="form-section-title">Signatures</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SignatureField
                    label="Principal Signature"
                    name="principalSignature"
                    value={formData.principalSignature}
                    onChange={(sig) => handleSignatureChange('principalSignature', sig)}
                  />
                  <SignatureField
                    label="Incharge Scholar Register Signature"
                    name="inchargeSignature"
                    value={formData.inchargeSignature}
                    onChange={(sig) => handleSignatureChange('inchargeSignature', sig)}
                  />
                </div>
              </div>
              
              {/* Form Actions */}
              <div className="flex justify-end mt-6 space-x-4">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="btn btn-secondary flex items-center gap-2"
                >
                  <Save size={18} />
                  Save
                </button>
                <button 
                  type="submit" 
                  className="btn btn-primary flex items-center gap-2"
                >
                  Preview
                  <ArrowRight size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormPage;