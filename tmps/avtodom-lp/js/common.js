$(document).ready(function() {

	$("#recall").submit(function(){
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Ваша заявка успешно отправлена.\nМы свяжемся с Вами в течении 5 минут.");
		});
		return false;
	});	
	$("#wash").submit(function(){
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Ваша заявка успешно отправлена.\nМы свяжемся с Вами в течении 5 минут.");
		});
		return false;
	});
	$("#evacuator").submit(function(){
		$.ajax({
			type: "POST",
			url: "../send.php",
			data: $(this).serialize()
		}).done(function(){
			alert("Ваша заявка успешно отправлена.\nМы свяжемся с Вами в течении 5 минут.");
		});
		return false;
	});

});