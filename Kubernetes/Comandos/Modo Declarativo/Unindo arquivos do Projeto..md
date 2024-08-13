
1. Vamos precisar unir o deployment e o service em um unico arquivo.
2. A separação de objetos para o yaml é com: ---
3. Desta forma, cada um deles será executado separadamente, mas no mesmo arquivo.
4. Uma boa prática é colocar o **service antes do deployment**
5. Para rodar é o mesmo comando! `kubectl apply -f <ARQUIVO>`




```yaml
---
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
---
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