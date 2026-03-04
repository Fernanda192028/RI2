// Objetivo1

function Cliente(nome, telefoneCelular, email, endereco){
    this.nome = nome
    this.telefoneCelular = telefoneCelular
    this.email = email
    this.endereco = endereco

    Object.defineProperty(this, 'descricaoCliente',{
        get: function(){
          return this.nome
    }
  })
}


function  TelefoneCelular(ddd, numero) {
    this.ddd = ddd
    this.numero = numero

  Object.defineProperty(this, 'descricaoTelefoneCelular',{
        get: function(){
          return 'DDD: ' + this.ddd + '\nNúmero: ' + this.numero
    }
  })
}


function Endereco(rua, numero,cidade,estado){
    this.rua = rua
    this.numero = numero
    this.cidade = cidade
    this.estado = estado

    Object.defineProperty(this, 'descricaoEndereco',{
        get: function(){
          return 'Rua: ' + this.rua + '\nNúmero: ' + this.numero + '\nCidade: ' + this.cidade + '\nEstado: ' + this.estado
    }
  })
}



const telefoneCelular1 = new TelefoneCelular("12", "12981088049");
const endereco1 = new Endereco("MG", "Minas Gerais", "av.ouro preto", "123");
const cliente1 = new Cliente("Noah Conrado Heinz", telefoneCelular1 , "noah.heinz@gmail.com", endereco1);

const telefoneCelular2 = new TelefoneCelular("12", "12981088049");
const endereco2 = new Endereco("MG", "Minas Gerais", "av.ouro preto", "123");
const cliente2 = new Cliente("Beatriz Conrado Heinz", telefoneCelular1 , "noah.heinz@gmail.com", endereco1);

const telefoneCelular3 = new TelefoneCelular("12", "12981088049");
const endereco3 = new Endereco("MG", "Minas Gerais", "av.ouro preto", "123");
const cliente3 = new Cliente("Ana Conrado Heinz", telefoneCelular1 , "noah.heinz@gmail.com", endereco1);




console.log("---------------")
console.log("Informações do cliente: \n" + cliente1.descricaoCliente)
console.log("---------------")
console.log("---------------")
console.log("Telefone: \n" + telefoneCelular1.descricaoTelefoneCelular)
console.log("---------------")
console.log("Endereço: \n" + endereco1.descricaoEndereco)

console.log("---------------")

// Objetivo 2

let listaClientes = [cliente1, cliente2, cliente3]

function OrdenaClientes(listaClientes){
   return listaClientes.toSorted((a,b) => {
      return a.nome.localeCompare(b.nome);
   })
}

const resultadoApenasNomes = OrdenaClientes(listaClientes).map(c => c.nome);

console.log("-- Array de Nomes Ordenados--");
console.log(resultadoApenasNomes);