function createTableFromStrings(strings) {
    let tableHTML = "<table>";
  
    for (const str of strings) {
      tableHTML += "<tr><td>" + str + "</td></tr>";
    }
  
    tableHTML += "</table>";
    return tableHTML;
  }
  
  const textStrings = ["Рядок 1", "Рядок 2", "Рядок 3", "Рядок 4"];
  const tableHTML = createTableFromStrings(textStrings);
  
  document.body.innerHTML = tableHTML;
  