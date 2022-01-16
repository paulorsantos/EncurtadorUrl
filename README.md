PAULO ROGÉRIO DOS SANTOS
Pós-Graduação: Desenvolvimento Mobile UNILEYA
Disciplina: Desenvolvimento Back-end para Aplicações Mobile

1. Método de encurtar uma URL persistindo-a no banco de dados (POST)
Sintaxe: {URL}/create
Ex.: http://localhost:3000/create
Passar por parâmetro um JSON, conforme exemplo:
{ "url": "http://www.santos2.com.br" }
O retorno será um JSON, conforme exemplo:
{ "id": 5, "code": "dCAX4" }

2. Método que retorna uma url encurtada conforme um id (GET)
Sintaxe: {URL}/url/id/{ID}
Ex.: http://localhost:3000/url/id/4
O retorno será um JSON, conforme exemplo:
{ "url": "http://www.santos2022.com.br" }

3. Método que retorna todas as URLs encurtadas em uma data específica (GET)
Sintaxe: {URL}/url/data/{DATA} (formato da data: AAAA-MM-DD)
Ex.: http://localhost:3000/url/data/2022-01-16
O retorno será um JSON, conforme exemplo:
[ { "url": "http://www.santos4.com.br" }, { "url": "http://www.santos2022.com.br" }, { "url": "http://www.uol.com.br" } ]

4. Método que retorna uma url encurtada conforme o encurtamento da URL (GET)
Sintaxe: {URL}/url/code/{CODE} (CODE é a nova URL que foi gerada a partir da URL original)
Ex.: http://localhost:3000/url/code/uhaHo
O retorno será um JSON, conforme exemplo:
{ "url": "http://www.globo.com" }

5. Foi criado um método adicional para redirecionar para o link original dado a URL do encurtamento (GET)
Sintaxe: {URL}/{CODE} (CODE é a nova URL que foi gerada a partir da URL original)
Ex.: http://localhost:3000/uhaHo
Neste caso não há retorno, a aplicação apenas mostra a página da URL que foi encurtada.
