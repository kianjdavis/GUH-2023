import styled from 'styled-components';

export const StyledTextField = styled.input`
    width: 100%;
    padding: 10px;
    font-size: 18px;
    border-radius: 10px;
    border: 2px solid #48854d;
    margin-bottom: 20px;
`;

const TextField = ({ id, name, type, placeholder, value, onChange }) => (
    <StyledTextField
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
    />
);

export default TextField;