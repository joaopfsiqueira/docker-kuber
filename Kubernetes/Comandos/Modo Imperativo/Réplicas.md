
- Para utilizar outros pods com a mesma aplicação, utilizamos o seguinte comando: `kubectl scale deployment/<NOMEDEPLOYMENT> --replicas=<NUMERODEREPLICAS>`
- Se olharmos no dashboard, veremos o aumento de pods! : `minikube dashboard --url`
- Ou então: `kubectl get pods`
- Verificar números de réplicas: `kubectl get rs`
- Reduzir o número de pods, técnica chamada **scale down**: `kubectl scale deployment/<NOMEDEPLOYMENT> --replicas=<NUMERODEREPLICASMENOR>`