"use strict";

const STORAGE_KEY = "codesprout-studio-workspace-v1";
const EXAMPLES = {
  welcome: {
    title: "Привет, мир!",
    html: `<main class="welcome">
  <span class="sparkle">✳</span>
  <p class="eyebrow">ТВОЯ ПЕРВАЯ СТРАНИЦА</p>
  <h1>Привет,<br><span>мир!</span> 👋</h1>
  <p class="message">У каждой большой идеи есть маленькая первая строчка.</p>
  <button id="hello-button">Начинаем ✨</button>
</main>`,
    css: `* { box-sizing: border-box; }
body {
  margin: 0; min-height: 100vh; display: grid; place-items: center;
  background: #eff5e8; color: #283522; font-family: system-ui, sans-serif;
}
.welcome { width: min(390px, 90vw); padding: 44px; border-radius: 22px; background: white; box-shadow: 0 18px 60px #32401a1c; }
.sparkle { color: #75a33e; font-size: 26px; }
.eyebrow { margin: 18px 0 8px; color: #759453; font-size: 11px; font-weight: 700; letter-spacing: 2px; }
h1 { margin: 0; font-size: 54px; line-height: 1.05; letter-spacing: -3px; }
h1 span { color: #79a743; }
.message { margin: 16px 0 24px; color: #6b7464; line-height: 1.6; }
button { padding: 12px 18px; border: 0; border-radius: 9px; background: #c3f36b; color: #283522; font: inherit; font-weight: 700; cursor: pointer; }
button:hover { background: #b2e550; }`,
    js: `document.querySelector("#hello-button").addEventListener("click", () => {
  console.log("Классно! Ты запустил свой первый JavaScript ✨");
  document.querySelector("#hello-button").textContent = "Получилось! 🎉";
});`,
  },
  card: {
    title: "Карточка профиля",
    html: `<main class="profile-card">
  <div class="avatar">🌿</div>
  <p class="eyebrow">НАЧИНАЮЩИЙ РАЗРАБОТЧИК</p>
  <h1>Твоё имя</h1>
  <p class="bio">Пишу свой первый проект, пробую новое и радуюсь каждому результату.</p>
  <button id="cheer">Подбодрить ✨</button>
  <p id="message" class="message"></p>
</main>`,
    css: `* { box-sizing: border-box; }
body { min-height: 100vh; margin: 0; display: grid; place-items: center; background: #eef1f7; color: #25283c; font-family: system-ui, sans-serif; }
.profile-card { width: min(350px, 90vw); padding: 34px; border: 1px solid #e6e8ef; border-radius: 20px; background: white; box-shadow: 0 16px 48px #292f4b15; text-align: center; }
.avatar { width: 74px; height: 74px; margin: auto; display: grid; place-items: center; border-radius: 24px; background: #eef5e8; font-size: 34px; }
.eyebrow { margin: 22px 0 8px; color: #7f8c70; font-size: 9px; font-weight: 700; letter-spacing: 1.4px; }
h1 { margin: 0; font-size: 29px; letter-spacing: -.8px; }
.bio { color: #727586; font-size: 13px; line-height: 1.7; }
button { padding: 11px 17px; border: 0; border-radius: 9px; background: #d8f3ad; color: #33432b; font: inherit; font-size: 13px; font-weight: 700; cursor: pointer; }
.message { min-height: 20px; color: #627a49; font-size: 12px; }`,
    js: `const button = document.querySelector("#cheer");
const message = document.querySelector("#message");
button.addEventListener("click", () => {
  message.textContent = "У тебя здорово получается! 🌱";
  console.log("Бейдж вдохновения начислен!");
});`,
  },
  counter: {
    title: "Счётчик кликов",
    html: `<main class="counter-card">
  <p class="eyebrow">МОЯ ПЕРВАЯ ПРОГРАММА</p>
  <h1>Кликер <span>✨</span></h1>
  <p class="description">Нажми на кнопку и посмотри, что произойдёт.</p>
  <p class="count" id="count">0</p>
  <button id="increment">Ещё клик!</button>
  <button class="reset" id="reset">Начать сначала</button>
</main>`,
    css: `* { box-sizing: border-box; }
body { min-height: 100vh; margin: 0; display: grid; place-items: center; background: #f4eee5; color: #30291f; font-family: system-ui, sans-serif; }
.counter-card { width: min(390px, 90vw); padding: 38px 32px; border: 1px solid #ebdfce; border-radius: 22px; background: #fffdfa; text-align: center; box-shadow: 0 18px 50px #674d2012; }
.eyebrow { color: #ad8050; font-size: 9px; font-weight: 700; letter-spacing: 1.6px; }
h1 { margin: 14px 0 0; font-size: 34px; letter-spacing: -1.5px; }
.description { color: #8b8277; font-size: 12px; }
.count { margin: 14px 0; color: #9b7138; font: 500 64px Georgia, serif; }
button { padding: 12px 18px; border: 0; border-radius: 9px; background: #d8ecb4; color: #34452a; font: inherit; font-size: 12px; font-weight: 700; cursor: pointer; }
button:hover { filter: brightness(.96); }
button.reset { margin-left: 7px; background: #f0ebe3; color: #5c554b; }`,
    js: `let clicks = 0;
const display = document.querySelector("#count");
document.querySelector("#increment").addEventListener("click", () => {
  clicks += 1;
  display.textContent = clicks;
  console.log("Всего кликов:", clicks);
});
document.querySelector("#reset").addEventListener("click", () => {
  clicks = 0;
  display.textContent = clicks;
  console.log("Счётчик сброшен!");
});`,
  },
  blank: {
    title: "Чистый лист",
    html: `<h1>Мой новый проект ✨</h1>
<p>Добавь сюда HTML-код своей страницы.</p>`,
    css: `body {
  margin: 0;
  padding: 48px;
  color: #263322;
  background: #f3f7ee;
  font-family: system-ui, sans-serif;
}

h1 { color: #63843f; }`,
    js: `console.log("Проект готов к твоим идеям!");`,
  },
};

