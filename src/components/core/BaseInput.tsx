import React from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  feedback?: string;
  required?: boolean;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  labelPosition?: "top" | "left" | "right" | "bottom";
}

const Input: React.FC<InputProps> = ({
  label,
  value,
  name,
  onChange,
  feedback,
  required = false,
  prefix,
  suffix,
  labelPosition = "top",
  ...props
}) => {
  const defaultFeedback =
    required && !feedback ? `The ${name} field is required` : feedback;

  const renderLabel = (position: "top" | "left" | "right" | "bottom") => {
    if (!label) return null;
    const labelElement = (
      <Form.Label htmlFor={props.id} className="form-label text-default">
        {label}
      </Form.Label>
    );

    switch (position) {
      case "top":
        return <div>{labelElement}</div>;
      case "left":
        return <Col sm="2">{labelElement}</Col>;
      case "right":
        return (
          <Col sm="2" className="text-end">
            {labelElement}
          </Col>
        );
      case "bottom":
        return <div className="mt-2">{labelElement}</div>;
      default:
        return null;
    }
  };

  // Determine if prefix is a string or React component
  const renderPrefix = () => {
    if (typeof prefix === "string") {
      return (
        <InputGroup.Text id={`${props.id}GroupPrepend`}>
          {prefix}
        </InputGroup.Text>
      );
    } else {
      return prefix; // Render as ReactNode directly
    }
  };

  // Determine if suffix is a string or React component
  const renderSuffix = () => {
    if (typeof suffix === "string") {
      return (
        <InputGroup.Text id={`${props.id}GroupAppend`}>
          {suffix}
        </InputGroup.Text>
      );
    } else {
      return suffix; // Render as ReactNode directly
    }
  };

  return (
    <Form.Group>
      {labelPosition === "top" && renderLabel("top")}
      <Row
        className={
          labelPosition === "left" || labelPosition === "right"
            ? "align-items-center"
            : ""
        }
      >
        {labelPosition === "left" && renderLabel("left")}
        <Col>
          <InputGroup hasValidation>
            {prefix && renderPrefix()}
            <Form.Control
              {...props}
              name={name}
              value={value}
              onChange={onChange}
              aria-describedby={
                prefix
                  ? `${name}GroupPrepend`
                  : suffix
                  ? `${name}GroupAppend`
                  : undefined
              }
              required={required}
            />
            {suffix && renderSuffix()}
            {defaultFeedback && (
              <Form.Control.Feedback type="invalid">
                {defaultFeedback}
              </Form.Control.Feedback>
            )}
          </InputGroup>
        </Col>
        {labelPosition === "right" && renderLabel("right")}
      </Row>
      {labelPosition === "bottom" && renderLabel("bottom")}
    </Form.Group>
  );
};

export default Input;
