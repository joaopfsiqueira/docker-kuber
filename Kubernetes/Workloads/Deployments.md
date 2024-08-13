## Resumo
É um arquivo .yml posto dentro da nossa api, dentro de uma pasta chamada kubernetes. geralmente: `deployments.yml`.

Em Kubernetes, um Deployment é um tipo de recurso que gerencia a implantação e atualização de aplicações em um cluster. Ele fornece uma maneira declarativa de definir como os Pods (e, por extensão, as aplicações) devem ser implantados, dimensionados e atualizados ao longo do tempo. Os Deployments garantem que o estado desejado da aplicação seja mantido, permitindo uma implantação confiável e controlada.

Geralmente é utilizado uma imagem no docker hub. E podemos colocar um próprio nome na nossa imagem.

## Conceitos

Aqui estão os principais conceitos relacionados aos Deployments no Kubernetes:

1. **Declaratividade:** Ao criar um Deployment, você especifica o estado desejado da aplicação, incluindo o número de réplicas do Pod, as imagens dos contêineres, as políticas de atualização, entre outros detalhes. O Kubernetes se encarrega de convergir para esse estado desejado, ajustando automaticamente o número de Pods conforme necessário.
    
2. **Rolling Updates (Atualizações Graduais):** Um dos principais recursos dos Deployments é a capacidade de realizar atualizações de maneira controlada e gradual. Quando você atualiza a imagem de um contêiner ou faz outras alterações no Deployment, o Kubernetes implementa uma estratégia de rolling update. Isso envolve a criação gradual de novos Pods com a versão atualizada, enquanto os Pods antigos ainda estão em execução. Isso garante que a aplicação seja atualizada sem interrupções significativas.
    
3. **Rollback (Reversão):** Se uma atualização causar problemas, os Deployments permitem reverter para a versão anterior. O Kubernetes mantém um histórico das revisões de implantação, permitindo que você volte para uma versão anterior de forma rápida e fácil.
    
4. **Escalonamento:** Os Deployments facilitam o dimensionamento horizontal da aplicação. Você pode ajustar o número de réplicas (Pods) em execução simplesmente modificando a configuração do Deployment. Isso é útil para lidar com variações na carga de trabalho.
    
5. **Autocorreção:** Se um Pod falhar, o Kubernetes detectará e automaticamente criará um novo Pod para substituí-lo, garantindo que o número desejado de réplicas seja mantido.
    
6. **Histórico e Revisões:** O Kubernetes mantém um histórico de todas as revisões de um Deployment, permitindo que você rastreie as mudanças e veja quando e como as atualizações foram aplicadas.
    

Para criar um Deployment, você define um arquivo YAML que descreve as características do Deployment, como o nome, as réplicas desejadas, a estratégia de atualização, as imagens dos contêineres e assim por diante. Em seguida, você aplica esse arquivo ao cluster usando o comando `kubectl apply -f arquivo.yaml`.

Em resumo, os Deployments no Kubernetes fornecem uma maneira poderosa de gerenciar a implantação e atualização de aplicações de forma confiável, permitindo que você mantenha o controle sobre o estado desejado da sua infraestrutura de aplicativos.