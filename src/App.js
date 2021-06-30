import "./App.css";
import React, { useState, useEffect } from "react";
import logo from "./Logo.png";
import tractor from "./tractor.png";
import tata from "./tata.png";
import Swal from "sweetalert2";
import arado2 from "./arado2.jpeg";
import arado4 from "./arado4.jpeg";

import arado1 from "./arado1.jpeg";
import killer5 from "./killer 5.jpeg";
import rastra3 from "./rastra 3.jpeg";
import killer6 from "./killer 6.jpeg";
import killer7 from "./killer 7.jpeg";

import pala2 from "./pala 2.jpeg";
import plastico from "./plastico.jpeg";
import rastras from "./rastras.jpeg";
import arado5 from "./arado 5.jpeg";
import gimpa from "./killer 1.jpeg";
import abonador from "./abonador.jpeg";
import killer8 from "./killer 8.jpeg";

import arado3 from "./arado 3 puntas.jpeg";
import arado6 from "./arado 6.jpeg";

function App() {
  const [currentImg, setCurrentImg] = useState(0);
  const [message, setMessage] = useState({
    name: "",
    phone: "",
    mail: "",
    msg: "",
  });
  const [show, setShow] = useState(false);

  const images = [
    {
      src: arado6,
      title: "Sistema de regulación",
      name: "Todos los arados reversibles cuentas con un facil y simple sistema de palancas para las regulación de las cuchillas y pies",
      description: "Requiere 240hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: arado3,
      title: "Arado reversible",
      name: "Arado reversible para tractor doble tracción",
      description: "Requiere 240hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: killer8,
      title: "Killer para mini tractor",
      name: "Killer 7 puntas para mini tractor",
      description: "Requiere 80hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: abonador,
      title: "Abonador",
      name: "Abonador tanque de union triple para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: gimpa,
      title: "Gimpa",
      name: "Gimpa para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: arado5,
      title: "Arado sequiador",
      name: "Arado sequiador para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: rastras,
      title: "Rastra 18 discos",
      name: "Rastra 18 discos para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: plastico,
      title: "Nylon machine",
      name: "Nylon machine para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: pala2,
      title: "Pala niveladora",
      name: "Pala niveladora para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: arado1,
      title: "Arado sequiador",
      name: "Sequiador para mini tractor",
      description: "Requiere 80hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: arado4,
      title: "Arado Reversible",
      name: "Arado reversible 4 puntas para tractor doble tracción",
      description: "Requiere 220hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: arado2,
      title: "Arado Reversible",
      name: "Arado reversible 2 puntas para tractor tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: killer5,
      title: "Killer con abonador",
      name: "Killer con abonador para mini tractor",
      description: "Requiere 80hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: rastra3,
      title: "Rastra 24 Discos",
      name: "Rastra de 24 discos para tractor doble tracción",
      description: "Requiere 180hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: killer6,
      title: "Killer con abonador",
      name: "Killer con abonador para mini tractor",
      description: "Requiere 80hp mínimo.",
      height: "",
      width: "",
    },
    {
      src: killer7,
      title: "Killer",
      name: "Killer para tractor agricola tracción simple",
      description: "Requiere 120hp mínimo.",
      height: "",
      width: "",
    },
  ];

  const handleChange = (e) => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, phone, mail, msg } = message;

    if (name !== "" && phone !== "" && mail !== "" && msg !== "") {
      Swal.fire(
        "Exito!",
        "Tu mensaje ha sido enviado a P.Palma. En breve nos contactaremos contigo.",
        "exito"
      );
      setMessage({
        name: "",
        phone: "",
        mail: "",
        msg: "",
      });
    } else {
      console.log("Hay campos vacios");
    }
  };

  const handlePrev = () => {
    if (currentImg != 0) {
      setCurrentImg(currentImg - 1);
    } else {
      setCurrentImg(images.length - 1);
    }
  };

  const handleNext = () => {
    if (currentImg === images.length - 1) {
      setCurrentImg(0);
    } else {
      setCurrentImg(currentImg + 1);
    }
  };

  useEffect(()=>{},[currentImg]);

  const handleClick = () => {
    const menu = document.querySelector("#menu");
    if (menu.classList.contains("nav-phone_inactive")) {
      menu.classList.remove("nav-phone_inactive");
      menu.classList.add("nav-phone_active");
    } else {
      menu.classList.add("nav-phone_inactive");
      menu.classList.remove("nav-phone_active");
    }
  };

  const display = show ? { display: "block" } : { display: "none" };

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div id="logo">
            <img src={logo} height="52" width="62" />
            <h1>P.Palma</h1>
          </div>
          <ul id="menu" className="nav-phone_inactive">
            <li>
              <a href="#Main" onClick={handleClick}>
                <i class="fas fa-home"></i> Inicio
              </a>
            </li>
            <li>
              <a href="#Nosotros" onClick={handleClick}>
                <i class="fas fa-address-card"></i> Nosotros
              </a>
            </li>
            <li>
              <a href="#Productos" onClick={handleClick}>
                <i class="fas fa-tractor"></i> Productos
              </a>
            </li>
            <li>
              <a href="#Galleria" onClick={handleClick}>
                <i class="fas fa-images"></i> Galería
              </a>
            </li>
            <li>
              <a href="#Contacto" onClick={handleClick}>
                <i class="fas fa-file-signature"></i> Contacto
              </a>
            </li>
            <div class="nav-social">
              <a
                href="https://www.facebook.com"
                target="_blank"
                title="Facebook"
              >
                <i class="fab fa-facebook icon"></i>
              </a>
              <a href="https://wa.me/56962242512?text=Hola%20como%20estás?%20..." target="_blank" title="Whatsapp me">
                <i class="fab fa-whatsapp icon"></i>
              </a>
              <a href="tel:+569-7-716-0190" title="Llamame">
                <i class="fas fa-phone-alt icon"></i>
              </a>
            </div>
          </ul>
          <div id="btn-menu" onClick={handleClick}>
            <i class="fas fa-bars fa-2x"></i>
          </div>
        </nav>
      </header>
      <main>
        <div id="Main">
          <img id="logo-img" src={tractor} height="166" width="325" />
          <h1>Fabrica de Maquinaría Agrícola en la Sexta Región.</h1>
          <img src={logo} height="92" width="102" />
          <p> En diseño, construcción y durabilidad, siempre los mejores.</p>
          <button
            className="btn-contactar"
            onClick={() => document.querySelector("#Contacto").scrollIntoView()}
          >
            Más información
          </button>
        </div>

        <div id="Nosotros">
          <h1>Patricio Palma.</h1>
          <img src={tata} height="330" width="322" />
          <p>
            Ingeniero aeronautico de profesión, se dedica hace más de 60 años a
            la fabricación de maquinaria agricola. &nbsp;Pionero en su ambito,
            inventor, diseñador, fabricante y mucho más. Comenzo construyendo
            maquinas desgranadoras de maíz. Hoy en día ofrece una amplia gama de
            productos agricolas tales como: arados reversible de 2, 3 y 4
            puntas,rastras 22 - 24 y 26 discos, killers, gimpa, mergadores,
            abonadores, arados sequiadores, palas, etc. "Todos los diseños son
            adaptables a la capacidad de su tractor o su imaginación".
          </p>
        </div>

        <div id="Productos">
          <h1 id="products">Productos</h1>
          <div id="product-list">
            <p>
              Ofrecemos una amplia variedad de productos agricolas con diseños
              elegantes, faciles de usar y construidos con materiales que duran
              varias temporadas:
            </p>
            <ul>
              <li>
                <i class="fas fa-tractor"></i> Arados reversibles
              </li>
              <li>
                <i class="fas fa-tractor"></i> Rastras huerteras y fruteras
              </li>
              <li>
                <i class="fas fa-tractor"></i> Arados Asequiadores.
              </li>
              <li>
                <i class="fas fa-tractor"></i> Killers
              </li>
              <li>
                <i class="fas fa-tractor"></i> Mergadores
              </li>
              <li>
                <i class="fas fa-tractor"></i> Nylon Machine
              </li>
              <li>
                <i class="fas fa-tractor"></i> Abonadores y mucho más
              </li>
            </ul>
            <button
              className="btn-galleria"
              onClick={() =>
                document.querySelector("#Galleria").scrollIntoView()
              }
            >
              <h1>Galería de imagenes</h1>
              <i class="fas fa-sort-down fa-3x"></i>
            </button>
          </div>
        </div>

        <div id="Galleria">
          <h1>Galería</h1>
          <div>
            <div id="big-img">
              <h1>Maquina: {images[currentImg].title}</h1>
              <h2>
                Descripción: {images[currentImg].name}.{" "}
                {images[currentImg].description}
              </h2>
            </div>
            <div id="pila-images">
              <div id="controls">
                <img src={images[currentImg].src} width="340" height="220" />
              </div>

              <button class="btn prev" onClick={handlePrev}>
                &#10094;
              </button>

              <button class="btn next" onClick={handleNext}>
                &#10095;
              </button>
            </div>
          </div>
        </div>

        <div id="Contacto">
          <h1>Contactanos</h1>
          <div id="form-content">
            <form onSubmit={onSubmit}>
              <fieldset>
                <label for="txt-name">Nombre</label>
                <input
                  type="text"
                  id="txt-name"
                  placeholder="Ej.: Juan Pérez"
                  name="name"
                  onChange={handleChange}
                  value={message.name}
                  required
                />
              </fieldset>
              <fieldset>
                <label for="txt-phone">Telefono:</label>
                <input
                  type="tel"
                  id="txt-phone"
                  placeholder="ej.: 962242512"
                  name="phone"
                  onChange={handleChange}
                  value={message.phone}
                  required
                />
              </fieldset>
              <fieldset>
                <label for="txt-email">Email:</label>
                <input
                  type="email"
                  id="txt-email"
                  placeholder="Ej.: patrick@start.com"
                  name="mail"
                  onChange={handleChange}
                  value={message.mail}
                  required
                />
              </fieldset>
              <fieldset>
                <label for="txt-menssage">Mensaje:</label>
                <textarea
                  name="txt-menssage"
                  rows="4"
                  cols="22"
                  placeholder="Ej.: Hola Patricio, me interesa ..."
                  name="msg"
                  onChange={handleChange}
                  value={message.msg}
                  required
                  wrap
                ></textarea>
              </fieldset>
              <button type="submit" className="btn-enviar">
                <i class="fas fa-paper-plane"></i>Enviar Mensaje
              </button>
            </form>

            <div class="contact-container">
              <div class="phone">
                <a href="tel:+569-7-716-0190" title="Llamame">
                  <i class="fas fa-phone icon"></i>+56-977160190
                </a>
              </div>
              <div class="address">
                <a href="https://goo.gl/maps/AJf8dtYXiU8NCUL99" target="_blank">
                  <i class="fas fa-map icon"></i>Cardenal Caro 170, Guarcarhue.
                </a>
              </div>
              <div class="mail">
                <a href="mailto:ppalma@gmail.com">
                  <i class="fas fa-envelope icon"></i>ppalma@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <footer className="App-footer">
          <div className="footer-menu">
            <ul>
              <li>
                <a href="#Main">Inicio</a>
              </li>
              <li>
                <a href="#Nosotros">Nosotros</a>
              </li>
              <li>
                <a href="#Productos">Productos</a>
              </li>
              <li>
                <a href="#Galleria">Galería</a>
              </li>
            </ul>
          </div>
          <div class="social">
            <h4>Siguenos en:</h4>
            <div>
              <i
                class="fab fa-facebook icon"
                onClick={() => window.open("https://www.facebook.com")}
              ></i>
            </div>
          </div>
          <p>
            Todos los derechos reservados P.Palma &copy; 2021. MP Design &
            Develop
          </p>
        </footer>

        <div id="Overlay" style={display} />
        <div id="PopUp-content" style={display}>
          <div className="frame">
            <div id="frame-content">
              <h1>Tu mensaje ha sido envíado.</h1>
              <button onClick={() => {}}>Aceptar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
