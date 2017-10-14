
    
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
                var listOffset = $(window).width()-(320*2); 
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
  $("#agregrarProductioBtn").click(function(){
           $(".newNoteModal").fadeIn(50).css('display','flex'); 
            $(".pageContainer").toggleClass("blur");
        });
        
  $("#closeModalNewNote").click(function(){
            $(".newNoteModal").fadeOut(20); 
            $(".pageContainer").toggleClass("blur");    
            $('#newNoteFileInput').val('');
        
        });
        
        //Codigo viejo, se desprecia
        /*
         $('.modalUploadPhotoBtn').click(function(){
    $('#newNoteFileInput').click();
});

        
        function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                 $("#previewPhotoNewNote").attr( 'src',e.target.result); 
                 $("#previewPhotoNewNote").css({'border-style':'solid','border-width':"1px",'border-color':"white"}).show();
                
            }
            
            reader.readAsDataURL(input.files[0]);
        }
        }


        $('#newNoteFileInput').on("change", function(){
            readURL(this);

         });
         */
        
        function mostrarBotonGuardar(numBlock,newValue){
            var padre=numBlock.parent();
            var btnGuardar =  padre.find('.saveListBtn');
             var oldValue = parseInt(padre.find(".oldValue").val(),10);

            if(newValue != oldValue && !btnGuardar.hasClass("activeSaveBtn")){
                
                btnGuardar.addClass("activeSaveBtn");
                btnGuardar.fadeTo("slow", 1.0);
                
            }
            else if(newValue === oldValue){

                btnGuardar.fadeTo("fast", 0.0,function(){
                btnGuardar.removeClass("activeSaveBtn");
                });                
            }
        }
        
        
           $('.groceryListCantMinus').on('click',function(){
        var numBlock = $(this).parent().find(".groceryListCantNumber");
        var storedNum = parseInt(numBlock.text(),10);
            if(storedNum>1){   
                storedNum -= 1;  
                numBlock.text(storedNum);
            }
                mostrarBotonGuardar($(this),storedNum);
               
    });   
    $('.groceryListCantPlus').on('click',function(){
        var numBlock = $(this).parent().find(".groceryListCantNumber");
        var storedNum = parseInt(numBlock.text(),10);
            if(storedNum<99){   
        storedNum += 1;  
        numBlock.text(storedNum);
            }
        
                mostrarBotonGuardar($(this),storedNum);
    });
        
    var deleteListFocus;
        $(".deleteListbtn").on('click',function(){
            $('.confirmationModal').show();
            deleteListFocus =  $(this).parent();
            
            $(".pageContainer").addClass("grayscale");
        });
        
        $(".cancelDeleteList").on('click',function(){
            $('.confirmationModal').hide();
            
            $(".pageContainer").removeClass("grayscale");
        }); 
        
        $(".confirmDeleteList").on('click',function(){
            $('.confirmationModal').hide(); 
            
            $(".pageContainer").removeClass("grayscale");
            deleteListFocus.slideUp(function(){
                deleteListFocus.remove();
            });

        });
    
        
        $('#categoriaNewNote').on("change",function(){
           switch($('#categoriaNewNote').val()){
               case "1":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico1.png"); 
                break;      
               case "2":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico2.png"); 
                break;         
               case "3":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico3.png"); 
                break;        
               case "4":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico4.png"); 
                break;         
               case "5":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico5.png"); 
                break;         
               case "6":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico6.png"); 
                break;   
               case "7":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico7.png"); 
                break;         
               case "8":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico8.png"); 
                break;         
               case "9":
            $("#previewPhotoNewNote").attr( 'src',"icons/ico9.png"); 
                break;

            }

         });
       
    });
        
 