function bmi() {
  let val_one = document.getElementById("one").value;
  val_one = Number(val_one);
  val_one = Math.pow(val_one, 2);
  let val_two = document.getElementById("two").value;
  val_two = Number(val_two);
  if (val_one && val_two === 0) {
    document.getElementById("show").innerHTML = "Please Enter The Value";
    return;
  }

  let res = val_two / val_one;
  res = res.toFixed(1);

  if (res < 18.5) {
    document.getElementById("show").innerHTML = res + " Underweight👎";
  } else if (res >= 18.5 && res <= 24.9) {
    document.getElementById("show").innerHTML = res + "  NormalWeight👍";
  } else if (res >= 25 && res <= 29.9) {
    document.getElementById("show").innerHTML = res + " Overweight👎";
  } else if (res >= 30 && res <= 34.9) {
    document.getElementById("show").innerHTML = res + " Obese👎";
  } else if (res > 35) {
    document.getElementById("show").innerHTML = res + " Morbid obesity👎";
    return;
  }
}
