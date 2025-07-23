// Modern Floating Chatbot FAB for faculdade_ui.html
// Adds a floating button with a modern icon and a styled chatbot window
// Requires: To be loaded at the end of the HTML body

document.addEventListener('DOMContentLoaded', function() {
    // --- Floating Action Button (FAB) ---
    const fab = document.createElement('div');
    fab.className = 'modern-chatbot-fab';
    fab.title = 'Falar com o Assistente';
    fab.innerHTML = `
      <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="22" fill="#1d662e"/>
        <ellipse cx="22" cy="18.5" rx="11" ry="9.5" fill="#f7f2f2"/>
        <ellipse cx="17.5" cy="17.5" rx="2.2" ry="2.7" fill="#3edfa9"/>
        <ellipse cx="26.5" cy="17.5" rx="2.2" ry="2.7" fill="#3edfa9"/>
        <ellipse cx="17.5" cy="17.5" rx="1.1" ry="1.2" fill="#fff" opacity=".7"/>
        <ellipse cx="26.5" cy="17.5" rx="1.1" ry="1.2" fill="#fff" opacity=".7"/>
        <rect x="12" y="26" width="20" height="6" rx="3" fill="#e8f7ec"/>
      </svg>
    `;
    document.body.appendChild(fab);

    // --- Chatbot Window ---
    const windowDiv = document.createElement('div');
    windowDiv.className = 'modern-chatbot-window';
    windowDiv.innerHTML = `
      <div class="modern-chatbot-header">
        <span style="font-weight:600; letter-spacing:1px;">Assistente Virtual</span>
        <button class="modern-chatbot-close" title="Fechar">&times;</button>
      </div>
      <div class="modern-chatbot-messages" id="modernChatbotMessages">
        <div class="modern-chatbot-placeholder">
          <svg width="38" height="38" viewBox="0 0 44 44" style="display:block;margin:0 auto 8px auto;" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="22" fill="#1d662e"/>
            <ellipse cx="22" cy="18.5" rx="11" ry="9.5" fill="#f7f2f2"/>
            <ellipse cx="17.5" cy="17.5" rx="2.2" ry="2.7" fill="#3edfa9"/>
            <ellipse cx="26.5" cy="17.5" rx="2.2" ry="2.7" fill="#3edfa9"/>
            <ellipse cx="17.5" cy="17.5" rx="1.1" ry="1.2" fill="#fff" opacity=".7"/>
            <ellipse cx="26.5" cy="17.5" rx="1.1" ry="1.2" fill="#fff" opacity=".7"/>
            <rect x="12" y="26" width="20" height="6" rx="3" fill="#e8f7ec"/>
          </svg>
          <div style="color:#1d662e; font-size:1.1rem; font-weight:600; text-align:center; line-height:1.3;">Olá! Eu sou seu assistente virtual.<br>Como posso ajudar você hoje?</div>
        </div>
      </div>
      <form class="modern-chatbot-input" autocomplete="off">
        <input type="text" placeholder="Digite sua mensagem..." required style="background:#e8f7ec;color:#197250;"/>
        <button type="submit"><i class="fa fa-paper-plane"></i></button>
      </form>
    `;
    document.body.appendChild(windowDiv);
    windowDiv.style.display = 'none';

    // --- Show/hide logic ---
    fab.addEventListener('click', () => {
        windowDiv.style.display = 'flex';
    });
    windowDiv.querySelector('.modern-chatbot-close').onclick = () => {
        windowDiv.style.display = 'none';
    };

    // --- Minimal chat logic (placeholder only) ---
    const form = windowDiv.querySelector('form');
    const messages = windowDiv.querySelector('.modern-chatbot-messages');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = form.querySelector('input');
        const userMsg = input.value.trim();
        if (!userMsg) return;
        messages.innerHTML += `<div class='modern-chatbot-msg user'>${userMsg}</div>`;
        setTimeout(() => {
            messages.innerHTML += `<div class='modern-chatbot-msg bot'>Em breve, respostas inteligentes aqui!</div>`;
            messages.scrollTop = messages.scrollHeight;
        }, 700);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
    });

    // --- Styles (injected for isolation) ---
    const style = document.createElement('style');
    style.innerHTML = `
      .modern-chatbot-fab {
        position: fixed;
        bottom: 28px;
        right: 28px;
        z-index: 9999;
        background: #1d662e;
        border-radius: 50%;
        box-shadow: 0 2px 16px 2px #3edfa9, 0 2px 10px rgba(22,73,55,0.22);
        width: 62px;
        height: 62px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: box-shadow 0.2s, transform 0.15s;
        border: 2.5px solid #e8f7ec;
        overflow: hidden;
        padding: 0;
      }
      .modern-chatbot-fab:hover {
        box-shadow: 0 6px 24px 6px #3edfa9, 0 4px 16px rgba(0,0,0,0.18);
        transform: scale(1.07);
        background: #197250;
      }
      .modern-chatbot-window {
        position: fixed;
        bottom: 100px;
        right: 32px;
        width: 340px;
        max-width: 95vw;
        height: 420px;
        background: #e8f7ec;
        border-radius: 18px;
        box-shadow: 0 6px 32px rgba(25,114,80,0.18);
        display: none;
        flex-direction: column;
        z-index: 10000;
        overflow: hidden;
        font-family: 'Roboto', Arial, sans-serif;
        border: 2px solid #3edfa9;
      }
      .modern-chatbot-header {
        background: #3edfa9;
        color: #197250;
        padding: 15px 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 600;
        font-size: 1.1rem;
      }
      .modern-chatbot-close {
        background: none;
        border: none;
        color: #197250;
        font-size: 1.6rem;
        cursor: pointer;
        transition: color 0.2s;
      }
      .modern-chatbot-close:hover {
        color: #3edfa9;
      }
      .modern-chatbot-messages {
        flex: 1;
        padding: 18px 18px 0 18px;
        overflow-y: auto;
        background: #e8f7ec;
      }
      .modern-chatbot-placeholder {
        margin-top: 45px;
        margin-bottom: 20px;
      }
      .modern-chatbot-msg {
        margin-bottom: 12px;
        padding: 10px 14px;
        border-radius: 12px;
        max-width: 80%;
        font-size: 1rem;
        line-height: 1.4;
        word-break: break-word;
      }
      .modern-chatbot-msg.user {
        background: #3edfa9;
        color: #197250;
        margin-left: auto;
        text-align: right;
      }
      .modern-chatbot-msg.bot {
        background: #197250;
        color: #e8f7ec;
        margin-right: auto;
        text-align: left;
      }
      .modern-chatbot-input {
        display: flex;
        border-top: 1px solid #3edfa9;
        background: #e8f7ec;
        padding: 12px;
      }
      .modern-chatbot-input input {
        flex: 1;
        border: none;
        border-radius: 8px;
        padding: 10px;
        font-size: 1rem;
        outline: none;
        background: #e8f7ec;
        margin-right: 8px;
        color: #197250;
        border: 1.5px solid #3edfa9;
        transition: border 0.2s;
      }
      .modern-chatbot-input input:focus {
        border: 2.5px solid #197250;
      }
      .modern-chatbot-input button {
        background: #3edfa9;
        color: #197250;
        border: none;
        border-radius: 8px;
        padding: 0 16px;
        font-size: 1.2rem;
        cursor: pointer;
        transition: background 0.2s, color 0.2s;
      }
      .modern-chatbot-input button:hover {
        background: #197250;
        color: #e8f7ec;
      }
      @media (max-width: 600px) {
        .modern-chatbot-window {
          right: 2vw;
          width: 96vw;
          height: 70vh;
          min-width: 0;
        }
        .modern-chatbot-fab {
          right: 2vw;
        }
      }
    `;
    document.head.appendChild(style);
});
