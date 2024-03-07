const formatTime = (num) => num.toString().padStart(2, '0');

const generateHours = (start, end) => {
  const interval = 30;
  const hours = [];

  for (let hour = start; hour <= end; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      let formattedHour = formatTime(hour);
      let formattedMinute = formatTime(minute);
      hours.push({
        hour: `${formattedHour}:${formattedMinute}`,
        available: true
      });
    }
  }

  return hours;
};

const generateSchedule = (weekAppointments) => {
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

  for (let dayOfWeek of schedule) {
    const key = formatDate(dayOfWeek.date);
    if (weekAppointments.has(key)) {
      for (let objHour of dayOfWeek.hours) {
        if (weekAppointments.get(key).has(objHour.hour)) {
          objHour.available = false;
        }
      }
    }
  }

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

const currentWeekAppointments = (appointments) => {
  const weekAppointments = new Map();
  const today = new Date();
  for (let appointment of appointments) {
    const date = new Date(appointment.fecha_cita + 'Z');

    if (
      date.getDate() >= today.getDate() &&
      date.getDate() <= today.getDate() + 7 &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      const key = formatDate(date);
      const time = `${formatTime(date.getHours())}:${formatTime(date.getMinutes())}`;
      if (weekAppointments.has(key)) {
        weekAppointments.get(key).add(time);
      } else {
        weekAppointments.set(key, new Set().add(time));
      }
    }
  }
  console.log(weekAppointments);
  return weekAppointments;
};

export {
  formatDate,
  formatDay,
  formatTime,
  generateSchedule,
  currentWeekAppointments
};
