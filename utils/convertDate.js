export const ConvertDate = (unix) => {
  let date = new Date(unix * 1000)
  // time
  let hours = date.getHours();
  let minutes = "0" + date.getMinutes();
  let seconds = "0" + date.getSeconds();
  let formattedTime = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`

  // list of month names (is there no better way?)
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

  // date
  let month = date.getUTCMonth();
  let year = date.getFullYear();
  let utc = date.getUTCDate()
  return `${utc} ${monthNames[month]}, the year of our lord ${year} at ${formattedTime}`
}