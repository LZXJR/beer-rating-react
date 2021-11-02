import { Suspense, useState } from "react";
import "./style.css";

import { Layout } from "../../../shared/layout/";
import { Rating } from "../../../features/rating/";
import { BeerFilterUI } from "../../../features/beerFilter/";
import { changeState } from "../../../shared/changeState";

export const MainPage = () => {
  const [choosedFilter, setChoosedFilter] = useState("decreaseInEstimate");

  const chooseFilter = changeState(setChoosedFilter);
  return (
    <>
      <Suspense fallback="Loading...">
        <div className="header_and_main">
          <main>
            <Layout>
              <BeerFilterUI chooseFilter={chooseFilter} />
              <Rating choosedFilter={choosedFilter} />
            </Layout>
          </main>
        </div>
      </Suspense>
    </>
  );
};
