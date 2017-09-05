// JavaScript Document

function $(id){
	return document.getElementById(id);
	}

window.onload = function(){

	var inp = $("inpBtn").getElementsByTagName("input");
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
			if(this.value==""){
				this.value = inp[i].word;
				inp[i].t=true;
			//	p[i].style.visibility="hidden";
				return;
				}
			}
		}
		
// 点击登录按钮


// 点击注册按钮
		$("registerBtn").onclick = function(){
			
			location.href="Register.html";
			
		}

//第一个框，验证用户名、邮箱和手机号
		

//第三个框，验证密码是否正确
		

		

}