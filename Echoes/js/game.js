var wins = 0;
var loses = 0;
var draws = 0;

function randomNumber(range)
{
    return Math.floor(Math.random()*(range+1));
}
function sayPlay(value)
{
    if(value == 1)
    {
        return "piedra";
    }
    if(value == 2)
    {
        return "papel";
    }
    if(value == 3)
    {
        return "tijera";
    }
}
function sayResult(result)
{
    if(result == 0)
    {
        return "Empate";
    }
    if(result == 1)
    {
        return "Ganaste";
    }
    if(result == -1)
    {
        return "Perdiste";
    }
}

function playSound(result)
{
    if(result == 1)
    {
        var audio = new Audio("se/se01.wav");
        audio.play();
    }
    if(result == -1)
    {
        var audio = new Audio("se/se02.wav");
        audio.play();
    }
}
function update()
{
    $("#ganadas").text(wins);
    $("#perdidas").text(loses);
    $("#empatadas").text(draws);
    $("#total").text(wins+loses+draws);
    //$.post("/game/servlets/doupdate.php", {thewins : wins, theloses : loses} );
}
function play(playerChoose)
{
    var robotChoose = (randomNumber(2) + 1);
    var result = playerChoose - robotChoose;
    var doPlayerWin;
    $("#player").attr("src","img/"+sayPlay(playerChoose)+".png").css("visibility","visible");
    $("#robot").attr("src","img/"+sayPlay(robotChoose)+".png").css("visibility","visible");
    if(result == 0)
    {
        result = 0;
        draws += 1;
    }
    if(result == -1 || result == 2)
    {
        result = -1;
        loses += 1;
        doPlayerWin = false;
    }
    if(result == -2 || result == 1)
    {
        result = 1;
        wins += 1;
        doPlayerWin = true;
    }
    /*alert("Escogiste " + sayPlay(playerChoose) + "\n"
        + "El robot escogió " + sayPlay(robotChoose) + "\n"
        + sayResult(result));*/
    update();
    if(result != 0)
    {
        $.post("/game/servlets/doupdate.php", {player_choose : playerChoose, robot_choose : robotChoose, player_win : doPlayerWin} );
    }
    
    playSound(result);
}

// prepare the form when the DOM is ready 
$(document).ready(function() {
    
    var myCallback = function(data)
    {
        data = JSON.parse(data);
        for(i in data["comments"])
        {
            $("#usercomments").append('<br/></br><div class="options"><h1>' + data["comments"][i]["comment"] + '</h1> <img src=' + data["comments"][i]["photo"] + '></img></div>');
        }
    };
    
    $.post("/game/servlets/getcomments.php", myCallback);
     
       
    var options = { 
        target:        '#coolDiv',   // target element(s) to be updated with server response 
        beforeSubmit:  showRequest,  // pre-submit callback 
        success:       showResponse  // post-submit callback 
 
        // other available options: 
        //url:       url         // override for form's 'action' attribute 
        //type:      type        // 'get' or 'post', override for form's 'method' attribute 
        //dataType:  null        // 'xml', 'script', or 'json' (expected server response type) 
        //clearForm: true        // clear all form fields after successful submit 
        //resetForm: true        // reset the form after successful submit 
 
        // $.ajax options can be used here too, for example: 
        //timeout:   3000 
    }; 
 
    // bind form using 'ajaxForm' 
    $('#mycomment').ajaxForm(options); 
}); 
 
// pre-submit callback 
function showRequest(formData, jqForm, options) { 
    // formData is an array; here we use $.param to convert it to a string to display it 
    // but the form plugin does this for you automatically when it submits the data 
    var queryString = $.param(formData); 
 
    // jqForm is a jQuery object encapsulating the form element.  To access the 
    // DOM element for the form do this: 
    // var formElement = jqForm[0]; 
 
    //alert('About to submit: \n\n' + queryString);
    //alert("About to submit"); 
 
    // here we could return false to prevent the form from being submitted; 
    // returning anything other than false will allow the form submit to continue 
    return true; 
} 
 
// post-submit callback 
function showResponse(responseText, statusText, xhr, $form)  { 
    // for normal html responses, the first argument to the success callback 
    // is the XMLHttpRequest object's responseText property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'xml' then the first argument to the success callback 
    // is the XMLHttpRequest object's responseXML property 
 
    // if the ajaxForm method was passed an Options Object with the dataType 
    // property set to 'json' then the first argument to the success callback 
    // is the json data object returned by the server 
 
    /*alert('status: ' + statusText + '\n\nresponseText: \n' + responseText + 
        '\n\nThe output div should have already been updated with the responseText.'); */
} 