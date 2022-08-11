import React, {Component} from 'react';
import '../Style/Home.css'
import axios from "axios";
import {Link} from "react-router-dom";

let Title;
Title = "Page list"
document.title = Title;

class Home extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        axios.get(`https://api.telegra.ph/getPageList?access_token=${process.env.REACT_APP_TOKEN}&return_content=true`)
            .then(res => {
                const persons = res.data.result.pages;
                this.setState({ persons });
                /*persons.map(
                    (person) => console.log(person)
                )*/
            })
    }

    render() {
        return (
            <>
                <h1 className="text-center">Page list</h1>
                <div className="page_list">
                    {
                        this.state.persons.map(
                            (person) => (
                                <div key={person.path} className={"list_item"}>
                                    <Link to={`/${person.path}/Page`} className={"home_path_title"} onClick={handleSubmitPage}>
                                        <h3>{person.title}</h3>
                                    </Link>
                                    <p className={"home_path_author_name"}>{person.author_name}</p>
                                </div>
                            ))
                    }
                </div>
                <div className={"create_button-block"}>
                    <Link to={"/Create-Page"} className={"create_button"} onClick={handleSubmitCreatePage}>Create Page</Link>
                </div>
            </>
        )
    }
}

const handleSubmitPage = () => {
    Title = "Page"
    document.title = Title;
};

const handleSubmitCreatePage = () => {
    Title = "Create page"
    document.title = Title;
};


export default Home;