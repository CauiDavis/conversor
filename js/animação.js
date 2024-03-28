

let urlDolar = "https://economia.awesomeapi.com.br/last/USD-BRL";
let urlEuro = "https://economia.awesomeapi.com.br/last/EUR-BRL";
let urlLibras = "https://economia.awesomeapi.com.br/last/GBP-BRL";
let urlIenis = "https://economia.awesomeapi.com.br/last/JPY-BRL";

let dolar;
let euro;
let libras;
let ienis;

function getDolar() {
    fetch(urlDolar)
        .then(response => response.json())
        .then(high => {
            dolar = high.USDBRL.high;
        })
        .catch((erro) => {
            console.log("erro" + erro)
        })
}
getDolar();

function getEuro() {
    fetch(urlEuro)
        .then(response => response.json())
        .then(high => {
            euro = high.EURBRL.high;
        })
        .catch((erro) => {
            console.log("erro" + erro)
        })
}
getEuro();

function getLibras() {
    fetch(urlLibras)
        .then(response => response.json())
        .then(high => {
            libras = high.GBPBRL.high;
        })
        .catch((erro) => {
            console.log("erro" + erro)
        })
}
getLibras();

function getIenis() {
    fetch(urlIenis)
        .then(response => response.json())
        .then(high => {
            ienis = high.JPYBRL.high;
        })
        .catch((erro) => {
            console.log("erro" + erro)
        })
}
getIenis();

function converter() {
    var reais = parseFloat(document.getElementById("valor-real").value);

    if (isNaN(reais)) {
        alert("Digite um valor válido");
        return;
    }

    document.getElementById("valor-dolar").value = (reais / dolar).toFixed(2) + " dolares americanos";
    document.getElementById("valor-euro").value = (reais / euro).toFixed(2) + " euros";
    document.getElementById("valor-libras").value = (reais / libras).toFixed(2) + " libras libaneses";
    document.getElementById("valor-ienis").value = (reais / ienis).toFixed(2) + " ienes japonês";
}
function limpar() {
    document.getElementById("valor-real").value = "";
    document.getElementById("valor-dolar").value = "";
    document.getElementById("valor-euro").value = "";
    document.getElementById("valor-libras").value = "";
    document.getElementById("valor-ienis").value = "";
}