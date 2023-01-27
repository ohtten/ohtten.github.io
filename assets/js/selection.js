   
(function($) {
    "use strict"; // Start of use strict
	
        var basic = true, intermediary = true, advanced = true ;
		
		// previous colors
		$("i[data='av']").css("color", "#218838");
		$("i[data='in']").css("color", "#09678e");
		$("i[data='ba']").css("color", "#E0A800");
	   
	    $("#btn-av").click(function(){		       
		  
       if(advanced) {
        $("i[data='av']").css("color", "#999999");
        advanced = false;
       }
       else {
		$("i[data='av']").css("color", "#218838");
        advanced = true;
      }
		
	    });

     
      $("#btn-in").click(function(){		       
		  
        if(intermediary) {
		  $("i[data='in']").css("color", "#999999");
          intermediary = false;
        }
        else {
          $("i[data='in']").css("color", "#09678e");
          intermediary = true;
        }
		
	    });

      $("#btn-ba").click(function(){		       
		  
        if(basic)
        {
		      $("i[data='ba']").css("color", "#999999");
          basic = false;
        }
        else {
          $("i[data='ba']").css("color", "#E0A800");
          basic = true;
        }
	    });
	
})(jQuery); // End of use strict
    