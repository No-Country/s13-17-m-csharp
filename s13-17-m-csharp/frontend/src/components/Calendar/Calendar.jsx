import React from 'react';
import arrow from '../../assets/arrow.svg';

const generateHours = (start, end) => {
  const interval = 30;
  const hours = [];

  for (let hour = start; hour <= end; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      let formattedHour = hour.toString().padStart(2, '0');
      let formattedMinute = minute.toString().padStart(2, '0');
      hours.push({
        hour: `${formattedHour}:${formattedMinute}`,
        available: minute === 0 ? true : false
      });
    }
  }

  return hours;
};

const generateSchedule = () => {
  const today = new Date();
  const schedule = [];

  for (let i = 0; i < 8; i++) {
    const date = new Date();
    date.setDate(today.getDate() + i);

    schedule.push({
      date,
      hours: generateHours(9, 17)
    });
  }
  console.log(schedule);
  return schedule;
};

const formatDay = (date) => {
  const today = new Date();

  if (
    date.getDay() == today.getDay() &&
    date.getMonth() == today.getMonth()
  ) {
    return 'Hoy';
  }

  if (
    date.getDay() == today.getDay() + 1 &&
    date.getMonth() == today.getMonth()
  ) {
    return 'Mañana';
  }

  const formatedDay = Intl.DateTimeFormat('es', {
    weekday: 'short'
  }).format(date);

  return formatedDay.charAt(0).toUpperCase() + formatedDay.slice(1);
};

const formatDate = (date) => {
  const formatedDate = Intl.DateTimeFormat('es', {
    day: 'numeric',
    month: 'short'
  })
    .format(date)
    .padStart(6, '0');
  return (
    formatedDate.slice(0, 3) +
    formatedDate.charAt(3).toUpperCase() +
    formatedDate.slice(4)
  );
};

const Calendar = () => {
  const [schedule, setSchedule] = React.useState([]);
  let slidePos = 0;
  const slider = React.useRef(null);

  const moveCarousel = (val) => {
    slidePos += val;

    if (slidePos < -(schedule.length - 2)) {
      slidePos = 0;
    }
    if (slidePos > 0) {
      slidePos = -(schedule.length - 2);
    }

    slider.current.style.transform = `translateX(${slidePos * 128}px)`;
  };

  React.useEffect(() => {
    setSchedule(generateSchedule());
  }, []);

  return (
    <div className="mt-5 w-full flex justify-center pl-[50px] pr-[55px] relative">
      <section className="absolute top-[12px] left-[28px] ">
        <button onClick={() => moveCarousel(1)}>
          <img className="rotate-180" alt="left-arrow" src={arrow} />
        </button>
      </section>

      <section className="absolute top-[12px] right-[28px]">
        <button onClick={() => moveCarousel(-1)}>
          <img alt="right-arrow" src={arrow} />
        </button>
      </section>

      {schedule.length > 0 && (
        <article className="w-[250px] overflow-hidden flex">
          <main className="flex " ref={slider}>
            {schedule.map(({ date, hours }, index) => (
              <section key={index} className="w-28 mx-2">
                <header className=" flex flex-col items-center bg-color-cards rounded">
                  <h2 className="font-bold font-font-title text-lg">
                    {formatDay(date)}
                  </h2>
                  <p className="font-medium font-font-text text-sm">
                    {formatDate(date)}
                  </p>
                </header>
                <ul className="flex flex-col items-center mt-3">
                  {hours.map(({ hour, available }, index) => (
                    <li
                      key={index}
                      className="w-full my-1 font-font-text text-sm">
                      <button
                        className={`${available ? 'bg-color-cards text-color-primary' : 'bg-color-cards-light'}  w-full h-[40px] flex items-center justify-center rounded`}>
                        {hour}
                      </button>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </main>
        </article>
      )}
    </div>
  );
};

export { Calendar };
