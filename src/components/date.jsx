import React from 'react';

const Date = ({ activeFloor, activeDate, setActiveDate, dates }) => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickValue = (value) => {
    setActiveDate(value);
    setOpen(!isOpen);
  };

  return (
    <div
      onMouseEnter={() => (activeFloor ? setOpen(true) : null)}
      onMouseLeave={() => (activeFloor ? setOpen(false) : null)}
      className="floors">
      <p>
        Дата <span>*</span>
      </p>
      {/* <div className={`floors__floor ${activeFloor ? '' : 'disabled'}`}>
        {activeDate ? activeDate : 'Выберите дату'}
        {activeDate ? '' : <img width={20} height={20} src={'/img/Arrow-down.svg'}></img>}
      </div> */}
      <input className="date-input" type="date" min="2023-05-05" max="2023-05-20" />

      {/* <ul
        className="floors__list"
        style={
          isOpen ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }
        }>
        {dates.map((value, index) => (
          <li onClick={() => onClickValue(value)} key={index}>
            {value}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Date;
