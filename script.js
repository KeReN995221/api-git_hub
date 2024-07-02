/*const password = {
    value: '',
    length: 15,
    characters: {
        numbers: '0123456789',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        special: '?/~^{}[]!@#$%&*()_-+=.:;'
    },
    generate(chars){
        let 
    }
}*/

async function consultarRepositorios() {
    const nomeUsuario = document.getElementById("inputNomeUsuario").value;
    const listaRepositorios = document.getElementById("listaRepositorios");
    const status = document.getElementById("status");
    status.innerText = 'carregando...';
    listaRepositorios.innerText='';
    
    if(!nomeUsuario){
        alert("Informar o nome do usuário!");
        return;
    }
    const url = `https://api.github.com/users/${nomeUsuario}/repos`;
    try{
        const resposta = await fetch(url);
        
        if(!resposta.ok){
            alert("Erro ao realizar a consulta");
            status.innerText='';  
            return;
        }
        const repositorios = await resposta.json();
        
        repositorios.forEach(element => {
            const itemLista = document.createElement('li');
            itemLista.textContent = element.name;
            listaRepositorios.appendChild(itemLista);           
        });
       
    }catch(error){

    }
    status.innerText='';    
}
