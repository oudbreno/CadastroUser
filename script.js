let usuarios = [];

function adicionarUsuario(nome, email) {
    if (!nome || !email) {
        alert("Nome e e-mail são obrigatórios.");
        return;
    }
    
    let emailExistente = usuarios.some(usuario => usuario.email === email);
    if (emailExistente) {
        alert("E-mail já cadastrado.");
        return;
    }
    
    let novoUsuario = {
        nome: nome,
        email: email
    };
    usuarios.push(novoUsuario);
    console.log("Usuário adicionado com sucesso.");
    listarUsuarios();
}

function listarUsuarios() {
    const listaUsuariosDiv = document.getElementById('listaUsuarios');
    listaUsuariosDiv.innerHTML = ''; // Limpar lista atual

    if (usuarios.length === 0) {
        listaUsuariosDiv.innerHTML = '<p>Nenhum usuário cadastrado.</p>';
        return;
    }

    usuarios.forEach(usuario => {
        const usuarioP = document.createElement('p');
        usuarioP.textContent = `Nome: ${usuario.nome}, E-mail: ${usuario.email}`;
        listaUsuariosDiv.appendChild(usuarioP);
    });
}

document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar o envio do formulário e recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    adicionarUsuario(nome, email);
    
    // Limpar campos do formulário
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
});
