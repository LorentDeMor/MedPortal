//good = "Вы счастливее,чем 80% людей на планете!";
//good1 =
//  "Если сегодня ляжете спать по раньше, то это избавит Вас от недосыпа, а в остальном Вам не на что жаловаться.";

document.querySelector(".cl").onclick = plural;
function plural() {
  var x;
  let able = document.querySelectorAll(".opros");
  for (let i = 0; i < able.length; i++) {
    if (able[i].checked) {
      x = able[i].value;
      console.log(x);
    }
  }
  var y;
  let tren = document.querySelectorAll(".opros1");
  for (let u = 0; u < tren.length; u++) {
    if (tren[u].checked) {
      y = tren[u].value;
      console.log(y);
    }
  }
  var z;
  let ztren = document.querySelectorAll(".opros2");
  for (let p = 0; p < tren.length; p++) {
    if (ztren[p].checked) {
      z = ztren[p].value;
      console.log(z);
    }
  }
  var t = x + y + z;
  console.log(t);
  // if (t === "111333555") {
  //   document.querySelector(".output").innerHTML = good;
  // } else if (t === "222333555") {
  //   document.querySelector(".output").innerHTML = good1;
  // }
  if (x === "111") {
    document.querySelector(".output").innerHTML = "Хороший сон это здорово";
  } else if (x === "222") {
    document.querySelector(".output").innerHTML =
      "Вам сегодня стоит лечь по раньше";
  }
  if (y === "333") {
    document.querySelector(".output1").innerHTML = "Пора сворачивать горы!";
  } else if (y === "444") {
    document.querySelector(".output1").innerHTML =
      "Перенапрягаться не стоит, можно попить Компливит";
  }
  if (z === "555") {
    document.querySelector(".output2").innerHTML = "Так держать!";
  } else if (z === "666") {
    document.querySelector(".output2").innerHTML = "Можно остаться дома.";
  }
}
