const express = require ('express');
const path = require ('path');
const fs = require ('fs');
const app = express();
const port = 3000;


app.get('/' , (req, res) =>{
    res.send('Hey Asna There!!');
})


app.get('/image', (req, res) => {
    let imagePath = path.join(__dirname, 'img1.jpg')
    res.sendFile(imagePath)
})


app.get('/getName', (req, res) => {
    imageName = req.query.imagename;
    res.send(imageName);
}) 


app.get('/dyImg' , (req, res) => {
    img = req.query.imgname
    let imagePull = path.join(__dirname, img);
    res.sendFile (imagePull)

    fs.readFile(img, (err)=>{
        res.status(640).end("Sorry! Image not found.")
    })
})  



app.listen(port , () =>{
    console.log(`Server is listening on http://localhost:${port}`)
})