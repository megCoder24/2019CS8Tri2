$(".sushiImage").click(
    function(){
       var clickedPupil = $(this).css("background-image")
       $("#sushi").css("background-image", clickedsushi);
    }
);

$(".Image").click(
    function(){
        var clickMouth=$(this).css("background-image");
        alert(clickMouth);
    }
);