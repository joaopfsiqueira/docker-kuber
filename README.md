# Docker Kuber

- Repositório criado para criar uma aplicação que vai ser dockerizada e controlada à partir kubernetes.

# Comandos dockerfile

- O arquivo `Dockerfile` é responsável por criar a nossa imagem que vai ser subida em um container. Dentro dele precisamos especificar alguns comandos, segue um exemplo desses comandos:

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

## expose

- Portas onde nossas aplicação vai rodar!
