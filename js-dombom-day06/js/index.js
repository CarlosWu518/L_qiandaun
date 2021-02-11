window.addEventListener('load', function() {

    var iconRight = document.querySelector('.icon-right');
    var iconLeft = document.querySelector('.icon-left');
    var wrapper = document.querySelector('.wrapper');
    var pagination = document.querySelector('.pagination');
    var wrapperWith = wrapper.offsetWidth;
    //动画函数部分
    function animate(obj, target, callback) {
        // 先清除以前的定时器，只保留当前的一个定时器执行
        clearInterval(obj.timer);
        obj.timer = setInterval(function() {
            // 步长值写到定时器的里面
            // 把我们步长值改为整数 不要出现小数的问题
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                // 停止动画 本质是停止定时器
                clearInterval(obj.timer);
                // 回调函数写到定时器结束里面
                callback && callback();
            }
            // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            obj.style.left = obj.offsetLeft + step + 'px';

        }, 15);
    }
    // 第一步 鼠标离开轮播图时隐藏左右箭头开始
    wrapper.addEventListener('mouseenter', function() {
        iconRight.style.display = 'block';
        iconLeft.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    wrapper.addEventListener('mouseleave', function() {
        iconRight.style.display = 'none';
        iconLeft.style.display = 'none';
        timer = setInterval(function() {
            iconRight.click();
        }, 3000);
    });
    iconRight.addEventListener('mouseenter', function() {
        this.style.display = 'block';
        iconLeft.style.display = 'block';
    });
    iconLeft.addEventListener('mouseenter', function() {
        this.style.display = 'block';
        iconRight.style.display = 'block';
    });
    iconRight.addEventListener('mouseleave', function() {
        this.style.display = 'none';
        iconLeft.style.display = 'none';
    });
    iconLeft.addEventListener('mouseleave', function() {
        this.style.display = 'none';
        iconRight.style.display = 'none';
    });
    //第一步 鼠标离开轮播图时隐藏左右箭头结束
    //第二步 点击圆点，改变轮播图，和小圆点样式 开始
    //声明ul的作用在于判断有多少个图片li
    var ul = wrapper.querySelector('ul');
    var ol = pagination.querySelector('.circle');
    for (var i = 0; i < ul.children.length; i++) {
        //创建li的节点
        var li = document.createElement('li');
        //将每个li添加数组索引值
        li.setAttribute('index', i);
        //添加li的节点
        ol.appendChild(li);
        //点击改变小圆点的样式
        li.addEventListener('click', function() {
            //排他思想
            for (var i = 0; i < ol.children.length; i++) {
                //每个li的样式先全部清空
                ol.children[i].className = '';
            }
            //当前点击的li赋给样式
            this.className = 'circleColor';
            //获取当前小圆点的索引值
            var index = this.getAttribute('index');
            //通过索引*该轮播图片离父元素的距离，获得向右平移的距离
            var move = -index * wrapperWith;
            animate(ul, move);
            num = circle = index;
        });
    };
    //默认第一个小圆点带有样式
    ol.children[0].className = 'circleColor';
    //复制第一张图片，用于无缝切换
    var firstImg = ul.children[0].cloneNode(true);
    //将复制的第一张图片放在最后
    ul.appendChild(firstImg);
    var num = 0;
    var circle = 0;
    //节流阀
    var flag = true;
    //右箭头点击功能
    iconRight.addEventListener('click', function() {
        if (flag) {
            flag = false;
            //如果移动到最后一张
            if (num == ul.children.length - 1) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -num * wrapperWith, function() {
                flag = true;
            });
            //当点击右侧箭头时，小圆点也随之改变
            circle++;
            if (circle == ol.children.length) {
                circle = 0;
            }
            circleChange();
        }
    });
    //左箭头点击功能
    iconLeft.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = ul.children.length - 1;
                ul.style.left = -num * wrapperWith + 'px';
            }
            num--;
            animate(ul, -num * wrapperWith, function() {
                flag = true;
            });
            //当点击右侧箭头时，小圆点也随之改变
            circle--
            if (circle < 0) {
                circle = ol.children.length - 1;
            }
            circleChange();
        }

    });
    //左右箭头排他思想
    function circleChange() {
        for (let i = 0; i < ol.children.length; i++) {
            ol.children[i].className = '';
        };
        ol.children[circle].className = 'circleColor';
    };
    var timer = setInterval(function() {
        iconRight.click();
    }, 3000);
})