$(document).ready(function(){

    var counter = 0;
    var tilesClicked = 0;
    var element;
    var identifier;

    function clickCounter(element, identifier){

        tilesClicked++;
        if(tilesClicked < 2){
            tile1 = new Array(element, identifier);
        }
        else{
            tilesClicked = 0;
            tile2 = new Array(element, identifier);

            if(tile1[0] == tile2[0] && tile1[1] != tile2[1]){
                counter++;
                if(counter == 5){
                    alert("You win! Reload site to play again.");
                }
                return element;
            }

            else if (tile1[1] == tile2[1]){
                alert("You have clicked the same tile twice. Try again!");
            }

            else{
                alert("The tiles you have chosen do not match. Keep on trying!");
            }
        }
    }

    $('img').click(function(){
        element = $(this).attr('class');
        identifier = $(this).attr('id');
        var className = "." + clickCounter(element, identifier);
        $(className).fadeOut('slow');
    });

    $('#reloadBtn').click(function reload(){
        location.reload();
    });
});
