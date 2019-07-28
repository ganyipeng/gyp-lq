var data = [];

export default {
  'GET /mock/jokes': (req, res) => {
    res.send(data);
  },
  'POST /mock/jokes': (req, res) => {
    // console.log("mock:"+Object.getOwnPropertyNames(req))
    const id = 'joke-' + Math.random();
    const newData = {
      ...req.body,
      id,
    };
    data.push(newData);
    res.send(data);
  },
  'DELETE /mock/jokes': (req, res) => {
    const { id } = req.query;
    console.log(`delete id ${id}`);
    data = data.filter(joke => joke.id != id);
    res.send(data);
  },
  'GET /mock/getJoke': (req, res) => {
    const { id } = req.query;
    var joke = data.filter(joke => joke.id == id);
    res.send(joke[0]);
  },
};
