// Mock Data
balance = 5000;
transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    // This function returns the current balance in the account.
    return balance;
}

function deposit(amount) {
    // This function adds the specified amount to the balance 
    // and records the transaction in the transaction history.
    balance += amount;
    transactionHistory.push(`Deposited ${amount} into Savings Account`);
}

function withdraw(amount) {
    // This function subtracts the specified amount from the balance 
    // if there are sufficient funds, and records the transaction in the transaction history.
    if (amount <= balance) {
        balance -= amount;
        transactionHistory.push(`Withdrawn ${amount} from Savings Account`);
    } else {
        console.log("Insufficient funds for withdrawal.");
    }
}

function getTransactionHistory() {
    // This function returns a formatted string of the transaction history.
    let history = "Transaction History\n";
    transactionHistory.forEach((transaction, index) => {
        history += `${index + 1}) ${transaction}\n`;
    });
    return history.trim();
}

// Instructor's test cases
console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/
