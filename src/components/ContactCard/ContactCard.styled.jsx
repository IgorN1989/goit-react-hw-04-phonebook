import styled from 'styled-components';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.theme.spacing(2)};

  border: none;
  border-radius: ${p => p.theme.radius};

  transition: background-color ${p => p.theme.transition},
    color ${p => p.theme.transition}, box-shadow ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.colors.main};
    color: ${p => p.theme.colors.reverse};
    box-shadow: ${p => p.theme.shadow};
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.spacing(2)};
  padding: ${p => p.theme.spacing(1)} ${p => p.theme.spacing(2)};
  background-color: ${p => p.theme.colors.main};
  color: ${p => p.theme.colors.reverse};
  border: 1px solid ${p => p.theme.colors.main};
  border-radius: ${p => p.theme.radius};
  transition: background-color ${p => p.theme.transition},
    color ${p => p.theme.transition};

  &:hover {
    background-color: ${p => p.theme.colors.reverse};
    color: ${p => p.theme.colors.main};
  }
`;
