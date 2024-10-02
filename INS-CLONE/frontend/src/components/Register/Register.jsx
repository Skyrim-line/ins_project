import {
  Button,
  ErrorMessage,
  Form,
  Input,
  LoginLink,
  Logo,
  RegisterContainer,
} from "./Register.style";
import skyrim from "../../assets/images/HUB.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [fromData, setFormData] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errormessage, setError] = useState("");

  // handleChange函数用于处理表单输入的变化，每次输入都会更新fromData的值
  const handleChange = (e, key) => {
    // console.log("e", e.target.value);
    let obj = { ...fromData, [key]: e.target.value };
    setFormData(obj);
  };

  // handleSubmit函数用于处理表单提交，如果有未填写的字段，就会显示错误信息,异步处理
  const handleSubmit = async (e) => {
    e.preventDefault(); //阻止表单提交的默认行为
    console.log("fromData", fromData); //查看输入的数据
    const unFilledFields = Object.keys(fromData).filter(
      (key) => !fromData[key]
    );
    console.log("unFilledFields", unFilledFields);
    if (unFilledFields.length > 0) {
      setError(`${unFilledFields} are required! Please fill in all fields`);
      return;
    }
    // 连接后端数据库
    try {
      const url = "http://localhost:8000/api/auth/register";
      const response = await axios.post(url, fromData);
      console.log("response", response.data);
      setFormData({
        fullName: "",
        email: "",
        username: "",
        password: "",
      });
      navigate("/home");
    } catch (error) {
      console.log("Error registering user:", error.response.data);
      setError(error.response.data.message);
    }
    // console.log("Success");
    // navigate("/home");
  };

  return (
    <RegisterContainer>
      <Logo src={skyrim} alt="Skyrim" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Full name"
          value={fromData.fullName}
          onChange={(e) => handleChange(e, "fullName")}
        />
        <Input
          type="email"
          placeholder="Email or Mobile Number"
          value={fromData.email}
          onChange={(e) => handleChange(e, "email")}
        />
        <Input
          type="text"
          placeholder="Username"
          value={fromData.username}
          onChange={(e) => handleChange(e, "username")}
        />
        <Input
          type="password"
          placeholder="Password"
          value={fromData.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <Button type="submit">Sign up</Button>
      </Form>

      {errormessage && <ErrorMessage>{errormessage}</ErrorMessage>}
      <LoginLink>
        Already have an account? <Link to="/login">Sign in</Link>
      </LoginLink>
    </RegisterContainer>
  );
};

export default Register;
