const sequelize = require("sequelize");
const connection = require("./database");

const Pedido = connection.define('pedidos', { 
    nome:{ 
        type: sequelize.STRING,
        allowNull: false
    },
    quantidade1: { 
        type: sequelize.TEXT,
        allowNull: false,
    },
    quantidade2: { 
        type: sequelize.TEXT,
        allowNull: true,
    },
    quantidade3: { 
        type: sequelize.TEXT,
        allowNull: true,
    },
    quantidade4: { 
        type: sequelize.TEXT,
        allowNull: true,
    },
    quantidade5: { 
        type: sequelize.TEXT,
        allowNull: true,
    },
    quantidade6: { 
        type: sequelize.TEXT,
        allowNull: true,
    },
    risoto1: {
        type: sequelize.TEXT,
        allowNull: false
    },
    risoto2: {
        type: sequelize.TEXT,
        allowNull: true
    },
    risoto3: {
        type: sequelize.TEXT,
        allowNull: true
    },
    risoto4: {
        type: sequelize.TEXT,
        allowNull: true
    },
    risoto5: {
        type: sequelize.TEXT,
        allowNull: true
    },
    risoto6: {
        type: sequelize.TEXT,
        allowNull: true
    },
    vinho: {
        type: sequelize.TEXT,
        allowNull: true
    
    },
    endereco: {
            type: sequelize.TEXT,
            allowNull: false
    },
    telefone: { 
        type: sequelize.TEXT,
        allowNull: false
    },

});

Pedido.sync({force: false}).then(() => { 
    console.log("Tabela criada!");
})

module.exports = Pedido;