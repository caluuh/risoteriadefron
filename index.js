const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const Pedido = require("./database/Pedido");

//Database

connection
.authenticate()
.then(() => { 
    console.log("Conexão feita com o banco de dados!")
})
.catch((msgErro) => { 
    console.log(msgErro);
}) // estrtura promisse.

// Estou dizendo para o Expressa usar o EJS como View engine.
app.set('view engine', 'ejs'); // Dizer para o express usar o EJS como View Engine.
app.use(express.static('public')); // para utilizar arquivos estaticos
// Body Parser
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 

// rotas

app.get("/",(req,res) => { 
        res.render("index");
});
app.get("/cardapio", (req,res) => { 
    res.render("cardapio");
});

app.get("/pedidos", (req,res) => { 
    res.render("pedidos");
});

app.post("/fazerpedido", (req,res) => { 
    var nome = req.body.nome;
    var risoto1 = req.body.risoto1;
    var risoto2 = req.body.risoto2;
    var risoto3 = req.body.risoto3;
    var risoto4 = req.body.risoto4;
    var risoto5 = req.body.risoto5;
    var risoto6 = req.body.risoto6;
    var vinho = req.body.vinho;
    var endereco = req.body.endereco;
    var telefone = req.body.telefone;
    var quantidade1 = req.body.quantidade1;
    var quantidade2 = req.body.quantidade2;
    var quantidade3 = req.body.quantidade3;
    var quantidade4 = req.body.quantidade4;
    var quantidade5 = req.body.quantidade5;
    var quantidade6 = req.body.quantidade6;
        Pedido.create({
            nome: nome,
            risoto1: risoto1,
            risoto2: risoto2,
            risoto3: risoto3,
            risoto4: risoto4,
            risoto5: risoto5,
            risoto6: risoto6,
            vinho: vinho,
            endereco: endereco,
            telefone: telefone,
            quantidade1: quantidade1,
            quantidade2: quantidade2,
            quantidade3: quantidade3,
            quantidade4: quantidade4,
            quantidade5: quantidade5,
            quantidade6: quantidade6,
         
        }).then(() => { 
            res.redirect("/obrigado");
        });

});

app.get("/obrigado",(req,res) => { 
    res.render("obrigado");
})

app.get("/controle", (req,res) => { 
        Pedido.findAll({raw: true, order:[ 
        ["id","ASC"] // ASC = Crescente e DESC  Decrescente.
        ]}).then(pedidos => {
                
                res.render("controledepedidos",{ 
                pedidos: pedidos,
            });
        });
    });

app.listen(80, ()=> { 
    
    console.log("App rodando");

});
