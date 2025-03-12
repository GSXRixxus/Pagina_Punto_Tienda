document.getElementById('productForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const productName = document.getElementById('productName').value;
    const barcode = document.getElementById('barcode').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const supplier = document.getElementById('supplier').value;

    const product = {
        name: productName,
        barcode: barcode,
        expiryDate: expiryDate,
        supplier: supplier
    };

    console.log('Producto agregado:', product);
    alert('Producto agregado con éxito!');
});