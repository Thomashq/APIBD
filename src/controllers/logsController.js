const db = require ('../../db.js');
const ex = 'não deu certo';
async function getLogs(){
    try{
        await db.connect();
        const log = await db.query('select * from logs');
        return log.rows;
    }
    catch(ex){
        console.log(ex);
    }
    finally{
        db.end;
    }
}
module.exports = getLogs;