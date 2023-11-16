import "./App.css";

function App() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-left">
          <img
            src="https://static.wikia.nocookie.net/evade-nextbot/images/b/b5/Nerd.png"
            alt=""
          />
          <a href="#lp">
            <h3>My First React Website</h3>
          </a>
        </div>
        <div className="navbar-right">
          <a href="#profile">
            <p>About Me</p>
          </a>
          <a href="#profile">
            <p>Contact</p>
          </a>
          <a href="#cc">
            <p>Capabilities</p>
          </a>
          <img src="./img/menu.svg" alt="" />
        </div>
      </div>
      <div className="landing-page-container" id="lp">
        <div className="lp-left-section">
          <img src="./img/ryangosling.png" alt="" />
        </div>
        <div className="lp-right-section">
          <div className="hello-container">
            <h1>Hello!</h1>
          </div>
          <h2>
            I'm Mahesa Wijaya, <br /> a{" "}
            <span className="webdev-txt">Web Development</span> Student.
          </h2>
          <button className="hello-button">READ MORE</button>
        </div>
      </div>
      <div className="profile-container" id="profile">
        <div className="profile-left">
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras enim
            lorem, vehicula in pharetra nec, scelerisque vitae mauris. Phasellus
            auctor dui aliquet, commodo est eu, feugiat leo. Curabitur non elit
            at enim sagittis fringilla. Sed aliquet auctor libero in blandit.
            Fusce placerat nisl sed tristique volutpat.
          </p>
        </div>
        <div className="profile-mid">
          <div className="profile-txt-container">
            <h1>PROFILE</h1>
            <p>I'm a passionate Web Development Student</p>
          </div>
          <img src="./img/profile.jpg" alt="" />
        </div>
        <div className="profile-right">
          <h2>Details</h2>
          <div className="description-container">
            <p className="atribute">Name</p>
            <p className="atribute-val">Mahesa Bima Wijaya</p>
            <p className="atribute">Age</p>
            <p className="atribute-val">20</p>
            <p className="atribute">Location</p>
            <p className="atribute-val">Serang regency, Banten, Indonesia</p>
            <div className="socmed-container">
              <a href="https://www.instagram.com/mahesabw/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4494/4494477.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="capabilities-container" id="cc">
        <div className="capabilities-title">
          <h1>CAPABILITIES</h1>
          <p>
            <i>
              The result of our company branding process is a comprehensive
              brand guideline that can be <br /> used to design a marketing
              website and other design assets like brand illustrations that
              reflect <br /> the new brand
            </i>
          </p>
        </div>
        <div className="capabilities-card-container">
          <div className="capabilities-card">
            <h2>BRAND STRATEGY</h2>
            <p>-- Brand equity audit</p>
            <p>-- Audience analysis</p>
            <p>-- Competitive review</p>
            <p>-- Strategic direction</p>
          </div>
          <div className="capabilities-card">
            <h2>BRAND IDENTITY</h2>
            <p>-- Brand equity audit</p>
            <p>-- Audience analysis</p>
            <p>-- Competitive review</p>
            <p>-- Strategic direction</p>
          </div>
          <div className="capabilities-card">
            <h2>COMMUNICATION STRATEGY</h2>
            <p>-- Brand equity audit</p>
            <p>-- Audience analysis</p>
            <p>-- Competitive review</p>
            <p>-- Strategic direction</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
