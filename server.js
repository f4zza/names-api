const express = require('express')
const app = express()
const PORT = 8000

const names = {
    'ali':{
        'age': 30,
        'birthname': 'Ali',
        'location': 'Mumbai'
        },
    'layla':{
        'age': 28,
        'birthname': 'Layla',
        'location': 'Mumbai'
        },
    'aline':{
        'age': 26,
        'birthname': 'Aline',
        'location': 'Mumbai'
        },
    'umm':{
            'age': 3000003,
            'birthname': 'Not You',
            'location': 'Not Here'
            }    
}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:whosName', (req, res)=> {
    const nameInput = req.params.whosName.toLowerCase()
    if(names[nameInput]){
        res.json(names[nameInput])
    }else{
        res.json(names['umm'])
    }
})

app.listen(PORT, ()=>{
    console.log(`Listening on ${PORT}`)
})