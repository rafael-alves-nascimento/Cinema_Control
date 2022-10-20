//Importar bibliotecas

//Importar os módulos
const Cinemadb = require('../Config/dbConfig');

class CinemaController {

    static async VerFilme(req, res) {
        Cinemadb.connect(function (err) {
            if (err) throw err;
            let id = req.body.id
            console.log(id)
            let select = `select s.Numero_sala,s.Capacidade,s.Horario,f.SINOPSE,f.DURACAO,f.FILME,i.INGRESSOSDISP,i.INGRESSOSVEND,s.FATURAMENTO,f.Cor from Salas s join Filmes f on  s.IDSALAS = f.ID_SALAS_FILMES join ingresso i on s.IDSALAS = i.ID_SALAS_INGRESSOS where s.IDSALAS = ${id};`
            Cinemadb.query(select, function (err, result) {
                if (err) throw err;
                console.log(result)
                res.send(result)
            })
        })
    }

    static async salas(req, res) {
        Cinemadb.connect(function (err) {
            if (err) throw err;

            let select = "select IDSALAS,NUMERO_SALA,HORARIO from Salas;"
            Cinemadb.query(select, function (err, result) {
                if (err) throw err;
                res.send(result)
            })
        })
    }

    static async faturamento(req, res) {
        Cinemadb.connect(function (err) {
            if (err) throw err;
            const id = req.body.id
            let update = `UPDATE salas s INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS set i.INGRESSOSDISP = (i.ingressosdisp -1), i.INGRESSOSVEND  = (i.INGRESSOSVEND +1) where s.IDSALAS = ${id};`
            let update2 = `UPDATE salas s INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS set s.FATURAMENTO = (i.ingressosvend * i.valor) where s.IDSALAS = ${id};`
            let select = `select s.FATURAMENTO,i.INGRESSOSDISP,i.INGRESSOSVEND,f.Cor,s.Capacidade  from salas s INNER JOIN ingresso i ON s.IDSALAS = i.ID_SALAS_INGRESSOS INNER JOIN Filmes f on s.IDSALAS = f.ID_SALAS_FILMES where s.IDSALAS = ${id};`

            Cinemadb.query(update, function (err, result) {
                console.log(result)

                Cinemadb.query(update2, function (err, result) {
                    console.log(result)
                })

                Cinemadb.query(select, function (err, result) {
                    if (result[0].INGRESSOSVEND > 1 && result[0].INGRESSOSVEND <= 99) {
                        Cinemadb.query(`UPDATE filmes f inner join salas s on s.IDSALAS = f.ID_SALAS_FILMES set f.Cor = "#6495ED" where s.IDSALAS = ${id}; `,function(err,result){
                            console.log(result)
                        })
                    }
                    if (result[0].INGRESSOSVEND === result[0].Capacidade) {
                        Cinemadb.query(`UPDATE filmes f inner join salas s on s.IDSALAS = f.ID_SALAS_FILMES set f.Cor = "red" where s.IDSALAS = ${id}; `,function(err,result){
                            console.log(result)
                        })
                    }
                })
            })
        })
    }
}

module.exports = CinemaController;