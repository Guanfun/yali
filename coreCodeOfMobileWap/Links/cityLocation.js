/**
 * Created by Administrator on 2016/5/30.
 */
function cityLocation(pro,city,dis){
    $.ajax({
        url: "{:U('Special/getTaoIp')}",
        data:{},
        type: "GET",
        dataType:'json',
        async:false,
        success:function(data){
            $(city).html(data.data.city);
            if(pro){
                $(pro).html(data.data.region);
            }
            /*region(省)，region_id,city,city_id,isp(供应商)，ip*/
        }
    });
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(pos) {
            /* var url = 'http://api.map.baidu.com/geocoder/v2/?ak=39f4d8f314b498af2f75a95a788b3cce&coordtype=wgs84ll&output=json';
             url +='&location='+pos.coords.latitude+','+pos.coords.longitude;*/
            var lat=pos.coords.latitude;
            var lon=pos.coords.longitude;
            console.log(lat,lon,123);
            $.ajax({
                url: "{:U('Special/getBaiIp')}",
                data:{latitude:lat,longitude:lon},
                type: "GET",
                dataType:'json',
                success:function(data){
                    if($(city).html() != data.data.city) {
                        if (confirm("是否更新定位？")) {
                            $(city).html(data.data.city);
                            if(pro){
                                $(pro).html(data.data.province);
                            }
                            if(dis){
                                $(dis).html(data.data.district);
                            }

                            /*province(省)，province_id,city,city_id,district,district_id*/
                        }
                    }
                }
            });
        },function(error){
            switch(error.code){
                case error.PERMISSION_DENIED:
                    alert("地理位置信息的获取失败，因为该页面没有获取地理位置信息的权限");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("地理位置获取失败，因为至少有一个内部位置源返回一个内部错误");
                    break;
                case error.TIMEOUT:
                    alert("获取地理位置超时");
                    break;
            }
        }, {
            enableHighAccuracy: true, // 是否获取高精度结果
            timeout: 5000, //超时,毫秒
            maximumAge: 0 //可以接受多少毫秒的缓存位置
            // 详细说明 https://developer.mozilla.org/cn/docs/Web/API/PositionOptions
        });
    }
}
