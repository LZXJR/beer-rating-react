import { Suspense } from "react";


import { Header } from "../../../shared/header/index";
import { Main } from "../../../shared/main/index";
import {Rating} from "../../../features/rating/index";
import {RatingItem} from "../../../entities/ratingItem/index"
import {NavBar} from "../../../shared/navBar/index";

export const MainPage = () =>{
    return(
        <>
        <Suspense fallback="Loading...">
        <NavBar />
          <Header />
          <Main>
            <Rating>
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
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>
            <RatingItem place="1" name="Stella Artois" producer="Anheuser-Busch InBev" country="Бельгія"/>

            </Rating>
          </Main>
      </Suspense>
        </>
    )
} 