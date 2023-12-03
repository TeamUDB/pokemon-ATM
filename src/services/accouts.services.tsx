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
    name: "Pedro Perez",
    accountNumber: "008653321",
    balance: 2000,
    currency: "USD",
    transactions: [
      {
        id: 1,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      },
      {
        id: 2,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      },
      {
        id: 3,
        concept: "Pago de servicios",
        amount: 100,
        type: "Deposito",
        date: "2021-08-01"
      },
      {
        id: 4,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      },
      {
        id: 5,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      },
      {
        id: 6,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      },
      {
        id: 7,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      }
    ]
  },
  {
    id: 2,
    customerId: 2542,
    name: "Pedro Perez",
    accountNumber: "008653324",
    balance: 500,
    currency: "USD",
    transactions: [
      {
        id: 1,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      },
      {
        id: 2,
        concept: "Pago de servicios",
        amount: -100,
        type: "Pago",
        date: "2021-08-01"
      }
    ]
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

export const addTransaction = (customerId: number, accountNumber: string, transaction: Transaction) => {
  return new Promise<Transaction[]>((resolve) => {
    const account = accounts.find(account => account.customerId === customerId && account.accountNumber === accountNumber);
    if (account) {
      account.transactions?.push(transaction);
      account.balance += transaction.amount;
    }
    resolve(account?.transactions || []);
  });
}