import React, {Component} from 'react';
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import '../Style/Edit.css'

let path_url, title, author_name, content, Title;

class Edit extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://api.telegra.ph/getPage/${path_url}?path=${path_url}&return_content=true`)
            .then(res => {
                const persons = res.data.result;
                this.setState({ persons });

                title = persons.title;
                author_name = persons.author_name;
                content = persons.content;

                console.log(persons);
            })
    }

    render() {
        return (
            <>
                <Child />
                <FooBarForm />
            </>
        );
    }
}

function Child() {
    let { path_param } = useParams();
    path_url = path_param;
}

const initialFormData = {
    token: process.env.REACT_APP_TOKEN,
    title: "",
    content: "",
    author_name: "",
    return_content: true
};

const FooBarForm = () => {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({ ...formData, [e.target.name]: e.target.value.trim() });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);

        if (formData.title === "")
            formData.title = title;

        if (formData.content === "")
            formData.content = content;

        if (formData.author_name === "")
            formData.author_name = author_name;

        axios.get(`https://api.telegra.ph/editPage?access_token=${process.env.REACT_APP_TOKEN}&path=${path_url}&title=${formData.title}&content=["${formData.content}"]&author_name=${formData.author_name}&return_content=true`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    };

    return (
        <>
            <h1 className="text-center">Edit</h1>
            <div className={"edit"}>
                <div className={"edit_item"}>
                    <div className={"label_block"}>
                        <label className={"label_block-label"}>
                            Title:
                            <input className={"label_block-label-input"} name="title" defaultValue={title} onChange={handleChange} />
                        </label>
                    </div>
                    <div className={"label_block"}>
                        <label className={"label_block-label"}>
                            Author name:
                            <input className={"label_block-label-input"} name="author_name" defaultValue={author_name} onChange={handleChange} />
                        </label>
                    </div>
                    <div className={"label_block"}>
                        <label className={"label_block-label"}>
                            Content:
                            <textarea rows={"5"} className={"label_block-label-input"} name="content" defaultValue={content} onChange={handleChange} />
                        </label>
                    </div>
                    <div className={"edit_block_link"}>
                        <Link to={`/${path_url}/Page`} className={"edit_link"} onClick={handleSubmitBack}>Back</Link>
                        <button onClick={handleSubmit} className={"btn btn-light edit_button"}>
                            <Link to={"/"} className={"edit_link edit_link_padding"} onClick={handleSubmitSave}>Save</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

const handleSubmitBack = () => {
    Title = "Page"
    document.title = Title;
}

const handleSubmitSave = () => {
    Title = "Page list"
    document.title = Title;
}

export default Edit;