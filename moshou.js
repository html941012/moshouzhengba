$.ajax({
	type:"get",
	url:"moshou.json",
	async:true,
	success: function(res) {
        fn(res)
        console.log(res)
    }
});
function fn(data){
	var arr=data;
	console.log(arr)
//	导航
	var st="";
	st+="<div class='daohang'>"
		st+="<div class='daoleft'>"
			$.each(arr.daohang.namea, function(index,value){
				st+="<a>"
					st+=value;
				st+="</a>"
			})
		st+="</div>"
		st+="<div class='daoright'>"
			st+="<a class='beijinga'>"
			st+="</a>"
			st+="<a class='beijingb'>"
				st+="<div class='beijingba'>"
					st+="<img src='"+arr.daohang.nameimg+"'>"
				st+="</div>"
			st+="</a>"
			st+="<a class='beijingc'>"
				st+="<img src='"+arr.daohang.nameing+"'>";
				st+="<span>"
					st+=arr.daohang.nameb;
				st+="</span>"
			st+="</a>"
			st+="<div class='daohuang'>"	
				st+=arr.daohang.namec;
			st+="</div>"
		st+="</div>"
	st+="</div>"
	$("#index").html(st);
	
//	大图
	var sa="";
	sa+="<div class='pica'>"
		sa+="<a>"
			sa+="<span>"
				sa+=arr.datu.zuoliaojie;
			sa+="</span>"
		sa+="</a>"
	sa+="</div>"
	$("#pic").html(sa);
	
//	橘黄色长条
	var ss="";
	ss+="<ul>"
		$.each(arr.tuijian, function(index,value) {
			ss+="<li>"
				ss+="<a>"
					ss+=value;
				ss+="</a>"
			ss+="</li>"
		});
	ss+="</ul>"
	$("#head").html(ss);
	
//	锁死
	$(window).scroll(function(){
		var index=$(document).scrollTop()
		if(index>55){
			$("#index").css({"position":"fixed","zIndex":"999","width":"100%"})
		}else{
			$("#index").css({"position":"relative","zIndex":"999","width":"100%"})
		}
	})
}
