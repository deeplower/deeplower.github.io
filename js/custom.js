// document.addEventListener('DOMContentLoaded', function() {
//     console.log('Custom.js file loaded');
//     console.log('DOM fully loaded and parsed');

//     var isImageVisible = true; // 初始背景是否为图片，根据需求设置

//     var toggleButton = document.getElementById('toggle-background');
//     console.log('Toggle button element:', toggleButton); // 输出按钮元素，检查是否为 null

//     if (!toggleButton) {
//         console.error('Toggle button with id "toggle-background" not found.');
//         return;
//     }

//     toggleButton.addEventListener('click', function() {
//         console.log('Button clicked!'); // 点击按钮时输出信息

//         var body = document.body;
//         if (isImageVisible) {
//             console.log('Switching to background color');
//             // 切换为背景颜色
//             body.style.background = '#696969';
//         } else {
//             console.log('Switching to background image');
//             // 切换为背景图片
//             // body.style.background = 'url(./img/Ganyu.jpg) no-repeat 0% 0%/ cover';
//             body.style.background = 'url(https://img-blog.csdnimg.cn/direct/c00a24fe9905401cbe3229d7464ff72b.jpeg) no-repeat 0% 0%/ cover';
//         }
//         isImageVisible = !isImageVisible; // 切换状态
//     });
// });
