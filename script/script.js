  const searchButton = document.querySelectorAll('.rearch_button');
    searchButton.forEach(button => {
    button.addEventListener('click', function () {
        const category = this.getAttribute('data-category');
        const images = document.querySelectorAll('.imges_elements');
        images.forEach(img => {
            if (category === 'all') {
                img.style.display = 'block';
            } else {
                img.style.display = img.getAttribute('data-category') === category ? 'block' : 'none';
            }
        });
    });
});
/** * Qidiruv funksiyasi  * **/
  const search_Button = document.getElementById('searchButton');
  search_Button.addEventListener('click', function () {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const images = document.querySelectorAll('.imges_elements');

    images.forEach(img => {
        const imgText = img.querySelector('.imges_text h1').textContent.toLowerCase();
        /** * Qidiruvga mos keladiganlarni ko'rsatish  * **/
        img.style.display = imgText.includes(searchValue) ? 'block' : 'none';
    });
});