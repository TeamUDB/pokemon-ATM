export type AccountInfo = {
  id: number;
  customerId: number;
  name: string;
  accountNumber: string;
  balance: number;
  currency: string;
}

const accounts: AccountInfo[] = [
  {
    id: 1,
    customerId: 2542,
    name: "Pedro Perez",
    accountNumber: "008653321",
    balance: 2000,
    currency: "USD"
  },
  {
    id: 2,
    customerId: 2542,
    name: "Pedro Perez",
    accountNumber: "008653324",
    balance: 500,
    currency: "USD"
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