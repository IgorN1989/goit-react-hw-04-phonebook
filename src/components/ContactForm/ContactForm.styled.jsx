import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(2)};
  border: 2px solid ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius};
  padding: ${p => p.theme.spacing(2)};
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const Label = styled.label`
  height: 82px;
  display: flex;
  flex-direction: column;
  font-style: italic;
`;

export const Input = styled(Field)`
  margin-top: ${p => p.theme.spacing(1)};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(4)};
  line-height: 1.25;
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius};
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-style: italic;
  margin-left: ${p => p.theme.spacing(1)};
`;

export const AddBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(4)};
  background-color: ${p => p.theme.colors.main};
  font-weight: 500;
  color: ${p => p.theme.colors.reverse};
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius};
  transition: background-color ${p => p.theme.transition},
    color ${p => p.theme.transition}, box-shadow ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.colors.reverse};
    color: ${p => p.theme.colors.main};
    box-shadow: ${p => p.theme.shadow};
  }
`;
