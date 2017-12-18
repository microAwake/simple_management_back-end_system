//login.html
// $(document).reday(function(){
//     //some code
// })
//相当于：
$(function(){
    $('input[name="loginbtn"]').click(function(){
        var username=$('input[name="username"]');
        var password=$('input[name="password"]');
        var verify=$('input[name="textverify"]');
        var _username=$.trim(username.val());
        var _password=$.trim(password.val());
        var _verify=$.trim(verify.val());

        //用户名不能为空，且长度不少于5位
        if(_username ===''){
            $('.loginInformation').text('请输入用户名');
            username.focus();
            return false;
        }else if(_username.length<5){
            $('.loginInformation').text('用户名长度不能少于5位');
            username.focus();
            return false;
        }

        //密码不能为空，且长度在6-18之间，同时密码包含字母和数字
        if(_password ===''){
            $('.loginInformation').text('请输入密码');
            password.focus();
            return false;
        }else if(_password.length<6 || _password.length>18){
            $('.loginInformation').text('密码的长度应在6至18位之间');
            password.focus();
            return false;
        }else if(! /(\d)+([a-zA-Z])+/.test(_password)){
            $('.loginInformation').text('为安全起见，密码中请包含字母和数字');
            password.focus();
            return false;
        }

        //验证不能为空
        if(_verify===''){
            $('.loginInformation').text('请输入验证码');
            verify.focus();
            return false;
        }else if(_verify.toLowerCase()!=='yjsf'){
            $('.loginInformation').text('验证码输入错误，请重新输入');
            verify.focus();
            return false;
        }else{
            $('.loginInformation').text('请稍后，正在为您跳转');
        }
    });
});

//index.html
$(function(){
    //点击headerLeft 的li标签，被点击的增加class 'header-left-chosen',其余li标签则移除class 'header-left-chosen'
    $('.headerLeft li').click(function(){
        $(this).addClass('header-left-chosen').siblings().removeClass('header-left-chosen');
        var index=$(this).index();
        //找到点击的header li的索引index，继而找到.side-show(多个标签所共有的类)的index标签,设置display:block;其余设置display:none
        $('.sideLeft').find('.side-show').eq(index).css('display','block').siblings('.side-show').css('display','none');
    });

    var tag=true;
    $('.sideLeft dl dt').click(function(){
        // 左侧边栏背景图片切换
        if(tag){
            $(this).css('background-position','right -40px');
            tag=false;
        }else{
            $(this).css('background-position','right 10px');
            tag=true;
        }
        //切换dd的展开收起状态
        $(this).next().slideToggle('fast');
    });

    $('.headerRight-icon2').click(function(){
        //进入页面，点击隐藏菜单，左侧栏隐藏；点击显示菜单，左侧栏显示
        if($('.sideLeft').is(':visible')){
            $('.headerRight-icon2').children('a').text('显示菜单');
            $('.sideLeft').css('display','none');
            $('.contentMain').css('left','0');
        }else{
            $('.headerRight-icon2').children('a').text('隐藏菜单');
            $('.sideLeft').css('display','block');
            $('.contentMain').css('left','180px');
        }
    });

});

