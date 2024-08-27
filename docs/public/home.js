window.addEventListener('load', go);

go();

function go() {
  if (location.pathname == '/') {
    // 获取所有的cookie
    var allCookies = document.cookie;

    // 将所有的cookie字符串分割成单独的cookie
    var cookiesArray = allCookies.split('; ');

    // 判断cookie是否存在
    if (cookiesArray.length === 0) {
      window.location.href = '/en/';
      return;
    }

    // 循环遍历每个cookie，找到需要的cookie值
    for (var i = 0; i < cookiesArray.length; i++) {
      var cookie = cookiesArray[i];
      var cookiePair = cookie.split('=');

      // 去除空格
      var cookieName = cookiePair[0].trim();

      if (cookieName === 'nf_lang') {
        var cookieValue = cookiePair[1];
        if (cookieValue === 'zh-CN' || cookieValue === 'zh') {
          window.location.href = '/zh/';
          return;
        }

        if (cookieValue === 'en-US' || cookieValue === 'en') {
          window.location.href = '/en/';
          return;
        }
      }
    }

    window.location.href = '/en/';
  }
}