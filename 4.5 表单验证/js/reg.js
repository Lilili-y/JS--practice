window.onload = function () {
    var regtel = /^1[345789]\d{9}$/;
    var regqq = /^1\d{4,}$/;
    var regnc = /^[\u4e00-\u9fa5]{2,16}$/;
    var regmsg = /^\d{6}$/;
    var regpwd = /^[a-zA-Z0-9_]{6,16}$/;
    var tel = document.querySelector("#tel");
    var qq = document.querySelector('#qq');
    var nc = document.querySelector('#nc');
    var msg = document.querySelector('#msg');
    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    regexp(tel, regtel);
    regexp(qq, regqq);
    regexp(nc, regnc);
    regexp(msg, regmsg);
    regexp(pwd, regpwd);
    function regexp(ele, reg) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '✅ 格式输入正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '❌ 格式输入错误';
            }
        }
    }
    surepwd.onblur = function () {
        if (this.value == pwd.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '✅ 密码输入正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '❌ 密码输入错误';
        }
    }

}