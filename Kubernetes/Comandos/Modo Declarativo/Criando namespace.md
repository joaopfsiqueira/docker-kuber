```yaml
apiVersion: v1

kind: Namespace

  

metadata:

name: backend

labels:

name: backend
```


`kubectl apply -f redis-pod.yaml --namespace=backend`: Aplicando um yaml em um determinado namespace.


Lembrando que também podemos especificar qual namespace queremos subir um POD dentro do YAML do POD.
