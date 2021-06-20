import React from 'react';
import { Formik } from 'formik';
import { Form } from 'react-bootstrap';
import styled from 'styled-components';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { sendLead } from '../../lib/api';

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
    &:disabled {
        background-color: #ccc;
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
        ${({ theme, name }) => (name === 'name' ? theme.colors.secondary : theme.colors.primary)};
    &:focus {
        border-color: ${({ theme, name }) =>
            name === 'name' ? theme.colors.secondary : theme.colors.primary};
        box-shadow: 0 0 0 0.2rem ${({ name }) => (name === 'name' ? '#BA064940' : '#20366340')};
    }
`;

const schema = Yup.object().shape({
    name: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório'),
    email: Yup.string().min(3, 'Muito Curto!').required('Campo obrigatório')
});

const customId = 'custom-id-yes';

const LeadForm = ({ inline }) => {
    const notify = () => {
        toast('Solicitação enviada com sucesso!', {
            toastId: customId
        });
    }
    async function onSubmit(values, { resetForm }) {
        const result = await sendLead(values.name, values.email);
        console.log(result);
        resetForm();
        notify();
    }

    return (
      <><Formik
      validationSchema={schema}
      onSubmit={onSubmit}
      initialValues={{
          email: '',
          name: ''
      }}
      render={({ values, handleChange, handleSubmit, isValid, touched, errors }) => (
          <Form onSubmit={handleSubmit} inline={inline}>
              <ProposalText inline={inline}>SOLICITE UMA PROPOSTA</ProposalText>
              <Form.Group>
                  <CustomFormInput
                      type="text"
                      className="mb-2 mr-sm-2"
                      id="inlineFormInputName"
                      placeholder="Nome"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name && touched.name}
                  />
                  <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                  <CustomFormInput
                      type="email"
                      className="mb-2 mr-sm-2"
                      id="inlineFormInputName2"
                      placeholder="E-mail"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email && touched.email}
                  />
                  <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
              </Form.Group>

              <CustomButton type="submit" disabled={!isValid}>
                  Enviar
              </CustomButton>
          </Form>
      )}
      />
      <ToastContainer />
      </>
        
    );
};

export default LeadForm;
