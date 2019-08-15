;$(function(){$("#close").click(function(){$("#guide").attr("style","display:none!important");});$("#circle3").click(function(){$("#helptext").html("After completing this program you can see your WPM (words per minute), Accuracy and Keys with most mistakes");$("#circle1").css("color","black");$("#circle2").css("color","black");$("#circle3").css("color","blue");});$("#circle1").click(function(){$("#helptext").html("look at the program and start typing the same");$("#circle1").css("color","blue");$("#circle3").css("color","black");$("#circle2").css("color","black");});$("#circle2").click(function(){$("#helptext").html("the keyboard on the screen shows where your fingers should be placed <br><br> highlighted keys are the assigned keys for the respective finger");$("#circle2").css("color","blue");$("#circle1").css("color","black");$("#circle3").css("color","black");});});$("[data-toggle='toggle']").click(function(){var selector=$(this).data("target");$(selector).toggleClass('in');});if(forcedcorrect==true){$("#fc_on").css("background-color","#e3e3e3");$('#title_fc').html('Forced Correction: <b>ON</b>');}
else if(forcedcorrect==false){$("#fc_off").css("background-color","#e3e3e3");$('#title_fc').html('Forced Correction: <b>OFF</b>');}
if(qwerty_active==true){$("#qw").css("background-color","#e3e3e3");;$('#title_kl').html('Layout: <b>QWERTY</b>');}
else if(dvorak_active==true){$("#dv").css("background-color","#e3e3e3");;$('#title_kl').html('Layout: <b>DVORAK</b>');}
else if(colemak_active==true){$("#cm").css("background-color","#e3e3e3");;$('#title_kl').html('Layout: <b>COLEMAK</b>');}
function reset_lesson(language,course){if(course=='True')
new_url="/tutor"
else
new_url="/lessons/"
$.ajax({type:'GET',url:"/ajax_reset_lesson/",data:{foo:'#'},success:function(result){$("#replacethis").html('Reset Succesful..');window.location.assign(new_url);},error:function(result){$("#replacethis").html('Reset Succesful..');window.location.assign(new_url);}});};function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+d.toGMTString();document.cookie=cname+"="+cvalue+";"+expires+";path=/";}
function getCookie(cname){var name=cname+"=";var decodedCookie=decodeURIComponent(document.cookie);var ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' '){c=c.substring(1);}
if(c.indexOf(name)==0){return c.substring(name.length,c.length);}}
return"";}
function checkCookie(){var user=getCookie("username");if(user!=""){alert("Welcome again "+user);}else{user=prompt("Please enter your name:","");if(user!=""&&user!=null){setCookie("username",user,30);}}}
function hide_keyboard_cookie(){var kbs=getCookie('keyboard_status');if(kbs==''||kbs=='visible')
{setCookie('keyboard_status','invisible',2);$('#keyboard').hide(200);$('#humanhands').hide(200);document.getElementById('main').style['height']='500px';$('#togglehide1').text('Show keyboard');}
else if(kbs=='invisible')
{setCookie('keyboard_status','visible',2);$('#keyboard').show(200);$('#humanhands').show(200);document.getElementById('main').style['height']='200px';$('#togglehide1').text('Hide keyboard');}}
function hide_keyboard_cookie_auto(){var kbs=getCookie('keyboard_status');if(kbs==''||kbs=='visible')
{$('#keyboard').show();$('#humanhands').show();document.getElementById('main').style['height']='200px';$('#togglehide1').html('<i class="fa fa-keyboard-o" aria-hidden="true"></i> Hide Keyboard');}
else if(kbs=='invisible')
{$('#keyboard').hide();$('#humanhands').hide();document.getElementById('main').style['height']='500px';$('#togglehide1').text('Show keyboard');}}
window.onload=hide_keyboard_cookie_auto;function hide_keyboard(){$.ajax({type:'GET',url:"/ajax_hide_kbd/",data:{foo:'aman-deep-86596356'},success:function(result){if(result=='hidden')
$('#keyboard').hide(500);else if(result=='visible')
$('#keyboard').show(500);},error:function(result){}});};$(window).load(function(){$('#loading').hide();});;function helloworld(){var currentUrl=window.location.href;var newUrl=currentUrl.replace(/(\d+)\/$/,function(x){return parseInt(x,10)+1+'/'})
location.assign(newUrl);}
function previous1(){var currentUrl=window.location.href;var newUrl=currentUrl.replace(/(\d+)\/$/,function(x){return parseInt(x,10)-1+'/'})
location.assign(newUrl);}