const EDITORS = {
  html: document.querySelector("#editor-html"),
  css: document.querySelector("#editor-css"),
  js: document.querySelector("#editor-js"),
};
const TAB_HINTS = {
  html: "HTML — это каркас страницы. Измени текст между тегами и нажми «Запустить».",
  css: "CSS отвечает за внешний вид: цвета, шрифты и расположение элементов.",
  js: "JavaScript добавляет интерактивность. Сообщения console.log появятся в консоли.",
};
const preview = document.querySelector("#preview-frame");
const consoleOutput = document.querySelector("#console-output");
const saveStatus = document.querySelector("#save-status");
let activeTab = "html";
let runTimer;
let saveTimer;

function getWorkspace() {
  return Object.fromEntries(
    Object.entries(EDITORS).map(([language, editor]) => [language, editor.value]),
  );
}

function showConsoleHint() {
  consoleOutput.innerHTML =
    '<div class="console-empty">Тут появятся сообщения. <span>console.log("Привет!")</span></div>';
}

function writeConsole(message, type = "log") {
  if (consoleOutput.querySelector(".console-empty")) consoleOutput.replaceChildren();
  const row = document.createElement("div");
  row.className = `console-entry${type === "error" || type === "warn" ? ` ${type}` : ""}`;
  row.textContent = message;
  consoleOutput.append(row);
  consoleOutput.scrollTop = consoleOutput.scrollHeight;
}

function stringifyConsoleValue(value) {
  if (typeof value === "string") return value;
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function updateCursorStatus() {
  const editor = EDITORS[activeTab];
  const beforeCursor = editor.value.slice(0, editor.selectionStart);
  const lines = beforeCursor.split("\n");
  document.querySelector("#cursor-status").textContent =
    `СТРОКА ${lines.length}, СИМВОЛ ${lines.at(-1).length + 1}`;
}

function saveWorkspace() {
  saveStatus.textContent = "Сохраняю…";
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(getWorkspace()));
    saveStatus.textContent = "Изменения сохранены в этом браузере";
  } catch (error) {
    console.error("Не удалось сохранить проект", error);
    saveStatus.textContent = "Не удалось сохранить — проверь свободное место";
  }
}

