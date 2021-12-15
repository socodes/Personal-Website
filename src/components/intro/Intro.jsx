import "./intro.scss";

export default function intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt=""></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There! I'M</h2>
          <h1>Muhammed Didin</h1>
          <h3>Full Stack Developer</h3>
        </div>

        <a href="#portfolio"><img src="assets/down.png" alt="" /></a>
      </div>
    </div>
  );
}
