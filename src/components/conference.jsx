import React from 'react';

const Conference = ({ activeConference, setActiveConference, activeTower }) => {
  const [isOpen, setOpen] = React.useState(false);
  const onClickValue = (value) => {
    setActiveConference(value);
    setOpen(!isOpen);
  };
  return (
    <div
      onMouseEnter={() => (activeTower ? setOpen(true) : null)}
      onMouseLeave={() => (activeTower ? setOpen(false) : null)}
      className="floors">
      <p>
        Номер переговорки <span>*</span>
      </p>
      <div className={`floors__floor ${activeTower ? '' : 'disabled'}`}>
        {activeConference ? activeConference : 'Выберите переговорную'}
        {activeConference ? '' : <img width={20} height={20} src={'/img/Arrow-down.svg'}></img>}
      </div>
      <ul
        className="floors__list"
        style={
          isOpen ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }
        }>
        {[...new Array(10)].map((value, index) => (
          <li onClick={() => onClickValue(value)} key={index}>
            {(value = index + 1)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Conference;
