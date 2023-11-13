const express = require('express')
const app = express()
const PORT = 8000;


const rappers = {
    'Nicki Minaj':{
        'age': 40,
        'birthName': 'Onika Tayna Maraj',
        'birthLocation': 'Port of Spain, Trinidad and Tobago'
    },

    '21 Savage':{
        'age': 29,
        'birthName': 'Shéyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },

    "Drake":{
        'age': 37,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Canada'
    },

    "Doja Cat":{
        'age': 28,
        'birthName': 'Amala Ratna Zandile Dlamini',
        'birthLocation': 'Los Angeles, California'
    }
    


}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const rapperName = request.params.name
    if(rappers[rapperName]){
        response.json(rappers[rapperName])
    }else{
        response.json(rappers['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    
    console.log(`The server is now running on port ${PORT}!`)
})