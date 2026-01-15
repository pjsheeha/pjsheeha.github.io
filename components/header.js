class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: left;
          background-color:  #0a0a23;
        }

        ul {
          padding: 0;
          display:flex;
        }

        a {
          font-weight: 700;
          margin: 0 25px;
          color: #9b9b9b;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #929292;
        }
      </style>
      <header>
        <nav>
          <ul>
            <li><a href="index.html">Home</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('header-component', Header);