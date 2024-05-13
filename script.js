// JavaScriptに変換されたCプログラム
function calculateItems() {
  var kind = ["剛力", "俊敏", "技巧", "心", "印", "富"];
  var goriki = [0, 0, 0];
  var shunbin = [0, 0, 0];
  var gikou = [0, 0, 0];
  var kokoro = [0, 0, 0];
  var shirushi = [0, 0, 0];
  var tomi = 0;

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 5; j++) {
      var number = parseInt(document.getElementById(kind[i] + "Lv" + j).value);
      for (var k = 0; k < number; k++) {
        if (j == 0) {
          shirushi[0] += 7;
          shirushi[1] += 14;
          shirushi[2] += 9;
          tomi += 40000;
          if (i == 0) {
            goriki[0] += 28;
            goriki[1] += 56;
            goriki[2] += 36;
          } else if (i == 1) {
            shunbin[0] += 28;
            shunbin[1] += 56;
            shunbin[2] += 36;
          } else if (i == 2) {
            gikou[0] += 28;
            gikou[1] += 56;
            gikou[2] += 36;
          } else if (i == 3) {
            kokoro[0] += 28;
            kokoro[1] += 56;
            kokoro[2] += 36;
          }
        } else if (j == 1) {
          shirushi[0] += 5;
          shirushi[1] += 14;
          shirushi[2] += 9;
          tomi += 37000;
          if (i == 0) {
            goriki[0] += 20;
            goriki[1] += 56;
            goriki[2] += 36;
          } else if (i == 1) {
            shunbin[0] += 20;
            shunbin[1] += 56;
            shunbin[2] += 36;
          } else if (i == 2) {
            gikou[0] += 20;
            gikou[1] += 56;
            gikou[2] += 36;
          } else if (i == 3) {
            kokoro[0] += 20;
            kokoro[1] += 56;
            kokoro[2] += 36;
          }
        } else if (j == 2) {
          shirushi[0] += 3;
          shirushi[1] += 12;
          shirushi[2] += 9;
          tomi += 32000;
          if (i == 0) {
            goriki[0] += 12;
            goriki[1] += 48;
            goriki[2] += 36;
          } else if (i == 1) {
            shunbin[0] += 12;
            shunbin[1] += 48;
            shunbin[2] += 36;
          } else if (i == 2) {
            gikou[0] += 12;
            gikou[1] += 48;
            gikou[2] += 36;
          } else if (i == 3) {
            kokoro[0] += 12;
            kokoro[1] += 48;
            kokoro[2] += 36;
          }
        } else if (j == 3) {
          shirushi[0] += 0;
          shirushi[1] += 9;
          shirushi[2] += 9;
          tomi += 25000;
          if (i == 0) {
            goriki[0] += 0;
            goriki[1] += 36;
            goriki[2] += 36;
          } else if (i == 1) {
            shunbin[0] += 0;
            shunbin[1] += 36;
            shunbin[2] += 36;
          } else if (i == 2) {
            gikou[0] += 0;
            gikou[1] += 36;
            gikou[2] += 36;
          } else if (i == 3) {
            kokoro[0] += 0;
            kokoro[1] += 36;
            kokoro[2] += 36;
          }
        } else if (j == 4) {
          shirushi[0] += 0;
          shirushi[1] += 5;
          shirushi[2] += 5;
          tomi += 15000;
          if (i == 0) {
            goriki[0] += 0;
            goriki[1] += 20;
            goriki[2] += 20;
          } else if (i == 1) {
            shunbin[0] += 0;
            shunbin[1] += 20;
            shunbin[2] += 20;
          } else if (i == 2) {
            gikou[0] += 0;
            gikou[1] += 20;
            gikou[2] += 20;
          } else if (i == 3) {
            kokoro[0] += 0;
            kokoro[1] += 20;
            kokoro[2] += 20;
          }
        }
      }
    }
  }

  var output = document.getElementById("output");
  output.innerHTML = "<div class='result-box'>" +
    "<table class='result-table'>" +
    "<tr><th></th><th>証</th><th>指南</th><th>極意書</th></tr>" +
    "<tr><td>剛力</td><td>" + goriki[0] + "枚</td><td>" + goriki[1] + "枚</td><td>" + goriki[2] + "枚</td></tr>" +
    "<tr><td>俊敏</td><td>" + shunbin[0] + "枚</td><td>" + shunbin[1] + "枚</td><td>" + shunbin[2] + "枚</td></tr>" +
    "<tr><td>技巧</td><td>" + gikou[0] + "枚</td><td>" + gikou[1] + "枚</td><td>" + gikou[2] + "枚</td></tr>" +
    "<tr><td>心</td><td>" + kokoro[0] + "枚</td><td>" + kokoro[1] + "枚</td><td>" + kokoro[2] + "枚</td></tr>" +
    "<tr><td>印</td><td>" + shirushi[0] + "枚</td><td>" + shirushi[1] + "枚</td><td>" + shirushi[2] + "枚</td></tr>" +
    "</table></div><p>コイン" + tomi + "枚</p>";
}
