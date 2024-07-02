import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/Sokrio.css";
import Loader from "./components/common/loader/loader.tsx";
import "./index.scss";

import { Toaster } from "react-hot-toast";
import { ContextProvider } from "./contexts/ContextProvider.tsx";
import { SettingsProvider } from "./contexts/SettingsContext";
import { SetupWizardProvider } from "./contexts/SetupWizardContext.tsx";
import SubdomainHandler from "./redux/subdomainHandler.tsx";
import AppRoutes from "./routes/index.tsx";

export const DMS_BASE_URL: string = import.meta.env.BASE_URL;

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
    <Toaster position="top-right" reverseOrder={false} />
    <BrowserRouter>
      <SubdomainHandler />
      <React.Suspense fallback={<Loader />}>
        <ContextProvider>
          <SettingsProvider>
            <SetupWizardProvider>
              <AppRoutes />
            </SetupWizardProvider>
          </SettingsProvider>
        </ContextProvider>
      </React.Suspense>
    </BrowserRouter>
  </React.Fragment>
);
