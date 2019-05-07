num_button=document.getElementsByClassName("num");
operator=document.getElementsByClassName('operator');
clear=document.getElementsByClassName('clear');
back=document.getElementsByClassName('back');
monitor=document.getElementsByClassName('monitor');
equ=document.getElementsByClassName('equ');
window.addEventListener('load',function(){
        clear=clear[0];
        back=back[0];
        monitor=monitor[0];
        equ=equ[0];
        for(i=0;i<num_button.length;i++){
            num_button[i].addEventListener('click',addEnd);
        }
        for(i=0;i<operator.length;i++){
            operator[i].addEventListener('click',addEnd);
        }
        clear.addEventListener('click',clearAll);
        back.addEventListener('click',backOne);
        equ.addEventListener('click',answer);
        clearAll();
    }
)

function addEnd(event){
	t=event.target;
	monitor.innerHTML=monitor.innerHTML+t.innerHTML;
}
	
function clearAll(){
	monitor.innerHTML="";
}

function backOne(){
	content=monitor.innerHTML;
	content=content.substring(0,content.length-1);
	monitor.innerHTML=content;
}

function answer(){
	exp=monitor.innerHTML;
	ans=eval(exp);
	monitor.innerHTML=ans;
}