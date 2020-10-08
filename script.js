function calc() {
    var n1parc1 = Number(document.getElementById("n1parc1").value)
    var n1parc2 = Number(document.getElementById("n1parc2").value)
    var n1inter = Number(document.getElementById("n1inter").value)
    var n1prova = Number(document.getElementById("n1prova").value)

    var n2parc1 = Number(document.getElementById("n2parc1").value)
    var n2parc2 = Number(document.getElementById("n2parc2").value)
    var n2inter = Number(document.getElementById("n2inter").value)
    var n2prova = Number(document.getElementById("n2prova").value)

    var n1 = (n1parc1 + n1parc2 + n1inter + n1prova) / 2
    var n2 = (n2parc1 + n2parc2 + n2trans + n2prova) / 2

    var mf = (n1 + n2) / 2

    document.getElementById("res").innerHTML=mf
}