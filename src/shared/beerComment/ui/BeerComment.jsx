import "./style.css";

export const BeerComment = ({userPhoto,nickName,commentText}) => {
  return (
    <div className="beer_comment">
      <div className="beer_comment_img">
        <img src={userPhoto} alt="user" />
      </div>
      <div className="user_nickName_And_user_comment">
        <h4 className="user_nickName">{nickName}</h4>
        <p className="user_comment">
        {commentText}
        </p>
      </div>
    </div>
  );
};

