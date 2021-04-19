import React, { useContext } from 'react';

import { FaTimes, FaChevronUp, FaCheck } from 'react-icons/fa';
import {
  CountdownContainer,
  CountdownButton
} from '../styles/components/Cowntdown';
import { CountdownContext } from '../context/TaskCountdown';

const Cowntdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    idTaskActive,
    taskActive,
    resetCountdown,
    startCountdown,
    setTaskActive,
    setHasFinished,
    completeTask,
    setIdTaskActive,
    setQuantity,
    setTime
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  // function buttonPrimary(): JSX.Element {
  //   if (isActive) {
  //     return <CountdownButton disabled>Iniciar</CountdownButton>;
  //   }else if()

  //   return null;
  // }

  return (
    <CountdownContainer>
      <div>
        <div>
          <span className="number">{minuteLeft}</span>
          <span className="number">{minuteRight}</span>
        </div>
        <span className="points">:</span>
        <div>
          <span className="number">{secondLeft}</span>
          <span className="number">{secondRight}</span>
        </div>
      </div>

      {!hasFinished && !isActive ? (
        <CountdownButton
          onClick={() => {
            startCountdown('');
            if (taskActive.length > 0) {
              setIdTaskActive('');
            }
          }}>
          Iniciar
        </CountdownButton>
      ) : null}

      {hasFinished ? (
        <CountdownButton
          onClick={() => {
            startCountdown(taskActive);
          }}>
          Continuar
          <FaChevronUp />
        </CountdownButton>
      ) : null}

      {isActive ? (
        <CountdownButton
          onClick={() => {
            resetCountdown();
            setTaskActive('');
            setHasFinished(false);
            setIdTaskActive('');
            setQuantity(0);
            setTime(25 * 60);
          }}
          style={{ backgroundColor: 'var(--red)' }}>
          Cancelar
          <FaTimes />
        </CountdownButton>
      ) : null}

      {taskActive.length > 1 && !isActive ? (
        <CountdownButton
          onClick={() => {
            resetCountdown();
            setTaskActive('');
            setHasFinished(false);
            setIdTaskActive('');
            setQuantity(0);
            setTime(25 * 60);
          }}
          style={{ backgroundColor: 'var(--red)' }}>
          Fazer depois
          <FaTimes />
        </CountdownButton>
      ) : null}

      {hasFinished ? (
        <CountdownButton
          onClick={() => {
            completeTask(idTaskActive);
            setQuantity(0);
            setTime(25 * 60);
          }}
          style={{ backgroundColor: 'var(--green)' }}>
          Finalizar
          <FaCheck />
        </CountdownButton>
      ) : null}
    </CountdownContainer>
  );
};

export default Cowntdown;
