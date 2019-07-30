  
    readaudio = new Audio('Resources/01. Lone Digger.ogg','Resources/01. Lone Digger.mp3');

        var modalSubir = document.getElementById('modalSubir');
        var modalEdit = document.getElementById('modalEdit');
        var modalAdd = document.getElementById('modalList');
        var modalDelete = document.getElementById('modalEliminar');
        
        var close = document.getElementById("close");
        
        $(document).on( "click", ".openmodalSubir",function() {
            $('body').css('overflow','hidden');   
            modalSubir.style.display = "block";
            });

        $(document).on( "click", ".openmodalEdit",function() {
            $('body').css('overflow','hidden');   
            modalEdit.style.display = "block";
            });

        $(document).on( "click", ".openmodalAdd",function() {
            $('body').css('overflow','hidden');   
            modalAdd.style.display = "block";
            });
        $(document).on( "click", ".openmodalEliminar",function() {
            $('body').css('overflow','hidden');   
            modalDelete.style.display = "block";
            });
        
        $(window).on('click',function(event) {
            if (event.target == modalSubir) {
                modalSubir.style.display = "none";
                $('body').css('overflow','auto');
                
            $('body').css('overflow','auto');
            }
             if (event.target == modalEdit) {
                 modalEdit.style.display = "none";
                 $('body').css('overflow','auto');
            }
            
               if (event.target == modalAdd) {
                modalAdd.style.display = "none";  
                $('body').css('overflow','auto');
            }
                if (event.target == modalDelete) {
                modalDelete.style.display = "none";  
                $('body').css('overflow','auto');
            }
        });
         
         $("#Salir").on('click',function(event) {
                modalSubir.style.display = "none";
             $('body').css('overflow','auto');
     
        });

         $("#Salir2").on('click',function(event) {
                modalEdit.style.display = "none";
              $('body').css('overflow','auto');
        });

        $("#Salir3").on('click',function(event) {
                modalAdd.style.display = "none";
             $('body').css('overflow','auto');
        });

       $("#Salir4").on('click',function(event) {
                modalDelete.style.display = "none";
             $('body').css('overflow','auto');
        });
         
    $(document).ready(function(){
        $(".btnPaso1").click(function(){
            $(".paso2").fadeIn("slow");
              $(".paso1").fadeOut();
    });
        
    $(".anterior").click(function(){
            $(".paso1").fadeIn("slow");
              $(".paso2").fadeOut();
    });
});
    $('#my-button1').click(function(){
    $('#my-file1').click();
});

function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                 $(".uploadphoto").css( 'background-image','url('+e.target.result+')'); 
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }


    $('#my-file1').on("change", function(){
            readURL(this);

         });
        
  
                           
function setDuration(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                
            readaudio.src=e.target.result;  
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }


                      
$('#song-archive').on('change',function(){
    setDuration(this);       
            });

 readaudio.addEventListener("loadeddata",function(){
            
            
  if(readaudio.readyState >= 2) {
        var totalmin = parseInt(readaudio.duration/60, 10);
        var totalsec = parseInt(readaudio.duration%60, 10);
      $("#uploadmin").val(totalmin);
      $("#uploadsec").val(totalsec);
  }
   });