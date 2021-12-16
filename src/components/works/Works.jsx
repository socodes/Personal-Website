import "./works.scss";
import {useState} from 'react';
export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc: "I use React.js for web development.",
      img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
      url : "https://github.com/socodes/Personal-Website"
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc: "I have experiences in developing Android applications with Java, developing iOS applications with Swift and developing cross-platform applications with React-Native.",
      img: "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
      url:"https://github.com/socodes/iOS-training"
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Backend Development",
      desc: "I can use Python, Java (Spring Boot) and GoLang.",
      img: "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
      url:"https://github.com/socodes/product"
    },
  ];
  const handleClick= (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) : 
    setCurrentSlide(currentSlide <data.length-1  ? currentSlide+1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
        { data.map(d => (
            <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src="assets/mobile.png" alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span onClick={()=> window.open(d.url, "_blank")}>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src= {d.icon}
                  alt=""
                />
              </div>
            </div>
          </div>

        ))
          
        }
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
}
