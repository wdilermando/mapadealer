import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { Alert, Form, Toast } from 'react-bootstrap';
import styled from 'styled-components';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';

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

const schema = Yup.object().shape({
  name: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
  email: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
});

const LeadForm = ({ inline }) => {
  const formRef = useRef(null)
  function onSubmit(values) {
    console.log('submit', values);
    formRef.current.reset();   
    toast.info("Solicitação enviada com sucesso!")
  }  

  return (
    <Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
        email: '',
        name:''
      }}
      render={({ values, handleChange, handleSubmit, isValid }) => (
        <Form onSubmit={handleSubmit} ref={formRef} inline={inline} >
          <ProposalText inline={inline}>SOLICITE UMA PROPOSTA</ProposalText>
          <CustomFormInput 
          required           
            type="text"
            className="mb-2 mr-sm-2"
            id="inlineFormInputName"
            placeholder="Nome"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          <CustomFormInput    
          required        
            type="email"
            className="mb-2 mr-sm-2"
            id="inlineFormInputName2"
            placeholder="E-mail"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <CustomButton type="submit" disabled={!isValid}>Enviar</CustomButton>
          <ToastContainer />
        </Form>

      )}
    />
  );
};

export default LeadForm;
