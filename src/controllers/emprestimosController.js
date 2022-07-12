const db = require ('../../db.js');
const ex = 'não deu certo';
async function getEmprestimos(){
    try{
        await db.connect();
        const Emprestimo = await db.query('select * from emprestimo');
        return Emprestimo.rows;
    }
    catch(ex){
        console.log(ex);
    }
    finally{
        db.end;
    }
}
module.exports = getEmprestimos;