document.addEventListener('DOMContentLoaded', function () {
    console.log('Custom.js 文件已加载');
    console.log('DOM 已完全加载和解析');

    var isImageVisible = true; // 初始背景是否为图片
    var flag = 1;

    var toggleButton = document.getElementById('toggle-background');
    console.log('切换按钮元素：', toggleButton);

    if (!toggleButton) {
        console.error('未找到 id 为 "toggle-background" 的切换按钮。');
        return;
    }

    var opacitySlider = document.querySelector('.opacity-slider');
    if (!opacitySlider) {
        console.error('未找到类名为 "opacity-slider" 的滑块元素。');
        return;
    }

    toggleButton.addEventListener('click', function () {
        var body = document.body;

        // 切换背景
        if (isImageVisible) {
            body.style.background = '#696969';
            opacitySlider.style.display = 'none'; // 隐藏滑块
        } else {
            if (flag == 1) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Ganyu.jpg) no-repeat 0% 0%/ cover';
                opacitySlider.style.display = 'block'; // 显示滑块
                flag = flag + 1;
            }
            else if (flag == 2) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Bronya.jpg) no-repeat 0% 0%/ cover';
                opacitySlider.style.display = 'block'; // 显示滑块
                flag = flag + 1;
            }
            else if (flag == 3) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Shenzi.jpg) no-repeat 0% 0%/ cover';
                opacitySlider.style.display = 'block'; // 显示滑块
                flag = flag + 1;
            }
            else if (flag == 4) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Snow.jpg) no-repeat 0% 0%/ cover';
                opacitySlider.style.display = 'block'; // 显示滑块
                flag = flag + 1;
            }
            else {
                body.style.background = 'url(https://deeplower.github.io/about/index/Tomorrow.jpg) no-repeat 0% 0%/ cover';
                opacitySlider.style.display = 'block'; // 显示滑块
                flag = 1;
            }
        }
        // 切换状态
        isImageVisible = !isImageVisible;
    });
});
