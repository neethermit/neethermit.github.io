    
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
        
        $(".listTopPage").click(function(){
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
        
    var currentViewModal,noteFocus;
    
        
    //Mostrar Los modals
        //Modal para crear nuevas notas
        $("#newNote").click(function(){
           $(".newNoteModal").fadeIn(50).css('display','flex'); 
            $(".pageContainer").toggleClass("blur");
        });
        
        //Modal para ver una nota
        $(".noteBlock").on("click",function(){ 
            noteFocus=$(this);
           $(".viewNoteModal").fadeIn(50).css('display','flex'); 
            $(".pageContainer").toggleClass("blur");
        });
    //Cerrar Los modals
        
        $("#closeModalNewNote").click(function(){
            $(".newNoteModal").fadeOut(50); 
            $(".pageContainer").toggleClass("blur");
            $('#newNoteFileInput').val('');
        
        });    
        
        $("#closeModalViewNote").on("click",function(){
            $(".viewNoteModal").fadeOut(50); 
            $(".pageContainer").toggleClass("blur");
        
        });
        
    //Modal de confirmacion
        $(".deleteNoteBtn").on("click",function(){
            $(".confirmationModal").show();
            
            $(".viewNoteModal").addClass("grayscale");
            
        });
        
          $(".cancelDeleteNote").on('click',function(){
            $('.confirmationModal').hide();
            $(".viewNoteModal").removeClass("grayscale");
        }); 
        
        $(".confirmDeleteNote").on('click',function(){
            $('.confirmationModal').hide(); 
            $(".viewNoteModal").fadeOut(50); 
            $(".pageContainer").removeClass("blur");
            $(".viewNoteModal").removeClass("grayscale");
            noteFocus.fadeOut(1000,function(){
               // noteFocus.remove();
            });  
        });
        
        //codigo viejo, despreciado
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
    