import React from 'react';

const Floors = ({ activeConference, activeFloor, setActiveFloor }) => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickValue = (value) => {
    setActiveFloor(value);
    setOpen(!isOpen);
  };

  return (
    <div
      onMouseEnter={() => (activeConference ? setOpen(true) : null)}
      onMouseLeave={() => (activeConference ? setOpen(false) : null)}
      className="floors">
      <p>
        Этаж <span>*</span>
      </p>
      <div className={`floors__floor ${activeConference ? '' : 'disabled'}`}>
        {activeFloor ? activeFloor : 'Выберите этаж'}
        {activeFloor ? '' : <img width={20} height={20} src={'/img/Arrow-down.svg'}></img>}
      </div>
      <ul
        className="floors__list"
        style={
          isOpen ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }
        }>
        {[...new Array(25)].map((value, index) => (
          <li onClick={() => onClickValue(value)} key={index}>
            {(value = index + 3)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Floors;
