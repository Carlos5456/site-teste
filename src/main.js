import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="d-flex flex-column justify-content-center align-items-center min-vh-100 w-100">
    <h1 class="display-3 fw-bold text-primary text-center mb-5">Oferta Especial</h1>
    <div class="row justify-content-center mb-4 g-4 w-100" style="max-width: 900px;">
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <img src="1.jpg" alt="Imagem do carro 1" class="img-fluid rounded-3 shadow-lg mb-3" style="max-width: 420px;"/>
      </div>
      <div class="col-12 col-md-6 d-flex justify-content-center">
        <img src="2.jpg" alt="Imagem do carro 2" class="img-fluid rounded-3 shadow-lg mb-3" style="max-width: 420px;"/>
      </div>
    </div>
    <div class="row justify-content-center w-100" style="max-width: 900px;">
      <div class="col-12 col-md-10">
        <ul class="list-group list-group-flush fs-3 mb-4 text-center">
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">Modelo:</span> Fiat Pulse Audace</li>
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">Ano:</span> 2023</li>
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">Preço:</span> R$ 94.000</li>
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">KM:</span> 12.000</li>
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">Opcionais:</span> Alerta de Saída de Faixa, Frenagem de Emergência, GPS Nativo</li>
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">Observações:</span> Carro na garantia de fábrica. Primeira revisão feita.</li>
          <li class="list-group-item border-0 ps-0"><span class="fw-bold">Sinistro/Leilão:</span> Nada consta</li>
        </ul>
        <div class="d-flex justify-content-center">
          <a class="btn btn-success btn-lg d-flex align-items-center gap-2 px-5 py-3 fw-bold shadow" href="https://wa.me/5541997357726?text=Oi%2C%20quero%20saber%20mais%20sobre%20o%20carro%20do%20anuncio%3A%201016" target="_blank" rel="noopener">
            <svg class="whatsapp-icon" viewBox="0 0 32 32" fill="currentColor" style="width: 32px; height: 32px;">
              <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.31C13.1 27.13 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.6-.26-3.78-.76l-.27-.12-4.26 1.37 1.4-4.13-.18-.28C7.26 18.01 7 16.53 7 15c0-5.01 4.04-9.08 9-9.08s9 4.07 9 9.08-4.04 9.08-9 9.08zm5.13-6.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.74 4.06.66.23 1.18.37 1.58.47.66.17 1.26.15 1.73.09.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
            </svg>
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  </div>
  <a href="https://wa.me/5541997357726?text=Oi%2C%20quero%20saber%20mais%20sobre%20o%20carro%20do%20anuncio%3A%201016" class="whatsapp-float" target="_blank" rel="noopener" aria-label="Fale no WhatsApp">
    <svg class="whatsapp-float-icon" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 3C9.373 3 4 8.373 4 15c0 2.65.87 5.1 2.36 7.1L4 29l7.18-2.31C13.1 27.13 14.52 27.5 16 27.5c6.627 0 12-5.373 12-12S22.627 3 16 3zm0 22c-1.32 0-2.6-.26-3.78-.76l-.27-.12-4.26 1.37 1.4-4.13-.18-.28C7.26 18.01 7 16.53 7 15c0-5.01 4.04-9.08 9-9.08s9 4.07 9 9.08-4.04 9.08-9 9.08zm5.13-6.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.43-2.25-1.37-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.32.42-.48.14-.16.18-.28.28-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.54-.45-.47-.61-.48-.16-.01-.34-.01-.52-.01-.18 0-.48.07-.73.34-.25.27-.97.95-.97 2.3s.99 2.67 1.13 2.85c.14.18 1.95 2.98 4.74 4.06.66.23 1.18.37 1.58.47.66.17 1.26.15 1.73.09.53-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
    </svg>
  </a>
`
