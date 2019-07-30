var mousex = 0;
var mousedownn;
var trackbarfocus, trackblockfocus, tracktime;
var statusbarfocus;
var trackid;
var lasttrack;
var playing = false;
var songstatus = false, repeat = false;
var trackdown = false, actualtrack = false;
var playerdown = false;
        
$(document).ready(function () {
$(".songplayer").hide();
                       });
        
function pixelsToSeconds(pixels,maxpixel,maxtime){
            return pixels*maxtime/maxpixel;
            
        }
        
        
        function secondsToPixels(seconds,maxpixel,maxtime){
            return (seconds*maxpixel/maxtime)/maxpixel*100;
            
        }
        
 
        
    $(".trackbarview").on("mousedown",function(event){ 
        event.preventDefault();
        if(!trackbarfocus){
            trackbarfocus=$(this);
        }
        if($(this).is(trackbarfocus)){
        actualtrack=true}
        else{
            actualtrack=false;
        }
        mousex=event.pageX-$(this).offset().left;
        mousedownn=true;
        trackdown=true;
        movebar($(this));
        });
        
    $(".playerbarview").on("mousedown",function(event){
        event.preventDefault();
        mousex=event.pageX-$(this).offset().left;
        mousedownn=true;
        playerdown=true;
        moveplayerbar();
        });
        
function movediamond(barra)
        {
        barra.on("mousemove",function(e){
        if(mousex<trackbarfocus.width()&&mousex>0){
        mousex=event.pageX-$(this).offset().left;
        e.preventDefault(); 
        }
        });
            
        barra.children(".diamond").css({ left:mousex, position:'absolute'});    
    
        barra.children(".trackbar-progress").css({ width:mousex, position:'absolute'}); 
        }
        
function moveplayerdiamond()
        {
        
        $(".playerbarview").on("mousemove",function(e){
            
        if(mousex<$(".playerbarview").width()&&mousex>0){
        mousex=event.pageX-$(this).offset().left;
        e.preventDefault(); }
        });
        $("#diamondthumb").css({ left:mousex, position:'absolute'});    
    
        $(".player-track-progress").css({ width:mousex, position:'absolute'}); 
        }
        
function movebar(barra){
        if (!mousedownn) { return; }  
    if(mousedownn){
        timeout = (setInterval(function(){movediamond(barra)},10));
                    }   
}; 
        
