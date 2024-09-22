import { Nav, Navbar, Card, ListGroup } from "react-bootstrap";

const App = () => {
  const nombre = "Juan Carlos Santoyo Navarro";
  const correo = 'juancarlossantoyo0@gmail.com'
  const telefono = 4495815002
  const LinkedIn = 'Juan Carlos Santoyo'
  const GitHub = 'CharlyNavarro'  
  const experiencia = "desarrollo de software";
  const habilidadesClave = "JS";
  const expRelevante = "Hackatones";
  const objetivo = "ser jefe";
  const empresa = "Oxxo";
  const ciudad = "Aguascalientes";
  const pais = "México";
  const fechaInicio = "12/Mayo/2021";
  const fechaFin = "5/Agosto/2024";
  const titulo =
    "Técnico Superior Universitario: Desarrollo de Software Multiplataforma";
  const insEduc = "Universidad Técnológica Metropolitana de Aguascalientes";
  const posEmpresa = "Auxiliar";
  const fechaInicioEd = "30/Agosto/2023";
  const fechaFinEd = "Agosto/2027";

  return (
    <>
      {/*Encabezado*/}
      <Nav className="navbar-dark bg-dark justify-content-center">
        <header className="mt-2">
          <Navbar.Brand>
            <h1 className="text-center">{nombre}</h1>
            <p className="text-center">
              {correo} | {telefono} | {LinkedIn} | {GitHub}
            </p>
          </Navbar.Brand>
        </header>
      </Nav>

      {/*Resumen Profesional*/}
      <Card
        className="mx-auto mt-2 shadow p-3 mb-5 bg-light rounded"
        style={{ width: "60%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>Resumen Profesional</h3>
            <hr></hr>
          </Card.Title>
          <p>
            Soy un profesional con expreriencia en {experiencia}. Tengo
            habilidades en {habilidadesClave} y una sólida experiencia en{" "}
            {expRelevante}. Mi objetivo es {objetivo}.
          </p>
        </Card.Body>
      </Card>

      {/*Experiencia*/}
      <Card
        className="mx-auto mb-5 shadow p-3 bg-light rounded"
        style={{ width: "60%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>Experiencia Laboral</h3>
            <hr></hr>
          </Card.Title>
          <h5>{posEmpresa}</h5>
          <p>
            <b>{empresa}</b> - {ciudad}, {pais}{" "}
          </p>
          <p>
            {fechaInicio} - {fechaFin}
          </p>

          {/*Responsabilidades y/o logros */}

          <ListGroup>
            <ListGroup.Item
              style={{ backgroundColor: "#e4e4e4" }}
              className="mb-2  text-dark"
            >
              Responsabilidad o logro 1
            </ListGroup.Item>
            <ListGroup.Item
              className="mb-2 text-dark"
              style={{ backgroundColor: "#e4e4e4" }}
            >
              Responsabilidad o logro 2
            </ListGroup.Item>
            <ListGroup.Item
              className=" text-dark"
              style={{ backgroundColor: "#e4e4e4" }}
            >
              Responsabilidad o logro 3
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/*Educación*/}
      <Card
        className="mx-auto shadow p-3 mb-5 bg-light rounded"
        style={{ width: "60%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>Educación</h3>
            <hr></hr>
          </Card.Title>
          <h5>{titulo}</h5>
          <p>
            <b>{insEduc}</b> - {ciudad}, {pais}.
          </p>
          <p>
            {fechaInicioEd} - {fechaFinEd}
          </p>
        </Card.Body>
      </Card>

      {/*Habilidades*/}
      <Card
        className="mx-auto shadow p-3 mb-5 bg-light rounded"
        style={{ width: "60%" }}
      >
        <Card.Body>
          <Card.Title>
            <h3>Habilidades</h3>
            <hr></hr>
          </Card.Title>

          <ListGroup>
            <ListGroup.Item
              style={{ backgroundColor: "#e4e4e4" }}
              className="mb-2  text-dark"
            >
              Habilidad 1
            </ListGroup.Item>
            <ListGroup.Item
              className="mb-2 text-dark"
              style={{ backgroundColor: "#e4e4e4" }}
            >
              Habilidad 2
            </ListGroup.Item>
            <ListGroup.Item
              className=" text-dark"
              style={{ backgroundColor: "#e4e4e4" }}
            >
              Habilidad 3
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      {/*Pie de Página*/}
      <Nav className="navbar-dark bg-dark justify-content-center">
        <footer className="mt-3">
          <Navbar.Brand className="">
            <p>&#169; 2024 {nombre}. Todos los derechos reservados.</p>
          </Navbar.Brand>
        </footer>
      </Nav>
    </>
  );
};

export default App;
