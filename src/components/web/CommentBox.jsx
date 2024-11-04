import React from 'react';

const CommentBox = ({ imagePath, commentImage, avatarImage, username, comment, altText, commentBoxStyle }) => {
    return (
        <div className="flex flex-col justify-center items-center relative w-[28rem] h-[18rem]">
            <img
                src={`${imagePath}${commentImage}`}
                alt={altText}
                className={`absolute ${commentBoxStyle}`}
            />
            <div className="flex pb-12 items-center">
                <img
                    src={`${imagePath}${avatarImage}`}
                    alt={`Avatar of ${username}`}
                    className="me-4"
                />
                <div className="flex flex-col text-start text-[1.375rem] leading-7">
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
