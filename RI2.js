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


function Endereco(estado,cidade,rua,numero){
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



const telefoneCelular1 = new TelefoneCelular("31", "12981088049");
const endereco1 = new Endereco("MG", "Minas Gerais", "Av.ouro preto", "027");
const cliente1 = new Cliente("Noah Conrado Heinz", telefoneCelular1 , "noah.heinz@gmail.com", endereco1);

const telefoneCelular2 = new TelefoneCelular("92", "12981077080");
const endereco2 = new Endereco("AM", "Manaus", "Av.Eduardo Ribeiro", "098");
const cliente2 = new Cliente("Maria Eduarda Assis", telefoneCelular1 , "maria.assis@gmail.com", endereco1);

const telefoneCelular3 = new TelefoneCelular("12", "11981099030");
const endereco3 = new Endereco("SP", "São Paulo", "Av.Paulista", "123");
const cliente3 = new Cliente("Ana Beatriz Costa", telefoneCelular1 , "beatriz.costa@gmail.com", endereco1);





console.log("Informações do cliente: \n" + cliente1.descricaoCliente)
console.log("---------------")
console.log("---------------")
console.log("Telefone: \n" + telefoneCelular1.descricaoTelefoneCelular)
console.log("---------------")
console.log("Endereço: \n" + endereco1.descricaoEndereco)

console.log("---------------")


console.log("\n---------------")
console.log("Informações do cliente: \n" + cliente2.descricaoCliente)
console.log("---------------")
console.log("---------------")
console.log("Telefone: \n" + telefoneCelular2.descricaoTelefoneCelular)
console.log("---------------")
console.log("Endereço: \n" + endereco2.descricaoEndereco)

console.log("---------------")


console.log("\n---------------")
console.log("Informações do cliente: \n" + cliente3.descricaoCliente)
console.log("---------------")
console.log("---------------")
console.log("Telefone: \n" + telefoneCelular3.descricaoTelefoneCelular)
console.log("---------------")
console.log("Endereço: \n" + endereco3.descricaoEndereco)

console.log("---------------")


console.log("\nOrdenação de clientes por nome.")

// Objetivo 2

let listaClientes = [cliente1, cliente2, cliente3]

console.log("-- Array de Nomes Ordenados--");

function OrdenaApenasNomes(listaClientes) {
   return listaClientes.toSorted((a, b) => a.nome.localeCompare(b.nome)).map(cliente => cliente.nome);                   
}

console.log(OrdenaApenasNomes(listaClientes));

console.log("=)")
