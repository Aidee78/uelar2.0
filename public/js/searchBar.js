searchbar_toggle.addEventListener('change', (event) => {
    event.preventDefault();

    if (searchbar_toggle.checked) {
        mainBody.classList.add('searchBar-slide');
        searchbar.classList.add('display');
        
    } else {
        mainBody.classList.remove('searchBar-slide');
        searchbar.classList.remove('display');
    }
    
    if (listingsImgs) {
        listingsImgs.forEach(listingsImg => {
            changeHeight(listingsImg);
        });
    }
});

const searchForm = document.querySelector('.searchForm');
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Tried to search');
});