Repositório utilizado: https://github.com/joaopfsiqueira/pingpong-api


## 1 - Subindo imagem no docker hub
Tendo em vista que o kubernetes vai baixar a imagem de algum lugar, primeiro precisamos subir a imagem da nossa aplicação para o docker hub.


1. Monte sua app
2. Crie o dockerfile dela
3. Builde colocando seu usuário do dockerhub na frente: `docker build -t joaopfsiqueira/pingpong-kubernetes-api .`
4. Rode ela local: `docker run -d -p 1111:1111 --name pingpong-api joaopfsiqueira/pingpong-kubernetes-api`
5. Faça o push no docker hub: `docker push joaopfsiqueira/pingpong-kubernetes-api`

## 2 - Deployment

Será responsável por instruir o nosso projeto.

Obs: Ter antes rodando o [[Kubernetes/Explicando Kubernetes/Minikube|Minikube]]

1. Criar deployment na raiz do projeto: `kubectl create deployment pp-deployment --image=joaopfsiqueira/pingpong-kubernetes-api`
2. Comandos para checar se ta tudo certo com o deployment  [[Kubernetes/Comandos/Modo Imperativo/Deployments|Deployments]]
3. Comandos para checar se está tudo certo com o pod criado ao executar o deployment [[Kubernetes/Comandos/Modo Imperativo/Pods|Pods]]
4. Basta olhar tbm no comando do dashboard do [[Kubernetes/Comandos/Modo Imperativo/Minikube|Minikube]]


## 3 - Services

Responsável por colocar os **Pods** em conexão com o mundo externo. Então service é uma entidade separada dos **pods**, que expõe eles à uma rede.

- Para criar um serviço e expor nossos **pods**, devemos: `kubectl expose deployment <NOMEDODEPLOYMENTQJAEXISTE> --type=<TIPO> --port=<PORT>`

Vale ressaltar que, o tipo do service é relativo, o **LoadBalancer** é o mais comum.

_**Tipos**_:  "ClusterIP", "ExternalName", "LoadBalancer", "NodePort"


## 4 - Gerando ip de Acesso

Podemos acessar o nosso serviço com o comando: `minikube service <NOME>`
Fazendo aparecer o ip no terminal!


## 5 - Atualização de imagem

1. Para atualizar a imagem utilizada para buildar e rodar o pod, vamos precisar do nome do **container**, essa informação a gente consegue dentro do _dashboard_.
2. A nova imagem deve ser uma outra versão da atual, então precisaremos *subir uma nova tag no hub*
3. Depois utilizamos o comando: `kubectl set image 