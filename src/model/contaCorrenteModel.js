const Conta = require("./contaModel.js");

class contaCorrente extends Conta{
    constructor(taxa){
        this.rendimento = taxa;
    }
}
module.exports = contaCorrente;