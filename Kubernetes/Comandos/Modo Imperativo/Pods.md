


`kubectl get pods` -> retorna todos os pods
`kubectl get pods | grep algumapartedopod` -> especifico 
`kubectl port-forward pod/nomedopod 5000:5000` -> rodar o pod em uma porta para testar local
`kubectl describe pods`-> detalhar todos os pods
`kubectl get pods -n nomenamespace` -> olhar para algum namespace diferente
`kubectl apply -f redis-pod.yaml --namespace=backend`: Aplicando um yaml em um determinado namespace.