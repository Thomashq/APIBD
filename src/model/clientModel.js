const Conta = require("./contaModel.js");

class Cliente extends Conta{  
    constructor(codcliente, cnome, cpf, rua, cidade, cep, bairro, estado, telefone, email, senha, numconta){
        super();
        this.codcliente = codcliente;
        this.cnome = cnome;
        this.cpf = cpf;
        this.rua = rua;
        this.cidade = cidade;
        this.cep = cep;
        this.bairro = bairro;
        this.estado = estado;
        this.telefone = telefone;
        this.email = email;
        this.senha = senha;
        this.numconta = numconta;
    }   
}

module.exports = Cliente;