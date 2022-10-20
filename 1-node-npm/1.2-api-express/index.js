var colors = require('colors');
console.log('El Servidor Esta En linea'.rainbow);


const express = require('express')
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Mi segunda Respuesta Desde El Servidor!')
})
app.use(express.json());
app.post("/create", (req, res)=>{
    const body = req.body;
    console.log('recibi:', body)
    res.status(201).send();
})

app.listen(port, () => {
  console.log(`Servidor Escuchando En El Puerto ${port}`)
})