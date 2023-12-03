export type Transaction = {
  id: number;
  concept: string;
  amount: number;
  type: string;
  date: string;
}
export type AccountInfo = {
  id: number;
  customerId: number;
  name: string;
  accountNumber: string;
  balance: number;
  currency: string;
  transactions?: Transaction[];
}

const accounts: AccountInfo[] = [
  {
    id: 1,
    customerId: 2542,
    name: "Victor Hugo Cornejo Calderon",
    accountNumber: "008653321",
    balance: 2000,
    currency: "USD",
    transactions: []
  },
  {
    id: 2,
    customerId: 2542,
    name: "Victor Hugo Cornejo Calderon",
    accountNumber: "008653324",
    balance: 500,
    currency: "USD",
    transactions: []
  },
];


export const AccountsServices = (customerId: number) => {
  return new Promise<AccountInfo[]>((resolve) => {
    setTimeout(() => {
      resolve(accounts.filter(account => account.customerId === customerId));
    }, 500);
  });
}

export const getBalance = (customerId: number, accountNumber: string) => {
  return new Promise<number>((resolve) => {
    resolve(accounts.find(account => account.customerId === customerId && account.accountNumber === accountNumber)?.balance || 0);
  });
}

export const getTransactions = (customerId: number, accountNumber: string) => {
  return new Promise<Transaction[]>((resolve) => {
    resolve(accounts.find(account => account.customerId === customerId && account.accountNumber === accountNumber)?.transactions || []);
  });
}

export const addWithdrawal = (customerId: number, accountNumber: string, transaction: Transaction) => {
  console.log("addWithdrawal", customerId, accountNumber, transaction);
  return new Promise<boolean>((resolve) => {
    const account = accounts.find(account => account.customerId === customerId && account.accountNumber === accountNumber);
    if (account) {
      if (account.balance >= (transaction.amount * -1 )) {
        account.transactions?.push(transaction);
        account.balance += transaction.amount;
        console.log("Retiro exitoso");
        resolve(true);
      } else
      {
        console.log("No hay saldo suficiente");
        resolve(false);
      }
    }
    resolve(false);
  });
}

export const addDeposit = (customerId: number, accountNumber: string, transaction: Transaction) => {
  return new Promise<boolean>((resolve) => {
    const account = accounts.find(account => account.customerId === customerId && account.accountNumber === accountNumber);
    if (account) {
      account.transactions?.push(transaction);
      account.balance += transaction.amount;
      resolve(true);
    }
    resolve(false);
  });
}