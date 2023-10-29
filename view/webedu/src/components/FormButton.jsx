import styled from 'styled-components';

export const StyledFormButton = styled.button`
    background: #48854d;
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    padding: 10px 20px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #27ae60;
        transform: translateY(-2px);
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
    }
`;

const FormButton = ({ children }) => (
    <StyledFormButton type="submit">{children}</StyledFormButton>
);

export default FormButton;