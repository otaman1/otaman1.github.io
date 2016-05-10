$("doument").ready(function(){
	$("#open_menu").on("click",open_menu);
	$("#close_menu").on("click",close_menu);
});
$("#open_menu").click(function(){
       $("#top_line_menu").animate( { width:"200px" }, { queue:false, duration:1000 } )
});
function open_menu (event){
	   $("#open_menu").hide(0);
	   $("#close_menu").show(500);
       $("#top_line_menu").show(1000);
}
function close_menu (event){
	   $("#open_menu").show(500);
	   $("#close_menu").hide(0);
       $("#top_line_menu").hide(1000);
}
$("doument").ready(function(){
	$("#download").on("click",open_presentation);
});
function open_presentation (event){
	   $("#skip_content").slideToggle(1000);
}
$(document).ready(function(){
    $('a[href^="#description"],a[href^="#presentation"],a[href^="#trade"],a[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
	    var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});