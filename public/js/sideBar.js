sidebar_toggle.addEventListener('change', (event) => {
    event.preventDefault();

    if (sidebar_toggle.checked) {
        mainBody.classList.add('sideBar-slide');
        sidebar.classList.add('display');
    } else {
        mainBody.classList.remove('sideBar-slide');
        sidebar.classList.remove('display');
    }
    listingsImgs.forEach(listingsImg => {
        changeHeight(listingsImg);
    });
});