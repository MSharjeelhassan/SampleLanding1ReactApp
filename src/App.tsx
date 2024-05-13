import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
// https://preview.colorlib.com/theme/glint/index.html#about
let social = [
  {
    title: "Facebook",
    logo: "bi bi-facebook ",
  },
  {
    title: "Twitter",
    logo: "bi bi-twitter-x ",
  },
  {
    title: "Instagram",
    logo: "bi bi-instagram",
  },
  {
    title: "Behance",
    logo: "bi bi-behance",
  },
  {
    title: "Dribble",
    logo: "bi bi-dribbble",
  },
];

let award=[
  {num:127,title:"Awards Received"},
  {num:1505,title:"Cups of Coffee"},
  {num:109,title:"Projects Completed"},
  {num:120,title:"Happy Clients"}
];

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="main" className="">
        <div className="px-4 padBot">
          <div className="row pt-5 justify-content-between">
            <div className="col-1 col-sm-1 col-md-1 col-lg-1">
              <div>
                <a href="#">
                  <img
                    className=""
                    style={{ width: 75, height: 25 }}
                    src="/images/logo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div className="col-1 col-sm-1 col-md-1 col-lg-1">
              <div>
                <div className="text-white">Menu</div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10 ">
              <div className="text-center text-lg-start px-1 px-lg-0">
                <div className="head3Hero">WELCOME TO GLINT</div>
                <div className="head1 text-white fw-bold">
                  We are a creative group of people who design influential
                  brands and digital experiences.
                </div>
                <div id="heroBtn" className="my-5 ">
                  <button className="px-5 py-2 bg-transparent text-white me-3 border border-white">
                    START A PROJECT
                  </button>
                  <button className="px-5 py-2 bg-transparent text-white border border-white">
                    MORE ABOUT US
                  </button>
                </div>
              </div>
            </div>
            <div className="col-2 text-white">
              <div className="">
                <div className="text-white d-flex flex-column text-end">
                  {social.map((a) => (
                    <div>
                      <ul>
                        <li className="list-group-item ">
                          <i className={a.logo}></i>
                          <span className="listSpan">{a.title}</span>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-2">
              <div className="text-end d-flex gap-2 text-white">
                <i className="bi bi-caret-down-fill "></i> <p>SCROLL DOWN</p>{" "}
                <div className="line mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="section2" style={{ backgroundColor: "#39b54a" }}>
        <div className="container">
          <div className="row justify-content-end ">
            <div className="col-2 d-flex border" style={{ paddingLeft: 153.5 }}>
              <div className="line " style={{ backgroundColor: "white" }}></div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-lg-center text-center">
                <div className="pt-5"
                  style={{
                    fontFamily: "montserrat-bold",
                    fontSize: 17,
                    lineHeight: 1,
                  }}
                >
                  HELLO THERE
                </div>
                <div style={{fontSize:72}} className="mb-5 pb-4 px-3 border-bottom d-inline-block fw-bold text-white">We Are Glint</div>
                <div className="px-5" style={{fontSize:22}}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt.
                </div>
              </div>
            </div>
          </div>
          <div className="row py-5">
            {award.map((a)=>(
              <div className="col-12 col-sm-6 col-md-6 col-lg-3 border-end gy-4">
              <div className="text-center">
                <div className="text-white fw-bold" style={{fontSize:84}}>{a.num}</div>
                <div className="fw-bold" style={{fontSize:18}}>{a.title}</div>
              </div>
            </div>
            ))
              
            }
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
