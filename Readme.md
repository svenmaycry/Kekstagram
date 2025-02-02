#Кекстаграм: простой аналог Инстаграма
Автор: Влад Тимошенко <svenmaycry@yandex.ru>


---

Стек: HTML, CSS, JS, Babel.

---

Кекстаграм — простой аналог Инстаграма. Проект служит платформой для практики нативного JavaScript и работы с CSS. Это одностраничное приложение.

Проект включает в себя следующий функционал:

* Отображение данных, полученных с сервера (с помощью fetch) в виде потока изображений (карточек). При нажатии на любую из карточек откроется подробная информация о ней, включая количество лайков и комментариев. Если комментариев больше пяти, которые также получены с сервера, первоначально на странице будут отображаться только пять, сопровождаемые кнопкой «загрузить еще». Эта кнопка будет загружать дополнительные комментарии партиями по пять, пока не будут показаны все комментарии.

* Фотографии можно сортировать по количеству комментариев, отображая случайную выборку из десяти, или в порядке, полученном с сервера.

* При открытии меню доступна функция загрузки, нажав на центральную кнопку. Это позволяет пользователям загружать в интерфейс любое изображение, после чего редактировать его, регулируя его масштаб и применяя один из доступных фильтров. Пользователи также могут регулировать интенсивность фильтра от 0 до 100%.

* Пользователи могут добавлять хэштеги (проверка гарантирует, что разрешено не более пяти хэштегов, они не слишком короткие или длинные, не состоят исключительно из цифр и не дублируются) и основной текст сообщения (с проверкой для максимум 140 символов). Предусмотрены различные варианты уведомлений, указывающие, было ли изображение успешно отправлено или произошла ошибка на стороне сервера. В случае ошибки введенная пользователем информация не будет потеряна, и у пользователей будет возможность повторить попытку отправки.
