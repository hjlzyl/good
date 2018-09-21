$(function(){
    var flag=false;
    var flag1=false
   $("button").eq(0).click(function (e) { 
       flag=!flag;
       $("button").eq(1).attr("disabled",true);
       $(".row .left").animate({
       width:'toggle'
      });
      $('body').css({
          background:"#36364045"
      })
      if(flag==false){
        $("button").eq(1).attr("disabled",false);
        $('body').css({
            background:"none"
        })
      }
   });

   $("button").eq(1).click(function (e) { 
    flag1=!flag1;
    $("button").eq(0).attr("disabled",true);
    e.preventDefault();
    $(".row .left").animate({
    height:'toggle'
   });
   $('body').css({
       background:"#36364045"
   })
   if(flag1==false){
    $("button").eq(0).attr("disabled",false);
     $('body').css({
         background:"none"
     })
   }
});
})
