var nb_check = {};
nb_check.username = {
	delay: 2000,
	verbose:false,
	validators: {
		notEmpty: {
			message: '请输入您的帐户名'
		},
		stringLength: {
			min: 6,
			max: 20,
			message: '必须输入6到20个字符'
		},
		regexp: {
			regexp: /^[a-zA-Z0-9_]+$/,
			message: '帐户名只包含大小写英文字母或数字、下划线'
		}
	}
};
nb_check.password = {
	validators: {
		notEmpty: {
			message: '请输入您的密码'
		},
		stringLength: {
			min: 6,
			max: 20,
			message: '必须输入6到20个字符'
		}
	}
};
nb_check.confirm_password = {
    validators: {
        notEmpty: {
            message: '请输入您的确认密码'
        },
        identical: {
            field: 'password',
            message: '两次输入的密码必须一致'
        }
    }
},
nb_check.phone = {
	delay: 2000,
	verbose:false,
	validators: {
		notEmpty: {
			message: '请输入您的手机号码'
		},
		stringLength: {
			min: 11,
			max: 11,
			message: '必须输入11位的手机号码'
		},
		regexp: {
			regexp: /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/,
			message: '手机格式不正确'
		}
	}
};
nb_check.email = {
	delay: 2000,
	threshold:6,
	verbose:false,
    validators: {
		notEmpty: {
			message: '请输入您的邮箱地址'
		},
        emailAddress: {
            message: '请输入正确的邮箱地址'
        }
    }
};
nb_check.code = {
	validators: {
		notEmpty:{
			message: '请输入验证码'
		}
	}
};
nb_check.postcode = {
		delay: 2000,
		verbose:false,
		validators: {
			notEmpty: {
				message: '请输入邮政编码'
			},
			regexp: {
				regexp: /^[0-9][0-9]{5}$/,
				message: '请输入正确的邮政编码'
			}
		}
};
//重载验证码    
function fresh_verify(id,url){
   var url = url + '?rand=/'+Math.random();
   $('#'+id).attr('src',url);
}
/**
 * 远程打开模态框
 * @param url 地址
 * @param size big|small  框的大小
 */
function openModal(url,size){
	var size = size?size:'big';
	$('#'+size+'_modal').modal({
		backdrop:'static',
		keyboard:false,
		remote:url
	}).on("hidden.bs.modal", function(){
		$(this).removeData("bs.modal");
	});
}
/**
 * 关闭模态框
 * @param url 地址
 * @param size big|small  框的大小
 */
function closeModal(size){
	var size = size?size:'big';
	$('#'+size+'_modal').modal('toggle');
}
function ajax_form(form_id,url){
	$('#'+form_id).submit(function(e){
		e.preventDefault();
		var form = $('#'+form_id);
		$.post(form.attr('action'),form.serialize(),function(s){
			form_result(s,url);
		},'json');
	});
	$('#'+form_id).submit();
}
function form_result(s,url){
	if(s.status == '1'){
		$('#submit_msg .modal-body').html(s.data);
		$('#submit_msg').modal({backdrop:'static',keyboard:false}).on('hide.bs.modal',function(e){
			location.href = url?url:s.url;
		});
	}else{
		messager(s.data);
	}
}
/**
 * 错误信息提示
 */
function messager(str){
	$('#submit_msg .modal-body').html(str);
	$('#submit_msg').modal({backdrop:'static',keyboard:'false'}).on('hide.bs.modal',function(e){
		$('#submit_msg .modal-body').html('');
	});
	return false;
}
/**
 * 模态框是提示页面
 */
function form_action(e,url){
	e.preventDefault();
	var $form = $(e.target);
	var bv = $form.data('formValidation');
	$.post($form.attr('action'), $form.serialize(), function(s) {
		form_result(s,url);
	    $form.formValidation('disableSubmitButtons', false);
	}, 'json');
}
/**
 * 模态框是编辑页面
 */
function form_action_msg(e,url,reset){
	e.preventDefault();
	var $form = $(e.target);
	var bv = $form.data('formValidation');
	$('#big_modal').on('hide.bs.modal',function(e){
		url?url:location.reload();
	});
	$.post($form.attr('action'), $form.serialize(), function(s) {
		$('#msg').html(s.data);
		if(s.status == '1'){
			$form.formValidation('disableSubmitButtons', true);
		}else{
			$form.formValidation('disableSubmitButtons', false);
		}
	}, 'json');
}
/**
 * 检查身份证号的合法性
 * @returns
 */
function check_idcard(idcard){
	if (idcard.length == 15) {   
		return isValidityBrithBy15IdCard(idcard);   
	}else if (idcard.length == 18){   
		var a_idCard = idcard.split("");// 得到身份证数组   
		if (isValidityBrithBy18IdCard(idcard)&&isTrueValidateCodeBy18IdCard(a_idCard)) {   
			return true;   
		}   
		return false;
	}
	return false;
}
var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];// 加权因子;
var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];// 身份证验证位值，10代表X;
function isTrueValidateCodeBy18IdCard(a_idCard) {   
	var sum = 0; // 声明加权求和变量   
	if (a_idCard[17].toLowerCase() == 'x') {   
		a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作   
	}   
	for ( var i = 0; i < 17; i++) {   
		sum += Wi[i] * a_idCard[i];// 加权求和   
	}   
	valCodePosition = sum % 11;// 得到验证码所位置   
	if (a_idCard[17] == ValideCode[valCodePosition]) {   
		return true;   
	}
	return false;   
}
function isValidityBrithBy18IdCard(idCard18){   
	var year = idCard18.substring(6,10);   
	var month = idCard18.substring(10,12);   
	var day = idCard18.substring(12,14);   
	var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
	// 这里用getFullYear()获取年份，避免千年虫问题   
	if(temp_date.getFullYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){   
		return false;   
	}
	return true;   
}
function isValidityBrithBy15IdCard(idCard15){   
	var year =  idCard15.substring(6,8);   
	var month = idCard15.substring(8,10);   
	var day = idCard15.substring(10,12);
	var temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
	// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
	if(temp_date.getYear()!=parseFloat(year) || temp_date.getMonth()!=parseFloat(month)-1 || temp_date.getDate()!=parseFloat(day)){   
		return false;   
	}
	return true;
}
//返回顶部
function go_top_ex() {  
	var obj = document.getElementById("go_top_btn");  
	if(obj){
		function getScrollTop() {  
			return document.documentElement.scrollTop + document.body.scrollTop;  
		}  
		function setScrollTop(value) {  
			if (document.documentElement.scrollTop) {  
				document.documentElement.scrollTop = value;  
			} else {
				document.body.scrollTop = value;  
			}
		}  
		window.onscroll = function() {  
			getScrollTop() > 0 ? obj.style.display = "": obj.style.display = "none";  
		}  
		obj.onclick = function() {  
			var goTop = setInterval(scrollMove, 10);  
			function scrollMove() {
			setScrollTop(getScrollTop() / 1.1);  
				if (getScrollTop() < 1) clearInterval(goTop);  
			}  
		}		
	}
}  
