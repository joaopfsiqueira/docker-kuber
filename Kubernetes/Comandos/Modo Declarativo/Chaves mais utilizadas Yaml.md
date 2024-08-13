
- **apiVersion**: versão utilizada da ferramenta
- **kind**: tipo do arquivo (deployment, service)
- **metadata**: descrever algum objeto, inserindo chaves como name; Como por exemplo, quero inserir um nome para determinado deployment ou serviço, ou apontar o namespace!
- **spec**: Todo spec fica dentro de um ***metaData*** aqui vamos especificar coisas para a app. Como por exemplo quantidade de réplicas, um **selector** para nomearmos a própria spec usando label, ajudando aplicações multicontainer. Podemos alterar o nome do template tbm!
	- **replicas**: números de réplicas de Nodes/Pods
	- **selector**, nomeamos a própria spec com um label -> selector: matchLabels: app:. Ele também é responsável por selecionar um dos app para expor, quando for um service.
	- **template**: podemos alterar informações do template! usando metadata: labels: app:
		- Dentro de um template, colocamos um metadata para duas coisas, nomear o template e criar um outro _spec_, e dentro desse outro spec criamos os container.
- **containers**: definir as especificações de container como: nome e imagem.
	- *- name*: nome do container
	- *image*: imagem no docker hub junto da tag.



## Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
	name: pinpong-api ## nome do deployment
spec:
	replicas: 3
	selector: ## colocando nome no spec
		matchLabels:
			app: pinpong-api
	template:
		metadata:
			labels: ##colocando nome no template
				app: pinpong-api
		spec:
			containers: ## colocando informações no container + imagem
				- name: pinpong
				image: joaopfsiqueira/pingpong-kubernetes-api
```


## Service


```yaml
apiVersion: v1
kind: Service
metadata:
	name: pingpong-api-service
spec:
	selector: # aqui é onde criamos a conexão do service com o deployment, onde especificamos o nome da app criada no selector do deployment.
		app: pingpong-api

	ports:
		- protocol: 'TCP' # lista de informações da porta.
		port: 2222
		targetPort: 2222
	type: LoadBalancer
```