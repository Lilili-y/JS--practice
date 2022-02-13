class Tab {
    constructor(id) {
        this.main = document.querySelector(id);
        //this.lis = this.main.getElementsByTagName('li');  //getElementsByTagName获取到的伪数组是动态的，会随dom的变化而自动变化
        this.addBtn = this.main.querySelector('.tabadd');
        this.ul = this.main.querySelector('ul');
        this.tabscon = this.main.querySelector('.tabscon');
        this.init();
    }
    init() {
        this.uploadData();
        this.addBtn.onclick = this.addTab.bind(this.addBtn, this);
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            this.as[i].onclick = this.removeTab.bind(this.as[i], this);
            this.spans[i].ondblclick = this.editTab;
            this.sec[i].ondblclick = this.editTab;
        }
    }
    //获取页面中的li和section标签
    uploadData() {
        this.lis = this.main.querySelectorAll('li');
        this.sec = this.main.querySelectorAll('section');
        this.as = this.main.querySelectorAll('.icon-guanbi');
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child');
    }
    //切换功能  
    toggleTab(that) {
        that.clearClass()
        this.className = 'liactive';
        that.sec[this.index].className = 'conactive';
    }
    //清除类名
    clearClass() {
        for (var i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sec[i].className = '';
        }
    }
    //添加功能
    addTab(that) {
        that.clearClass();
        var num = Math.random().toFixed(2);
        var li = ` <li class="liactive"><span>${num}</span><span class="iconfont icon-guanbi"></span></li>`;
        that.ul.insertAdjacentHTML('beforeend', li);
        var sc = ` <section class="conactive">${num}</section>`;
        that.tabscon.insertAdjacentHTML('beforeend', sc);
        that.init();
    }
    //删除功能
    removeTab(that, e) {
        e.stopPropagation();
        var index = this.parentNode.index;
        this.parentNode.remove();
        that.sec[index].remove();
        that.init();
        index--;
        if (document.querySelector('.liactive')) return;
        if (index < 0 && document.querySelector('li')) {
            that.lis[0].click();
        } else {
            that.lis[index] && that.lis[index].click();
        }

    }
    //编辑功能
    editTab() {
        if (!(document.querySelector('.fisrstnav li span:first-child input'))) {//如果双击的时候里面已经是文本框了，即不执行里面的代码
            var str = this.innerHTML;
            // 双击禁止选定文字
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            this.innerHTML = `<input type=text value="${str}">`;
            var input = this.children[0];
            input.select();
            input.onblur = function () {
                this.parentNode.innerHTML = this.value;
            };
            input.onkeyup = function (e) {
                if (e.keyCode === 13) {
                    this.blur();
                }
            }
            return
        }
        var input = this.children[0];
        var str = input.value;
        this.innerHTML = '';
        this.innerText = str;
        console.log(111);
    }
}
new Tab('#tab')