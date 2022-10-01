const buttonSaludo = document.querySelector('.button-saludo')
const buttonDespedida = document.querySelector('.button-despedida')

buttonSaludo.addEventListener('click', () => {
    alert('Bienvenido a Git');
});

buttonDespedida.addEventListener('click', () => {
    alert('Hasta luego Git');
});
