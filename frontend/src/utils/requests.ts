export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

/* 
O ?? (operador de coalescência nula) significa que:
se a variável de ambiente "process.env.REACT_APP_BACKEND_URL" não estiver definida 
no ambiente onde a aplicação estiver rodando, (por exemplo: na minha máquina local ela não esta definida)
dessa forma, vai pegar o valor que estiver a direita.
Isso serve para rodar tanto localmente pegando o backend do localhost, como no Netlify rodando na nuvem
pegando o valor da variável de ambiente que foi definida
 */