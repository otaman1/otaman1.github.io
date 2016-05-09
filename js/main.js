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