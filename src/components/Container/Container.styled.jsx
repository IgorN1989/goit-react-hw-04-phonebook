import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  padding: ${p => p.theme.spacing(4)};
  margin: ${p => p.theme.spacing(4)} auto;

  border: none;
  border-radius: ${p => p.theme.radius};
  box-shadow: ${p => p.theme.shadow};
  font-size: 16px;
  font-weight: 500;
`;

export const MainHeader = styled.h1`
  font-size: 24px;
  color: ${p => p.theme.colors.main};
  padding: ${p => p.theme.spacing(2)} 0;
  text-transform: uppercase;
`;

export const SectionHeader = styled.h2`
  color: ${p => p.theme.colors.main};
  font-size: 24px;
  padding: ${p => p.theme.spacing(2)} 0;
`;
