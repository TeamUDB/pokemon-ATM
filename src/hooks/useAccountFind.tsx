import { useQuery } from "@tanstack/react-query";
import { AccountInfo, AccountsServices } from "../services/accouts.services.tsx";

export const useAccountFind = (customerId: number) => {
  return useQuery<AccountInfo[]>({
    queryKey: [ 'accountFind' ],
    queryFn: () => AccountsServices(customerId),
  });
}