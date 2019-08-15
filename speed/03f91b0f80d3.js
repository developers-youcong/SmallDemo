;var forcedcorrect=true;var executed1=false;var idleTime=0;iota=0;iota_down=0;function timerIncrement(){idleTime=idleTime+1;if(idleTime>5){pauseButton();executed=false;}}
$("#clck").click(pauseButton);$("#clck1").click(resumeButton);function pauseButton(){clearInterval(myVar);};function resumeButton(){myVar=setInterval(setTime,1000);};snum=49
function scrollcodebox(){$(document).ready(function(){console.log(snum);$("#main").animate({scrollTop:snum+iota},"slow");snum+=49;iota+=22;});}
var minutesLabel=document.getElementById("minutes");var secondsLabel=document.getElementById("seconds");var totalSeconds=0;function setTime()
{++totalSeconds;secondsLabel.innerHTML=pad(totalSeconds%60);minutesLabel.innerHTML=pad(parseInt(totalSeconds/60));if(executed1==false){var idleInterval=setInterval(timerIncrement,1000);executed1=true;}}
function pad(val)
{var valString=val+"";if(valString.length<2)
{return"0"+valString;}
else
{return valString;}}
function showResult(){clearInterval(myVar);keysSorted=Object.keys(xobj).sort(function(a,b){return xobj[b]-xobj[a]})
totalChars=totalKeys-extraSpaces;words=totalChars/5;theminutes=totalSeconds/60;wpm1=words/theminutes;wpm=Math.round(words/theminutes);accuracy=Math.round(((totalChars-wrongKey)/totalChars)*100);document.getElementsByClassName('modal-body')[0].innerHTML='<label><strong>Words Per Minutes</strong></label>:  '+wpm+'</br>'+'<label><strong>Accuracy</strong></label>:  '+accuracy+'%'+'</br>'+'<label><strong>Time elapsed</strong></label>: '+pad(parseInt(totalSeconds/60))+':'+pad(totalSeconds%60);if(keysSorted.length!=0){document.getElementsByClassName('modal-body')[0].innerHTML+='</br><strong>keys with most Mistakes (in order)</strong> :  ';for(var uu in keysSorted){document.getElementsByClassName('modal-body')[0].innerHTML+="<span3 class='xobj_key'> <kbd>"+keysSorted[uu]+"</kbd></span3>"
if(uu==9){break;}}}
$.ajax({type:'GET',url:"/ajaxview/",data:{foo:'amandeep'},success:function(result){},error:function(result){}});$("#myModal").modal();};function checkSpacesReturn(){var z=i-2;if(z>0){spanner=document.getElementsByTagName('span');while(spanner[z].innerHTML.charCodeAt(0)=='32'){z--;}
if(spanner[z].innerHTML.charCodeAt(0)=='10'){while(spanner[i-1].innerHTML.charCodeAt(0)=='32'){i--;}}}}
function escapeChar(unescapedChar){var esChar;switch(unescapedChar){case'&lt;':esChar='<';break;case'&gt;':esChar='>';break;case'&amp;':esChar='&';break;case'&apos;':esChar="'";break;case'&quot;':esChar='""';break;default:esChar=unescapedChar;}
return esChar;};function highlightKeysAndFingers(){function autoFun(fingerX){str1=escapeChar(codebox.childNodes[i].innerHTML);fingerX.forEach(function(value,index){if(str1.charCodeAt(0)==value){if(fingerX==finger4){nodelistobj=document.getElementsByClassName('fin-4');nodelistobj1=document.getElementsByClassName('finger-4');}
else if(fingerX==finger1){nodelistobj=document.getElementsByClassName('fin-1');nodelistobj1=document.getElementsByClassName('finger-1');}
else if(fingerX==finger2){nodelistobj=document.getElementsByClassName('fin-2');nodelistobj1=document.getElementsByClassName('finger-2');}
else if(fingerX==finger3){nodelistobj=document.getElementsByClassName('fin-3');nodelistobj1=document.getElementsByClassName('finger-3');}
else if(fingerX==finger5){nodelistobj=document.getElementsByClassName('fin-5');nodelistobj1=document.getElementsByClassName('finger-5');}
else if(fingerX==finger6){nodelistobj=document.getElementsByClassName('fin-6');nodelistobj1=document.getElementsByClassName('finger-6');}
else if(fingerX==finger7){nodelistobj=document.getElementsByClassName('fin-7');nodelistobj1=document.getElementsByClassName('finger-7');}
else if(fingerX==finger8){nodelistobj=document.getElementsByClassName('fin-8');nodelistobj1=document.getElementsByClassName('finger-8');}
else if(fingerX==finger9){nodelistobj=document.getElementsByClassName('fin-9');nodelistobj1=document.getElementsByClassName('finger-9');}
else if(fingerX==finger10){nodelistobj=document.getElementsByClassName('fin-10');nodelistobj1=document.getElementsByClassName('finger-10');}}})};autoFun(finger1);autoFun(finger2);autoFun(finger3);autoFun(finger4);autoFun(finger5);autoFun(finger6);autoFun(finger7);autoFun(finger8);autoFun(finger9);autoFun(finger10);};function clearAllNodes(){toRemoveNodes=document.getElementsByClassName('key');toRemoveNodes1=document.getElementsByClassName('finger');for(var n=0;n<toRemoveNodes.length;n++){toRemoveNodes[n].id='';}
for(var n=0;n<toRemoveNodes1.length;n++){toRemoveNodes1[n].id='';}};var collectio=document.getElementsByClassName('key');function highlighter1(fuckyou){for(var i=0;collectio.length>i;++i){if(fuckyou==collectio[i].getAttribute('class').slice(8,11).trim()){collectio[i].id='active';}
else if(fuckyou==collectio[i].getAttribute('class').slice(17,20).trim()&&collectio[i].getAttribute('class').slice(12,16)=='keyl'){collectio[i].id='active';document.getElementsByClassName('key-sl')[0].id='active1';document.getElementsByClassName('finger-1')[0].id='active1';}
else if(fuckyou==collectio[i].getAttribute('class').slice(17,20).trim()&&collectio[i].getAttribute('class').slice(12,16)=='keyr'){collectio[i].id='active';document.getElementsByClassName('key-sr')[0].id='active1';document.getElementsByClassName('finger-10')[0].id='active1';}}};var astring="";var motu=$('#main').text();motu=motu.replace(/\t/g,'    ')
arraycode=motu.split("");document.getElementById('main').innerHTML="";for(var v=0;v<arraycode.length;v++){if(arraycode[v]=='\n'){astring=astring+"<span class='ret'>"+arraycode[v]+"</span>";}
else{astring=astring+"<span class='nocolor'>"+arraycode[v]+"</span>";}}
document.getElementById('main').innerHTML=astring;var codebox=document.getElementById('main');totalKeys=codebox.children.length;var i=0,str;var correctKey,wrongKey,extraSpaces;correctKey=wrongKey=extraSpaces=0;var executed=false;var enterCount=0;if(keyvar=='qwerty'){var finger1=[49,113,97,122,126,96,33,81,65,90];var finger2=[50,119,115,120,64,87,83,88];var finger3=[51,102,100,99,35,101,69,68,67];var finger4=[114,116,102,103,118,98,36,37,52,53,82,84,70,71,86,66];var finger5=[];var finger6=[32];var finger7=[54,55,121,117,104,106,110,109,94,38,85,74,89,85,72,74,77,78];var finger8=[56,105,107,44,42,60,73,75];var finger9=[57,111,108,46,40,62,76,79];var finger10=[48,112,59,47,45,91,93,39,92,10,95,58,63,34,123,125,124,95,43,61,41,80];var qwerty_active=true;}
else if(keyvar=='dvorak'){var finger1=[96,126,49,33,34,39,97,65,58,59];var finger2=[50,64,60,44,111,79,113,81];var finger3=[51,35,46,62,101,69,106,74];var finger4=[52,36,53,37,112,80,121,89,117,85,105,73,107,75,120,88];var finger5=[];var finger6=[32];var finger7=[54,94,55,38,102,70,103,71,100,68,104,72,98,66,109,77];var finger8=[56,42,99,67,116,84,119,87];var finger9=[57,40,114,82,110,78,118,86,122,90];var finger10=[48,41,91,123,93,125,108,76,47,63,61,43,92,124,115,83,45,95,10,90,122];var dvorak_active=true;}
else if(keyvar=='colemak'){var finger1=[96,126,49,33,81,113,8,65,97,90,122];var finger2=[50,64,87,119,82,114,88,120];var finger3=[51,35,102,70,83,115,99,67];var finger4=[52,36,53,37,112,80,103,71,116,84,100,68,118,86,98,66];var finger5=[];var finger6=[32];var finger7=[54,94,55,38,74,106,76,108,72,104,78,110,75,107,77,109];var finger8=[56,42,117,85,101,69,60,44];var finger9=[57,40,121,89,73,105,62,46];var finger10=[48,41,45,95,61,43,8,59,58,91,123,92,124,93,125,34,39,10,47,63,111,79];var colemak_active=true;}
str=codebox.childNodes[0].innerHTML
body=document.getElementsByTagName('body')[0];body.addEventListener("keydown",function listener1(evt1){if(evt1.which==8){evt1.preventDefault();if(str1.charCodeAt(0)==10){enterCount-=1;if(enterCount%3==0)
{scrollcodebox_down();}}
document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)current(?!\S)/g,'')
document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)redcolor(?!\S)/g,'')
document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)visited(?!\S)/g,'');document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)ret1(?!\S)/g,' ret');document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)ret2(?!\S)/g,'');if(i!=0)
{bully=checkSpacesReturn();i--;if(document.getElementsByTagName("span")[i].className=='nocolor redcolor'||document.getElementsByTagName("span")[i].className=='ret ret2'||document.getElementsByTagName("span")[i].className=='nocolor visited redcolor')
{wrongKey-=1;}
else
{correctKey-=1;}}
document.getElementsByTagName('span')[i].className+=' current';str1=escapeChar(codebox.childNodes[i].innerHTML);document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)redcolor(?!\S)/g,'');clearAllNodes();highlightKeysAndFingers();for(var a=0;a<nodelistobj.length;a++){nodelistobj[a].id='focus';}
nodelistobj1[0].id='active';highlighter1(str1.charCodeAt(0));}})
body.addEventListener("keypress",function listener(evt){if(codebox.childNodes[i].nodeType==1){if(evt.which==32||evt.which==39||evt.which==47){evt.preventDefault();}
if(executed==false){myVar=setInterval(setTime,1000);executed=true;}
idleTime=0;str=escapeChar(codebox.childNodes[i].innerHTML);if(evt.which==str.charCodeAt(0))
{document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)current(?!\S)/g,' visited');document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)redcolor(?!\S)/g,' visited');i++;if(i==totalKeys){clearAllNodes();showResult();}
document.getElementsByTagName('span')[i].className+=' current';correctKey+=1;}
else if(str.charCodeAt(0)==10)
{enterCount1=enterCount+1;if(enterCount1%3==0)
{scrollcodebox();}
if(evt.which==13)
{correctKey+=1;document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)ret(?!\S)/g,' ret1');document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)ret2(?!\S)/g,' ret1');}
else{wrongKey+=1;document.getElementsByTagName('span')[i].className+=' ret2';}
enterCount+=1;document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)current(?!\S)/g,'');document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)redcolor(?!\S)/g,'');i++;str=codebox.childNodes[i].innerHTML;while(str.charCodeAt(0)==32){str=codebox.childNodes[++i].innerHTML;extraSpaces+=1;}
document.getElementsByTagName('span')[i].className+=' current';}
else{document.getElementsByTagName('span')[i].className+=' redcolor';document.getElementsByTagName("span")[i].className=document.getElementsByTagName("span")[i].className.replace
(/(?:^|\s)current(?!\S)/g,'');wrongKey+=1;i++;if(i==totalKeys){clearAllNodes();showResult();}
document.getElementsByTagName('span')[i].className+=' current';if(xobj[str]==null){xobj[str]=1;}
else{xobj[str]+=1;}}}
highlightKeysAndFingers();clearAllNodes();var a;for(var a=0;a<nodelistobj.length;a++){nodelistobj[a].id='focus';}
nodelistobj1[0].id='active';highlighter1(str1.charCodeAt(0));});document.getElementsByTagName('span')[i].className='current';highlightKeysAndFingers();var a;for(var a=0;a<nodelistobj.length;a++){nodelistobj[a].id='focus';}
nodelistobj1[0].id='active';highlighter1(str.charCodeAt(0));var xobj=new Object();function changelayout(layout){_url="/ajax_klayout/"+layout;$.ajax({type:'GET',url:_url,data:{},success:function(result){themyurl='/loginview?next='+result.myurl+'&message=Login Required';currentUrl=window.location.href;if(result.status=='false'){window.location.assign(themyurl);}
else{window.location.assign(currentUrl);}},error:function(result){}});}
function changefc(fc_status){_url="/ajax_fc/"+fc_status;$.ajax({type:'GET',url:_url,data:{},success:function(result){themyurl='/loginview?next='+result.myurl+'&message=Login Required';currentUrl=window.location.href;if(result.status=='false'){window.location.assign(themyurl);}
else{window.location.assign(currentUrl);}},error:function(result){}});}
function changefc_on(){$.ajax({type:'GET',url:"/ajax_fc_on/",data:{foo:'#'},success:function(result){window.location.assign(window.location.href);},error:function(result){}});}