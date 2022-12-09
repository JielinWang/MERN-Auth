import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Group } from "@mantine/core";
import { Logout } from "tabler-icons-react";

function NavBar() {
  const user = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt="logo"
            src="../../favicon.ico"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          JW Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {!user ? (
              <>
                <Nav.Link href="/signup">Sign Up</Nav.Link>
                <Nav.Link href="/login">Login</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link href="/deposit">Deposit</Nav.Link>
                <Nav.Link href="/withdraw">Withdraw</Nav.Link>
                <Nav.Link href="/all-data">AllData</Nav.Link>
              </>
            )}
          </Nav>
          <Nav>
            {user && (
              <Group position="right" align="right" spacing="lg">
                <Button
                  onClick={handleLogout}
                  leftIcon={<Logout />}
                  size={"xs"}
                  radius={"xs"}
                  color="teal.5"
                >
                  Logout
                </Button>
              </Group>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
