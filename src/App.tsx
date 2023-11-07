import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/login/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main.tsx";
import AccountStatusStep01 from "./pages/account-status/AccountStatusStep01.tsx";
import BalanceStep01 from "./pages/balance/BalanceStep01.tsx";
import WithdrawalStep01 from "./pages/withdrawal/WithdrawalStep01.tsx";
import DepositStep01 from "./pages/deposit/DepositStep01.tsx";
import PaymentServiceStep01 from "./pages/payment-services/PaymentServiceStep01.tsx";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main" element={<Main/>}/>
          <Route path="/account-status" element={<AccountStatusStep01/>}/>
          <Route path="/balance" element={<BalanceStep01/>}/>
          <Route path="/withdrawal" element={<WithdrawalStep01/>}/>
          <Route path="/deposit" element={<DepositStep01/>}/>
          <Route path="/payment-services" element={<PaymentServiceStep01/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
