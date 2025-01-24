    
    const listaAmigos = []; // Lista para armazenar os nomes dos amigos
    const resultado = {}; // Objeto para armazenar o sorteio (quem tira quem)
    
    function adicionarAmigo() {
      const nome = document.getElementById('amigo').value;
      if (nome.trim() === '') {
        alert('Por favor, digite um nome válido.');
        return;
    
    //Em JavaScript, a função trim() é utilizada para remover espaços em branco no início e no final de uma string. Esses espaços em branco podem ser caracteres como espaço, tabulação ou quebras de linha.
      }
    
      listaAmigos.push(nome.trim());
      document.getElementById('amigo').value = ''; // Limpa o campo de input
      atualizarListaAmigos();
      
    }
    
    
    function atualizarListaAmigos() {
      const listaElement = document.getElementById('listaAmigos');
      listaElement.innerHTML = ''; // Limpa a lista antes de atualizar
    
      for (const nome of listaAmigos) {
        const itemLista = document.createElement('li');
        itemLista.innerText = nome;
        listaElement.appendChild(itemLista);
      }
      
    }

    
    function sortearAmigo() {
      if (listaAmigos.length < 2) {
        alert('Precisa ter pelo menos 2 amigos para sortear!');
        return;
      }
    
    
      // Embaralhar a lista de amigos
      const listaEmbaralhados = embaralhar(listaAmigos.slice()); // Copia a lista original
    
      // Realizar o sorteio (quem tira quem)
      for (let i = 0; i < listaEmbaralhados.length; i++) {
        const quemTira = listaEmbaralhados[i];
        let quemGanha = listaEmbaralhados[(i + 1) % listaEmbaralhados.length];
    
        // Evitar que alguém tire si mesmo
        if (quemGanha === quemTira) {
          quemGanha = listaEmbaralhados[(i + 2) % listaEmbaralhados.length];
        }
    
        resultado[quemTira] = quemGanha;
      }
    
      exibirResultado();
    }

  
    
    function exibirResultado() {
      const listaResultado = document.getElementById('resultado');
      listaResultado.innerHTML = ''; // Limpa a lista de resultados anterior
    
      for (const [quemTira, quemGanha] of Object.entries(resultado)) {
        const itemResultado = document.createElement('li');
        itemResultado.innerText = `${quemTira} é amigo secreto de ${quemGanha}`;
        listaResultado.appendChild(itemResultado);
      }
    }
    
    // Função para embaralhar a lista.
    function embaralhar(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        
      }
      return array;
      
    }

    



    
    
    