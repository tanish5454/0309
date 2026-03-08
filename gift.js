function gift() {
    document.getElementById("giftarea").style.display = "none"
    document.getElementById("intro").style.display = "none"
    document.getElementById("contactd").style.display = "block"
}

function phnno1() {
    document.getElementById("phnno1").className = "phnnoactive"
    document.getElementById("phnno2").className = "phnno"
    document.getElementById("contact").value = "96255334215"

}

function phnno2() {
    document.getElementById("phnno2").className = "phnnoactive"
    document.getElementById("phnno1").className = "phnno"
    document.getElementById("contact").value = "9310031362"
}