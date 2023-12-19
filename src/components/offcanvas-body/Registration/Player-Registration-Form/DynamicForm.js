import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const DynamicFields = () => {
  const [fields, setFields] = useState([]);
  const [optionsLabel, setOptionsLabel] = useState('');

  const addFields = () => {
    const newFieldSet = {
      id: fields.length,
      radioLabel: optionsLabel || 'Options',
      radios: [
        { id: `radioA-${fields.length}`, label: 'Provided' },
        { id: `radioB-${fields.length}`, label: 'Not Provided' },
      ],
      text: { id: `text-${fields.length}`, placeholder: 'Enter text' },
      textLabel: 'Quantity', // Label for text field
    };
    setFields([...fields, newFieldSet]);
    setOptionsLabel(''); // Clear input after adding fields
  };

  return (
    <div>
      <Form.Group controlId="optionsLabel">
        <Form.Label>Enter Label for Options:</Form.Label>
        <Form.Control
          type="text"
          value={optionsLabel}
          onChange={(e) => setOptionsLabel(e.target.value)}
        />
      </Form.Group>
      <Button onClick={addFields}>Add Fields</Button>
      <Form>
        {fields.map((field) => (
          <div key={field.id} style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: '10px' }}>
              <Form.Label>{field.radioLabel}</Form.Label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {field.radios.map((radio) => (
                  <div key={radio.id} style={{ marginRight: '10px' }}>
                    <Form.Check
                      type="radio"
                      id={radio.id}
                      label={radio.label}
                      name={`radioGroup-${field.id}`}
                    />
                  </div>
                ))}
                <Form.Control
                  type="number"
                  id={field.text.id}
                />
              </div>
            </div>
          </div>
        ))}
      </Form>
    </div>
  );
};

export default DynamicFields;
