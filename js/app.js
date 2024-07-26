document.addEventListener('DOMContentLoaded', function() {
    const inputText = document.getElementById('encriptador_texto');
    const resultadoSection = document.getElementById('resultado');
    const btnEncriptar = document.querySelector('.btn_encriptar');
    const btnDesencriptar = document.querySelector('.btn_desencriptar');
    const munecoImagen = document.getElementById('munecoImagen');
    const resultadoTitulo = document.getElementById('resultadoTitulo');
    const resultadoParrafo = document.getElementById('resultadoParrafo');
    const textoResultado = document.getElementById('textoResultado');
    const btnCopiar = document.getElementById('btnCopiar');
    const btnReset = document.getElementById('btnReset');

    function encriptar(texto) {
        return texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
    }

    function desencriptar(texto) {
        return texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
    }

    function validarTexto(texto) {
        return /^[a-z\s]*$/.test(texto);
    }

    function mostrarResultado(texto) {
        munecoImagen.style.display = 'none';
        resultadoTitulo.style.display = 'none';
        resultadoParrafo.style.display = 'none';
        textoResultado.style.display = 'block';
        btnCopiar.style.display = 'block';
        btnReset.style.display = 'block';

        textoResultado.value = texto;
        textoResultado.style.height = 'auto';
        textoResultado.style.height = textoResultado.scrollHeight + 'px';
    }

    function resetearTodo() {
        inputText.value = '';
        munecoImagen.style.display = 'block';
        resultadoTitulo.style.display = 'block';
        resultadoParrafo.style.display = 'block';
        textoResultado.style.display = 'none';
        btnCopiar.style.display = 'none';
        btnReset.style.display = 'none';
    }

    btnEncriptar.addEventListener('click', function() {
        const texto = inputText.value.toLowerCase();
        if (texto === "") {
            alert('Por favor, ingrese un valor en cuadro de texto');
        } else {
            if (!validarTexto(texto)) {
                alert('Por favor, ingrese solo letras minúsculas sin acentos');
                return;
            }
            const textoEncriptado = encriptar(texto);
            mostrarResultado(textoEncriptado);
        }
    });

    btnDesencriptar.addEventListener('click', function() {
        const texto = inputText.value.toLowerCase();
        if (texto === "") {
            alert('Por favor, ingrese un valor en cuadro de texto');
        } else {
            if (!validarTexto(texto)) {
                alert('Por favor, ingrese solo letras minúsculas sin acentos');
                return;
            }
            const textoDesencriptado = desencriptar(texto);
            mostrarResultado(textoDesencriptado);
        }
    });

    btnCopiar.addEventListener('click', function() {
        textoResultado.select();
        document.execCommand('copy');
        alert('Texto copiado al portapapeles');
    });

    btnReset.addEventListener('click', resetearTodo);

    inputText.addEventListener('input', function() {
        if (this.value === '') {
            resetearTodo();
        }
    });
});