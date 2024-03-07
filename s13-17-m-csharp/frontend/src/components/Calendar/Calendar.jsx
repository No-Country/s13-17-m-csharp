import React from 'react';
import arrow from '../../assets/arrow.svg';
import styles from './calendar.module.css';
import { Hour } from './Hour';

import {
  formatDate,
  formatDay,
  generateSchedule,
  currentWeekAppointments
} from '../../utils/schedule';

const Calendar = ({ appointments, doctor }) => {
  let slidePos = 0;
  const step = 128;
  const [schedule, setSchedule] = React.useState([]);
  const [showMore, setShowMore] = React.useState(false);
  const slider = React.useRef(null);

  const moveCarousel = (val) => {
    slidePos += val;

    if (slidePos < -(schedule.length - 2)) {
      slidePos = 0;
    }
    if (slidePos > 0) {
      slidePos = -(schedule.length - 2);
    }

    slider.current.style.transform = `translateX(${slidePos * step}px)`;
  };

  React.useEffect(() => {
    setSchedule(
      generateSchedule(currentWeekAppointments(appointments))
    );
  }, []);

  return (
    <>
      <div
        className={`${styles.sm_p} mt-5 w-full flex justify-center  relative md:px-[46px]`}>
        <section className="absolute top-[12px] left-2">
          <button onClick={() => moveCarousel(1)}>
            <img
              className="rotate-180"
              alt="left-arrow"
              src={arrow}
            />
          </button>
        </section>

        <section className="absolute top-[12px] right-2">
          <button onClick={() => moveCarousel(-1)}>
            <img alt="right-arrow" src={arrow} />
          </button>
        </section>

        {schedule.length > 0 && (
          <article className="w-[250px] overflow-hidden flex md:w-[100%]">
            <main className="flex " ref={slider}>
              {schedule.map(({ date, hours }, index) => (
                <section
                  key={index}
                  className={`w-28 mx-2 md:w-[90px] ${showMore ? '' : 'md:max-h-[210px]'}`}>
                  <header className=" flex flex-col items-center bg-color-cards rounded">
                    <h2 className="font-bold font-font-title text-base">
                      {formatDay(date)}
                    </h2>
                    <p className="font-medium font-font-text text-sm">
                      {formatDate(date)}
                    </p>
                  </header>
                  <ul className="flex flex-col items-center mt-3 ">
                    {hours.map(({ hour, available }, index) => (
                      <Hour
                        medico={doctor}
                        key={index}
                        date={date}
                        hour={hour}
                        available={available}
                      />
                    ))}
                  </ul>
                </section>
              ))}
            </main>
          </article>
        )}
      </div>
      <button
        onClick={() => setShowMore(!showMore)}
        className="hidden p-2 md:flex items-center font-font-text text-base text-color-secondary">
        <p>{showMore ? 'Mostrar menos' : 'Mostrar más horas'}</p>
        <img
          className={`${showMore ? 'rotate-90' : '-rotate-90'}`}
          alt="arrow-show-more"
          src="../Back.svg"
        />
      </button>
    </>
  );
};

export { Calendar };
