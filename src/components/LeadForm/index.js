import React, { useState } from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';

const CustomButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  margin-bottom: 0.5em;
  color: ${({ theme }) => theme.primaryLight};
  border-radius: 4px;
  padding: 0.4em 0.8em;
  transition: background-color 0.3s linear;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    transition: background-color 0.3s linear;
  }
`;

const ProposalText = styled.h5`
  color: ${({ theme }) => theme.colors.tertiary};
  font-size: 12px;
  white-space: ${({ inline }) => (inline ? 'pre-wrap' : 'normal')};
  width: ${({ inline }) => (inline ? '8vw' : 'auto')};
  /* margin-right: 2vw; */
`;

const CustomFormInput = styled(Form.Control)`
  border: 1px solid
    ${({ theme, name }) =>
      name === 'name' ? theme.colors.secondary : theme.colors.primary};
  &:focus {
    border-color: ${({ theme, name }) =>
      name === 'name' ? theme.colors.secondary : theme.colors.primary};
    box-shadow: 0 0 0 0.2rem
      ${({ name }) => (name === 'name' ? '#BA064940' : '#20366340')};
  }
`;

const LeadForm = ({ inline }) => {
  function onSubmit(values, { resetForm }) {
    console.log('submit', values);
    // actions.setValues({ name: '', email: '' });
  }

  function validate(values) {}

  return (
    <Formik
      validate={validate}
      onSubmit={onSubmit}
      initialValues={{
        name: '',
        email: '',
      }}
      render={({ values, handleChange, handleSubmit }) => (
        <Form onSubmit={handleSubmit} inline={inline}>
          <ProposalText inline={inline}>SOLICITE UMA PROPOSTA</ProposalText>
          <CustomFormInput
            required
            type="text"
            className="mb-2 mr-sm-2"
            id="inlineFormInputName"
            placeholder="Nome"
            name="name"
            values={values.name}
            onChange={handleChange}
          />
          <CustomFormInput
            required
            type="email"
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="E-mail"
            name="email"
            values={values.email}
            onChange={handleChange}
          />
          <CustomButton type="submit">Enviar</CustomButton>
        </Form>
      )}
    />
  );
};

export default LeadForm;
