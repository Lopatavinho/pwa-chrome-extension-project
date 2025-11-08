// Listener para receber mensagens do popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "user_button_click") {
    console.log("Mensagem recebida do Popup:", request.payload);
    
    // Simula algum processamento
    const responseMessage = `Processado: ${request.payload.toUpperCase()}`;
    
    // Responde ao popup
    sendResponse({ status: responseMessage });
    return true; // Indica que sendResponse será chamada de forma assíncrona
  }
});