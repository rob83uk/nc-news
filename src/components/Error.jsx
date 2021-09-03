const Error = () => {
  return (
    <div>
      <section className="container" id="error">
        <div className="error-msg">
          <h1>Error!!</h1>
          <p>Sorry, the page you're looking for doesn't exist.</p>
          <br />
          <img
            src={`https://source.unsplash.com/400x400/?error`}
            alt="Error topic"
          />
        </div>
      </section>
    </div>
  );
};

export default Error;
