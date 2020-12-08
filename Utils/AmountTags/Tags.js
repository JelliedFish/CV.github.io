
function amountOfTags() {

    let all = document.getElementById("Portfolio").getElementsByTagName("*");

    for (let i = 0 ; i < all.length; i++) {
        alert(all[i]+" ")
        alert(all[i].length)
    }
}

