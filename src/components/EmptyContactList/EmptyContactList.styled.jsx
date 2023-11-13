import styled from 'styled-components';

export const EmptyContactList = styled.p`
  margin-top: ${p => p.theme.spacing(2)};
  font-style: italic;
  color: ${p => p.theme.colors.error};
`;
