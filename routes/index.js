var express = require('express');
const Link = require('../models/link');
var router = express();

router.use(express.json());

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Encurtador de URL' });
});

function generateCode() {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  return text;
}

router.get('/url/code/:code', async (req, res, next) => {
  const code = req.params.code;
 
  const resultado = await Link.findOne({ where: { code: code } });
  if (!resultado) return res.sendStatus(404);

  return res.status(400).json({url: resultado.url});
});

router.get('/url/data/:data', async (req, res, next) => {
  const data = req.params.data;
 
  const resultado = await Link.findAll({ where: { data: data } });
  if (!resultado) return res.sendStatus(404);

  //mapear apenas os atributos necessários em um novo array
  resultado_normalizado = resultado.map( (url) => {
    return {"url" : url.url}
  })

  return res.status(400).json(resultado_normalizado);
});

router.get('/url/id/:id', async (req, res, next) => {
  const id = req.params.id;
 
  const resultado = await Link.findOne({ where: { id } });
  if (!resultado) return res.sendStatus(404);

  return res.status(400).json({url: resultado.url});
});

router.post('/create', async (req, res, next) => {
  const {url} = req.body;
  const code = generateCode();
  const data = new Date();
 
  const resultado = await Link.create({
    url,
    code,
    data
  });

  return res.status(400).json({id: resultado.id, code: code});
});

router.get('/:code', async (req, res, next) => {
  const code = req.params.code;
 
  const resultado = await Link.findOne({ where: { code } });
  if (!resultado) return res.sendStatus(404);
 
  resultado.hits++;
  await resultado.save();
 
  res.redirect(resultado.url);
});

module.exports = router;
