import styled from "styled-components";
// 这个文件是用于定义注册页面的样式的

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #fff;
`;

export const Logo = styled.img`
    display: flex;
    align-items: center;
    width: 300px;
    margin-bottom: 30px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    margin: 0 auto;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
`;

export const Button = styled.button`
    width: 100%;
    height: auto;
    padding: 10px;
    background-color: #0095f6;
    color: #fff; 
    font-weight: 600;
    border: none;
    border-radius: 5px;
    box-sizing: border-box;
    cursor: pointer;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    &:hover {
        opacity: 0.6;
    }
`;

export const LoginLink = styled.p`
    color: #262626;
    font-size: 14px;
`;

export const ErrorMessage = styled.p`
color: red;
`;