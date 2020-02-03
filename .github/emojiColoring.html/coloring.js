$(".pupilImage").click(
    function(){
       var clickedPupil = $(this).css("background-image")
       $(".pupil").css("background-image", clickedPupil);
    }
);

$(".mouthImage").click(
    function(){
        var clickMouth=$(this).css("background-image");
        alert(clickMouth);
    }
);
