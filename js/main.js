$_ready(function(){

	$_(".js-toggle").click(function(){
		var toggleEl = $_(this).data("toggle");
		$_(this).toggleClass("is-toggled");
		$_("." + toggleEl).toggleClass("is-toggled");
	});

	$_("form.new-corpse").submit(function(e){
		e.preventDefault();
		Request.post("/Corpse/corpse/", "title=" + encodeURI($_("input[name='title']").value()) + "&" +  "initial=" + encodeURI($_("input[name='initial']").value() ),{

			onload: function(data){
				console.log(data);
				location.href = "/Corpse/" + data.response.Corpse;
			},

			error: function(){

			}
		}, "json");
	});

	$_("form.new-fragment").submit(function(e){
		e.preventDefault();
		Request.post("/Corpse/corpse/" + $_("input[type='hidden']").value(), "add=" + encodeURI($_("input[name='add']").value()),{

			onload: function(data){
				console.log(data);
				location.href = "/Corpse/" + $_("input[type='hidden']").value();
			},

			error: function(){

			}
		});
	});


	$_("[data-trigger]").click(function(){
		switch($_(this).data("trigger")){
			case "full-corpse":
				location.href = "/Corpse/" + $_(this).data("corpse");
				break;
			case "fragment":
				location.href = "/Corpse/corpse/" + $_(this).data("corpse");
					break;
		}
	});

});
