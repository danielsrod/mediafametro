function calc() {
    var parc1n1 = Number(document.getElementById("n1parc1").value)
    var parc2n1 = Number(document.getElementById("n1parc2").value)
    var intern1 = Number(document.getElementById("n1inter").value)
    var provan1 = Number(document.getElementById("n1prova").value)

    var parc1n2 = Number(document.getElementById("n2parc1").value)
    var parc2n2 = Number(document.getElementById("n2parc2").value)
    var transn2 = Number(document.getElementById("n2trans").value)
    var provan2 = Number(document.getElementById("n2prova").value)

    n1 = (parc1n1 + parc2n1 + intern1 + provan1) / 2
    n2 = (parc1n2 + parc2n2 + transn2 + provan2) / 2

    mf = (n1 + n2) / 2

    document.getElementById("res").innerHTML="Sua média final é: " + mf
}