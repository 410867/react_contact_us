import React, {Component} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";
import '../Style/Create_Page.css'

let Title;

class CreatePage extends Component {
    render() {
        return (
            <>
                <FooBarForm />
            </>
        );
    }
}

const initialFormData1 = {
    token: process.env.REACT_APP_TOKEN,
    title: "",
    content: "",
    author_name: "",
    return_content: true
};

const FooBarForm = () => {
    const [formData, updateFormData] = React.useState(initialFormData1);

    const handleChange = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        axios.get(`https://api.telegra.ph/createPage?access_token=${process.env.REACT_APP_TOKEN}&title=${formData.title}&author_name=${formData.author_name}&content=["${formData.content}"]`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    return (
        <>
            <h1 className="text-center">Create Page</h1>
            <div className={"create_page"}>
                <div className={"create_page_item"}>
                    <div className={"label_block"}>
                        <label className={"label_block-label"}>
                            Title:
                            <input className={"label_block-label-input"} name="title" onChange={handleChange} />
                        </label>
                    </div>
                    <div className={"label_block"}>
                        <label className={"label_block-label"}>
                            Author name:
                            <input className={"label_block-label-input"} name="author_name" onChange={handleChange} />
                        </label>
                    </div>
                    <div className={"label_block"}>
                        <label className={"label_block-label"}>
                            Content:
                            <textarea rows={"5"} className={"label_block-label-input"} name="content" onChange={handleChange} />
                        </label>
                    </div>
                    <div className={"create_page_block_link"}>
                        <Link to={"/"} className={"create_page_link"} onClick={handleSubmitBack_Save}>Back</Link>
                        <button onClick={handleSubmit} className={"btn btn-light create_page_button"}>
                            <Link to={"/"} className={"edit_link create_page_link_padding"} onClick={handleSubmitBack_Save}>Create</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const handleSubmitBack_Save = () => {
    Title = "Page List"
    document.title = Title;
}

export default CreatePage;