const Cliente = require("./clientModel.js");

class Emprestimo extends Cliente{
    constructor(codemp, taxajuros, valoremp){
        this.codemp = codemp;
        this.taxajuros = taxajuros;
        this.valoremp = valoremp;
    }
}
module.exports = Emprestimo;