import { useQuery } from "@tanstack/react-query";
import { getTransactions, Transaction } from "../services/accouts.services.tsx";

export const useTransactions = (customerId: number, account: string) => {
  return useQuery<Transaction[]>({
    queryKey: ['transactions'],
    queryFn: () => getTransactions(customerId, account)
  });
}