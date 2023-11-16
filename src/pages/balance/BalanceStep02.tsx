import InfoSection from "../../components/board/InfoSection.tsx";

const BalanceStep02 = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className={ "w-full h-[100vh] pt-10 board" }>
        <InfoSection>
          <div className={ "flex flex-col items-center w-full" }>
            <h2 className={ "font-light text-4xl" }>Su Saldo es: $ 1000.00</h2>
          </div>
        </InfoSection>
      </div>
    </div>
  );
};

export default BalanceStep02;