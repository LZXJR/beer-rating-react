import { Suspense } from "react";
import "./style.css";

import { Layout } from "../../../shared/layout/ui/Layout";
import { Rating } from "../../../features/rating/Rating.jsx";
import { BeerFilter } from "../../../features/beerFilter/ui/BeerFilter";

export const MainPage = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <div className="header_and_main">
          <main>
            <Layout>
              <BeerFilter />
              <Rating />
            </Layout>
          </main>
        </div>
      </Suspense>
    </>
  );
};
