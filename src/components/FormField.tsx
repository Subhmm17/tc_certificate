import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface TextFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}

interface DateFieldProps {
  label: string;
  name: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  required?: boolean;
}

interface CheckboxFieldProps {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: React.FC<TextFieldProps> = ({ 
  label, 
  name, 
  value, 
  onChange, 
  placeholder = '', 
  required = false 
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="form-input"
        required={required}
      />
    </div>
  );
};

export const DateField: React.FC<DateFieldProps> = ({ 
  label, 
  name, 
  value, 
  onChange, 
  required = false 
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <DatePicker
        id={name}
        selected={value}
        onChange={onChange}
        className="form-input"
        dateFormat="dd/MM/yyyy"
        placeholderText="DD/MM/YYYY"
        required={required}
      />
    </div>
  );
};

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ 
  label, 
  name, 
  checked, 
  onChange 
}) => {
  return (
    <div className="form-group flex items-center">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
      <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
        {label}
      </label>
    </div>
  );
};