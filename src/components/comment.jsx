import React from 'react';

const Comment = ({ comment, setComment, endTime }) => {
  const changeValue = (event) => {
    setComment(event.target.value);
    console.log(comment);
  };
  return (
    <div className="comment">
      <p>Введите комментарий</p>
      <div className={`comment__text-area `}>
        <textarea
          disabled={`${endTime ? '' : 'disabled'}`}
          className={`${endTime ? '' : 'disabled'}`}
          onChange={(event) => changeValue(event)}
          value={comment}
          name="comment"
          cols="30"
          rows="10"></textarea>
      </div>
    </div>
  );
};

export default Comment;
