import { useQuery } from "@tanstack/react-query";
import { getBalance } from "../services/accouts.services.tsx";

export const useBalance = (customerId: number, account: string) => {
  return useQuery<number>({
    queryKey: ['accountBalance'],
    queryFn: () => getBalance(customerId, account)
  });
}