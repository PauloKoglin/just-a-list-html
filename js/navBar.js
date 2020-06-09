function setHTMLPage(url, callback) {
    fetch(url)
        .then(resp => resp.text())
        .then(html => {
            document.getElementById('formSection').innerHTML = html
            setTimeout(() => {
                return ""
            }, 2);
        })
        .then(callback)
}

document.querySelectorAll('[navItem]').forEach(link => {
    const linkColor = link.style
    link.onmouseover = e => link.style = "background-color: #4A9;"
    link.onmouseleave = e => link.style = linkColor

    link.onclick = function (e) {
        e.preventDefault()
        loadPage = function () {
            if (loadMethod = link.getAttribute("loadMethod"), loadMethod) {
                eval(loadMethod)
            }
        }

        setHTMLPage(link.getAttribute('navItem'), loadPage)
    }
})