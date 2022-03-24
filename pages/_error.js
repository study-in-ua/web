function AppError({ statusCode }) {
  console.log("statusCode", statusCode);
  return (
    <div className="uk-section">
      <div className="uk-container uk-container-large">
        {statusCode ? `Помилка ${statusCode} на сервері` : "Помилка на клієнті"}
      </div>
    </div>
  );
}

AppError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default AppError;