function moveplayerbar(){
        if (!mousedownn) { return; }  
    if(mousedownn){
        timeout2 = (setInterval(moveplayerdiamond ,10));
                    }   
}; 
       
    $(document).on("mouseup",function(event){
        if(mousedownn){
            mousedownn=false;
            if(trackdown){
            
            trackdown=false;
            clearInterval(timeout);
                
          if(actualtrack){
        song.currentTime = pixelsToSeconds(mousex,trackbarfocus.width(),song.duration); 
          }
            }
            if(playerdown){
                
                playerdown=false;
        
        clearInterval(timeout2);
            var barwidth= $(".player-track-remaining").width();        
            var barwidth= $(".player-track-remaining").width();        
        song.currentTime = pixelsToSeconds(mousex,barwidth,song.duration);
            }
        }
    });
     

    song = new Audio('Resources/01. Lone Digger.ogg','Resources/01. Lone Digger.mp3');
        
        if (song.canPlayType('audio/mpeg;')) {
  	song.type= 'audio/mpeg';
  	song.src= 'Resources/01. Lone Digger.mp3';
	} else {
  	song.type= 'audio/ogg';
  	song.src= 'Resources/01. Lone Digger.ogg';
	}
        song.addEventListener("loadeddata",function(){
            
            
  if(song.readyState >= 2) {
      
      if(trackbarfocus.children(".trackbar-progress").width()!==trackbarfocus.width()){
  
        tracktime=pixelsToSeconds(trackbarfocus.children(".trackbar-progress").width(),trackbarfocus.width(),song.duration);
        song.currentTime=tracktime;
      }
                var totalmin = parseInt(song.duration/60, 10);
                var totalsec = parseInt(song.duration%60, 10);
                if(totalsec<10){totalsec="0"+totalsec};
                var totaltime =""+totalmin+":"+totalsec;
                $(".songduration").text(totaltime);
      
            var artist =lasttrack.parent().find(".trackartist").text();
      
            var songname =lasttrack.parent().find(".trackname").text();
            $(".songname").text(artist);
            $(".songartist").text(songname);
      
       playerimage=lasttrack.parent().parent().parent().find(".trackart").css('background-image');
      $(".playerart").css('background-image',playerimage);
      
  }
        });
        
    $(".playbutton").on("click",function (e){     
        
        if($(this).find("span").hasClass("glyphicon-play")){
        if(!$(this).is(lasttrack)){
        if(lasttrack){
            
            lasttrack.find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
            
            statusbarfocus.removeClass("colororange").addClass("colorwhite");
            
        }
            song.src=$(this).data("songid");
            e.preventDefault();
            songstatus=true;
            $(".songplayer").show();
            lasttrack=$(this);
            trackblockfocus=lasttrack.parent().parent().parent().parent();
            //Guarda la barra de progreso
            trackbarfocus=lasttrack.parent().find(".trackbarview");
            //Guarda la barra de stado
            statusbarfocus=lasttrack.parent().parent().parent().find(".bar");
    
        
        }
        
        $("#playerbutton2").removeClass("glyphicon-play").addClass("glyphicon-pause");
        $(this).find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
        statusbarfocus.removeClass("colorwhite").addClass("colororange");
        song.play();
        

            return;
        }
        
        if($(this).find("span").hasClass("glyphicon-pause")){
        if(lasttrack){
            
        }
        else{
            song.src=$(this).data("songid");
            e.preventDefault();
            songstatus=false;
            //Se muestra el reproductor
            $(".songplayer").show();
            lasttrack=$(this);
        }
         $("#playerbutton2").removeClass("glyphicon-pause").addClass("glyphicon-play");
        $(this).find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
        statusbarfocus.removeClass("colororange").addClass("colorwhite");
        song.pause();
            
            songstatus=false;
            
            return;
        }
       
        
        });
        
        
        function nextsong(){
            if(!trackblockfocus.is(":last-child")){


                lasttrack.find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
                statusbarfocus.removeClass("colororange").addClass("colorwhite"); 
                $("#playerbutton2").removeClass("glyphicon-pause").addClass("glyphicon-play");
                trackblockfocus=trackblockfocus.next();      
            
            //Guarda la barra de progreso
            
                lasttrack=trackblockfocus.find(".playbutton");
                lasttrack.find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");     
                trackbarfocus=trackblockfocus.find(".trackbarview");
            //Guarda la barra de stado
                                 
                statusbarfocus=trackblockfocus.find(".bar");
                song.src=trackblockfocus.find(".playbutton").data("songid");
                statusbarfocus.removeClass("colorwhite").addClass("colororange");
                $("#playerbutton2").removeClass("glyphicon-play").addClass("glyphicon-pause");
                
                song.play();
                songstatus=true;
            }
            else{
                if(songstatus==false){
                lasttrack.find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
                 statusbarfocus.removeClass("colororange").addClass("colorwhite"); 
                $("#playerbutton2").removeClass("glyphicon-pause").addClass("glyphicon-play");
                songstatus=false
                }
            }
        }
        
        
        function prevsong(){
            if(!trackblockfocus.is(":first-child")){
                if(song.currentTime<5){
                lasttrack.find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
                statusbarfocus.removeClass("colororange").addClass("colorwhite");
                $("#playerbutton2").removeClass("glyphicon-pause").addClass("glyphicon-play");
                trackblockfocus=trackblockfocus.prev();      
            
            //Guarda la barra de progreso
            
                lasttrack=trackblockfocus.find(".playbutton");
                lasttrack.find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");     
                trackbarfocus=trackblockfocus.find(".trackbarview");
            //Guarda la barra de stado
                                 
                statusbarfocus=trackblockfocus.find(".bar");
                song.src=trackblockfocus.find(".playbutton").data("songid");
                statusbarfocus.removeClass("colorwhite").addClass("colororange");
                $("#playerbutton2").removeClass("glyphicon-play").addClass("glyphicon-pause");
                    
                song.play();
                songstatus=true;
                }
                else{
                    song.currentTime=0;
                }
            }
            else{
                      if(song.currentTime>5){
                          
                    song.currentTime=0;
                      }
            }
        }
        
        $(document).on("click","#playerbutton2",function(){
            if(songstatus){
                song.pause();
                songstatus=false;
                lasttrack.find("span").removeClass("glyphicon-pause").addClass("glyphicon-play");
                $(this).removeClass("glyphicon-pause").addClass("glyphicon-play");
                statusbarfocus.removeClass("colororange").addClass("colorwhite");
            }
            else{
                song.play();
                songstatus=true;
                
                lasttrack.find("span").removeClass("glyphicon-play").addClass("glyphicon-pause");
                $(this).removeClass("glyphicon-play").addClass("glyphicon-pause");
                statusbarfocus.removeClass("colorwhite").addClass("colororange");
            }
            
        });
        
        $("#playerbutton4").on("click",function(){
            repeat=!repeat;
            $("#playerbutton4").toggleClass("fontwhite fontorange");
        });
        
        $("#playerbutton1").on("click",function(){
            prevsong();
        });
        $("#playerbutton3").on("click",function(){
            nextsong();
        });

        //Evento que se ejecuta cuando la cancion termina
        song.addEventListener("ended",function (){
            
                trackbarfocus.children(".trackbar-progress").css({ width:"100%"}); 
        if(!repeat){
                nextsong();
            }else{
                song.play();
            }
                     
                 });
song.addEventListener("timeupdate",function (){
    
        var curmin = parseInt(song.currentTime/60, 10);

        var cursec = parseInt(song.currentTime%60, 10);
        if(cursec<10){cursec="0"+cursec};
        var curtimes =""+curmin+":"+cursec;
         $(".songcurtime").text(curtimes);
    if(!mousedownn){
    curtime = parseInt(song.currentTime, 10);
    
    bartime=secondsToPixels(curtime,trackbarfocus.width(),song.duration);
     
    trackbarfocus.children(".trackbar-progress").css({ width:bartime+"%"}); 
    
    trackbarfocus.children(".diamond").css({left:bartime+"%"}); 
        
    var barwidth= $(".player-track-remaining").width();
    bartime=secondsToPixels(curtime,barwidth,song.duration);
        
    $(".player-track-progress").css({ width:bartime+"%"}); 

     $("#diamondthumb").css({ left:bartime+"%"}); 
    }
});     
