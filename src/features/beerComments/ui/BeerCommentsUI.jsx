import "./style.css";
import userPhoto from "./img/user.jpg";

import { BeerComment } from "../../../shared/beerComment/ui/BeerComment";

export const BeerCommentsUI = () => {
  return (
    <div className="beerPage_comments  white_bg_and_border_radius">
      <h3 className="beer_title">COMMENTS</h3>
      <hr className="beer_hr" />
      <div className="beer_comments">
        <BeerComment
          userPhoto={userPhoto}
          nickName="John"
          commentText="It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here'."
        />
        <BeerComment
          userPhoto={userPhoto}
          nickName="John"
          commentText="It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here'."
        />
        <BeerComment
          userPhoto={userPhoto}
          nickName="John"
          commentText="It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here'."
        />
        <BeerComment
          userPhoto={userPhoto}
          nickName="John"
          commentText="It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here'."
        />
        <BeerComment
          userPhoto={userPhoto}
          nickName="John"
          commentText="It is a long established fact that a reader will be distracted by the
readable content of a page when looking at its layout. The point of
using Lorem Ipsum is that it has a more-or-less normal distribution of
letters, as opposed to using 'Content here, content here'."
        />
      </div>
      <button className="load_more">Load more...</button>

      <div className="beer_comment input">
        <div className="beer_comment_img">
          <img src={userPhoto} alt="user" />
        </div>
        <div className="user_nickName_And_user_comment">
          <h4 className="user_nickName">John</h4>

          <div className="user_comment_input" contentEditable={true} suppressContentEditableWarning="true"> 
          
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here'.
          </div>
          <div className="user_comment_input_buttons">
            <button className="button_cancel">cancel</button>
            <button className="button_comment">Comment</button>
          </div>
        </div>
      </div>
    </div>
  );
};
