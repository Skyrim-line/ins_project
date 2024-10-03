import React, { useState, useEffect } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [erros, setErros] = useState({
    username: "",
    email: "",
  });

  // useEffect(() 作用是在某个state/props改变的时候，去触发一段代码执行一些操作

  useEffect(() => {
    if (formData.username && formData.username.length < 3) {
      setErros((prevErros) => {
        return {
          ...prevErros,
          username: "Username must be at least 3 characters long",
        };
      });
    } else {
      setErros((prevErros) => {
        return {
          ...prevErros,
          username: "", // clear the error message
        };
      });
    }
  }, [formData]); // 引入formData作为依赖，当formData改变时，触发useEffect

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    // Prevent the default form submission
    e.preventDefault();
    if (!erros.username && !erros.email && !erros.username) {
      // no errors, can submit the form
      alert(
        "Submit successful, username is " +
          formData.username +
          " and email is " +
          formData.email
      );
    } else {
      // 有错误，提示用户并重新输入
      alert("Please correct the errors in the form");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleFormChange}
        />
        {erros.username && <p className="error-message">{erros.username}</p>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          name="email"
          value={formData.email}
          onChange={handleFormChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
