import { Outlet } from "react-router-dom";
import PandaAdsHeader from "./PandaAdsHeader";
import FoodpandaFooter from "./FoodpandaFooter";

const PandaAdsLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PandaAdsHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <FoodpandaFooter />
    </div>
  );
};

export default PandaAdsLayout;
