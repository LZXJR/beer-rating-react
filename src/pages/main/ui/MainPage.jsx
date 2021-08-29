import { Suspense, useState } from "react";
import "./style.css";

import { Layout } from "../../../shared/layout/ui/Layout";
import { Rating } from "../../../features/rating/Rating.jsx";
import { BeerFilter } from "../../../features/beerFilter/ui/BeerFilter";

export const MainPage = () => {
  const [choosedFilter, setChoosedFilter] = useState("decreaseInEstimate");

  const chooseFilter = (value) => setChoosedFilter(value);

  return (
    <>
      <Suspense fallback="Loading...">
        <div className="header_and_main">
          <main>
            <Layout>
              <BeerFilter chooseFilter={chooseFilter} />
              <Rating choosedFilter={choosedFilter} />
            </Layout>
          </main>
        </div>
      </Suspense>
    </>
  );
};
