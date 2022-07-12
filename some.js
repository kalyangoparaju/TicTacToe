var chances = -1;

var win = "";

var array = new Array(3);
for (let i = 0; i < 3; i++) {
  array[i] = new Array(3);
}
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    array[i][j] = "";
  }
}

$(".elements").click(
  (fun = () => {
    var st = this.event.target.id;

    console.log(chances);
    game(st);
  })
);
function game(st) {
  var x = document.getElementById(st).innerText;
  if (chances % 2 == 0) {
    var ne = "X";
  } else {
    ne = "O";
  }
  if (x == "") {
    document.getElementById("instructor").innerHTML = ne + ": turn";
    chances += 1;
    turn(st);
  } else {
    if (chances % 2 == 0) {
      var ne = "O";
    } else {
      ne = "X";
    }
    document.getElementById("instructor").innerHTML =
      "its already placed " + ne + " turn";
  }
}
function turn(st) {
  var turner = "";
  if (chances % 2 == 0) {
    turner = "X";
  } else {
    turner = "O";
  }

  document.getElementById(st).innerHTML = turner;
  if (turner == "X")
    document.getElementById(st).style.backgroundColor = "RED";
  else document.getElementById(st).style.backgroundColor = "#1959bf";

  var sub = st.substring(1).split("");

  array[sub[0]][sub[1]] = turner;
  checkwin();
}
function checkwin() {
  for (var i = 0; i < 3; i++) {
    var strx = "XXX";
    var stro = "OOO";
    var checkstrrow = "";
    var checkstrcol = "";
    for (var j = 0; j < 3; j++) {
      checkstrrow += array[i][j];
      checkstrcol += array[j][i];
    }
    if (checkstrrow == strx || checkstrcol == strx) {
      console.log("winner is " + "  X  ");
      document.getElementById("winner").innerHTML = " X is the winner";
      document.getElementById("winner").style.color="red";
      document.getElementById("instructor").innerHTML = " X is the winner";
      document.getElementById("winner").style.visibility = "visible";

      break;
    } else if (checkstrrow == stro || checkstrcol == stro) {
      console.log("winner is " + "  O  ");
      document.getElementById("winner").innerHTML = " O is the winner";
      document.getElementById("winner").style.color="#1959bf";
      document.getElementById("instructor").innerHTML = " O is the winner";
      document.getElementById("winner").style.visibility = "visible";
    } else {
      checkstr = "";
    }
  }
  var checkstrdia1 = "";
  var checkstrdia2 = "";
  var k = 2;
  for (var i = 0; i < 3; i++) {
    checkstrdia1 += array[i][i];
    checkstrdia2 += array[i][k];
    k--;
  }

  if (checkstrdia1 == strx || checkstrdia2 == strx) {
    console.log("winner is " + "  X  ");
    document.getElementById("winner").innerHTML = " X is the winner";
    document.getElementById("instructor").innerHTML = " X is the winner";
    document.getElementById("winner").style.color="red";

    document.getElementById("winner").style.visibility = "visible";
  } else if (checkstrdia1 == strx || checkstrdia2 == stro) {
    console.log("winner is " + "  O  ");
    document.getElementById("winner").innerHTML = " O is the winner";
    document.getElementById("winner").style.color="#1959bf";
    document.getElementById("instructor").innerHTML = " O is the winner";
    document.getElementById("winner").style.visibility = "visible";
  } else {
    if (chances == 8) {
      document.getElementById("winner").innerHTML = " GAME DRAW";
      document.getElementById("instructor").innerHTML = "GAME DRAW";
      document.getElementById("winner").style.visibility = "visible";
    }
  }

}
