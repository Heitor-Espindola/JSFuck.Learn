class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #000000 0%, #14532d 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          z-index: 10;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        .logo {
          color: #4ade80;
          font-weight: bold;
          font-size: 1.5rem;
          font-family: 'Fira Code', monospace;
          letter-spacing: -0.5px;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: #d1fae5;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
          position: relative;
        }
        a:hover {
          color: #4ade80;
        }
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #4ade80;
          transition: width 0.3s;
        }
        a:hover::after {
          width: 100%;
        }
        @media (max-width: 768px) {
          nav {
            flex-direction: column;
            gap: 1rem;
            padding: 1rem;
          }
          ul {
            width: 100%;
            justify-content: center;
          }
        }
      </style>
      <nav>
        <div class="logo">JSFuck Academy</div>
        <ul>
          <li><a href="https://github.com/Heitor-Espindola/JSFuck.Learn/">Biblioteca</a></li>
          <li><a href="https://stackoverflow.com/questions/63673610/alternative-way-to-get-c-letter-in-jsfuck">Sobre</a></li>
        </ul>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);