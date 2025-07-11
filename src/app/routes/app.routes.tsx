import { Route, Routes } from "react-router-dom";
import { Contact } from "../../components/contact/conact.component";
import { AllProducts } from "../../components/header-products/products.comonent";
import { HomePage } from "../../components/home-page/home-page.component";
import { HeaderCase } from "../../components/header-case/header-case.component";
import { HeaderBlog } from "../../components/header-blog/header-blog.component";
import { HeaderNews } from "../../components/header-news/header-news.component";
import { HeaderAbout } from "../../components/header-about/header-about.component";
import { PreviewNews } from "../../components/preview-news/preview-news.component";
import { PreviewCases } from "../../components/preview-case/preview-case.component";
import { Customization } from "../../components/customization/customization.component";
import { PartnerRecruitment } from "../../components/header-partner/header-partner.component";
import { ProductBrochure } from "../../components/product-brochure/product-brochure.component";
import { PreviewProducts } from "../../components/preview-products/preview-products.component";
import { PvBess } from "../../components/solutions/pv-bess-ev-charging/pv-bess-ev-charging.component";
import { OnGridSolutions } from "../../components/solutions/on-grid-solution/on-grid-solution.component";
import { ProductICEnergyStorage } from "../../components/header-products/product-ic/product-ic.component";
import { OffGridSolutions } from "../../components/solutions/off-grid-solution/off-grid-solution.component";
import { ICEnergyStorage } from "../../components/solutions/I&C-energy-storage/I&C-energy-storage.component";
import { HeaderAboutForm } from "../../components/header-partner/header-about-form/header-about-form.component";
import { HybridStorageSolution } from "../../components/solutions/hybrid-storage-solution/hybrid-storage-solution.component";
import { ResidentalEnergy } from "../../components/solutions/residential-energy-storage/residential-energy-storage.component";
import { BaseStationEnergy } from "../../components/solutions/base-station-energy-storage/base-station-energy-storage.component";
import { OffGridOnGridMicrogrid } from "../../components/solutions/off-grid-on-grid-microgrid/off-grid-on-grid-microgrid.component";

export function AppRoutes() {
  return (
    <>
      <Routes>
        {/* --------------------------------------------------------------------------- */}
        {/* HOME PAGE ROUTE */}
        {/* --------------------------------------------------------------------------- */}
        <Route path="/" element={<HomePage />} />

        {/* --------------------------------------------------------------------------- */}
        {/* SOLUTIONS ROUTE */}
        {/* --------------------------------------------------------------------------- */}
        <Route path="/solutions">
          <Route path="base-station-energy" element={<BaseStationEnergy />} />
          <Route path="pv-bess-ev" element={<PvBess />} />
          <Route path="residential-energy" element={<ResidentalEnergy />} />
          <Route path="ic-energy-storage" element={<ICEnergyStorage />} />
          <Route
            path="offgrid-microgrid"
            element={<OffGridOnGridMicrogrid />}
          />
          <Route path="off-grid-solution" element={<OffGridSolutions />} />
          <Route path="on-grid-solution" element={<OnGridSolutions />} />
          <Route path="hybrid-storage" element={<HybridStorageSolution />} />
        </Route>

        {/* --------------------------------------------------------------------------- */}
        {/* PRODUCTS ROUTE */}
        {/* --------------------------------------------------------------------------- */}
        <Route path="/products">
          <Route
            path="ic-energy-storage"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="base-station-energy"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="residential-energy"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="photovoltic-module"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="energy-storage-inverter"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="energy-managment-system"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="customized-products"
            element={<ProductICEnergyStorage />}
          />
          <Route
            path="energy-storage-accessories"
            element={<ProductICEnergyStorage />}
          />
        </Route>

        {/* --------------------------------------------------------------------------- */}
        {/* OTHER ROUTE */}
        {/* --------------------------------------------------------------------------- */}
        <Route path="/news" element={<HeaderNews />} />
        <Route path="/blog" element={<HeaderBlog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<HeaderAbout />} />
        <Route path="/header-case" element={<HeaderCase />} />
        <Route path="/allproducts" element={<AllProducts />} />
        <Route path="/about-form" element={<HeaderAboutForm />} />
        <Route path="/customization" element={<Customization />} />
        <Route path="/product-brochure" element={<ProductBrochure />} />
        <Route path="/partner-recruitment" element={<PartnerRecruitment />} />

        {/* --------------------------------------------------------------------------- */}
        {/* PREVIEW ID */}
        {/* --------------------------------------------------------------------------- */}
        <Route path="/preview/news/:id" element={<PreviewNews />} />
        <Route path="/preview/case/:id" element={<PreviewCases />} />
        <Route path="/preview/products/:id" element={<PreviewProducts />} />
      </Routes>
    </>
  );
}
