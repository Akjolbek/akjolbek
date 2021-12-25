import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { commentContext } from "../../contexts/commentsContext";
import Comments from "../Comments/Comments";
import "./Comments.css";
import { useAuth } from "../../contexts/authContext";


const CommentList = ({ id }) => {
  const { user: { email } } = useAuth()
  const { getComments, comments, createComment } = useContext(commentContext);
  useEffect(() => {
    getComments(id);
  }, [id]);
  const [newComment, setNewComment] = useState({
    word: "",
  }); 

  function handleValues(e) {
    const createdAtMs = Date.now()
    let values = {
      ...newComment,
      [e.target.name]: e.target.value,
      createdAtMs,
      tanksId: id,
      email
    };
    setNewComment(values);
  }

  function checkValues() {
    if (!newComment.word) {
      alert("Вы еще ничего не написали!");
      return;
    } else {
      
      createComment(newComment, id );
    }
  }
  return (
    <div
      style={{
        width: "600px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "solid white 5px",
      }}
    >
      <h3 style={{ textAlign: "center", color: 'white' }}>Оставьте комментарий</h3>
      <div className="items-list">
        {comments.map((item) => (
          <Comments id={id} key={item.id} item={item} />
        ))}
      </div>

      <div style={{ display: "flex", height: "60px", justifyContent: 'center' }}>
        <Input
          id="comment"
          onChange={handleValues}
          name="word"
          placeholder="Enter text..."
          style={{width: '300px', background: 'transparent', border: '3px solid white'}}
        />
        <button
          onClick={() => checkValues()}
          style={{
            background: "transparent",
            borderRadius: "5px",
            border: "2px solid white",
            color: "white",
            marginLeft: '3%',
            cursor: 'pointer'
          }}
        >
          Добавить
        </button>
      </div>
    </div>
  );
};

export default CommentList;