import React from "react";
import Form from "react-bootstrap/Form";

interface CheckboxProps {
  type?: string;
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  feedback?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  type = "checkbox",
  label,
  checked,
  onChange,
  disabled,
  feedback,
  ...props
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e); //e.target.checked
  };

  return (
    <Form.Group>
      <Form.Check
        {...props}
        type={type}
        label={label}
        checked={checked}
        onChange={handleChange}
        isInvalid={!!feedback}
        feedback={feedback}
        feedbackType="invalid"
      ></Form.Check>
    </Form.Group>
  );
};

export default Checkbox;
