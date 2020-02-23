//Declaração do objeto
const user = {
    name: 'Lanza',
    transactions: [],
    balance: 0
}

//Function para criar transição e inserir valor no objeto
function createTransaction(transaction) {
    user.transactions.push(transaction)

    //verifica se transação é crédito ou débito e soma/subtrai de acordo com o tipo
    if (transaction.type === 'credit') {
        user.balance = user.balance + transaction.value
    } else {
        user.balance = user.balance - transaction.value
    }
}

//Function para pegar o maior valor por tipo de transação
function getHigherTransactionByType(type) {
    let higherValue = 0
    let higherTransaction

    //loop for para percorrer array e condicional para armazenar maior transação
    for (let transaction of user.transactions) {
        if (transaction.type == type && transaction.value > higherValue) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

//Function para pegar média das transações
function getAverageTransactionValue() {
    let sum = 0

    for (let transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

//Function para armazenar quantas transações de cada tipo foram efetuadas
function getTransactionsCount() {
    let count = {
        credit: 0,
        debit: 0
    }
    
    for (let transaction of user.transactions) {
        if (transaction.type === 'credit') {
            count.credit++
        } else {
            count.debit++
        }
    }

    return count
}

createTransaction({ type: 'credit', value: 250 })
createTransaction({ type: 'credit', value: 350 })
createTransaction({ type: 'credit', value: 75 })
createTransaction({ type: 'debit', value: 125 })
createTransaction({ type: 'debit', value: 225 })
createTransaction({ type: 'debit', value: 100 })

console.log(user.balance.toFixed(2)) 

console.log(getHigherTransactionByType('credit')) 
console.log(getHigherTransactionByType('debit'))

console.log(getAverageTransactionValue().toFixed(2)) 

console.log(getTransactionsCount()) 
