import { Suspense } from "react";
import "./style.css";

import { Layout } from "../../../shared/layout/ui/Layout";
import { Header } from "../../../shared/header/Header.jsx";
import { Rating } from "../../../features/rating/Rating.jsx";
import { NavBar } from "../../../shared/navBar/NavBar.jsx";

export const MainPage = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <NavBar />
        <div className="header_and_main">
          <Header />
          <main>
            <Layout>
              <Rating />
            </Layout>
          </main>
        </div>
      </Suspense>
    </>
  );
};
