interface Pessoa{ 
   nome: string;
   idade: number;
   email?: string;
}

let pessoas: Pessoa[] = [];

pessoas.push({nome:'Jéssica', idade: 17});
pessoas.push({nome:'Pedro', idade: 22});
pessoas.push({nome:'Carlos', idade: 33, email:'carlos992@gmail.com'});

function saudar(){
   for (let index = 0; index < pessoas.length; index++) {
      let template = `Olá ${pessoas[index].nome}! Você tem ${pessoas[index].idade} anos`;
      if ('email' in pessoas[index]) {
         template = template + `, e seu email é ${pessoas[index].email}!`;
      }   
      console.log(template);
   }
}

saudar();