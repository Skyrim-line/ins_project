// 此文件用于实现Form表单练习
import React, { useState } from "react";    
import Ajv from "ajv";
import ajcError from "ajv-errors";



const WritePost = props => {

    const schema = {
        type: "object",
        properties: {
            title: {
                type: "string",
                minLength: 2,
                maxLength: 32,
                errorMessage: {
                    type: "Title should be a string",
                    minLength: "Title should be at least 2 words",
                    maxLength: "Title should be less than 32 words"
                }
            },
            content: {
                type: "string",
                minLength: 2,
                maxLength: 140
            }
        },
    };

    const ajv = new Ajv({ allErrors: true });
    ajcError(ajv);
    const validate = ajv.compile(schema);   


    const [errors, setErrors] = useState({});

    const [postDetail, setPostDetail] = useState({
        title: "",
        content: ""
     });

    const handleSubmit = e => {
        // 1.阻止表单默认提交行为
        // 2.获取表单数据
        // 3.提交数据
        e.preventDefault();
        // const form = e.target;
        // const formData = new FormData(form); // html5新增的对象，用于表单数据的获取 
        // const data = Object.fromEntries(formData.entries()); // 将FormData对象转换为普通对象
        console.log(postDetail);
        // using ajv to validate data
        const isValid = validate(postDetail);
        setErrors({});
        if (!isValid) {
            const newErrors = {};
            validate.errors.forEach(error => {
                const key = error.dataPath.slice(1); // remove the first character
                newErrors[key] = error.message;
            });
            setErrors(newErrors);
            console.log(newErrors);
            return;
        }
        

    }

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        // 更新状态
        setPostDetail({
            ...postDetail, // 用新的对象替换旧的对象
            [name]: value
        });
    }

    // 手动校验数据
    const validateForm = () => {
        let isValid = true;

        const title = postDetail.title;
        const content = postDetail.content;
        // 根据要求校验数据
        if(title.trim().length < 2 || title.length > 32){
            alert("Title length should be between 2 and 32 words");
            isValid = false;
        }

        if (content.trim().length > 140) {
            alert("Content length should be less than 140 words");
            isValid = false;
        }

        return isValid;
    
    }


    return (
        <div className="row">
            <div className="col-md-12">
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Title</label>
                        <input
                            name="title"
                            type="text"
                            className="form-control"
                            placeholder="Please input content, 2-32 words"
                            value={postDetail.title}
                            onChange={handleChange}
                        />
                        {errors.title && <span className="text-danger">{errors.title}</span>}
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Content</label>
                        <textarea
                            name="content"
                            className="form-control"
                            rows="10"
                            placeholder="Please input your content, maximum length 140 words"
                            value={postDetail.content}
                            onChange={handleChange}
                        ></textarea>
                        {errors.title && <span className="text-danger">{errors.title}</span>}
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={validateForm}>Submit</button>
                </form>
            </div>  
        </div>
    )
}

export default WritePost;