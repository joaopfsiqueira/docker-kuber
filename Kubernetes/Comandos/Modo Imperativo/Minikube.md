
## Minikube

- Comando para listar todos os comandos(rs): `minikube --help`
- Comando para listar o ip do minikube: `minikube ip`
- Comando para conectar no shell do minikube: `minikube ssh`
	- Acessandom, podemos dar um ls, tem o docker instalando tbm e podemos ver todos os containers com docker container ls, com isso podemos ver o container de controller, scheduler, etc...
- Comando para deletar: `minikube delete`
- Comando para parar a execução: `minikube stop`
- Comanda para iniciar: `minikube start --driver=docker`
- Dashboard para ver tudo sobre o minikube! Pods, tudo. : `minikube dashboard`
- Dashboard por url: `minikube dashboard --url`
- Acessar nosso serviço: `minukube service <NOMESERVIÇO>`