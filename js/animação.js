const DolarRouteAndData = {
    route: "USD-BRL",
    data: "USDBRL"
}
const EuroRouteAndData = {
    route: "EUR-BRL",
    data: "EURBRL"
}
const LibrasRouteAndData = {
    route: "GBP-BRL",
    data: "GBPBRL"
}
const IenisRouteAndData = {
    route: "JPY-BRL",
    data: "JPYBRL"
}
let Dolar;
let Euro;
let Libras;
let Ienis;


async function getMoney(money) {
    try {
        const url = `https://economia.awesomeapi.com.br/last/${money.route}`;
        const response = await fetch(url);
        const data = await response.json();
        return data[money.data]["high"];
    } catch (error) {
        console.error("erro" + error);
        throw error;
    }
}

async function returnData() {
    try {
        Dolar = await getMoney(DolarRouteAndData);
        Euro = await getMoney(EuroRouteAndData);
        Libras = await getMoney(LibrasRouteAndData);
        Ienis = await getMoney(IenisRouteAndData);
    } catch (error) {
        console.error(error);
    }
}
returnData();

function converter() {
    let Reais = parseFloat(document.getElementById("valor-real").value);

    if (isNaN(Reais)) {
        alert("Digite um valor válido");
        return;
    }

    document.getElementById("valor-dolar").value = (Reais / Dolar).toFixed(2) + " dolares americanos";
    document.getElementById("valor-euro").value = (Reais / Euro).toFixed(2) + " euros";
    document.getElementById("valor-libras").value = (Reais / Libras).toFixed(2) + " libras libaneses";
    document.getElementById("valor-ienis").value = (Reais / Ienis).toFixed(2) + " ienes japoneses";
}

function limpar() {
    document.getElementById("valor-real").value = "";
    document.getElementById("valor-dolar").value = "";
    document.getElementById("valor-euro").value = "";
    document.getElementById("valor-libras").value = "";
    document.getElementById("valor-ienis").value = "";
}