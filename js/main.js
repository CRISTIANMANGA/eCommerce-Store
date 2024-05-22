function searchProducts() {

    var searchText = document.getElementById('search').value.toLowerCase();

    var productos = document.querySelectorAll('.productCont');

    productos.forEach(function(producto) {
        var titulo = producto.querySelector('.productTitle').innerText.toLowerCase();
        var descripcion = producto.querySelector('.productoDescrip').innerText.toLowerCase();

        if (titulo.includes(searchText) || descripcion.includes(searchText) || searchText === '') {
            producto.style.display = 'block';
        } else {
            producto.style.display = 'none';
        }
    });
}
