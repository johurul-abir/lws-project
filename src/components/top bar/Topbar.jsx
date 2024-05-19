import { Container, Nav, NavDropdown, NavItem, Navbar } from "react-bootstrap";
import "./Topbar.scss";
import { CiDark } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [mode, setMode] = useState(false);
  //const [mode, setMode] = useState(false);
  const handleLightMode = () => {
    setMode(false);
  };
  const handleDarkMode = () => {
    setMode(true);
  };

  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem(mode, JSON.stringify(true));
  };
  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("mode", false);
  };

  if (mode) {
    setLightTheme();
  } else {
    setDarkTheme();
  }

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="topbar"
        fixed="top"
        id="topbar"
      >
        <Container>
          <Navbar.Brand href="#home" className="logo">
            {mode ? (
              <Link to="/">
                <img src="https://learnwithsumit.com/_next/static/media/lws-logo-dark.8e393acf.svg" />
              </Link>
            ) : (
              <Link to="/">
                <img src="https://learnwithsumit.com/_next/static/media/lws-logo-light.ae7b3c3a.svg" />
              </Link>
            )}
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" id="active_btn">
                হোম
              </Nav.Link>

              <NavDropdown
                className="n mx-2"
                title="রিয়াক্টিভ এক্সিলারেটর"
                id="collapsible-nav-dropdown "
              >
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="থিংক ইন এ রিডাক্স ওয়ে"
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item className="me-2">
                <div className="mode">
                  {mode ? (
                    <button className="light" onClick={handleLightMode}>
                      <MdOutlineLightMode />
                    </button>
                  ) : (
                    <button className="dark" onClick={handleDarkMode}>
                      <CiDark />
                    </button>
                  )}
                </div>
              </Nav.Item>
              <NavItem>
                <button className="btn btn-sm btn btn-dark"> লগইন </button>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
