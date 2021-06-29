import Slide from "react-reveal";

const LandingHead = () => {
  return (
    <div className="landing-head">
      <Slide right>
        <div className="match-bar mens-bar">
          <h2 className="match-bar-title">next playing:</h2>
          <p className="match-bar-verses">Exeter Chiefs</p>
          <p className="match-bar-datetime">26th June 2021</p>
          <div className="match-bar-underline"></div>
        </div>
      </Slide>
      <Slide left>
        <div className="match-bar womens-bar">
          <h2 className="match-bar-title">next playing:</h2>
          <p className="match-bar-verses">Saracens</p>
          <p className="match-bar-datetime">30th May 2021</p>
          <div className="match-bar-underline"></div>
        </div>
      </Slide>
    </div>
  );
};

export default LandingHead;
