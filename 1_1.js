function printTextWithFontSize(text, fontSize) {
    const div = document.createElement("div");
    div.textContent = text;
    div.style.fontSize = fontSize;
    document.body.appendChild(div);
  }