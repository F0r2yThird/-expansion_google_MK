function qryData() {

  var xhr = new XMLHttpRequest ()                                   // создаем объект запроса

  var body = 'loginField=' + encodeURIComponent(loginField) +
            '&passwordField=' + encodeURIComponent(passwordField) +
            '&key=cUAl)u40gRrzrFTiGz~2WC:e:ez!K1iw03=XRd2Mr8o)oDtKD';
  xhr.open("POST", "https://billing.mediakvant.ru/ipa.php", true);  //открываем асинхронное подключение
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // отправляем кодировку
  xhr.timeout = 3000;
  xhr.send(body);                                                        // отправляем POST запрос
  // var resultText = XMLHttpRequest.responseText;
  xhr.onreadystatechange = function()          //ждем ответа от сервера
    {        
      if (xhr.readyState == 4) {                 // ответ пришел
        if (xhr.status == 200) {                // сервер вернул код 200 (что хорошо)
          alert(xhr.responseText);
        } else {
            alert(`Ошибка! ${xhr.status}: ${xhr.statusText}`);
        }
      }
    }
}




function save_options() {
  var loginField=document.getElementById('loginField').value;
  var passwordField=document.getElementById('passwordField').value;

  chrome.storage.local.set({"loginField": loginField}, function() {
        console.log("The values stored are: " + loginField);
    });

 chrome.storage.local.set({"passwordField": passwordField}, function() {
        console.log("The values stored are: " + passwordField);
    });
alert(`Hello ${loginField}`);
alert(`Hello ${passwordField}`);
}

// document.getElementById('save').addEventListener('click', save_options);

function load() {
  chrome.storage.local.get('loginField', function(result) {
    if (result['loginField']) {
      // alert(result['loginField']);
      document.getElementById("loginField").value = result['loginField'];
    } else {
            document.getElementById("loginField").value = "none!!!";
            }
  });
  chrome.storage.local.get('passwordField', function(result) {
    // alert(result['passwordField']);
    if (result['passwordField']) {
      document.getElementById("passwordField").value = result['passwordField'];
    } else {
             document.getElementById("passwordField").value = "none???";
           }
  });

 }

chrome.storage.onChanged.addListener(function(changes, namespace) {
        for (var key in changes) {
          var storageChange = changes[key];
          console.log('Storage key "%s" in namespace "%s" changed. ' +
                      'Old value was "%s", new value is "%s".',
                      key,
                      namespace,
                      storageChange.oldValue,
                      storageChange.newValue);
       }
});

load();
 
document.getElementById("btnSave").addEventListener('click', save_options);
document.getElementById("btnSave").onclick = qryData;

//  <a href="#" onclick="showFun()">Ссылка для нажимания</a>
// <div id="myShowBlock">А это текст, который будет то появляться, то исчезать</div>

// var visible = true;
// function showFun() {
//     if(visible) {
//         document.getElementById('myShowBlock' ).style.display = 'none';
//         visible = false;
//     } else {
//         document.getElementById('myShowBlock' ).style.display = 'block';
//         visible = true;
//     }
// }

