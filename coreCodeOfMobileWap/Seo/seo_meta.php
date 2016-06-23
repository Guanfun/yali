<!-- seo 3.4 -->
<?php
	$test_ladder = 0;
	$seo_title;
	$seo_keywords;
	$seo_description;
	
	if(isset($keywords) and strval($keywords) != '0'){
		$seo_title = $keywords ." - ". $key_text ." - ". $web_config['name'];
	}else{
		if(isset($seo_data_view)){
			$cars_title[0] = isset($seo_data_view['name']) ? $seo_data_view['name'] : $seo_data_view['title'];
		}else{
			$cars_title[0] = 0;
		}
		if(isset($seo_son_cate)){
			$cars_title[1] = $seo_son_cate['name'];
		}else{
			$cars_title[1] = 0;
		}
		if(isset($seo_child_cate)){
			$cars_title[2] = $seo_child_cate['name'];
		}else{
			$cars_title[2] = 0;
		}
		if(isset($seo_data_cate)){
			$cars_title[3] = $seo_data_cate['name'];
		}else{
			$cars_title[3] = 0;
		}
		if(isset($seo_data_column)){
			$cars_title[4] = $seo_data_column['name'];
		}else{
			$cars_title[4] = 0;
		}
		$cars_keywords[0] = $seo_data_view['keywords'];
		$cars_description[0] = $seo_data_view['description'];
		$cars_keywords[1] = $seo_son_cate['keywords'];
		$cars_description[1] = $seo_son_cate['description'];
		$cars_keywords[2] = $seo_child_cate['keywords'];
		$cars_description[2] = $seo_child_cate['description'];
		$cars_keywords[3] = $seo_data_cate['keywords'];
		$cars_description[3] = $seo_data_cate['description'];
		$cars_keywords[4] = $seo_data_column['keywords'];
		$cars_description[4] = $seo_data_column['description'];
		
		foreach($cars_title as $key => $value) {
			if(strval($value) != '0'){
				$seo_title .= $value ." - ";
				$seo_keywords = empty($seo_keywords) ? $cars_keywords[$key] : $seo_keywords;
				$seo_description = empty($seo_description) ? $cars_description[$key] : $seo_description;
				$test_ladder++;
			}
			if($test_ladder == 2){
				break;
			}
		}
		$seo_title = $seo_title . $web_config['name'];
	}
?>

<!-- seo 3.3 -->
<?php
	if(isset($keywords) and $keywords != '0'){
		$test_ladder = 0;
		$seo_keywords = "";
		$seo_description = "";
		$seo_title = $keywords ." - ". $key_text ." - ". $web_config['name'];
	}elseif(isset($id) and $id != 0){
		$test_ladder = 1;
		$seo_keywords = $seo_data_view['keywords'];
		$seo_description = $seo_data_view['description'];
		if(isset($seo_data_view['name'])){
			$seo_data_view_title = $seo_data_view['name'];
		}else{
			$seo_data_view_title = $seo_data_view['title'];
		}
		if(isset($son_cate_id) and $son_cate_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_son_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($children_cate_id) and $children_cate_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_child_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($cate_id) and $cate_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_data_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($column_id) and $column_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_data_view_title ." - ". $web_config['name'];
		}
	}elseif(isset($son_cate_id) and $son_cate_id != 0){
		$test_ladder = 2;
		$seo_keywords = $seo_son_cate['keywords'];
		$seo_description = $seo_son_cate['description'];
		if(isset($children_cate_id) and $children_cate_id != 0){
			$seo_title = $seo_son_cate['name'] ." - ". $seo_child_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($cate_id) and $cate_id != 0){
			$seo_title = $seo_son_cate['name'] ." - ". $seo_data_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($column_id) and $column_id != 0){
			$seo_title = $seo_son_cate['name'] ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_son_cate['name'] ." - ". $web_config['name'];
		}
	}elseif(isset($children_cate_id) and $children_cate_id != 0){
		$test_ladder = 3;
		$seo_keywords = $seo_child_cate['keywords'];
		$seo_description = $seo_child_cate['description'];
		if(isset($cate_id) and $cate_id != 0){
			$seo_title = $seo_child_cate['name'] ." - ". $seo_data_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($column_id) and $column_id != 0){
			$seo_title = $seo_child_cate['name'] ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_child_cate['name'] ." - ". $web_config['name'];
		}
	}elseif(isset($cate_id) and $cate_id != 0){
		$test_ladder = 4;
		$seo_keywords = $seo_data_cate['keywords'];
		$seo_description = $seo_data_cate['description'];
		if(isset($column_id) and $column_id != 0){
			$seo_title = $seo_data_cate['name'] ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_data_cate['name'] ." - ". $web_config['name'];
		}
	}elseif(isset($column_id) and $column_id != 0){
		$test_ladder = 5;
		$seo_keywords = $seo_data_column['keywords'];
		$seo_description = $seo_data_column['description'];
		$seo_title = $seo_data_column['name'] ." - ". $web_config['name'];
	}else{
		$test_ladder = 6;
		$seo_keywords = $seo_data_column['keywords'];
		$seo_description = $seo_data_column['description'];
		$seo_title = $web_config['name'];
	}
