const sequelize = require('../config/connection');
const Pokemon = require('../models/Pokemon');

const pokemonData = require('./pokemon.json')



const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    

    for (const item of pokemonData){
        await Pokemon.create({
            ...item
        })
        
    }
    process.exit(0);

}
seedDatabase()