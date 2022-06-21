let count = 0;
let mobCount = 0;

function moveRight() {
    if (count == 7) {
        count = 0;
    } else {
        count++;
    };

    let value = count * 11.18;

    document.querySelector(".ugc-header-cards").style.cssText = `
        transform: translateX(-${value}%);
    `
}

function moveLeft(){
    if (count == 0) {
        count = 7;
    } else {
        count--;
    };

    let value = count * 11.18;

    document.querySelector(".ugc-header-cards").style.cssText = `
        transform: translateX(-${value}%);
    `
}

function moveRightMobile() {
    if (mobCount === 6) {
        mobCount = 0
    } else {
        mobCount++;
    };

    let value = mobCount * 12.588;

    document.querySelector(".ugc-header-mobile-cards").style.cssText = `
        transform: translateX(-${value}%);
    `
}

function moveLeftMobile() {
    if (mobCount === 0) {
        mobCount = 6
    } else {
        mobCount--;
    };

    let value = mobCount * 12.588;

    document.querySelector(".ugc-header-mobile-cards").style.cssText = `
        transform: translateX(-${value}%);
    `
}

window.addEventListener('resize', function (){
    count = 0;
    mobCount = 0;
    document.querySelector(".ugc-header-cards").style.cssText = ``;
    document.querySelector(".ugc-header-mobile-cards").style.cssText = ``;
})