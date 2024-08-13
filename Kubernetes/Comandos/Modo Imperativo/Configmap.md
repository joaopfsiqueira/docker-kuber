
## Criando configmap

- Comando para criar um configmap: `kubectl create configmap [configmap_name] [attribute] [source]`

Depending on the source, the attribute will be:

- **`--from file`** (if the source is a file/directory)
- **`--from-literal`** (if the source is a key-value pair)

### Possíveis cenários

#### Option 1: Criando configmap por yml.

Use um arquivo .yaml que contenha a configuração desejada no formato de pares chave-valor para criar um ConfigMap:

```Powershell
kubectl create configmap [configmap_name] --from-file [path/to/yaml/file]
```

Por exemplo, para criar um ConfigMap com o nome **example-configmap** a partir do arquivo **example-configmap.yaml** , execute:

```Powershell
kubectl create example-configmap --from-file /api/v1/namespace/default/configmaps/example-configmap.yaml
```


#### Option 2: Criar configmap por arquivos

O Kubernetes permite criar um ConfigMap a partir de um ou vários arquivos em qualquer formato de texto simples (desde que os arquivos contenham pares chave-valor).

Para criar um ConfigMap a partir de um arquivo, use o comando:

```Powershell
kubectl create configmap [configmap_name] --from-file [path/to/file]
```

Para criar um ConfigMap a partir de vários arquivos, execute:

```Powershell
kubectl create configmap [configmap_name] --from-file [path/to/file1] --from-file [path/to/file2] --from-file [path/to/file3]
```


#### Option 3: Criar configmap de diretórios

Você também pode criar ConfigMaps a partir de diretórios, ou seja, de todos os arquivos dentro do diretório. Para isso, use o comando:
```Powershell
kubectl create configmap [configmap_name] --from-file [path/to/directory]
```

Kubectl empacota cada arquivo do diretório no novo ConfigMap. Somente arquivos com nomes de base que são chaves válidas são incluídos. Subdiretórios e arquivos não regulares não estão incluídos no ConfigMap.


#### Opção 4: Criar configmap a partir de valores literais

Você também pode criar ConfigMaps a partir de valores literais, usando a opção --from-literal.

Para fazer isso, siga a sintaxe básica:

```Powershell
kubectl create configmap [configmap_name] --from-literal [key1]=[value1] --from-literal [key2]=[value]2
```




#### Opção 5: Rodar um já existente por yml 

Caso você está dentro do diretório de um .yml que seja um config map, basta rodar:

```Powershell
kubectl apply -f nomedoarquuivo.yml
```

*Atente-se que, ele vai criar o config map e vai atribuir ao namespace que se encontra atualmente*
### Ver pares chave-valor no ConfigMap

Para ver os detalhes de um Kubernetes ConfigMap e os valores das chaves, use o comando:

```Powershell
kubectl get configmaps [configmap_name] -o yaml
```

A saída deve exibir informações no formato yaml:

```Powershell
apiVersion: v1
data:
  key1: value1
  key2: value2
  ...
kind: ConfigMap
metadata:
  creationTimeStamp: ...
  name: example-configmap
  namespace: default
  resourceVersion: ...
  selfLink: /api/v1/namespace/default/configmaps/example-configmap
  uid: ...
  
```


## Listando / descrevendo os configmap


### Retornando todos

```
kubectl get cm

```

### Retornando específico

```
kubectl get cm nomedocm
```

### Descrevendo

Caso queira ver todas as informações do config map, informações dentro etc, basta:

```
kubectl describe cm nomedocm
```
## Configurando [[Kubernetes/Workloads/Pods|Pods]] para usar o configmap

Existem duas maneiras de configurar um pod para usar um ConfigMap específico:

1. Montando o ConfigMap como um volume
2. Usando variáveis de ambiente


### Montando o ConfigMap como um Volume

Depois de baixar ou criar um ConfigMap, você pode montar a configuração no pod usando volumes.

Adicione uma seção de volume ao arquivo yaml do seu pod:

```
volumes:
  - name: config
  configMap
    name: [configmap_name]
    items:
    - key: [key/file_name]
    path: [inside_the_pod]
```

![[Pasted image 20230821203839.png]]

Depois de adicionar o conteúdo necessário, use o comando kubectl create para criar o pod com o ConfigMap como o volume.


### Usar ConfigMap com EnvFrom

ConfigMaps permite introduzir vários valores por meio de variáveis de ambiente.

Adicione a seção env ao arquivo yaml do pod para obter as variáveis de ambiente especificadas de um ConfigMap:

```
env:
        - name: SPECIAL_LEVEL_KEY
          valueFrom:
            configMapKeyRef:
              name: [configmap_name]
              key: [key/file_name]
```

Para extrair todas as variáveis de ambiente de um ConfigMap, adicione a seção envFrom ao arquivo yaml:

```
envFrom:
  - configMapKeyRef
      name: env-config
```

![[Pasted image 20230821204133.png]]
Em seguida, use o comando `kubectl create` para criar o pod com as definições de configuração especificadas