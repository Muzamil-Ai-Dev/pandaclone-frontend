import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FoodpandaLayout from "./components/FoodpandaLayout";
import PandaAdsLayout from "./components/PandaAdsLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NewsroomPage from "./pages/NewsroomPage";
import PartnersPage from "./pages/PartnersPage";
import ContactPage from "./pages/ContactPage";
import CareersPage from "./pages/CareersPage";
import PandaAdsHomePage from "./pages/pandaads/PandaAdsHomePage";
import PandaAdsSolutionsPage from "./pages/pandaads/PandaAdsSolutionsPage";
import PandaAdsResourcesPage from "./pages/pandaads/PandaAdsResourcesPage";
import PandaAdsToolsPage from "./pages/pandaads/PandaAdsToolsPage";
import PandaAdsContactPage from "./pages/pandaads/PandaAdsContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Foodpanda Routes */}
          <Route element={<FoodpandaLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/newsroom" element={<NewsroomPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
          </Route>
          
          {/* PandaAds Routes */}
          <Route element={<PandaAdsLayout />}>
            <Route path="/pandaads" element={<PandaAdsHomePage />} />
            <Route path="/pandaads/solutions" element={<PandaAdsSolutionsPage />} />
            <Route path="/pandaads/resources" element={<PandaAdsResourcesPage />} />
            <Route path="/pandaads/resources/insights" element={<PandaAdsResourcesPage />} />
            <Route path="/pandaads/resources/case-studies" element={<PandaAdsResourcesPage />} />
            <Route path="/pandaads/resources/newsroom" element={<PandaAdsResourcesPage />} />
            <Route path="/pandaads/tools" element={<PandaAdsToolsPage />} />
            <Route path="/pandaads/contact" element={<PandaAdsContactPage />} />
          </Route>
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
