import { useState } from "react";
import { Error404 } from "../../shared/error404/ui/Error404";
import { Loading } from "../../shared/loading/ui/Loading";
import { usePrepareResponse } from "../../shared/usePrepareResponse";
import { BeerPageUi } from "./ui/BeerPageUi";

const BeerPage = () => {
  const [beerPageResponse, setBeerPageDataResponse] = useState(null);

  usePrepareResponse(
    setBeerPageDataResponse,
    "beerPage",
    localStorage.getItem("beerId")
  );

  const NOT_FOUND_ERROR_CODE = 404;

  const beerPageLook = () => {
    if (beerPageResponse) {
      const [beerPageData] = beerPageResponse.data;
      return beerPageResponse.status === NOT_FOUND_ERROR_CODE ? (
        <Error404 />
      ) : (
        <BeerPageUi beerPageData={beerPageData} />
      );
    } else return <Loading platformHeight="87vh" />;
  };

  return beerPageLook();
};

export default BeerPage;
