export const sqlRequests = {
  ratingItems: (id) =>
    `SELECT * FROM beer_rating_items 
    ORDER BY grade ${
      id === "decreaseInEstimate" ? "DESC" : ""
    }`,
  beerPage: (id) =>
    `SELECT * FROM beer_rating_items,beer_description,briefly_about_beer  
    WHERE briefly_about_beer.id=${id} 
    AND beer_description.id=${id} 
    AND beer_rating_items.id=${id}`,
    
  resultUserGrades:(data)=>{
    const {cost_grade,taste_grade,look_grade,smell_grade,alcohol_grade,grade,id} = data
    return `UPDATE briefly_about_beer, beer_rating_items
  SET 
      briefly_about_beer.cost_grade=${cost_grade},
      briefly_about_beer.taste_grade=${taste_grade},
      briefly_about_beer.look_grade=${look_grade},
      briefly_about_beer.smell_grade=${smell_grade},
      briefly_about_beer.alcohol_grade=${alcohol_grade},

      beer_rating_items.grade=${grade}
  WHERE
      briefly_about_beer.id = ${id}
      AND 
      beer_rating_items.id = ${id};`
  }
};
