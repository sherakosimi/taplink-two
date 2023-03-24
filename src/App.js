import portrait from "./img/portrait.jpg";

function App() {
  return (
    <div className="container">
      <div className="box">
        <div className="header">
          <img
            src={portrait}
            alt="Aziza Kosimi"
            className="header__image"
          ></img>
          <div className="header__heading">
            <h2 className="header__heading--name">
              Aziza <br />
              Rajabova-Kosimi
            </h2>
            <h3 className="header__heading--position">
              Founder & CEO of
              <a href="d" className="header__heading--company">
                "LLC Tojtex"
              </a>
            </h3>
          </div>
        </div>

        <div className="body"></div>
      </div>
      <img src={portrait} alt="Aziza Kosimi" className="header__shadow"></img>
    </div>
  );
}

export default App;
