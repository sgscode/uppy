

// Эффект при наведении курсора с файлами на зону выгрузки
function dropenter(e) {
  // Подавить событие
  e.stopPropagation();
  e.preventDefault();
  // Визуальный эффект "зоны выгрузки" при заходе на нее курсора
  var tmp = document.getElementById('dropbox');
  tmp.style.background = '#FF0000';
  tmp.innerHTML = 'Drop your files here';
}



// Эффект при отпускании файлов или выходе из зоны выгрузки
function dropleave() {
  // Привести "зону выгрузки" в первоначальный вид
  var tmp = document.getElementById('dropbox');
  tmp.style.background = '#DDDDDD';
  tmp.innerHTML = 'Drop-zone';
}



// Проверка и отправка файлов на загрузку
function dodrop(e) {
  var dt = e.dataTransfer;
  if (!dt && !dt.files) {
    return false;
  }

  // Получить список загружаемых файлов
  var files = dt.files;

  // Fix для Internet Explorer
  dt.dropEffect = "copy";

  // Загрузить файлы по очереди, проверив их размер
  for (var i = 0; i < files.length; i++) {
    if (files[i].size < 15000000) {
      // Отправить файл в AJAX-загрузчик
      ajax_upload(files[i]);
    }
    else {
      alert('Размер файла превышает допустимое значение');
    }
  }

  // Подавить событие перетаскивания файла
  e.stopPropagation();
  e.preventDefault();
  return false;
}



// AJAX-загрузчик файлов
function ajax_upload(file) {
  // Mozilla, Safari, Opera, Chrome
  if (window.XMLHttpRequest) {
    var http_request = new XMLHttpRequest();
  }
  // Internet Explorer
  else if (window.ActiveXObject) {
    try {
      http_request = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
      try {
        http_request = new ActiveXObject("Microsoft.XMLHTTP");
      }
      catch (e) {
        // Браузер не поддерживает эту технологию
        return false;
      }
    }
  }
  else {
    // Браузер не поддерживает эту технологию
    return false;
  }
  var name = file.fileName || file.name;

  // Добавить для файла новую полосу-индикатор загрузки
  var tmp = document.getElementById('upload_overall');
  var new_div = document.createElement("div");
  new_div.className = 'percent_div';
  tmp.appendChild(new_div);

  // Обработчик прогресса загрузки
  // Полный размер файла - event.total, загружено - event.loaded
  http_request.upload.addEventListener('progress', function (event) {
    var percent = Math.ceil(event.loaded / event.total * 100);
    var back = Math.ceil((100 - percent) * 6);
    new_div.style.backgroundPosition = '-' + back + 'px 0px';
    new_div.innerHTML = (name + ': ' + percent + '%');
  }, false);

  // Отправить файл на загрузку
  http_request.open('POST', 'http://localhost/filehost/web/', true);
  http_request.setRequestHeader("Referer", location.href);
  http_request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  http_request.setRequestHeader("X-File-Name", encodeURIComponent(name));
  http_request.setRequestHeader("Content-Type", "application/octet-stream");
  http_request.onreadystatechange = ajax_callback(http_request, new_div, name);
  http_request.send(file);
}

function ajax_callback(http_request, obj, name) {
  return function () {
    if (http_request.readyState == 4) {
      if (http_request.status == 200) {
        // Вернулся javascript
        if (http_request.getResponseHeader("Content-Type")
                .indexOf("application/x-javascript") >= 0) {
          eval(http_request.responseText);
        }
        // Файл загружен успешно
        else {
          obj.style.backgroundPosition = '0px 0px';
          obj.innerHTML = (name + ': 100%');
          upload_overall.innerHTML=http_request.responseText;
        }
      }
      else {
        // Ошибка загрузки файла
      }
    }
  };
}

