import './App.css'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Login from "./pages/login/Login.tsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/main/Main.tsx";
import AccountStatusStep01 from "./pages/account-status/AccountStatusStep01.tsx";
import BalanceStep01 from "./pages/balance/BalanceStep01.tsx";
import WithdrawalStep01 from "./pages/withdrawal/WithdrawalStep01.tsx";
import DepositStep01 from "./pages/deposit/DepositStep01.tsx";
import MainTemplate from "./template/main-template.tsx";
import BalanceStep02 from "./pages/balance/BalanceStep02.tsx";
import AccountStatusStep02 from "./pages/account-status/AccountStatusStep02.tsx";
import WithdrawalStep02 from "./pages/withdrawal/WithdrawalStep02.tsx";
import WithdrawalStep03 from "./pages/withdrawal/WithdrawalStep03.tsx";
import DepositStep02 from "./pages/deposit/DepositStep02.tsx";
import DepositStep03 from "./pages/deposit/DepositStep03.tsx";


const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route element={<MainTemplate/>}>
            <Route path="/main" element={<Main/>}/>
            <Route path="/account-status" element={<AccountStatusStep01/>}/>
            <Route path="/account-status/step-02" element={<AccountStatusStep02/>}/>
            <Route path="/balance" element={<BalanceStep01/>}/>
            <Route path="/balance/step-02" element={<BalanceStep02/>}/>
            <Route path="/withdrawal" element={<WithdrawalStep01/>}/>
            <Route path="/withdrawal/step-02" element={<WithdrawalStep02/>}/>
            <Route path="/withdrawal/step-03" element={<WithdrawalStep03/>}/>
            <Route path="/deposit" element={<DepositStep01/>}/>
            <Route path="/deposit/step-02" element={<DepositStep02/>}/>
            <Route path="/deposit/step-03" element={<DepositStep03/>}/>
          </Route>
          <Route path="/" element={<Login/>}/>
          <Route path="*" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
