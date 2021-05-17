import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.primaryLight};
  border-radius: 4px;
  padding: 0.4em 0.8em;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

const LeadForm = () => {
  return (
    <Form inline>
      <Form.Label className="text-dark mr-2 mb-2">
        SOLICITE UMA PROPOSTA
      </Form.Label>
      <Form.Control
        className="mb-2 mr-sm-2"
        id="inlineFormInputName"
        placeholder="Nome"
        name="name"
      />
      <Form.Control
        className="mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Email"
        name="email"
      />
      <CustomButton type="submit">Enviar</CustomButton>
    </Form>
  );
};

export default LeadForm;
