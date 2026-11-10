import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App(){
  return (
    <div className="site">
      <header className="header">
        <h1>Vitrine Digital</h1>
        <nav>
          <a href="#inicio">Inicio</a>
          <a href="#catalogo">Catálogo</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>
      <main>
      <section className="hero" id="inicio">
        <span className="tag">BARBEARIA</span>

        <h2>Seu próximo corte de cabelo é aqui</h2>

        <p>Agende seu horário agora mesmo pelo whatsapp</p>

        <a className="button" href="#catalogo">Conheça nossos cortes</a>

      </section>

      <section className="catalogo" id="catalogo">
        <h2> Nossos Cortes</h2>
        <p>embreve nossos cortes estarão disponíveis aqui!</p>
      </section>

      </main>

      <footer id="contato">
        <p>Vitrine Digital -  Seu negócio para internet.</p>
      </footer>

      </div>
  );
}

export default App