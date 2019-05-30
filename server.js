const express = require('express');
const app = express()
const port = 3000
const morgan = require('morgan')
const routes = require('./routes/index')





app.use(morgan('dev'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


app.get('/', (req, res)=>{
    res.status(200).send('Test')
})

app.use('/mugiwara',routes.mugiwara)
app.use('/order', routes.order)




app.listen(port, (err) =>{
    if(err){
        throw new Error('Something bad happened...')
    }
    console.log('Server is listening on ' + port);
    
});