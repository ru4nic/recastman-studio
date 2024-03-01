import styled from 'styled-components';

export const RightMenu = styled.div`
  display: flex;
  gap: 3.7rem;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;

export const List = styled.div``;
export const Item = styled.div`
  font-size: 1.1rem;
  color: #fff;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1;
`;
