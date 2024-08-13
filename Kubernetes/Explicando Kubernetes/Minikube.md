

São mais simples, mais fáceis de rodar. Podemos subir nossa aplicação diretamente no minikube para testar a aplicação no ambiente de dev. Nunca em ambiente produtivo.

[**Minikube**](https://minikube.sigs.k8s.io/docs/start/)  é a ferramenta mais famosa desta lista e executa um cluster Kubernetes de nó único em uma máquina virtual (VM) no hipervisor de nosso sistema local. Por padrão, o Minikube espera usar o VirtualBox, mas com algumas etapas extras ele também pode usar um hipervisor nativo, como KVM no Linux, Hyper-V no Windows ou HyperKit e Hypervisor.framework no macOS.

Pessoalmente, Minikube foi meu primeiro ambiente no qual configurei e configurei o Kubernetes de acordo com minhas próprias especificações.

# Installation and Configuration

O **Minikube**, assim como as demais ferramentas, possui uma página de documentação bem clara onde podemos ler facilmente como configurar o ambiente. Também são descritos casos extremos, como proxies ou conexões VPN.

Se seguirmos as [instruções](https://minikube.sigs.k8s.io/docs/start/) de acordo com o sistema operacional pessoal, podemos facilmente iniciar o Minikube com o seguinte comando:

`minikube start`

Como as outras ferramentas, o kubeconfig será automaticamente anexado ao diretório do perfil. Se já tivermos o kubectl instalado, agora podemos usá-lo para acessar nosso cluster novinho em folha: `kubectl get nodes`or `kubectl get pods`.

Alternativamente, o minikube pode baixar a versão apropriada do kubectl e deveremos poder usá-lo assim: `minikube kubectl -- get pods -A`. 
