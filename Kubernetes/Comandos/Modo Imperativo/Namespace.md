
## Kubectl
- Comando para listar todos os namespaces : `kubectl get namespaces` ou `kubectl get ns`
- Comando para criar namespace: `kubectl create namespace nomedonegócio`
- Comando para deletar: `kubectl delete namespace nome`
- Comando para setar um namespace padrão: `kubectl config set-context --current --namespace=nomedonamespace`
- `kubectl apply -f redis-pod.yaml --namespace=backend`: Aplicando um yaml em um determinado namespace.