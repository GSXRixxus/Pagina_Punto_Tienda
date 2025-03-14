document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.content section');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            sections.forEach(section => {
                if (section.id === targetId) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
});

//script scripterfiles
document.getElementById('formulario-registro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contraseña = document.getElementById('contraseña').value.trim();
    const rol = document.getElementById('rol').value;
    const fecha = document.getElementById('fecha').value;

    // Validar que todos los campos estén llenos
    if (nombre === '' || correo === '' || contraseña === '' || rol === '' || fecha === '') {
        alert('Error: Todos los campos son obligatorios.');
        return;
    }

    // Validar el formato del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        alert('Error: El correo electrónico no tiene un formato válido.');
        return;
    }

    // Si todo está correcto, mostrar mensaje de éxito
    alert('Registro exitoso!');
    // Aquí podrías enviar los datos a un servidor o realizar otras acciones necesarias

    // Opcional: Limpiar el formulario después del registro exitoso
    document.getElementById('formulario-registro').reset();
});
//Script inputs
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