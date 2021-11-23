import mysql  from "mysql"

export  const  createConnection = () =>{
    return mysql.createConnection({
        host: "www.db4free.net",
        user: "mysql_lzxjr",
        database: "beer_rating",
        password: "123qwe456"
      });
}