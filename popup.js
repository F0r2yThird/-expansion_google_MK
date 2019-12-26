function show_hide_password(target){
  var input = document.getElementById('passwordField');
    if (input.getAttribute('type') == 'password') {
      target.classList.add('view');
      input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }

  return false;
}



// function save_options() {
//  //  var loginField=document.getElementById('loginField').value;
//  //  var passwordField=document.getElementById('passwordField').value;

//  //  chrome.storage.local.set({"loginField": loginField}, function() {
//  //        console.log("The values stored are: " + loginField);
//  //    });

//  // chrome.storage.local.set({"passwordField": passwordField}, function() {
//  //        console.log("The values stored are: " + passwordField);
//  //    });




// // var xhr = new XMLHttpRequest ()                                   // создаем объект запроса

// // var body = 'loginField=' + encodeURIComponent(loginField) +
// //           '&passwordField=' + encodeURIComponent(passwordField) +
// //           '&key=cUAl)u40gRrzrFTiGz~2WC:e:ez!K1iw03=XRd2Mr8o)oDtKD';
// // xhr.open("POST", "https://billing.mediakvant.ru/ipa.php", true);  //открываем асинхронное подключение
// // xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); // отправляем кодировку
// // xhr.timeout = 3000;
// // xhr.send(body);                                                        // отправляем POST запрос
// // // var resultText = XMLHttpRequest.responseText;
// // xhr.onreadystatechange = function()          //ждем ответа от сервера
// //   {        
// //     if (xhr.readyState == 4) {                 // ответ пришел
// //       if (xhr.status == 200) {                // сервер вернул код 200 (что хорошо)
// //         alert(xhr.responseText);
// //       } else {
// //           alert(`Ошибка! ${xhr.status}: ${xhr.statusText}`);
// //       }
// //     }
// //   }
// // }
// // alert(`Hello ${loginField}`);

// document.getElementById('save').addEventListener('click', save_options);

// // xhr.responseText
