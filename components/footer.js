class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        .footer-nav {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          background-color:  #0a0a23;
        }

        ul {
          padding: 0;
          display:flex;
        }

        a {
          font-weight: 700;
          margin: 0 25px;
          color: #fff;
          text-decoration: none;
        }

        a:hover {
          padding-bottom: 5px;
          box-shadow: inset 0 -2px 0 0 #fff;
        }
      </style>
      <header>
        <nav class="footer-nav">
          <ul>
            <li><a href="https://bsky.app/profile/perebite.bsky.social" target="_blank">Bluesky</a></li>
            <li><a href="https://www.youtube.com/@petersheehan7501" target="_blank">Youtube</a></li>
              <li><a href="        https://www.instagram.com/perebite/
" target="_blank">Instagram</a></li>
              <li><a href="        https://www.patreon.com/c/perebite

" target="_blank">Patreon</a></li>
<li><a href=" https://perebite.itch.io

" target="_blank">Itch.io</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('footer-component', Footer);