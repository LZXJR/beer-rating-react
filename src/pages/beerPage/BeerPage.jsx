import { useState } from "react";
import { ErrorUI } from "../../shared/error/";
import { Loading } from "../../shared/loading/";
import { usePrepareResponse } from "../../shared/usePrepareResponse";
import { BeerPageUi } from "./ui/BeerPageUi";
import { useParams } from "react-router-dom";

const BeerPage = () => {
  const [beerPageResponse, setBeerPageDataResponse] = useState(null);

  const { id:beerId } = useParams();

  usePrepareResponse(setBeerPageDataResponse, "/beerPage", beerId);

  const NOT_FOUND_ERROR_CODE = 404;

  const beerPageLook = () => {
    if (beerPageResponse) {
      const [beerPageData] = beerPageResponse.data;
      return beerPageResponse.status === NOT_FOUND_ERROR_CODE ? (
        <ErrorUI errorCode={beerPageResponse.status}/>
      ) : (
        <BeerPageUi beerPageData={beerPageData} />
      );
    } else return <Loading platformHeight="87vh" />;
  };

  return beerPageLook();
};

export default BeerPage;
