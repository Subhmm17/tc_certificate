import React, { createContext, useState, useContext, ReactNode } from 'react';

export interface FormData {
  // School Info (Static)
  registrationNo: string;
  diseCode: string;
  schoolName: string;
  schoolAddress: string;
  contactNumber: string;
  
  // Certificate Details
  scholarNo: string;
  admissionNo: string;
  certificateDate: Date | null;
  studentName: string;
  motherName: string;
  fatherName: string;
  language: string;
  caste: string;
  studentSchool: string;
  village: string;
  district: string;
  dateFrom: Date | null;
  dateTo: Date | null;
  dateOfBirth: Date | null;
  dateOfBirthWords: string;
  isVaccinated: boolean;
  lastClass: string;
  medium: string;
  year: string;
  admittedClass: string;
  conduct: string;
  inchargeRegister: string;
  leavingDate: Date | null;
  motherFatherName: string;
  presentClass: string;
  attendanceCount: string;
  tuitionFeesPaid: string;
  hostelFeesPaid: string;
  otherFeesPaid: string;
  aadharNo: string;
  sssmIdNo: string;
  familyIdNo: string;
  bankName: string;
  accountNo: string;
  ifscCode: string;
  apaarId: string; // Additional field
  penNo: string; // Additional field
  principalSignature: string;
  inchargeSignature: string;
}

const defaultFormData: FormData = {
  // School Info (Static)
  registrationNo: '551/31/05/07',
  diseCode: '23260312009',
  schoolName: 'LITTLE STAR CONVENT SCHOOL',
  schoolAddress: 'Jeevan Jyoti Colony, Kali Billod, Dist: Indore (M.P)',
  contactNumber: '7987771793',
  
  // Certificate Details
  scholarNo: '',
  admissionNo: '',
  certificateDate: null,
  studentName: '',
  motherName: '',
  fatherName: '',
  language: '',
  caste: '',
  studentSchool: '',
  village: '',
  district: '',
  dateFrom: null,
  dateTo: null,
  dateOfBirth: null,
  dateOfBirthWords: '',
  isVaccinated: false,
  lastClass: '',
  medium: '',
  year: '',
  admittedClass: '',
  conduct: '',
  inchargeRegister: '',
  leavingDate: null,
  motherFatherName: '',
  presentClass: '',
  attendanceCount: '',
  tuitionFeesPaid: '',
  hostelFeesPaid: '',
  otherFeesPaid: '',
  aadharNo: '',
  sssmIdNo: '',
  familyIdNo: '',
  bankName: '',
  accountNo: '',
  ifscCode: '',
  apaarId: '',
  penNo: '',
  principalSignature: '',
  inchargeSignature: ''
};

interface FormContextType {
  formData: FormData;
  updateFormData: (data: Partial<FormData>) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
  };

  const resetForm = () => {
    setFormData(defaultFormData);
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData, resetForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};