import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'

function NavComponent() {
    return (
        <Navbar bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand  to="/">My App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>About Me</Nav.Link>
                        <Nav.Link>Contact</Nav.Link>
                        {user.user 
                            ? <Nav.Link onClick={() => user.signout()}>Log Out</Nav.Link>
                            : <Nav.Link as={Link} to="/login">Log In</Nav.Link>
                        }
                    </Nav>
          
                    {user.user && 
                        (
                            <Navbar.Text className="justify-content-end">
                                Signed in as: {user.user.username}
                            </Navbar.Text>
                        )
                    }

                </Navbar.Collapse>
             
            </Container>
        </Navbar>
    )
}

export default NavComponent