class FooterComp extends HTMLElement  {
  constructor() {
    super();
    const footer = this.innerHTML = `
    <footer style="background-color: #0a4c91; color: white; position: fixed; bottom: 0%; padding: 10px 0;width: 100%;">
          <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center;">
            
            <p style="margin: 5px;padding-right: 60px;">© 2025 Peça Certa - Todos os direitos reservados</p>
            
            <div style="display: flex; gap: 10px; align-items: center;">
              <a href="/componentes/footer.html"><img src="/imgs/whatsapp.png"  alt="WhatsApp" width="45"><a>
              <img src="/imgs/instagram.png" alt="Instagram" width="45">
            </div>
        
            <div style="margin: 5px;">
              <p style="padding-left: 40px;">Contato: <a href="mailto:Peca.certa@outlook.com" style="color: white;">Peca.certa@outlook.com</a></p>
            </div>
        
          </div>
        </footer> 
    `
  }
}

customElements.define('footer-component', FooterComp)