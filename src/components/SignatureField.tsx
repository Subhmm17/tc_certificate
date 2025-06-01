import React, { useRef, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';

interface SignatureFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: (signature: string) => void;
}

const SignatureField: React.FC<SignatureFieldProps> = ({ label, name, value, onChange }) => {
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [isEmpty, setIsEmpty] = useState(true);

  const handleClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
      setIsEmpty(true);
      onChange('');
    }
  };

  const handleSave = () => {
    if (sigCanvas.current) {
      const signatureData = sigCanvas.current.toDataURL('image/png');
      onChange(signatureData);
      setIsEmpty(false);
    }
  };

  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="border border-gray-300 rounded-md p-2 bg-white">
        {value ? (
          <div className="mb-2">
            <img src={value} alt="Signature" className="max-h-24" />
          </div>
        ) : (
          <SignatureCanvas
            ref={sigCanvas}
            penColor="black"
            canvasProps={{
              className: 'w-full h-24 border border-gray-200 rounded',
            }}
            onEnd={() => setIsEmpty(false)}
          />
        )}
        <div className="flex mt-2 space-x-2">
          <button
            type="button"
            onClick={handleClear}
            className="px-3 py-1 text-xs text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Clear
          </button>
          {!value && (
            <button
              type="button"
              onClick={handleSave}
              disabled={isEmpty}
              className={`px-3 py-1 text-xs rounded ${
                isEmpty
                  ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignatureField;