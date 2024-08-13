o comando ``kubectl annotate externalsecrets.external-secrets.io pointer-email-core-report force-sync=$(date +%s) --overwrite -n email
basicamente força o sync das secrets da aws no kuber, ao invés de esperar um tempo.

basta alterar o container que vai ser alterado.


(SE PRECISAR DE AJUDA CHAMA O DAVID)