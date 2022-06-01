const main_div = document.getElementById("colordiv");
const btn = document.getElementById('btn');

btn.addEventListener('click', function (event) {
    let colorCode = () => Math.floor(Math.random()*16).toString(16) 
    let makeColorCode = () => "#"+ Array.from({length: 6}).map(colorCode).join("")

    main_div.style.backgroundColor = makeColorCode()
  });
