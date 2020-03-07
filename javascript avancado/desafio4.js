async function job(result, database, errorManager) {
    try{
    const id = await result;
    const a = await database.get(id);

    return a.name;
    }
    catch(error) {
        errorManager.notify(error);
        throw error;
    };

    

}

module.exports = job;