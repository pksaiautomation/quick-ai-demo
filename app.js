/*
const panel = document.getElementById('assistantPanel');
const container = document.getElementById('embedContainer');
document.getElementById('openAssistant').onclick = () => { panel.classList.remove('hidden'); renderAssistant(); };
document.getElementById('closeAssistant').onclick = () => panel.classList.add('hidden');

const cfg = window.QUICK_DEMO_CONFIG || { mode: 'mock', quickEmbedUrl: '' };
function renderAssistant() {
  if (cfg.mode === 'embed-url' && cfg.quickEmbedUrl) {
    container.innerHTML = `<iframe title="Amazon Quick embedded chat" src="${cfg.quickEmbedUrl}"></iframe>`;
    return;
  }
  container.innerHTML = `<div class="mock-chat"><div class="messages" id="messages">
    <div class="msg bot"><b>Quick Agent:</b> Hi. I can answer questions using the sample application context files. Try: <i>Why is order O-10045 blocked?</i></div>
  </div><div class="prompt-bar"><input id="prompt" placeholder="Ask about customer, order, incident or business impact..."/><button id="send">Ask</button></div></div>`;
  document.getElementById('send').onclick = send;
  document.getElementById('prompt').addEventListener('keydown', (e) => { if (e.key === 'Enter') send(); });
}
function send() {
  const input = document.getElementById('prompt');
  const text = input.value.trim();
  if (!text) return;
  add('user', text); input.value = '';
  const answer = `Based on the demo business context: Order O-10045 for Globex Retail is blocked because the payment validation rule detected a mismatch. The business impact is high because blocked revenue is estimated at $128K. Recommended next step: review payment validation, check related incident INC-7781, and create an approval or remediation workflow before any production-impacting action.`;
  setTimeout(() => add('bot', `<b>Quick Agent:</b> ${answer}`), 300);
}
function add(cls, html) {
  const div = document.createElement('div');
  div.className = `msg ${cls}`;
  div.innerHTML = html;
  const messages = document.getElementById('messages');
  messages.appendChild(div); messages.scrollTop = messages.scrollHeight;
}*/
const panel = document.getElementById('assistantPanel');
const openButton = document.getElementById('openAssistant');
const closeButton = document.getElementById('closeAssistant');

openButton.onclick = () => {
  panel.classList.remove('hidden');
};

closeButton.onclick = () => {
  panel.classList.add('hidden');
};
