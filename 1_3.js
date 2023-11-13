function createHeaders(N) {
    for (let i = 1; i <= N; i++) {
      const header = document.createElement("h2");
      header.textContent = "Header" + i;
      document.body.appendChild(header);
    }
  }