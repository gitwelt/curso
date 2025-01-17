/***Bloco definindo uma pessoa.***/
interface Pessoa{ 
   nome: string; //Atributo nome deve ser uma string (texto).
   idade: number; //Atributo idade deve ser um número.
   email?: string; //Atributo email deve ser uma string (texto) e é opcional.
}
let pessoas: Pessoa[] = []; //É iniciada uma lista de pessoas seguindo a definição anterior
                            //E em seguida declarada vazia.


{ /***Bloco que insere pessoas***/
pessoas.push({nome:'Jéssica', idade: 17});
pessoas.push({nome:'Pedro', idade: 22});
pessoas.push({nome:'Carlos', idade: 33, email:'carlos992@gmail.com'});
pessoas.push({nome:'Lucas', idade: 14, email:'lucaslucca@gmail.com'});
pessoas.push({nome:'Rogério', idade: 149});
pessoas.push({nome:'Eustácio', idade: 151});
//O método push adiciona novos itens à lista.
}

/***Função saudar***/
function saudar(){
   pessoas.forEach(({nome, idade, email}) => {
      //[Sintaxe arrow function] Para cada pessoa na lista, o método forEach executa uma função callback que retorna nome, idade e email.
      //Os atributos retornados são acessíveis assim como variáveis dentro do bloco.
      let template = `Olá ${nome}! Detectamos que você tem ${idade} anos! `; //Template de texto usando template literals.
      if (email) {
         template += `Seu email é ${email}. `;
      } //Adiciona ao template o email, caso esteja presente.
      if (idade < 18){
      template += 'Por ser menor de idade, você possui acesso limitado ao sistema.';
      } //Verifica se a pessoa é menor de idade, e adiciona ao template.
      console.log(template)
   });
}

saudar();