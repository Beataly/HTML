window.onload = function () {
    //��ȡ����
    var adv = $("adv");
    var dir = $("dir");
    var content = $("content");
    var contentChildren = content.children;
    var climb = $("climb");
    var cilmbChildren = climb.children;

    //��������������¥������ɫ
    var liCurrent = 0;
    var srcInterLi = null;
    var colors = ["red","blue","yellow","orange","green","white"];
    for(var i = 0;i<contentChildren.length;i++){
        contentChildren[i].style.backgroundColor = colors[i];
        cilmbChildren[i].style.backgroundColor = colors[i];
        //��liԪ��һ������ֵ
        cilmbChildren[i].index = i;
        //��ת׼��
        //���¼�
        cilmbChildren[i].onclick = function(event){
            event = event || window.event;
            var li = event.srcElement;
            //�ҵ������Ӧ��liԪ��
            var index = li.index;
            //�ҵ������Ӧ����������
            var contentLi = contentChildren[index];
            //��������Ӧ����������
            var liTarget = contentLi.offsetTop;
            clearInterval(srcInterLi);
            srcInterLi = setInterval(function(){
                liCurrent = liCurrent +(liTarget-liCurrent)/10;
                window.scrollTo(0,liCurrent);
                if(Math.abs(liTarget-liCurrent) < 2){
                    clearInterval(srcInterLi);
                }
            },20)
        }
    }

    var advTop = adv.offsetTop;
    var srcInter = null;

    //��ǰ��λ��
    var current = 0;

    window.onscroll = function () {
        var topy = sctop();
        //��������³��ֹ�����
        if (topy > 200) {
            dir.style.display = "block";
            dir.style.opacity = (topy - 200) / 500;
            dir.style.filter = "alpha(opacity = " + parseInt((topy - 200) / 5) + ")";
        } else {
            dir.style.display = "none";
        }
        //��浯��Ч��
        var target = topy + advTop;
        clearInterval(srcInter);
        srcInter = setInterval(function(){
            if(Math.abs(target-current) < 2){
                clearInterval(srcInter);
            }
            current = current +(target-current)/20;
            adv.style.top = current+"px";
        },20);
    }

}