?>

<!-- seo 3.2 -->
<?php
	if(isset($keywords) and $keywords != '0'){
		$test_ladder = 0;
		$seo_keywords = "";
		$seo_description = "";
		$seo_title = $keywords ." - ". $key_text ." - ". $web_config['name'];
	}elseif(isset($id) and $id != 0){
		$test_ladder = 1;
		$seo_keywords = $seo_data_view['keywords'];
		$seo_description = $seo_data_view['description'];
		if(isset($seo_data_view['name'])){
			$seo_data_view_title = $seo_data_view['name'];
		}else{
			$seo_data_view_title = $seo_data_view['title'];
		}
		if(isset($son_cate_id) and $son_cate_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_son_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($children_cate_id) and $children_cate_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_child_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($cate_id) and $cate_id != 0){
			$seo_title = $seo_data_view_title ." - ". $seo_data_cate['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_data_view_title ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}
	}elseif(isset($son_cate_id) and $son_cate_id != 0){
		$test_ladder = 2;
		$seo_keywords = $seo_data_view['keywords'];
		$seo_description = $seo_data_view['description'];
		if(isset($children_cate_id) and $children_cate_id != 0){
			$seo_title = $seo_son_cate['name'] ." - ". $seo_child_cate['name'] ." - ". $web_config['name'];
		}elseif(isset($cate_id) and $cate_id != 0){
			$seo_title = $seo_son_cate['name'] ." - ". $seo_data_cate['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_son_cate['name'] ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}
	}elseif(isset($children_cate_id) and $children_cate_id != 0){
		$test_ladder = 3;
		$seo_keywords = $seo_child_cate['keywords'];
		$seo_description = $seo_child_cate['description'];
		if(isset($cate_id) and $cate_id != 0){
			$seo_title = $seo_child_cate['name'] ." - ". $seo_data_cate['name'] ." - ". $web_config['name'];
		}else{
			$seo_title = $seo_child_cate['name'] ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
		}
	}elseif(isset($cate_id) and $cate_id != 0){
		$test_ladder = 4;
		$seo_keywords = $seo_data_cate['keywords'];
		$seo_description = $seo_data_cate['description'];
		$seo_title = $seo_data_cate['name'] ." - ". $seo_data_column['name'] ." - ". $web_config['name'];
	}elseif(isset($column_id) and $column_id != 0){
		$test_ladder = 5;
		$seo_keywords = $seo_data_column['keywords'];
		$seo_description = $seo_data_column['description'];
		$seo_title = $seo_data_column['name'] ." - ". $web_config['name'];
	}else{
		$test_ladder = 6;
		$seo_keywords = $seo_data_column['keywords'];
		$seo_description = $seo_data_column['description'];
		$seo_title = $web_config['name'];
	}
?>