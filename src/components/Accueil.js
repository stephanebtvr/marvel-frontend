import ReactPlayer from "react-player/youtube";

const Accueil = () => {
  return (
    <div>
      <div className="video-overlay" />
      <div className="home-banner-img">
        <div className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url="https://www.youtube.com/watch?v=UhVjp48U2Oc"
            width="100%"
            height="100%"
            playing={true}
            muted={false}
            loop={true}
          />
        </div>
        {/* <p className="banner-title">
          BIENVENUE DANS L'UNIVERS <span style={{ color: "red" }}>MARVEL</span>
        </p> */}
      </div>
    </div>
  );
};

export default Accueil;
