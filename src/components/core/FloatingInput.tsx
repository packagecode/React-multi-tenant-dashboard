import React, { useState } from "react";
import { FloatingLabel, Form, InputGroup } from "react-bootstrap";

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  feedback?: string;
  required?: boolean;
  prefix?: string;
  suffix?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const FloatingLabelInput: React.FC<FloatingLabelInputProps> = ({
  label,
  value,
  onChange,
  feedback,
  required = false,
  prefix,
  suffix,
  onFocus,
  ...props
}) => {
  const defaultFeedbacks =
    required && !feedback
      ? value && props.type === "email"
        ? `Please enter a valid email address`
        : `The ${name} field is required`
      : feedback;

  const [isFocused, setIsFocused] = useState(false);

  // Default feedback message when field is required
  const defaultFeedback = `The ${label} field is required.`;

  // Handle internal focus event
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(e); // Call the overridden onFocus event if provided
    }
  };

  // Handle blur event
  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Form.Group>
      <InputGroup hasValidation>
        {prefix && (
          <InputGroup.Text id={`${props.id}GroupPrepend`}>
            {prefix}
          </InputGroup.Text>
        )}
        <FloatingLabel label={label} controlId={props.name}>
          <Form.Control
            {...props}
            name={props.name}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            aria-describedby={
              prefix
                ? `${props.name}GroupPrepend`
                : suffix
                ? `${props.name}GroupAppend`
                : undefined
            }
            required={required}
            isInvalid={required && !!feedback && !isFocused}
          />
        </FloatingLabel>
        {suffix && (
          <InputGroup.Text id={`${props.name}GroupAppend`}>
            {suffix}
          </InputGroup.Text>
        )}
      </InputGroup>
      {(isFocused || feedback) && required && (
        <Form.Text className="text-danger">
          {feedback || defaultFeedback}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default FloatingLabelInput;
