import React from 'react';

const Towers = ({ activeTower, setActiveTower, towers }) => {
  const [isOpen, setOpen] = React.useState(false);

  const onClickValue = (value) => {
    setActiveTower(value);
    setOpen(!isOpen);
  };
  return (
    <div onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)} className="towers">
      <p>
        Башня <span>*</span>
      </p>
      <div className="towers__tower">
        {activeTower ? activeTower : 'Выберите башню'}
        {activeTower ? '' : <img width={20} height={20} src={'/img/Arrow-down.svg'}></img>}
      </div>
      <ul
        className="towers__list"
        style={
          isOpen ? { visibility: 'visible', opacity: '1' } : { visibility: 'hidden', opacity: '0' }
        }>
        {towers.map((value, index) => (
          <li onClick={() => onClickValue(value)} key={index}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Towers;
