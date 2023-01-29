const express=require("express")
const app=express()
app.get('/sumar', (req, res) => {
    const numb1=parseInt(req.query.numb1);
    const numb2=parseInt(req.query.numb2);
    const result=numb1+numb2;
    res.status(200).send(`El resultado es ${result}`);
  });
  
  app.listen(3000, () => {
    console.log('El servidor esta ejecutandose en el puerto 3000');
  });