
Dentro do yml, vai ter uma seção de **data**, nela podemos colocar todos os conteúdos(fields) que for, chave valor ou até mesmo um arquivo.

Para se criar datas através de um arquivo sh, ficaria assim:

```Powershell
data:
	script.sh: |
```

Basicamente data e o nome do arquivo.

Claro, isso não é só o suficiente, precisamos pegar o conteúdo usando fieldType, etc, mas não é sobre isso essa parte da doc. Enfim!

Caso queira alterar, edit um config map e copie todo o conteúdo do vscode.


No meu exemplo, eu queria adicionar um **connect-timeout** e um **max-time** em um curl, onde o connect é fixo e o max-time pode ser um argumento na linha de comando.

Para fazer esse ajuste, eu fiz da seguinte forma:


## Step 1 - Setando valores padrão.

Logo após o *script.sh*, declare após o *#!/bin/sh* as variáveis de ambiente com seus valores padrão.

```Powershell
CONNECTION_TIMEOUT=${CONNECTION_TIMEOUT:-10}
MAX_TIME=${MAX_TIME:-3300}
```

## Step 2 - Pegando argumento da linha de comando

Essa linha de comando é passada na hora de criar o pod (tbm não é o foco da documentação, qualquer dúvida falar com o DAVID)

Dentro do while, vamos criar o parsing do argumento apenas para o **max-time**.

```Sh
while [ $# -gt 0 ]; do
	case "$1" in
		--URL_TASK=*)
		URL_TASK="${1#*=}"
		;;

		--HASH_MONITORING=*)
		HASH_MONITORING="${1#*=}"
		;;

		--CRONJOB_NAME=*)
		CRONJOB_NAME="${1#*=}"
		;;

		--TASK_NAME=*)
		TASK_NAME="${1#*=}"
		;;
		
		--ENVIRONMENT=*)
		ENVIRONMENT="${1#*=}"
		;;
		
		--INTERVAL=*)
		INTERVAL="${1#*=}"
		;;
		
		--MAX_TIME=*)
		MAX_TIME="${1#*=}"
		;;
	*)

# Ignore qualquer argumento desconhecido

;;

	esac
	shift

done
```

Beleza! Feito isso, precisamos colocar ambas variáveis nos curl do projeto!

## Step 3 - Alterando curl com as variáveis

Temos alguns curl no projeto, vamos inserir as duas variáveis da seguinte maneira:

```sh
curl --connect-timeout $CONNECTION_TIMEOUT --max-time $MAX_TIME
```

Seja lá o que tiver após o curl atualmente, vamos por as duas variáveis logo após.

```sh
response=$(curl --connect-timeout $CONNECTION_TIMEOUT --max-time $MAX_TIME -sSf $URL_TASK)
```
## Step 4 - Teste

Rodando o comando `sh script.sh` a gente roda o script, mas precisamos testar melhor o código usando echo e exit!

Vamos dar um echo depois de declarar os valores padrão das varáveis para saber se setamos certo!

```sh
echo $MAX_TIME
echo $CONNECTION_TIMEOUT
```

E vamos por o mesmo echo do max_time após o Step 2, para ver se ele vai pegar o valor correto da linha de comando.

Podemos por um `echo ok` após o response tbm, só para teste!

Feito isso, vamos rodar o seguinte script:

```powershell
sh script.sh --MAX_TIME=50 --URL_TASK=https://6e7331aa5aa30d9adbf28247c55e87e0.m.pipedream.net
```

Esse comando vai setar na url_task o parâmetro pego da linha de comando e vai manter um max time de até 50 segundos, como ele não vai demorar mais que isso, vai dar tudo certo!

Já o connection-timeout, como não espera receber de parâmetro, não precisamos passar nada, ele vai tentar executar a conexão em até 10 segundos e também vai conseguir!

É provável que dê algum problema no **connection-timeout** quando ele cair no if "response" = "ok", já que no teste estamos utilizando uma url que não existe no nosso **cron-monitoring **ou no **graylog**.

