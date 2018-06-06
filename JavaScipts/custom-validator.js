
$(document).ready(function(){

customValidator={
	
		        validate:function(fields){
		        	var data = {};
				    for (var i = 0; i < fields.length; i++) {
				        var $item = $(fields[i]);
				        
				        //check required attribute
				        
				        var attr = $item.attr("validator-required");
				        if(typeof attr !== typeof undefined && attr !== false){
				        	
				        	if($item.val()==null ||$item.val()==""){
				        				return false;
				        		}
				        	}
				       //check regex
				        var regex = $item.attr("validator-regex");
				        	if(typeof regex !== typeof undefined && regex !== false){
				        		var value=$item.val();
				        		 var patt = new RegExp(regex);
				        		
				        		if(!patt.test(value))
				        			return false;
				        	}
				        	
				        	
				    }
				    
				    return true;
		        },	        
		        
		        
 initValidator:function(){
	 	
	 	/**
	 	 * On KeyUp Check If that field is correctly populated or not if not then keep submit button disable
	 	 * and if yes then check rest fields are ok or not
	 	 */
	 
	 	console.log("init validation");
	 
	 	$(".custom-validator-form input,.custom-validator-form select").on("keyup change blur",function(){
	 		
	 		var $parent = $(this).parents(".custom-validator-form");
	 		if(customValidator.validate($parent.find("input,select"))){
	 			
	 			$parent.find(".custom-validator-form-submit-button").removeClass("cv-btn-disable");
	 		}
	 		else{
	 			
	 			$parent.find(".custom-validator-form-submit-button").addClass("cv-btn-disable");
	 		}
	 	});
 
 }

};
customValidator.initValidator();
});
