import Promo from "../components/Promo/Promo";
import CardsLinks from "../components/CardsLinks/CardsLinks";
import StocksSection from "../components/Stocks/StocksSection";
import UnComing from "../components/Uncoming/UnComing";
import Popular from "../components/Popular/Popular";

const Main = () => {
  return (
    <>
      <Promo />
      <CardsLinks />
      <StocksSection />
      <UnComing />
      <Popular />
    </>
  );
};

export default Main;
