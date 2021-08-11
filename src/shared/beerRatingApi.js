import axios from "axios";

export const beerRatingApi = async (way) => {
  
  switch(way){
    case "ratingItems":{
      const ratingItems = await axios.get("http://localhost:5000/ratingItems");
      return ratingItems;
      break
    }
  }

}
