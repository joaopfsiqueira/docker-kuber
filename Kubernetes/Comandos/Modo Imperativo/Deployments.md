
## Kubectl
- Comando para listar todos os deployments : `kubectl get deployment`
- Comando para listar todos os deployments de todos os namespaces existentes: `kubectl get deployment --al-namespaces`
- Comando para criar um deployment : `kubectl create deployment <NOME> --image=<IMAGEM>`
- Comando para descrever o deployments: `kubectl describe deployments`
- Deletar deployment: `kubectl delete deployment <NOME>`, desta maneira, o contêiner não estará mais rodando, teríamos que criar outro! E ai todos os pods vão embora juntos!