function scheduleSave() {
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(saveWorkspace, 250);
}

function runProject() {
  window.clearTimeout(runTimer);
  const { html, css, js } = getWorkspace();
  showConsoleHint();
  const escapedJs = JSON.stringify(js).replace(/</g, "\\u003c");
  const runtime = `<script>
(() => {
  const relay = (type, args) => parent.postMessage({
    source: "codesprout-preview",
    type,
    message: args.map((item) => {
      try {
        if (typeof item === "string") return item;
        const result = JSON.stringify(item);
        return result === undefined ? String(item) : result;
      } catch { return String(item); }
    }).join(" ")
  }, "*");
  for (const type of ["log", "info", "warn", "error"]) {
    const original = console[type].bind(console);
    console[type] = (...args) => { relay(type, args); original(...args); };
  }
  addEventListener("error", (event) => relay("error", [event.message]));
  addEventListener("unhandledrejection", (event) => relay("error", [event.reason]));
  try { (0, eval)(${escapedJs}); }
  catch (error) { relay("error", [error.stack || error.message || error]); }
})();
<\/script>`;
  preview.srcdoc = `<!doctype html>
<html lang="ru"><head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>${css}\n</style></head><body>${html}\n${runtime}</body></html>`;
}

function setWorkspace(workspace) {
  for (const [language, editor] of Object.entries(EDITORS)) {
    editor.value = typeof workspace?.[language] === "string" ? workspace[language] : "";
  }
  scheduleSave();
  runProject();
}

function selectExample(name) {
  const example = EXAMPLES[name];
  if (!example) return;
  setWorkspace(example);
  document.querySelector("#examples").value = name;
}

function getStandalonePage() {
  const { html, css, js } = getWorkspace();
  const safeCss = css.replace(/<\/style/gi, "<\\/style");
  const safeJs = js.replace(/<\/script/gi, "<\\/script");
  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Мой первый проект — CodeSprout</title>
  <style>
${safeCss}
  </style>
</head>
<body>
${html}
  <script>
${safeJs}
  <\/script>
</body>
</html>
`;
}

function downloadFile(filename, content, type) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc ^= byte;
    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function buildZip(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  for (const [filename, content] of files) {
    const nameBytes = encoder.encode(filename);
    const contentBytes = encoder.encode(content);
    const checksum = crc32(contentBytes);
    const localHeader = new Uint8Array(30 + nameBytes.length);
    const localView = new DataView(localHeader.buffer);
    localView.setUint32(0, 0x04034b50, true);
    localView.setUint16(4, 20, true);
    localView.setUint16(6, 0x0800, true);
    localView.setUint16(8, 0, true);
    localView.setUint32(14, checksum, true);
    localView.setUint32(18, contentBytes.length, true);
    localView.setUint32(22, contentBytes.length, true);
    localView.setUint16(26, nameBytes.length, true);
    localHeader.set(nameBytes, 30);
    localParts.push(localHeader, contentBytes);

    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const centralView = new DataView(centralHeader.buffer);
    centralView.setUint32(0, 0x02014b50, true);
    centralView.setUint16(4, 20, true);
    centralView.setUint16(6, 20, true);
    centralView.setUint16(8, 0x0800, true);
    centralView.setUint16(10, 0, true);
    centralView.setUint32(16, checksum, true);
    centralView.setUint32(20, contentBytes.length, true);
    centralView.setUint32(24, contentBytes.length, true);
    centralView.setUint16(28, nameBytes.length, true);
    centralView.setUint32(42, offset, true);
    centralHeader.set(nameBytes, 46);
    centralParts.push(centralHeader);
    offset += localHeader.length + contentBytes.length;
  }

  const centralDirectory = new Blob(centralParts).size;
  const centralBytes = new Blob(centralParts);
  const end = new Uint8Array(22);
  const endView = new DataView(end.buffer);
  endView.setUint32(0, 0x06054b50, true);
  endView.setUint16(8, files.length, true);
  endView.setUint16(10, files.length, true);
  endView.setUint32(12, centralDirectory, true);
  endView.setUint32(16, offset, true);
  return new Blob([...localParts, centralBytes, end], { type: "application/zip" });
}

function downloadProject() {
  const { html, css, js } = getWorkspace();
  const projectIndex = `<!doctype html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Мой CodeSprout-проект</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
${html}
  <script src="script.js"><\/script>
</body>
</html>
`;
  const projectReadme = `# Мой первый проект\n\nСобрано в CodeSprout Studio — браузерной мастерской для начинающих программистов.\n\n## Как открыть\n\nДважды щёлкни по \`index.html\` или перетащи его в свой браузер.\n\n- \`index.html\` — структура страницы (HTML)\n- \`styles.css\` — внешний вид (CSS)\n- \`script.js\` — интерактивность (JavaScript)\n\nУдачи с программированием! 🌱\n`;
  const archive = buildZip([
    ["index.html", projectIndex],
    ["styles.css", css],
    ["script.js", js],
    ["README.md", projectReadme],
  ]);
  const url = URL.createObjectURL(archive);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "мой-первый-проект.zip";
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

for (const [language, editor] of Object.entries(EDITORS)) {
  editor.addEventListener("input", () => {
    scheduleSave();
    window.clearTimeout(runTimer);
    runTimer = window.setTimeout(runProject, 500);
  });
  editor.addEventListener("click", () => {
    activeTab = language;
    updateCursorStatus();
  });
  editor.addEventListener("keyup", updateCursorStatus);
  editor.addEventListener("select", updateCursorStatus);
  editor.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      const start = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.setRangeText("  ", start, end, "end");
      editor.dispatchEvent(new Event("input", { bubbles: true }));
      updateCursorStatus();
    }
  });
}

