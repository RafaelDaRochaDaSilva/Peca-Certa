class HeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'opne' });
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./componentes/header/header.css">
        <div class=".home" style="display: flex;
                                  flex-direction: column;
                                  height: 100vh;">
        <div class="menu">
          <div class="menu2">
            <img class="logo" src="/imgs/logo2.png" />
            <div class="frame-45">
              <div class="frame-45" style="display: flex; align-items: center; padding: 20px;">
              <div class="sair">
                  <input type="text" id="searchBar" placeholder="Pesquisar peça..." 
                        style="
                          padding: 10px 20px;
                          width: 60vw;
                          max-width: 1200px;
                          font-size: 18px;
                          border-radius: 10px;
                          border: 2px solid #ccc;
                          box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);">
                    </div>
                    <div class="menu-container">
                      <button class="menu-button" onclick="toggleMenu()">☰ Menu</button>
                      <div id="menu" class="menu-dropdown">
                        <a href="/pages/carrinho.html">🛒 Carrinho</a>
                        <a href="../../index.html">👤 Login</a>
                      </div>
                    </div>
                <script src="../js/script.js"></script>
              </div>
            </div>
          </div>
        </div>
        `
    }
}

customElements.define('header-component', HeaderComponent);