document.getElementById('nome').addEventListener('keypress', function(event) {

    if (!isNaN(event.key) && event.key !== ' ') {

        event.preventDefault();

        alert('🚫 Este campo só aceita letras.');

    }
});

document.getElementById('nome').addEventListener('keypress', function(event) {

    const proibidos = "!@#$%¨&*()_-+=><.:;,{}[]ºª"

    if (proibidos.includes(event.key)){

        event.preventDefault();

        alert('🚫 Este campo só aceita letras.')
    }
});

document.getElementById('email').addEventListener('keypress', function(event) {

    const permitidos = "abcdefghijklmnopqrstuvqwxyz, 0123456789, '@', '.', ' '"

    if (!permitidos.includes(event.key)) {

        event.preventDefault();

        alert('🚫 Este caractere não é permitido neste campo.');
    }
});

document.getElementById('telefone').addEventListener('keypress', function(event) {

    const permitidos = "0123456789, '-', ' ', '(', ')'";

    if (!permitidos.includes(event.key)) {

        event.preventDefault();

        alert('🚫 Este campo só aceita números.');
    
    }
});

document.getElementById('endereco').addEventListener('keypress', function(event) {

    const permitidos = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZzÇç, ' ', ÀàÂâãáêéíôóú";

    if (!permitidos.includes(event.key)) {

        event.preventDefault();

        alert('🚫 Este campo só aceita letras.');
    
    }
});

document.getElementById('numero').addEventListener('keypress', function(event) {

    const permitidos = "0123456789";

    if (!permitidos.includes(event.key)) {

        event.preventDefault();

        alert('🚫 Este campo só aceita números.');
    
    }
});

document.getElementById('quantidade').addEventListener('keypress', function(event) {

    const permitidos = "0123456789";

    if (!permitidos.includes(event.key)) {

        event.preventDefault();

        alert('🚫 Este campo só aceita números.');
    
    }
});

document.getElementById('enviar').addEventListener('click', function() {

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const endereco = document.getElementById('endereco').value.trim();
    const numero = document.getElementById('numero').value.trim();
    const quantidade = document.getElementById('quantidade').value.trim();

    if (nome === "" || email === "" || telefone === "" || endereco === "" || numero === "" || quantidade === "") {

        alert("⚠️ Preencha todos os campos antes de enviar!");

        } else {
            alert(`✅ Produto cadastrado com sucesso!\nNome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nEndereço: ${endereco}\nNumero: ${numero}\nQuantidade: ${quantidade}`);
    }
});
