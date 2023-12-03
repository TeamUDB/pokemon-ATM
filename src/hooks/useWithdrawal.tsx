import { useMutation } from "@tanstack/react-query";
import { addWithdrawal, Transaction } from "../services/accouts.services.tsx";

export const useWithdrawal = (customerId: number, account: string, transaction: Transaction) => {
  console.log("useWithdrawal", customerId, account, transaction);
  return useMutation<boolean>({
    mutationFn: () => addWithdrawal(customerId, account, transaction),
  });
}