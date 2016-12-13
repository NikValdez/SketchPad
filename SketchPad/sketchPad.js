var column = 16;
var row = 16;


$(document).ready(function() {
$(function createGrid() {     
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < column; j++) {
        	$("<div>").addClass("squares").appendTo("#container"); 
        }
   	 
    }
});

$(function draw() {	
	$(".squares").hover(function(){
	$(this).css("background-color", "blue");
    });
});

$(".reset").click(function() {
        $(".squares").css({"background-color" : "#FFF", "border-color" : "#FFF"});
    });

});


 







	
