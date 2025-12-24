import { Outlet } from "react-router-dom";
import PandaAdsHeader from "./PandaAdsHeader";
<<<<<<< HEAD
import FoodpandaFooter from "./FoodpandaFooter";
=======
import PandaAdsFooter from "./PandaAdsFooter";
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)

const PandaAdsLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <PandaAdsHeader />
      <main className="flex-1">
        <Outlet />
      </main>
<<<<<<< HEAD
      <FoodpandaFooter />
=======
      <PandaAdsFooter />
>>>>>>> 1643147 (Initial commit: Foodpanda clone with redesigned careers link and logo updates)
    </div>
  );
};

export default PandaAdsLayout;
