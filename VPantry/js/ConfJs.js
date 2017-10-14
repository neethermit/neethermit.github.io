
    
    $(document).ready(function(){
        
        var visibleMenu=false;
        var visibleList=false;
        var menuAnim=false;
        var listAnim=false;
        
        $(".menuIcon").click(function(){
            if(!menuAnim){
                menuAnim=true;
                $(".menuIcon").toggleClass("glyphicon-align-justify glyphicon-list");
                    var menuOffset = $(".mainMenu").outerWidth(); 
                    if(!visibleMenu){
                        $(".mainMenu").animate({'left':menuOffset},{ duration: 300,done:function(){
                            menuAnim=false;
                        }});
                    visibleMenu=true;
                    }
                else{
                    $(".mainMenu").animate({'left':0},{ duration: 300,done:function(){
                            menuAnim=false;
                        }});
                    visibleMenu=false;
                }
            }   
        });
        
        $(".popList").click(function(){
            if(!listAnim){
                listAnim=true;
                $(".popList").toggleClass("glyphicon-chevron-left glyphicon-chevron-right");
                var popupListWidth=$(".listMenu").outerWidth();
                var listOffset = $(window).width()-(popupListWidth*2); 
                if(!visibleList){
                    $(".listMenu").animate({'left':listOffset},{ duration: 300,done:function(){
                            listAnim=false;
                        }});
                    visibleList=true;}
                else{
                    $(".listMenu").animate({'left':"100%"},{ duration: 300,done:function(){
                            listAnim=false;
                        }});
                    visibleList=false;
            }
            }
        });
       
    });
    