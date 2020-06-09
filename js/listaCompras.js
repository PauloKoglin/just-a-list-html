
function loadShoppingLists() {
    fetch('/mocks/lista-data.json')
        .then(data => data.json())
        .then(res => createListsTable(res))
        .then(function () {
            setTableEvents()
        })
}

function loadList(listId) {
    fetch('/mocks/lista-data.json')
        .then(data => data.json())
        .then(res => {
            list = res.itens.filter(item => item.id == listId)
            createMyListTable(list[0].produtos)
        })
}

function createListsTable(obj) {
    lista = document.getElementById('shoppingLists')
    obj.itens.forEach(item => {
        lista.innerHTML +=
            `
            <tr myListRow> 
                <th hidden scope="row">${item.id}</th>
                <td>${item.description}</td>
                <td>${item.date}</td>
                <td>${item.user}</td>
                
            </tr>
            `
    });
}

function createMyListTable(list) {
    table = document.createElement("table")
    table.setAttribute("class", "table table-hover")

    thead = document.createElement("thead")
    thead.innerHTML = '<th scope="col">Description</th><th scope="col">Quantity</th>'
    table.appendChild(thead)

    tbody = document.createElement("tbody")
    if (list) {
        list.forEach(row => tbody.innerHTML +=
            `<tr>
                <th hidden scope="row">${row.id}</th> 
                <td>${row.description}</td>
                <td>${row.quantity}</td>
             </tr>`)


    } else {
        tbody.innerHTML = "<tr>Nothing to list</tr>"
    }

    table.appendChild(tbody)

    // Add to Section
    formSelection = document.getElementById('formSection')
    formSelection.innerHTML = ""
    formSelection.appendChild(table)
}

function setTableEvents() {
    document.querySelectorAll('[myListRow]').forEach(row => {
        row.onclick = function (e) {
            cell = e.target
            id = cell.parentElement.firstElementChild.innerHTML
            loadList(id)
        }
    })
}