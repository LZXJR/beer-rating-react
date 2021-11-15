import { useState } from "react";
import { Error404UI } from "../../shared/error404/ui/Error404UI";
import { Loading } from "../../shared/loading/ui/Loading";
import { usePrepareResponse } from "../../shared/usePrepareResponse";
import { BeerPageUi } from "./ui/BeerPageUi";
import { useParams } from "react-router-dom";

const BeerPage = () => {
  const [beerPageResponse, setBeerPageDataResponse] = useState(null);

  const { id:beerId } = useParams();

  usePrepareResponse(setBeerPageDataResponse, "beerPage", beerId);

  const NOT_FOUND_ERROR_CODE = 404;

  const beerPageLook = () => {
    if (beerPageResponse) {
      const [beerPageData] = beerPageResponse.data;
      return beerPageResponse.status === NOT_FOUND_ERROR_CODE ? (
        <Error404UI />
      ) : (
        <BeerPageUi beerPageData={beerPageData} />
      );
    } else return <Loading platformHeight="87vh" />;
  };

  return beerPageLook();
};

export default BeerPage;
