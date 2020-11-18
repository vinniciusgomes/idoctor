const formatHour = (hour: string) => {
  hour.split(':');

  console.log(hour[0], hour[1]);

  let formattedHour = `${hour[0]}:${hour[1]}`;

  return formattedHour;
};

export default formatHour;
