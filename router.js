const express = require('express');
const router = express.Router();

const conexion = require('./database/db');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM ussers', (error, results) => {
        if (error) { throw error }
        else {
            res.render('index', { results: results });
            // res.send(results);
        }
    })
})

router.get('/data', (req, res) => {
    conexion.query('SELECT * FROM ussers', (error, results) => {
        if (error) { throw error }
        else {
            const data = JSON.stringify(results);
            res.send(data);
            // res.send(results);
        }
    })
})

router.get('/create', (req, res) => {
    res.render('create');
})

// RUTA PARA EDITAR LOS REGISTROS
router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM ussers WHERE id = ?', id, (error, results) => {
        if (error) { throw error }
        else {
            res.render('edit', { user: results[0] });
        }
    })
})

//RUTA PARA ELIMINAR LOS REGISTROS
router.get('/delete/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM ussers WHERE id = ?', id, (error, results) => {
        if (error) { throw error }
        else {
            res.redirect('/');
        }
    })
})
const crud = require('./controllers/crud');
router.post('/save', crud.save);
router.post('/update', crud.update);

module.exports = router;