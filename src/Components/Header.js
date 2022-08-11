import React, {Component} from 'react';
import {Navbar} from "react-bootstrap";
import { Container, Nav, Form, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo192.png';
import {Routes} from "react-router";
import {Link, Route} from "react-router-dom";

import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import Page from "../Pages/Page";
import Edit from "../Pages/Edit";
import Create_Page from "../Pages/Create_Page";
import '../Style/Header.css';

let Title;

class Header extends Component {
    render() {
        return (
            <>
                <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="30"
                                width="30"
                                className="d-inline-block align-top"
                                alt="Logo"
                            /> React site
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto my-2 my-lg-0">
                                <Link to={"/"} className={"nav_link"} onClick={handleSubmitPageList}>Home</Link>
                                <Link to={"/Contacts"} className={"nav_link"} onClick={handleSubmitContactUs}>Contacts</Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="text"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                    <Routes>
                        <Route exact path="*" element={<Home />}/>
                        <Route exact path="/Contacts" element={<Contacts />}/>
                        <Route path="/:path_param/Page" element={<Page />} />
                        <Route path="/:path_param/Page/Edit" element={<Edit />} />
                        <Route path="/Create-Page" element={<Create_Page />} />
                    </Routes>
            </ >
        );
    }
}

const handleSubmitPageList = () => {
    Title = "Page list"
    document.title = Title;
};

const handleSubmitContactUs = () => {
    Title = "Contact us"
    document.title = Title;
};

export default Header;