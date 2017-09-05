// JavaScript Document

function $(id){
	return document.getElementById(id);
	}

window.onload = function(){

	var inp = $("inpBtn").getElementsByTagName("input");
	var p = $("inpBtn").getElementsByTagName("p");
	for(let i=0;i<inp.length;i++){
	
		inp[i].t = true;
	inp[i].onclick = function(){
		if(inp[i].t==false){
			return;
			}
			inp[i].word = this.value;
			inp[i].t = false;
			this.value=""
		}
		inp[i].onblur = function(){
			inp[i].pword = p[i].innerHTML;
			if(this.value==""){
				this.value = inp[i].word;
				inp[i].t=true;
				p[i].style.visibility="hidden";
				return;
				}
//第一个框，验证邮箱和手机号
			if(i==0){
				if(this.value.indexOf("@")>-1){
					var b = checkReg("email",this.value);
				}else{
					var b = checkReg("phone",this.value);
				}
					isErrorContact(b);
			}
//第二个框，验证用户名
		

//第三个框，验证密码
			if(i==2){
						var b = checkReg("password",this.value);
						isErrorContact(b);
					}

//第四个框，检查密码输入是否正确
			if(i==3){
						if(inp[i].value==inp[i-1].value){
							var b=true;
						}else{
							var b=false;
						}
						isErrorContact(b);
					}

//第五个框，验证验证码输入是否正确
			
			

//判断条件输出
	function isErrorContact(b){
						if(b==true){
							p[i].style.visibility="hidden";
						}else{
							p[i].innerHTML = inp[i].pword;
							p[i].style.visibility="visible";
						}
					}
			

			}
		}

}