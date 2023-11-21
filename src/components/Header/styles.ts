import styled from "styled-components";

export const HeaderContainer = styled.header`
height: 6rem;
box-shadow: 0 10px 30px -10px ${({theme}) => theme.shadow};
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
padding: 0 2rem;
`