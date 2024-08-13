
Quando alteramos uma secret na aws de uma app, costuma demorar 10 minutos para atualizar sozinho.

Se quiser forçar o update, é só rodar: kubectl annotate externalsecrets.external-secrets.io `pointer-email-api`force-sync=$(date +%s) --overwrite -n email

Onde `pointer-email-api` deve ser trocado pelo nome da App.