import logo from './logo.svg';
import './App.scss';
import React from 'react';
import Towers from './components/towers';
import Floors from './components/floors';
import Conference from './components/conference';
import Date from './components/date';
import StartTime from './components/startTime';
import EndTime from './components/endTime';
import Comment from './components/comment';
function App() {
  const [activeTower, setActiveTower] = React.useState('');
  const [activeFloor, setActiveFloor] = React.useState('');
  const [activeConference, setActiveConference] = React.useState('');
  const [activeDate, setActiveDate] = React.useState('');
  const [startTime, setStartTime] = React.useState('');
  const [endTime, setEndTime] = React.useState('');
  const [comment, setComment] = React.useState('');

  const onClear = () => {
    setActiveTower('');
    setActiveFloor('');
    setActiveConference('');
    setActiveDate('');
    setStartTime('');
    setEndTime('');
    setComment('');
  };

  const onSend = () => {
    if (activeTower && activeFloor && activeConference && activeDate && startTime && endTime) {
      const json = JSON.stringify({
        tower: activeTower,
        floor: activeFloor,
        conference: activeConference,
        date: activeDate,
        startTime: startTime,
        endTime: endTime,
        comment: comment,
      });
      alert('Место забронировано!');

      console.log(json);
    } else {
      alert('Заполните все поля формы!');
    }
  };

  const towers = ['A', 'B'];
  const dates = ['04.05', '05.05', '06.05', '07.05'];
  const time = ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  return (
    <div className="App">
      <div className="right-container">
        <Towers activeTower={activeTower} setActiveTower={setActiveTower} towers={towers} />
      </div>
      <div className="middle-container">
        <Conference
          activeTower={activeTower}
          activeConference={activeConference}
          setActiveConference={setActiveConference}
        />
        <Date
          activeFloor={activeFloor}
          activeDate={activeDate}
          setActiveDate={setActiveDate}
          dates={dates}
        />
        <div className="time-container">
          <StartTime
            activeDate={activeDate}
            startTime={startTime}
            setStartTime={setStartTime}
            avelibleTime={time}
          />
          <EndTime
            endTime={endTime}
            setEndTime={setEndTime}
            avelibleTime={time}
            startTime={startTime}
          />
        </div>
        <Comment endTime={endTime} comment={comment} setComment={setComment} />
        <div className="buttons">
          <button onClick={() => onClear()} className="clear">
            Очистить
          </button>
          <button onClick={() => onSend()} className="send">
            Отправить
          </button>
        </div>
      </div>
      <div className="left-container">
        <Floors
          activeConference={activeConference}
          activeFloor={activeFloor}
          setActiveFloor={setActiveFloor}
        />
      </div>
    </div>
  );
}

export default App;
