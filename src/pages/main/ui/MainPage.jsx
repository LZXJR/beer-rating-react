import { Suspense } from "react";
import "./style.css";

import { Layout } from "../../../shared/layout/ui/Layout";
import { Rating } from "../../../features/rating/Rating.jsx";

export const MainPage = () => {
  return (
    <>
      <Suspense fallback="Loading...">
        <div className="header_and_main">
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
