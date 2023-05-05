import React from 'react';

const EndTime = ({ endTime, setEndTime, avelibleTime, startTime, times }) => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickValue = (value) => {
    setEndTime(value);
    setOpen(!isOpen);
  };

  const startTimeIndex = startTime ? avelibleTime.findIndex((item) => item === startTime) : null;

  return (
    <div className="time">
      <div
        onMouseEnter={() => (startTime ? setOpen(true) : null)}
        onMouseLeave={() => (startTime ? setOpen(false) : null)}
        className="floors">
        <p>
          Номер переговорки <span>*</span>
        </p>
        <div className={`floors__floor ${startTime ? '' : 'disabled'}`}>
          {endTime}
          {endTime ? '' : <img width={20} height={20} src={'/img/Arrow-down.svg'}></img>}
        </div>
        <ul
          className="floors__list"
          style={
            isOpen
              ? { visibility: 'visible', opacity: '1' }
              : { visibility: 'hidden', opacity: '0' }
          }>
          {avelibleTime
            .filter((value, index) => index > startTimeIndex)
            .map((value, index) => (
              <li onClick={() => onClickValue(value)} key={index}>
                {value}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default EndTime;