document.querySelectorAll(".editor-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    activeTab = tab.dataset.tab;
    document.querySelectorAll(".editor-tab").forEach((otherTab) => {
      const isActive = otherTab === tab;
      otherTab.classList.toggle("active", isActive);
      otherTab.setAttribute("aria-selected", String(isActive));
    });
    for (const [language, editor] of Object.entries(EDITORS)) {
      editor.hidden = language !== activeTab;
      editor.classList.toggle("hidden", language !== activeTab);
    }
    document.querySelector("#editor-hint-text").textContent = TAB_HINTS[activeTab];
    updateCursorStatus();
    EDITORS[activeTab].focus();
  });
});

document.querySelector("#examples").addEventListener("change", (event) => {
  selectExample(event.target.value);
});
document.querySelector("#run-button").addEventListener("click", runProject);
document.querySelector("#refresh-button").addEventListener("click", runProject);
document.querySelector("#clear-console").addEventListener("click", showConsoleHint);
document.querySelector("#download-button").addEventListener("click", downloadProject);
document.querySelector("#reset-button").addEventListener("click", () => {
  selectExample(document.querySelector("#examples").value || "welcome");
});

document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key === "Enter") {
    event.preventDefault();
    runProject();
  }
});

window.addEventListener("message", (event) => {
  if (event.source !== preview.contentWindow) return;
  if (!event.data || event.data.source !== "codesprout-preview") return;
  if (!["log", "info", "warn", "error"].includes(event.data.type)) return;
  writeConsole(String(event.data.message), event.data.type);
});

function restoreWorkspace() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch (error) {
    console.error("Не удалось прочитать сохранённый проект", error);
    saveStatus.textContent = "Предыдущий проект не удалось прочитать";
  }

  if (saved && typeof saved === "object" &&
      ["html", "css", "js"].every((key) => typeof saved[key] === "string")) {
    setWorkspace(saved);
    const exampleSelect = document.querySelector("#examples");
    const match = Object.entries(EXAMPLES).find(([, example]) =>
      ["html", "css", "js"].every((key) => example[key] === saved[key]),
    );
    if (match) exampleSelect.value = match[0];
    else exampleSelect.value = "blank";
  } else {
    selectExample("welcome");
  }
}

restoreWorkspace();
