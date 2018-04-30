
var clickfocus=0;
 var stringShow=0; 
$(document).ready(function(){
   
    $(".hexdummy").mouseenter(function(){
       $(this).find(".hex").addClass("hexNot");
       $(this).find(".hextext").addClass("hextextNot");
    });
    
    $(".hexdummy").mouseleave(function(){
       $(this).find(".hex").removeClass("hexNot");
       $(this).find(".hextext").removeClass("hextextNot");
    });
    
    stringShow = $(".sectionActive").attr('id');
    clickfocus=$(".active");
$(".hexdummy").click(function(){
        
        if(clickfocus){
            clickfocus.removeClass("active");
        }
        clickfocus=$(this).find(".hex");
    
        if(stringShow!= $(this).data("id")){
           $("#"+stringShow).hide();
        
        stringShow = $(this).data("id");
        clickfocus.addClass("active");
        
     $("#"+stringShow).show().css({"left":"100%","position":"absolute"}).animate({"left":"0px"}, "slow");
        }
    });
    

    var soundtrack = new Audio('Track4.mp3');
soundtrack.loop=true;
soundtrack.volume=0.3;
    soundtrack.play();
    
 
});