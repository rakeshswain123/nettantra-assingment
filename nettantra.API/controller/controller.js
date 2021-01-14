const { sql, poolPromise } = require('../database/db')
const fs = require('fs');
var rawdata = fs.readFileSync('./query/queries.json');
var queries = JSON.parse(rawdata);

class MainController {

    async getAllData(req, res) {
        try {
            const pool = await poolPromise
            const result = await pool.request()
                .query(queries.getAllData)
            res.json(result.recordset)
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    async addNewData(req, res) {
        try {
            if (req.body.firstname != null && req.body.email != null && req.body.password != null) {
                const pool = await poolPromise
                const result = await pool.request()
                    .input('firstname', sql.VarChar, req.body.firstname)
                    .input('lastname', sql.VarChar, req.body.lastname)
                    .input('email', sql.VarChar, req.body.email)
                    .input('password', sql.VarChar, req.body.password)
                    .input('address', sql.VarChar, req.body.address)
                    .input('city', sql.VarChar, req.body.city)
                    .input('state', sql.VarChar, req.body.state)
                    .input('zip', sql.VarChar, req.body.zip)
                    .query(queries.addNewUser)
                res.json(result)
            } else {
                res.send('Please fill all the details!')
            }
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }

    async authUser(req, res) {
        try {
            if (req.body.email != null && req.body.password != null) {
                const pool = await poolPromise
                const result = await pool.request()
                    .input('email', sql.VarChar, req.body.email)
                    .input('password', sql.VarChar, req.body.password)
                    .query(queries.authenticateUser)
                res.json(result)
            } else {
                res.send('Please fill all the details!')
            }
        } catch (error) {
            res.status(500)
            res.send(error.message)
        }
    }
    
}

const controller = new MainController()
module.exports = controller;