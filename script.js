let count = 0;

function moveRight() {
    if (count == 7) {
        count = 0
    } else {
        count++
    }

    let value = count * 11.18;

    document.querySelector(".ugc-header-cards").style.cssText = `
        transform: translateX(-${value}%);
    `
}

function moveLeft(){
    if (count == 0) {
        count = 7
    } else {
        count--
    }

    let value = count * 11.18;

    document.querySelector(".ugc-header-cards").style.cssText = `
        transform: translateX(-${value}%);
    `
}