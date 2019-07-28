var data = []

export default {
    'GET /api/jokes': (req, res)=>{
        res.send(data);
    },
    'POST /api/jokes': (req, res)=>{
        // console.log("mock:"+Object.getOwnPropertyNames(req))
        const id = 'joke-'+Math.random()
        const newData = {
            ...req.body,
            id
        }
        data.push(newData)
        res.send(data)
    },
    'DELETE /api/jokes': (req, res)=>{
        const {id} = req.query;
        console.log(`delete id ${id}`)
        data = data.filter(joke=>joke.id!=id)
        res.send(data)
    },
    'GET /api/getJoke': (req, res)=>{
        const {id} = req.query;
        console.log(`delete id ${id}`)
        var joke = data.filter(joke=>joke.id==id)
        res.send(joke)
    }
}