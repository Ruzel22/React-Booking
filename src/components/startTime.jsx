import React from 'react';

const StartTime = ({ activeDate, startTime, setStartTime, avelibleTime }) => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickValue = (value) => {
    setStartTime(value);
    setOpen(!isOpen);
  };
  return (
    <div className="time">
      <div
        onMouseEnter={() => (activeDate ? setOpen(true) : null)}
        onMouseLeave={() => (activeDate ? setOpen(false) : null)}
        className="floors ">
        <p>
          Начало <span>*</span>
        </p>
        <div className={`floors__floor ${activeDate ? '' : 'disabled'}`}>
          {startTime}
          {startTime ? '' : <img width={20} height={20} src={'/img/Arrow-down.svg'}></img>}
        </div>
        <ul
          className="floors__list"
          style={
            isOpen
              ? { visibility: 'visible', opacity: '1' }
              : { visibility: 'hidden', opacity: '0' }
          }>
          {avelibleTime.map((value, index) => (
            <li onClick={() => onClickValue(value)} key={index}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default StartTime;
