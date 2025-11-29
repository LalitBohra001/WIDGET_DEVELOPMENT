define([], function () {

  function createTableFromJSON(data) {
    const table = document.createElement("table");
    table.className = "json-table";

    // Table head
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");

    Object.keys(data[0]).forEach(key => {
      const th = document.createElement("th");
      th.textContent = key.toUpperCase();
      headerRow.appendChild(th);
    });
    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Table body
    const tbody = document.createElement("tbody");
    data.forEach(row => {
      const tr = document.createElement("tr");
      Object.values(row).forEach(value => {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    return table;
  }

  return {
    init: function (options) {
      const target = options.target;

      const header = document.createElement("h2");
      header.textContent = "JSON to HTML Table (UWA + RequireJS)";
      target.appendChild(header);

      // Load JSON using RequireJS text loader (simple fetch)
      fetch('http://localhost:8080/uwa-json-table/widget/data.json')
        .then(response => response.json())
        .then(json => {
          const table = createTableFromJSON(json);
          target.appendChild(table);
        })
        .catch(err => {
          target.innerHTML += "<p style='color:red'>Error loading JSON!</p>";
          console.error(err);
        });
    }
  };
});
