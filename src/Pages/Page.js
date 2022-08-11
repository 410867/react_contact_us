import React, {Component} from 'react';
import '../Style/Page.css'
import axios from "axios";
import {Link, useParams} from "react-router-dom";

let page, Title;

class Path extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get(`https://api.telegra.ph/getPage/${page}?path=${page}&return_content=true`)
            .then(res => {
                const persons = res.data.result;
                this.setState({ persons });
                console.log(persons);
            })
    }

    render() {
        return (
            <>
                <Child />
                <h1 className="text-center">Page</h1>
                <div className={"path"}>
                    <div className={"path_item"}>
                        <h2 className={"path_title"}>{this.state.persons.title}</h2>
                        <p className={"path_author_name"}>{this.state.persons.author_name}</p>
                        <p className={"path_content"}>{this.state.persons.content}</p>
                        <div className={"path_link"}>
                            <Link to={"/"} className={"path_button"} onClick={handleSubmitBack}>Back</Link>
                            <Link to={`/${this.state.persons.path}/Page/Edit`} className={"path_button"} onClick={handleSubmitEdit}>Edit</Link>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

function Child() {
    let { path_param } = useParams();

    page = path_param;
}

const handleSubmitBack = () => {
    Title = "Page list"
    document.title = Title;
}

const handleSubmitEdit = () => {
    Title = "Edit"
    document.title = Title;
}

export default Path;