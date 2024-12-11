document.addEventListener('DOMContentLoaded', function () {
    console.log('Custom.js 文件已加载');
    console.log('DOM 已完全加载和解析');

    var isImageVisible = true; // 初始背景是否为图片

    // 尝试从 localStorage 中获取上次保存的 flag 值和背景选择，如果没有则默认为初始值
    var flag = localStorage.getItem('backgroundFlag') || '1';
    var backgroundChoice = localStorage.getItem('backgroundChoice') || 'image';

    flag = parseInt(flag); // 将 flag 转换为整数

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

    // 根据上次保存的背景选择设置初始背景
    // var body = document.body;
    // if (backgroundChoice === 'image') {
    //     // 根据 flag 的值设置初始背景图片
    //     if (flag === 1) {
    //         body.style.background = 'url(https://deeplower.github.io/about/index/Ganyu.jpg) no-repeat 0% 0%/ cover';
    //     } else if (flag === 2) {
    //         body.style.background = 'url(https://deeplower.github.io/about/index/Bronya.jpg) no-repeat 0% 0%/ cover';
    //     } else if (flag === 3) {
    //         body.style.background = 'url(https://deeplower.github.io/about/index/Shenzi.jpg) no-repeat 0% 0%/ cover';
    //     } else if (flag === 4) {
    //         body.style.background = 'url(https://deeplower.github.io/about/index/Snow.jpg) no-repeat 0% 0%/ cover';
    //     } else {
    //         body.style.background = 'url(https://deeplower.github.io/about/index/Tomorrow.jpg) no-repeat 0% 0%/ cover';
    //     }
    //     opacitySlider.style.display = 'block'; // 显示滑块
    // } else 
    // {
        // 设置初始纯色背景
        // body.style.background = '#dfdfdf';
        body.style.background = 'url(https://deeplower.github.io/about/index/bg.png) no-repeat 0% 0%/ cover';
        opacitySlider.style.display = 'none'; // 隐藏滑块
        //toggleButton.style.display = 'none'; // 隐藏按钮
    // }

    // 切换按钮点击事件监听
    toggleButton.addEventListener('click', function () {
        // 切换背景
        if (isImageVisible) {
            body.style.background = '#dfdfdf';
            opacitySlider.style.display = 'none'; // 隐藏滑块
            // 保存当前背景选择到 localStorage
            localStorage.setItem('backgroundChoice', 'color');
        } else {
            // 根据 flag 的值设置背景图片
            if (flag === 1) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Ganyu.jpg) no-repeat 0% 0%/ cover';
            } else if (flag === 2) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Bronya.jpg) no-repeat 0% 0%/ cover';
            } else if (flag === 3) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Shenzi.jpg) no-repeat 0% 0%/ cover';
            } else if (flag === 4) {
                body.style.background = 'url(https://deeplower.github.io/about/index/Snow.jpg) no-repeat 0% 0%/ cover';
            } else {
                body.style.background = 'url(https://deeplower.github.io/about/index/Tomorrow.jpg) no-repeat 0% 0%/ cover';
            }
            opacitySlider.style.display = 'block'; // 显示滑块
            // 保存当前背景选择到 localStorage
            localStorage.setItem('backgroundChoice', 'image');
        }

        // 切换状态
        isImageVisible = !isImageVisible;

        // 保存当前 flag 值到 localStorage
        localStorage.setItem('backgroundFlag', flag.toString());
        
        // 更新 flag 值，以备下次点击使用
        flag = flag % 5 + 1; // 循环递增，确保在 1 到 5 之间循环
    });
});
