# Operacões Bancárias
Desafio 1-4: Aplicação: Operações bancárias

## Desafios para fortalecer alguns conceitos, entre eles:

* Booleanos;
* Organização;
* Padronização;
* Escrita.

## Intro:
Crie um programa para realizar operações bancárias na conta de um usuário.

Comece criando um objeto com o nome do usuário, suas transações e saldo.

As transações (transactions) devem iniciar como um array vazio `[]` e o saldo (balance) em `0` (zero).

``
const user = {
  name: "usuario",
  transactions: [],
  balance: 0
};
``
## Adicionar Transações:
Crie uma função `createTransaction` para adicionar uma nova transação no array de transações de um usuário, essa função deve receber como parâmetro um objeto de transação

O `type` pode ser `credit` para créditos e `debit` para débitos da conta do usuário.

Quanto uma transação for do tipo `credit` ela deve também somar o valor do crédito no saldo (balance) do usuário.

Se for uma transação do tipo `debit` ela deve subtrair o valor do débito no saldo (balance) do usuário.

Dica.: Você pode usar o método `user.transactions.push(transaction)` para adicionar um novo item no array de transações.

## Relatórios: 
* Crie uma função chamada `getHigherTransactionByType` que recebe como parâmetro o tipo de transação `credit/debit`, __percorre__ as transações do usuário e __retorna o objeto da transação__ de maior valor com aquele tipo
* Crie uma função chamada `getAverageTransactionValue` que retorna o valor médio das transações de um usuário independente do seu tipo
* Crie uma função chamada `getTransactionsCount` que retorna o número de transações de cada tipo `credit/debit`, o retorno da função deve ser um objeto
