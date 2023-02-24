# Docker Kuber

- Repositório criado para criar uma aplicação que vai ser dockerizada e controlada à partir kubernetes.

# Comandos dockerfile

- O arquivo `Dockerfile` é responsável por criar a nossa imagem que vai ser subida em um container. Dentro dele precisamos especificar alguns comandos e cada um desses comandos é uma camada dentro da nossa imagem, ou certo, se alterarmos qualquer linha, as outras não serão afetadas. Segue um exemplo desses comandos.

## from

- Imagem que ele vai utilizar como base para criar a nossa imagem! Para achar a resposta para qual imagem vamos utilizar como base, precisamos entender o projeto. Nesse exemplo, vou rodar um servidor nodejs simples dentro do container, sem banco de dados ou qualquer outra questão. Tudo o que eu instalei como dependência depende exclusivamente do node. Dito isso, a imagem que eu vou utilizar como base é a seguinte:

```
from node
```

- Isso vai fazer com que a imagem da última versão lts do node seja baixada.

## workdir

- Diretório da aplicação. Onde vai salvar os arquivos da aplicação que estão sendo copiados pelo `COPY`

## copy

- Quais arquivos locais precisam ser copiados para dentro do `WORKDIR`

```
COPY package*.json .

RUN npm install

COPY . .
```

- No exemplo acima, pegamos todos os arquivos que tem package.json, e o últimos pontos especifica todos os outros arquivos.

## expose

- Portas onde nossas aplicação vai rodar!

```
EXPOSE 3000
```

## run

- O comando `RUN` define o comando que será executado quando o container subir. No nosso exemplo, estamos copiando tudo o que está dentro da pasta local + o package.json. Dito isso, quando clonamos um repositório, qual o primeiro comando que rodamos? Exato! `npm install`. No container é a mesma coisa, precisamos rodar o `npm install` para instalar todas as nossas dependências do projeto.

```
RUN npm install
```

## cmd

- CMD é uma outra forma de rodar comandos no terminal, dessa vez após o inicio. Vale ressaltar que o comando espera uma lista.

```
CMD ["npm","start"]
```

# Executando uma imagem.

1 - Para rodarmos a nossa imagem e criar um container através dela, primeiro devemos _buildar_ a nossa imagem: `docker build <diretorio da imagem>`.<br>
2 - Depois, as próximas vezes, só usamos o comando `docker run <imagem>` para executá-la
