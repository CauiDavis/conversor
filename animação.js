function converter(){
    var reais = parseFloat(document.getElementById("valor-real").value)
    document.getElementById("valor-dolar").value = (reais/5.16).toFixed(2) + " dolares americanos"
    document.getElementById("valor-euro").value = (reais/5.82).toFixed(2) + " euros"
    document.getElementById("valor-libras").value = (reais/0.0034).toFixed(2) + " libras libaneses"
    document.getElementById("valor-ienis").value = (reais/0.45).toFixed(2) + " ienes japonês"
}
function limpar(){
    document.getElementById("valor-real").value = ""
    document.getElementById("valor-dolar").value = ""
    document.getElementById("valor-euro").value = ""
    document.getElementById("valor-libras").value = ""
    document.getElementById("valor-ienis").value = ""
}