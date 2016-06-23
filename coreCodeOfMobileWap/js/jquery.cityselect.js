/*
Ajax 三级省市联动
http://code.ciaoca.cn/
日期：2015-2-1

settings 参数说明
-----
url:省市数据josn文件路径
prov_val:默认省份
city_val:默认城市
zone_val:默认地区（县）
province:省份id 默认:province
city:城市id 默认:city
zone：地区id 默认：zone
nodata:无数据状态
required:必选项
------------------------------ */
(function($){
	$.fn.citySelect=function(settings){
		if(this.length<1){return;};

		// 默认值
		settings=$.extend({
			url:region,
			prov_value:null,
			city_value:null,
			zone_value:null,
			province:'province',
			city:'city',
			zone:'zone',
			nodata:null,
			required:true
		},settings);

		var box_obj=this;
		var prov_obj=box_obj.find('#'+settings.province);
		var city_obj=box_obj.find('#'+settings.city);
		var dist_obj=box_obj.find('#'+settings.zone);
		var prov_val=settings.prov_value;
		var city_val=settings.city_value;
		var zone_val=settings.zone_value;
		var select_prehtml=(settings.required) ? "<option value=''>请选择</option>" : "<option value=''>请选择</option>";
		var city_json;
		var total = new Array();

		// 赋值市级函数
		var cityStart=function(){
			var prov_id=prov_obj.get(0).selectedIndex;
			if(settings.required){
				prov_id--;
			};

			if(prov_id<0||typeof(total[prov_id].child)=="undefined"){
				if(settings.nodata=="none"){
					city_obj.css("display","none");
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					city_obj.css("visibility","hidden");
					dist_obj.css("visibility","hidden");
				};
				return;
			};
			
			// 遍历赋值市级下拉列表
			var temp_html=select_prehtml;
			$.each(total[prov_id].child,function(i,city){
				if(city.id){
					temp_html+="<option value='"+city.id+"'>"+city.name+"</option>";
				}
			});
			city_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
			distStart();
		};

		// 赋值地区（县）函数
		var distStart=function(){
			var prov_id=prov_obj.get(0).selectedIndex;
			var city_id=city_obj.get(0).selectedIndex;
			if(settings.required){
				prov_id--;
				city_id--;
			};
			if(prov_id<0||city_id<0||typeof(total[prov_id].child[city_id])=="undefined"){
				if(settings.nodata=="none"){
					dist_obj.css("display","none");
				}else if(settings.nodata=="hidden"){
					dist_obj.css("visibility","hidden");
				};
				return;
			};
			// 遍历赋值市级下拉列表
			var temp_html=select_prehtml;
			var c = total[prov_id].child[city_id];
			$.each(c,function(i,dist){
				if(dist == c.id && c.child){
					$.each(c.child[dist],function(i,di){
						temp_html+="<option value='"+di.id+"'>"+di.name+"</option>";
					});
				}
			});
			dist_obj.html(temp_html).attr("disabled",false).css({"display":"","visibility":""});
		};

		var init=function(){
			// 遍历赋值省份下拉列表
			temp_html=select_prehtml;
			data = city_json;
			$.each(data,function(i,city){
				total.push(city);
				//添加元素
			});
			$.each(total,function(i,prov){
				temp_html+="<option value='"+prov.id+"'>"+prov.name+"</option>";
			});
			prov_obj.html(temp_html);

			// 若有传入省份与市级的值，则选中。（setTimeout为兼容IE6而设置）
			setTimeout(function(){
				if(settings.prov_value!=null){
					prov_obj.val(prov_val);
					cityStart();
					setTimeout(function(){
						if(settings.city_value!=null){
							city_obj.val(city_val);
							distStart();
							setTimeout(function(){
								if(settings.zone_value!=null){
									dist_obj.val(zone_val);
								}
							},1);
						}
					},1);
				}
			},1);

			// 选择省份时发生事件
			prov_obj.bind("change",function(){
				cityStart();
			});

			// 选择市级时发生事件
			city_obj.bind("change",function(){
				distStart();
			});
		};

		// 设置省市json数据
		if(typeof(settings.url)=="string"){
			$.getJSON(settings.url,function(json){
				city_json=json;
				init();
			});
		}else{
			city_json=settings.url;
			init();
		};
	};
})(jQuery);