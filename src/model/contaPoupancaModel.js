const Conta = require("./contaModel.js");

class contaPoupancaModel extends Conta{
    constructor(rendimento){
        this.rendimento = rendimento;
    }
}
module.exports = contaPoupancaModel;