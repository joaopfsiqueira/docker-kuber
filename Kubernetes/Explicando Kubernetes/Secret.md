O kubernetes basicamente insere nas variáveis dentro do process do container as variáveis que estão no secret. 

e ai se a app tem um process.env.nomeVariavel e a secret é o mesmo nome, ele pega!

