// zoom.js

// 页面加载时，尝试从本地存储中获取保存的缩放比例并应用
document.addEventListener('DOMContentLoaded', function() {
    var savedZoom = localStorage.getItem('zoomValue');
    if (savedZoom) {
      applyZoom(savedZoom);
      document.getElementById('zoomInput').value = savedZoom;
    }
  });
  
  // 应用缩放比例，并保存到本地存储
  function applyZoom(zoomValue) {
    if (zoomValue === undefined) {
      zoomValue = parseFloat(document.getElementById('zoomInput').value);
    }
    if (isNaN(zoomValue)){
        zoomValue==0.75;
    }
    if (zoomValue < -0.00000001 || zoomValue > 2) {
      alert('请输入有效的缩放比例，范围在0到2之间。');
      return;
    }
  
    if (document.body.style.zoom !== undefined) {
      document.body.style.zoom = zoomValue;
      // 保存用户选择的缩放比例到本地存储
      localStorage.setItem('zoomValue', zoomValue);
    } else {
      alert('抱歉，您的浏览器不支持页面缩放功能。');
    }
  }
  
// // zoom.js

// // 页面加载时，尝试从 cookies 中获取保存的缩放比例并应用
// window.onload = function() {
//     var savedZoom = getCookie('zoomValue');
//     if (savedZoom) {
//       applyZoom(savedZoom);
//       document.getElementById('zoomInput').value = savedZoom;
//     }
//   };
  
//   // 应用缩放比例，并保存到 cookies
//   function applyZoom(zoomValue) {
//     if (zoomValue === undefined) {
//       zoomValue = parseFloat(document.getElementById('zoomInput').value);
//     }
  
//     if (isNaN(zoomValue) || zoomValue < 0.1 || zoomValue > 2) {
//       alert('请输入有效的缩放比例，范围在0.1到2之间。');
//       return;
//     }
  
//     if (document.body.style.zoom !== undefined) {
//       document.body.style.zoom = zoomValue;
//       // 保存用户选择的缩放比例到 cookies，有效期设为 365 天
//       setCookie('zoomValue', zoomValue, 365);
//     } else {
//       alert('抱歉，您的浏览器不支持页面缩放功能。');
//     }
//   }
  
//   // 获取指定名称的 cookie 值
//   function getCookie(name) {
//     var cookieName = name + '=';
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var cookieArray = decodedCookie.split(';');
//     for (var i = 0; i < cookieArray.length; i++) {
//       var cookie = cookieArray[i].trim();
//       if (cookie.indexOf(cookieName) === 0) {
//         return cookie.substring(cookieName.length, cookie.length);
//       }
//     }
//     return null;
//   }
  
//   // 设置 cookie
//   function setCookie(name, value, days) {
//     var expires = '';
//     if (days) {
//       var date = new Date();
//       date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//       expires = '; expires=' + date.toUTCString();
//     }
//     document.cookie = name + '=' + value + expires + '; path=/';
//   }
  