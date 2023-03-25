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
        <div className="footer">
          <ul className="list">
            <li className="list__item">
              <div className="list__item--icon">
                <i className="bx bx-phone"></i>
              </div>
              +992 90 446 7808
            </li>
            <li className="list__item">
              <div
                className="list__item--icon"
                onClick={() => window.open("mailto:kosimi.a@tojtex.tj")}
              >
                <i class="bx bx-envelope"></i>
              </div>
              kosimi.a@tojtex.tj
            </li>
            <li className="list__item">
              <div
                className="list__item--icon"
                onClick={() => window.open("https://www.tojtex.tj/", "_blank")}
              >
                <i class="bx bx-globe"></i>
              </div>
              www.tojtex.tj
            </li>
            <li className="list__item">
              <div className="list__item--icon">
                <i class="bx bx-map"></i>
              </div>
              2/1 Chorteppa st, Dushanbe
            </li>
            <li className="list__item">
              <div
                className="list__item--icon"
                onClick={() =>
                  window.open("https://www.instagram.com/aziza__r/", "_blank")
                }
              >
                <i class="bx bxl-instagram"></i>
              </div>
              @aziza__r
            </li>
            <li className="list__item">
              <div
                className="list__item--icon"
                onClick={() =>
                  window.open("https://www.facebook.com/azizakosimi/", "_blank")
                }
              >
                <i class="bx bxl-facebook"></i>
              </div>
              @azizakosimi
            </li>
          </ul>
        </div>
      </div>
      <img src={portrait} alt="Aziza Kosimi" className="header__shadow"></img>
    </div>
  );
}

export default App;
