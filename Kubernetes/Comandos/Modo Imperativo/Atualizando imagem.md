
Para atualizar imagem de um repositorio, vamos precisar do nome do container! Isso a gente consegue dentro do dashboard e dentro do pod.

Fora que precisamos de uma nova tag para subir no hub.

Depois, dentro da pasta do projeto, rodar o romando:

- `docker build -t joaopfsiqueira/pingpong-kubernetes-api:numerodanovatag .` o ponto no final é por estarmos na pasta do docker file.
- `docker push joaopfsiqueira/pingpong-kubernetes-api:2`, subindo ela.
- `kubectl set image deployment/<nomeDeployment>`