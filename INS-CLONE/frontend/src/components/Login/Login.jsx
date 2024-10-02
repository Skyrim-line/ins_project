import {
  RegisterContainer,
  Logo,
  Form,
  Input,
  Button,
  ErrorMessage,
  LoginLink,
} from "./Login.styles";
import skyrim from "../../assets/images/HUB.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { setAuthToken } from "../../apiConfig";

const Login = () => {
  // console.log("Login page");

  const navigate = useNavigate();

  const [fromData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errormessage, setError] = useState("");

  const handleChange = (e, key) => {
    // 把输入的用户名和密码存储到fromData中的key对应的value里
    let obj = { ...fromData, [key]: e.target.value };
    setFormData(obj);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fromData", fromData);
    const unFilledFields = Object.keys(fromData).filter(
      (key) => !fromData[key]
    ); //unFilledFields是一个数组，里面存储了未填写的字段
    console.log("unFilledFields", unFilledFields);
    if (unFilledFields.length > 0) {
      setError(`${unFilledFields} are required! Please fill in all fields`);
      return;
    }

    // 加入后端数据库登陆接口
    try {
      const url = "http://localhost:8000/api/auth/login";
      const response = await axios.post(url, fromData);
      console.log("response", response.data); // 在这里拿到token
      setAuthToken(response.data.token); // 把token存储到axios的header里
      setFormData({
        username: "",
        password: "",
      });
      // 成功后登陆到home主页
      navigate("/home");
    } catch (error) {
      console.log("Error registering user:", error.response.data);
      setError(error.response.data.message);
      // return;
    }

    // console.log("Ready to login"); // 准备登录然后跳转到主页
    // 登录成功后跳转到主页
    // navigate("/home");
  };
  return (
    <RegisterContainer>
      <Logo src={skyrim} alt="Skyrim" />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={fromData.username}
          onChange={(e) => handleChange(e, "username")} // username这里作为handlchange的key
        />
        <Input
          type="text"
          placeholder="Password"
          value={fromData.password}
          onChange={(e) => handleChange(e, "password")}
        />
        <Button type="submit">Login</Button>
      </Form>
      {errormessage && <ErrorMessage>{errormessage}</ErrorMessage>}
      <LoginLink>
        Not have an account? <Link to="/register">Sign up</Link>
      </LoginLink>
    </RegisterContainer>
  );
};

export default Login;
