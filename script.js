$("#go").click(function(){
    if (dest > 500) {
        $("#block").animate({
            marginLeft: "10px"
          }, 500 );
    }
    else {
      $("#block").animate({
        marginLeft: dest + "px"
      }, 500 );
    }
});