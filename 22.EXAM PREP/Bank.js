class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
        this.allTransactions = [];
    }
    newCustomer(customer) {

        let searchCustemer = this.allCustomers.find(x => x.firstName == customer.firstName && x.lastName == customer.lastName);
        if (searchCustemer) {
            throw new Error(`${searchCustemer.firstName} ${searchCustemer.lastName} is already our customer!`)
        } else {
            this.allCustomers.push(customer);
            return customer;
        }
    }
    depositMoney(personalId, amount) {
        let count = 0;
        let searchCustemerID = this.allCustomers.find(x => x.personalId == personalId);
        if (!searchCustemerID) {
            throw new Error(`We have no customer with this ID!`)
        } else {

            let transaction = {};
            if (!searchCustemerID.totalMoney) {
                searchCustemerID.totalMoney = 0;
                searchCustemerID.totalMoney += amount
            } else {
                searchCustemerID.totalMoney += amount
            }

            transaction.personalIdT = searchCustemerID.personalId;
            transaction.firstNameT = searchCustemerID.firstName;
            transaction.lastNameT = searchCustemerID.lastName;
            transaction.typeOperation = 'made depostit of'
            transaction.amountT = `${amount}$!`;
            this.allTransactions.push(transaction);
            return `${searchCustemerID.totalMoney}$`


        }
    }
    withdrawMoney(personalId, amount) {
        let count;
        let searchCustemerID = this.allCustomers.find(x => x.personalId == personalId);
        if (!searchCustemerID) {
            throw new Error(`We have no customer with this ID!`)
        } else {

            if (searchCustemerID.totalMoney < amount) {
                throw new Error(`${searchCustemerID.firstName} ${searchCustemerID.lastName} does not have enough money to withdraw that amount!`)
            } else {

                let transaction = {};

                transaction.personalIdT = searchCustemerID.personalId;
                transaction.firstNameT = searchCustemerID.firstName;
                transaction.lastNameT = searchCustemerID.lastName;
                transaction.typeOperation = 'withdrew'
                transaction.amountT = `${amount}$!`;
                this.allTransactions.push(transaction);
                searchCustemerID.totalMoney -= amount;
                return `${searchCustemerID.totalMoney}$`
            }
        }
    }
    customerInfo(personalId) {
        let searchCustemerID = this.allCustomers.find(x => x.personalId == personalId);
        if (!searchCustemerID) {
            throw new Error(`We have no customer with this ID!`)
        } else {
            let output = [];
            output.push(`Bank name: ${this.bankName}`);
            output.push(`Customer name: ${searchCustemerID.firstName} ${searchCustemerID.lastName}`);
            output.push(`Customer ID: ${searchCustemerID.personalId}`);
            output.push(`Total Money: ${searchCustemerID.totalMoney}$`);
            output.push(`Transactions:`);
            let arr = this.allTransactions.filter(x => x.personalIdT == personalId);
            arr.reverse();
            let count = arr.length;
            const cleanArray = arr.map(item => {
                delete item.personalIdT
                return item
            })
            for (let e of cleanArray) {

                output.push(`${count--}. ${Object.values(e).join(' ')}`)
            }
            return output.join('\n\r')
        }
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));