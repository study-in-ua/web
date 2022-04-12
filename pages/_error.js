import { Container } from "reactstrap";

function AppError({ statusCode }) {
  return (
    <Container>
      <h3>
        {statusCode ? `Помилка ${statusCode} на сервері` : "Помилка на клієнті"}
      </h3>
    </Container>
  );
}

AppError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default AppError;
