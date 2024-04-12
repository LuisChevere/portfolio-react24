import Nav from 'react-bootstrap/Nav';

function AlignmentExample() {
  return (
    <>
<Nav className="justify-content-end" activeKey="/home">
    <img src='./public/assets/images/morningstarlogocompressed.png' alt="brandlogo"></img>
        <Nav.Item>
          <Nav.Link href="/home">About Me</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/projects">Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/resume">Resume</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/contact">contact</Nav.Link>
        </Nav.Item>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;