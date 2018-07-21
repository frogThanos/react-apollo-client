import styled from 'styled-components';

const FormContainer = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const FromTitle = styled.h2`

`;

const Form = styled.form`
  width: 30%;
  margin: 0 auto;
`;

const FormInput = styled.input`
  display: block;
  margin-bottom: 20px;
  width: 100%;
`;

const ErrorText = styled.p`
  color: red;
`;

export {
  FormContainer,
  FromTitle,
  Form,
  FormInput,
  ErrorText,
};
