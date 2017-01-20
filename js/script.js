// JavaScript Document
function updateSecondSelection(){
    	var guelph = new Array('Biological Sciences','Chemistry','Physics');
		var ryerson = new Array('Biology','Biomedical Eng.','Organic Chem');
		var toronto = new Array('Acounting','Life Sciences','Electrical Eng');

		var school = document.getElementById('school');
		var program = document.getElementById('program');
		var selected = school.value;

		/** Remove all options in second dropdown list selection **/
		program.options.length=0;

		if(selected==1){
			for(node in guelph){
				program.options[node] 
				= new Option(guelph[node],guelph[node]);
			}
		}else if(selected==2){
			for(node in ryerson){
				program.options[node] 
				= new Option(ryerson[node],ryerson[node]);
			}
		}else if(selected==3){
			for(node in toronto){
				program.options[node] 
				= new Option(toronto[node],toronto[node]);
			}
		}else{
			program.options[0] = new Option('No option selected','NA');
		}
	}