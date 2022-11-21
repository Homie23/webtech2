async function getData() {
    try {
        let response = await fetch('http://localhost:3000/quotes');
        let data = await response.json();
        document.getElementById("footer").insertAdjacentHTML('afterBegin', `<p>${data[9].quote}</p>`);
    } catch {
        console.log('error', response.status)
    }
}
getData();