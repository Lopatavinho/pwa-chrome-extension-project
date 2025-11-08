document.getElementById('sendMessageBtn').addEventListener('click', () => {
  // Envia uma mensagem para o Service Worker (background.js)
  chrome.runtime.sendMessage({ action: "user_button_click", payload: "Olá do Popup!" }, (response) => {
    const status = document.getElementById('status');
    if (chrome.runtime.lastError) {
      status.textContent = 'Erro ao enviar: ' + chrome.runtime.lastError.message;
      return;
    }
    status.textContent = 'Mensagem enviada! Resposta: ' + response.status;
  });
});