import { Route, Routes } from "react-router-dom"
import { Contact } from "../../components/contact/conact.component"
import { HomePage } from "../../components/home-page/home-page.component"
import { HeaderCase } from "../../components/header-case/header-case.component"
import { HeaderBlog } from "../../components/header-blog/header-blog.component"
import { HeaderNews } from "../../components/header-news/header-news.component"
import { HeaderAbout } from "../../components/header-about/header-about.component"
import { Customization } from "../../components/customization/customization.component"
import { PartnerRecruitment } from "../../components/header-partner/header-partner.component"
import { ProductBrochure } from "../../components/product-brochure/product-brochure.component"
import { PvBess } from "../../components/solutions/pv-bess-ev-charging/pv-bess-ev-charging.component"
import { OnGridSolutions } from "../../components/solutions/on-grid-solution/on-grid-solution.component"
import { ProductICEnergyStorage } from "../../components/header-products/product-ic/product-ic.component"
import { OffGridSolutions } from "../../components/solutions/off-grid-solution/off-grid-solution.component"
import { ICEnergyStorage } from "../../components/solutions/I&C-energy-storage/I&C-energy-storage.component"
import { HeaderAboutForm } from "../../components/header-partner/header-about-form/header-about-form.component"
import { HybridStorageSolution } from "../../components/solutions/hybrid-storage-solution/hybrid-storage-solution.component"
import { ResidentalEnergy } from "../../components/solutions/residential-energy-storage/residential-energy-storage.component"
import { HybridEnergySite } from "../../components/solutions/hybrid-energy-site-solution/hybrid-energy-site-solution.component"
import { BaseStationEnergy } from "../../components/solutions/base-station-energy-storage/base-station-energy-storage.component"
import { OffGridOnGridMicrogrid } from "../../components/solutions/off-grid-on-grid-microgrid/off-grid-on-grid-microgrid.component"
import { Preview } from "../../components/preview/preview.component"

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/solutions">
        <Route path="base-station-energy" element={<BaseStationEnergy />} />
        <Route path="pv-bess-ev" element={<PvBess />} />
        <Route path="residential-energy" element={<ResidentalEnergy />} />
        <Route path="ic-energy-storage" element={<ICEnergyStorage />} />
        <Route path="offgrid-microgrid" element={<OffGridOnGridMicrogrid />} />
        <Route path="off-grid-solution" element={<OffGridSolutions />} />
        <Route path="on-grid-solution" element={<OnGridSolutions />} />
        <Route path="hybrid-storage" element={<HybridStorageSolution />} />
        <Route path="hybrid-energy" element={<HybridEnergySite />} />
      </Route>

      <Route path="/products">
        <Route path="ic-energy-storage" element={<ProductICEnergyStorage />} />
        <Route
          path="base-station-energy"
          element={<ProductICEnergyStorage />}
        />
        <Route path="residential-energy" element={<ProductICEnergyStorage />} />
        <Route path="photovoltic-module" element={<ProductICEnergyStorage />} />
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

      <Route path="/header-case" element={<HeaderCase />} />
      <Route path="/preview/:id" element={<Preview />} />
      <Route path="/customization" element={<Customization />} />
      <Route path="/about-us" element={<HeaderAbout />} />
      <Route path="/news" element={<HeaderNews />} />
      <Route path="/partner-recruitment" element={<PartnerRecruitment />} />
      <Route path="/blog" element={<HeaderBlog />} />
      <Route path="/product-brochure" element={<ProductBrochure />} />
      <Route path="/about-form" element={<HeaderAboutForm />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
