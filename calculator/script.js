function calc() {
  var total;
  var ammo = document.getElementById("principal").value;
  console.log(ammo);
  var intrate = document.getElementById("rate").value;
  console.log(intrate);
  var year = document.getElementById("years").value;
  console.log(year);
  total = ((ammo / 100) * intrate) * year;
  var curryr = 2021;
   var tyear = parseInt(curryr)+parseInt(year);
  console.log(tyear);
  document.getElementById("result").innerHTML = "If you deposit\t" + ammo + "\tat an interest rate of\t" + intrate + "%" + "\tyou will receive an ammount of\t" + total + "\tin the year\t" + tyear;
}
