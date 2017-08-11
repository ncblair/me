$(document).ready(function(){
    $projectcontainer = $(".project-container");
    
    $projectcontainer.hover(function(){
        $projecttitle = $(this).find($(".project-title"));
        $projectdescription = $(this).find($(".project-description"));
        $projectdarkener = $(this).find($(".project-darkener"));
        $project = $(this).find($(".project"));
        $projecttitle.stop(true,false).animate({bottom:'210px'});
        $projectdescription.stop(true, false).animate({height:'200px'});
        $projectdescription.stop(true,false).animate({opacity:'1'});
        $projectdarkener.stop(true,false).animate({opacity:'.9'});
    }, function(){
        $projecttitle.stop(true,false).animate({bottom:'56px'});
        $projectdescription.stop(true,false).animate({height:'-100px'});
        $projectdescription.stop(true,false).animate({opacity:'0'});
        $projectdarkener.stop(true,false).animate({opacity:'0'});
        
    })
    
});