const listingsImgs = document.querySelectorAll('.img-container');

listingsImgs.forEach(listingsImg => {
    changeHeight(listingsImg);
});

window.addEventListener('resize', (event) => {
    listingsImgs.forEach(listingsImg => {
        changeHeight(listingsImg);
    });
});

function changeHeight(elmnt) {
    let width = elmnt.clientWidth;
    let newHeight = width * 0.75;
    elmnt.style.height = newHeight + 'px';
}