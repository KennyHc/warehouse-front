import React from 'react';

interface FormInputProps {
  id: string;
  label: string;
  type?: 'text' | 'number' | 'textarea';
  value: string | number;
  onChange: (value: string) => void;
  required?: boolean;
  min?: number;
  rows?: number;
}

export function FormInput({
  id,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  min,
  rows,
}: FormInputProps) {
  const renderInput = () => {
    if (type === 'textarea') {
      return (
        <textarea
          id={id}
          rows={rows || 3}
          className="form-input"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
        />
      );
    }

    return (
      <input
        type={type}
        id={id}
        className="form-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        min={min}
      />
    );
  };

  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {renderInput()}
    </div>
  );
}