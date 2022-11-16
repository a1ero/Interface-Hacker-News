import React, { Component } from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Logo from "./logo.png"
import { ArrowClockwise } from "react-bootstrap-icons";

export default class Header extends Component{
      
    render(){
        function refreshPage() {
            window.location.reload();
        };
        return(
            <Router>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Nav.Link href="/">
                        <Navbar.Brand>
                            <img 
                                src={Logo}
                                height="35"
                                width="35" 
                                className="d-inline-block alight-top"
                                alt="Logo"
                            />
                        </Navbar.Brand>
                        </Nav.Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/hackerNews">Hacker News</Nav.Link>
                                <Nav.Link href="/newest">New</Nav.Link>
                                <Nav.Link href="/past">Past</Nav.Link>
                                <Nav.Link href="/comments">Comments</Nav.Link>
                                <Nav.Link href="/ask">Ask</Nav.Link>
                                <Nav.Link href="/show">Show</Nav.Link>
                                <Nav.Link href="/jobs">Jobs</Nav.Link>
                                <Nav.Link href="/submit">Submit</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <FormControl 
                                    type="text"
                                    placeholder="Search"
                                    className="mr-sm-2"
                                />
                                <Button variant="outline-info">Search</Button>
                            </Form>
                            <Nav className="mr-auto">
                                <Nav.Link href="/login">Login</Nav.Link>
                            </Nav>
                            <Button onClick={refreshPage} variant="outline-info"><ArrowClockwise/></Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Router>
        )
    }
}
