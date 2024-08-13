

## Papeis principais de um cluster (nodes)

Imagine 3 nós (nodes), então vou pegar um desses caras e instalar o cluster MASTER do kubernetes, e os outros 2 serão worker. 

Por default, não rodamos nada no master (embora podemos), e os outros 2 são os caras que vão executar as aplicações que estão em containers.

### Master

Na master vamos ter a **api**, tudo pelo cluster passa pela API, então se quisermos alterar alguma coisa no [[ETCD]] do cluster, usamos o KUBEAPI, e ele vai transmitir tudo para o ETCD. 


**Kubescheduler**, fica na master tbm! Pega as requisições que vem do kubeapi, não sei, criar um outro container, tanto faz. Ai ele vai e pensa "beleza eu preciso criar esse pod, vou ver qual o melhor nó para se fazer isso."

**Kubelet**, ele é como se fosse um agent, responsável por conversar com a api, com a master. Roda em todos os caras, inclusive no worker.

**Kubeproxy**, ele é tipo um porteiro, é o cara que fica de olho nas portas, expor o seu serviço talvez. Fica em todos, inclusive no worker.

