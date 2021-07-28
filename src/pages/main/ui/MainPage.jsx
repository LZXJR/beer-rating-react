import { Suspense } from "react";
import "./style.css"

import { Header } from "../../../shared/header/Header.jsx";
import { Main } from "../../../shared/main/index";
import {Rating} from "../../../features/rating/ui/Rating.jsx";
import {RatingItem} from "../../../shared/ratingItem/index"
import {NavBar} from "../../../shared/navBar/NavBar.jsx";

export const MainPage = () =>{
    return(
        <>
        <Suspense fallback="Loading...">
        <NavBar />
        <div className="header_and_main">
          <Header />
          <Main>
            <Rating>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Belgium"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>

            </Rating>
          </Main>
          </div>
      </Suspense>
        </>
    )
} 