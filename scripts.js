var yela_sprite = 'data:image/gif;base64,R0lGODlhDgAUAPMAAAAAAC0tLTs8MGJeP0A/QEpJStZcGIGCd6SeZ7CpboyNgbW1teXFs+XYs+/iuwAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJDQAAACwAAAAADgAUAAAEZxDIueqaGNiddW1OeGWfE5idB4ZOWjpM6y5NnQJBQOxEnumFoMEQDGB0umEhYDBOmMBi89gkFpq9Y0+JdUpqOl7AhhkgEmj0IGNWtxPrSTs+Lw/ukjteIjgoFAJ8fweBAAKHh3yIgREAIfkECQ0AAAAsAAAAAA4AFAAABGMQyElrXXhZmbvNjSNq1xIGTrBhoeispsi8cGNvQBAQPKFXu4LQYBCqJsECUVg4SnaGANMIJESHTuQOZc0+dSKfU0AeIBJo9GAiUJjVg/dAAGjLJfGB4kA+5CltCnRkG2R0ABEAOw==';
var audio = new Audio('https://cdn.jsdelivr.net/gh/Tashiro64/yela-konami@v1.0.2/audio_yela.mp3');

setInterval(function(){
	if(Math.floor(Math.random() * 7) == 1){
		GenerateOneYela();
	}
},350);

function GenerateOneYela(){
    audio.play();
	var id = Math.floor(Math.random() * 10000);
	$('body').append('<img class="yela'+id+'c" style="position:fixed;bottom:0;left:-50px;image-rendering: pixelated;width:2vw;" src="'+yela_sprite+'" />');
	var thisYela = $('img.yela'+id+'c');
	
	thisYela.animate({ left: '110%' }, 10000, "linear", function(){
		thisYela.remove();
        audio.play();
	});
}