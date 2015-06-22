// facebook

// buzzfeed
var picker = Math.floor(Math.random()*3);
$($('.sidebar_featured_unit ul li a')[picker]).attr('href',ad_link);
$($('.sidebar_featured_unit ul li h3')[picker]).empty().append('<a href = "'+ad_link+'" >'+ad_title+'</a>');
$($('.sidebar_featured_unit ul li img')[picker]).attr('src',ad_img);

// techcrunch
$('.ad-unit').append('<a href = "'+ad_link+'" target="_blank" ><img src="'+ad_img+'"></a>')

function roll_ad(){
  if(Math.random()>roll_threshold){
    return false;
  } else {
    var new_roll = Math.floor(ad_units.length*Math.random());
    return ad_units[new_roll];
  }
}

//huffpo
$('#adsDiv1').empty().append('<a href = "'+ad_link+'" target="_blank" ><img src="'+ad_img+'"></a>')

/*
ad_link = url where the ad points
ad_img = image for the ad unit
ad_description = text description for the ad
ad_title = text title for the ad

ad_unit = object containing ad_link, ad_img, ad_description, and ad_title
ad_units = array of ad_unit objects

roll_threshold = float between 0 and 1
*/
