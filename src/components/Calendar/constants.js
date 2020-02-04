// Height of a single hour
export const calendarHeight = 720;

export const periods = Object.freeze({
  am: "AM",
  pm: "PM"
});

export const hours = [
  { time: "9:00", period: periods.am },
  { time: "10:00", period: periods.am },
  { time: "11:00", period: periods.am },
  { time: "12:00", period: periods.pm },
  { time: "1:00", period: periods.pm },
  { time: "2:00", period: periods.pm },
  { time: "3:00", period: periods.pm },
  { time: "4:00", period: periods.pm },
  { time: "5:00", period: periods.pm },
  { time: "6:00", period: periods.pm },
  { time: "7:00", period: periods.pm },
  { time: "8:00", period: periods.pm },
  { time: "9:00", period: periods.pm }
];

export const hourBlockHeight = calendarHeight / (hours.length - 1);
