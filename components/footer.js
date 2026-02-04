class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        footer {
          background-color: #0a0a23;
          padding: 20px 0;
          margin-top: 60px;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 25px;
        }
        nav {
        height: 100%;
        }
        .footer-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
        }

        .footer-nav ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 15px;
        }

        .footer-nav li {
          margin: 5px 0;
        }

        .footer-nav a {
          font-weight: 700;
          padding: 8px 15px;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .footer-nav a:hover {
          color: #ffd700;
          transform: translateY(-2px);
        }

        .footer-copyright {
          text-align: center;
          color: #999;
          font-size: 0.9rem;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #333;
        }

        /* Mobile styles - 2 column layout */
        @media (max-width: 768px) {
          .footer-nav ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            width: 100%;
          }

          .footer-nav li {
            text-align: center;
          }

          .footer-nav a {
            padding: 12px 8px;
            display: block;
            width: 100%;
            font-size: 0.9rem;
          }

          footer {
            padding: 20px 0;
            margin-top: 40px;
          }

          .footer-content {
            padding: 0 15px;
          }

          .footer-copyright {
            margin-top: 30px;
            padding-top: 25px;
            font-size: 0.85rem;
          }
        }
      </style>
      <footer>
        <div class="footer-content" >
          <nav class="footer-nav">
            <ul>
              <li><a href="https://bsky.app/profile/perebite.bsky.social" target="_blank" rel="noopener noreferrer">Bluesky</a></li>
              <li><a href="https://www.youtube.com/@petersheehan7501" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://www.instagram.com/caxtiltecaofficial/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.tiktok.com/@caxtiltecaofficial?_r=1&_t=ZT-93dzGpP8vRm" target="_blank" rel="noopener noreferrer">Tiktok</a></li>
              <li><a href="https://www.patreon.com/c/perebite" target="_blank" rel="noopener noreferrer">Patreon</a></li>
              <li><a href="https://perebite.itch.io" target="_blank" rel="noopener noreferrer">Itch.io</a></li>
            </ul>
          </nav>
          <div class="footer-copyright">
            © ${new Date().getFullYear()} Perebite. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('footer-component', Footer);