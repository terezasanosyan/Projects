<script type="text/javascript">
	
	const space = function (spc) {
	if(spc === 0) {
		
		return "";
			}

		return " " + space(spc - 1);
	};


	const stars = function (strs){
		if (strs === 0) {
			
			return "";
		}
			return "*" + stars(strs - 1);
		};



		const combine = function (h,spc,strs) {
			if(h===0) {
				
			return " ";
        }
				
				console.log(space(spc)+stars(strs))
			
			combine(h - 1,spc - 1 ,strs + 2);
		}



		const triangleStars = function(h)
		
		{
			combine(h,h - 1,1)
		};
		
		triangleStars(5);
</script>