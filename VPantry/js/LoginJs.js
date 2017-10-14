
    $(document.documentElement).addClass('hidden');

        $(document).ready(function(){
            
            $(document.documentElement).removeClass('hidden');
            var greenOffset = $(window).width()-$(".slide").width();
            
            $(".slide").css('left',greenOffset);
                          
            $(".signUpbtn").click(function(){
               $(".slide").animate({left:'0px'},{duration:600,queque:false},"easeIn");
                
                
                
                 $(".logo1").hide();
               //$(".loginDiv").animate({opacity:0},{duration:800,queque:false});
               //$(".loginDiv").animate({left:'600px',opacity:0},{duration:200,queque:false},"easeOut");
               $(".signInDiv").css({'display':'block', 'opacity':'1'}).animate({'opacity':'0','left':'100%'}, {duration: 400,complete: showLoginbtn()});
                
             //$(".signUpDiv").animate({left:'400px',opacity:100},{duration:1000,queque:false},"easeIn");
               $(".signUpDiv").css({'display':'block', 'opacity':'0'}).animate({'opacity':'1','left':'30%'},{ duration: 500});
                 
            });
            
            
            $(".logInbtn").click(function(){
                greenOffset = $(window).width()-$(".slide").width();
               $(".slide").animate({left:greenOffset},{duration:600,queque:false},"easeIn");
                
         
                 $(".logo1").show().css({'margin-left': '350px', 'opacity':'0'}).animate({'opacity':'1','left':'0%'},{ duration: 1000});
               $(".signInDiv").css({'display':'block', 'opacity':'0'}).animate({'opacity':'1','left':'0%'},{ duration: 500});
                $(".signUpDiv").css({'display':'block', 'opacity':'1'}).animate({'opacity':'0','left':'-100%'}, {duration: 700,complete: showSignupbtn()});
                 
            });
            
            
            
            $("#logInEmail").on("change keyup paste click", function(){
                dismissPopUp1();
            });
            
            $("#logInPass").on("change keyup paste click", function(){
                dismissPopUp1();
            });
            
            $("#logInSubmit").click(function(){
                validateLogin();
            });
            
            function dismissPopUp1(){
                if($("#logInEmail").val().length!==0&&$("#logInPass").val().length!==0){
                //Los 2 campos estan llenos
                    
                $("#myPopup").fadeOut();
                    
                }
            }
            
            function validateLogin(){
                if($("#logInEmail").val().length!==0&&$("#logInPass").val().length!==0){
                //Los 2 campos estan llenos
                    
                }
                else{
                //Alguno de los 2 campos faltan por llenar
                    
                $("#myPopup").fadeIn();
                    
                }
             
            }
            
            
            
            $("#signUpEmail").on("change keyup paste click", function(){
                dismissPopUp2();
            });
            
            $("#signUpPass").on("change keyup paste click", function(){
                dismissPopUp2();
            });
            
            $("#signUpPass2").on("change keyup paste click", function(){
                dismissPopUp2();
            });
            
            $("#signUpUsername").on("change keyup paste click", function(){
                dismissPopUp2();
            });
            
            $("#signUpSubmit").click(function(){
                validateSignup();
            });
            
            function dismissPopUp2(){
                if($("#signUpEmail").val().length!==0
                && $("#signUpUsername").val().length!==0
                && $("#signUpPass").val().length!==0
                && $("#signUpPass2").val().length!==0){
                //Los 2 campos estan llenos
                    
                $("#myPopup2").fadeOut();
                    
                }
            }
            
            function validateSignup(){
                if($("#logInEmail").val().length!==0&&$("#logInPass").val().length!==0){
                //Los 2 campos estan llenos
                    
                }
                else{
                //Alguno de los 2 campos faltan por llenar
                    
                $("#myPopup2").fadeIn();
                    
                }
             
            }
            
            
            function showLoginbtn(){
                $(".signInDiv").hide();
                $(".signUpSlide").fadeOut(800);
                $(".signInSlide").fadeIn(800);
                
            }
            
             function showSignupbtn(){
                $(".signUpDiv").hide();
                $(".signInSlide").fadeOut(800);
                $(".signUpSlide").fadeIn(800);
                
            }
            $(".exitDescButton").click(function(){
                $(".descriptionDiv").fadeOut('20');
                  $(".content").toggleClass("blur");
            });
            
            $(".virtualPInfo").click(function(){
               $(".descriptionDiv").fadeIn('50');
                
                  $(".content").toggleClass("blur");
            });
                        
                          });
        
        