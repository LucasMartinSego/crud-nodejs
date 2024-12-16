const conexion = require('../database/db');

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('INSERT INTO ussers SET ?', { usser: user, roll: rol }, (error, results) => {
        if (error) throw error
        else res.redirect('/');
    })
}

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;

    conexion.query('UPDATE ussers SET ? WHERE id = ?', [{ usser: user, roll: rol, id: id }, id], (error, results) => {
        if (error) throw error
        else res.redirect('/');
    })
}