const displayDateAndTime = () => {
  const date = new Date();
  //   alert(date);

  let general = document.getElementById("general");

  general.innerHTML = `
    <p id="date">${date.toDateString()}</p>
    <p id="time">${date.toLocaleTimeString()}</p>
  `;
  console.log(general);
};

setInterval(displayDateAndTime, 100);
