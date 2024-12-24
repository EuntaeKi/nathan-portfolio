import React from "react";

const CommentBox = ({
  imagePath,
  commentImage,
  avatarImage,
  username,
  comment,
  altText,
  commentBoxStyle,
}) => {
  console.log(commentBoxStyle);
  return (
    <div className="flex flex-col justify-center items-center relative w-[20rem] sm:w-[28rem] h-[10rem] sm:h-[18rem]">
      <img
        src={`${imagePath}${commentImage}`}
        alt={altText}
        className={`absolute ${commentBoxStyle}`}
      />
      <div className="flex pb-12 items-center">
        <img
          src={`${imagePath}${avatarImage}`}
          alt={`Avatar of ${username}`}
          className="max-w-12 sm:max-w-none me-4"
        />
        <div className="flex flex-col text-start text-[1rem] sm:text-[1.375rem] leading-5 sm:leading-7">
          <div className="font-clash-medium text-web-gray">@{username}</div>
          <div
            className="font-clash-medium"
            dangerouslySetInnerHTML={{ __html: comment }}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
