
**Control Plane** -> Máquina principal, master. É a máquina que vai gerenciar as outras máquinas. Geralmente onde iniciamos o projeto.
**Nodes** -> Máquinas que são gerenciadas pelo **control plane**.
**Deployment** -> A execução de uma imagem/projeto em um **pod**.
**Pod** -> Um ou mais containers que estão em um **Node**.
**Services** -> Serviços que expõe os **Pods** ao mundo externo.
**Kubectl** -> Client de linha de comando para o kubernetes. Todo comando bem com kubectl na frente.


## Dependências necessárias



Vamos precisar do client, kubectl, que é a maneira de executar o kubernetes.

Vamos precisar do [Minikube](https://www.linuxtechi.com/how-to-install-minikube-on-ubuntu/), uma espécie de simulador do kubernetes, para não precisarmos de vários computadores/servidores.