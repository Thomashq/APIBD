const db = require ('../../db.js');
const ex = 'não deu certo';

async function getClientes(){
    try{
        await db.connect();
        const Cliente = await db.query('SELECT codcliente, cnome, cpf, rua, cidade, cep, bairro, estado, telefone, email, numconta FROM cliente');
        return Cliente.rows;
    }
    catch(ex){
        console.log(ex);
    }
    finally{
        db.end;
    }
}

module.exports = getClientes;