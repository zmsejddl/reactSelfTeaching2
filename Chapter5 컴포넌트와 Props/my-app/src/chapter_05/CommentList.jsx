import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "홍길동",
        comment: "안녕하세요, 도적입니다.",
    },
    {
        name: "이순신",
        comment: "안녕하세요, 장군입니다.",
    },
    {
        name: "고길동",
        comment: "안녕하세요, 검사입니다.",
    }
]

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;