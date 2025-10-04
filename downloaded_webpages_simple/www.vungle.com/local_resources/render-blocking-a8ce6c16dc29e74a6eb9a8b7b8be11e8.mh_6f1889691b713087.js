jQuery(function($) {
    $('main.mh-functions #lf-resources_topic-expander').click(function() {
        if($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', 'true');
            $('#lf-resources_topic-panel').removeAttr('hidden');
        } else {
            $(this).attr('aria-expanded', 'false');
            $('#lf-resources_topic-panel').attr('hidden', '');
        }
    });
    $(document).on('click', 'main.mh-functions #lf-resources_topic-header .is-style-outline button', function(){
        var value = $(this).data('value');
        $("main.mh-functions #lf-resources_topic-buttons .wp-block-button button[data-value='" + value +"']").parent('div').addClass('is-style-outline').removeClass('is-style-fill');
        $(this).parent('.is-style-outline').remove();
        $("main.mh-functions #lf-resources_topic-buttons .wp-block-button button[data-value='" + value +"']").parent('div').trigger('classCheck');
    });
    $('main.mh-functions #lf-resources_topic-buttons .wp-block-button').click(function() {
        $(this).toggleClass('is-style-outline').toggleClass('is-style-fill');
        var value = $(this).children('button').data('value');
        var name = $(this).children('button').html();
        if($(this).hasClass('is-style-fill')) {
            $('main.mh-functions #lf-resources_topic-header').append('<div class="wp-block-button is-style-outline"><button class="wp-block-button__link" data-value="' + value + '">' + name + '</button></div>');
        } else {
            $("main.mh-functions #lf-resources_topic-header .is-style-outline button[data-value='" + value +"']").parent('.is-style-outline').remove();
        }
        $(this).trigger('classCheck');
    });
    $('main.mh-functions #lf-resources_topic-buttons .wp-block-button').on('classCheck', function () {
        if($('#lf-resources_topic-header').find('.wp-block-button.is-style-outline').length !== 0) {
            $('main.mh-functions #lf-resources_featured-resource').attr('hidden', '');
            var params = [];
            $("main.mh-functions #lf-resources_topic-buttons .wp-block-button.is-style-fill button").each(function(){
                params.push($(this).data('value'));
            });
            if (history.pushState) {
                var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?topics=' + params;
                window.history.pushState({path:newurl},'',newurl);
            }
            $end = 0;
            $("main.mh-functions .lf--resource-grid > a").attr('hidden', '');
            $("main.mh-functions .lf--resource-grid > a").each(function(){
                var topics = $(this).data('topics');
                
                if(params.some( ai => topics.includes(ai) )) {
                    $(this).removeAttr('hidden');
                    $end++;
                }
                if($end === 12) {
                    return false;
                }
            });
            $i = 0;
            $("main.mh-functions .lf--resource-grid > a").each(function(){
                var topics = $(this).data('topics');
                if(params.some( ai => topics.includes(ai) )) {
                    $i++;
                }
            });
            $("main.mh-functions #lf-resources_results-count span").html('(' + $i + ')');
            $("#lf-resources_no-results").attr('hidden', '');
            if($i === 0) {
                $("#lf-resources_no-results").removeAttr('hidden');
            }
            if(($i / 12) <= 1) {
                $("main.mh-functions #lf-resources_pagination").html('');
            } else if(($i / 12) > 1 && ($i / 12) <= 2) {
                $("main.mh-functions #lf-resources_pagination").html('<a class="lf-arrow-left" aria-label="Previous Page" role="link" aria-disabled="true"></a><div><a href="?topics=' + params + '" aria-label="Go To Page 1" aria-current="true" data-target-page-index="0">1</a><a href="?topics=' + params + '&pg=2" aria-label="Go To Page 2" aria-current="false" data-target-page-index="1">2</a></div><a href="?topics=' + params + '&pg=2" class="lf-arrow-right" aria-label="Next Page" data-target-page-index="1"></a>');
            } else if(($i / 12) > 2 && ($i / 12) <= 3) {
                $("main.mh-functions #lf-resources_pagination").html('<a class="lf-arrow-left" aria-label="Previous Page" role="link" aria-disabled="true"></a><div><a href="?topics=' + params + '" aria-label="Go To Page 1" aria-current="true" data-target-page-index="0">1</a><a href="?topics=' + params + '&pg=2" aria-label="Go To Page 2" aria-current="false" data-target-page-index="1">2</a><a href="?topics=' + params + '&pg=3" aria-label="Go To Page 3" aria-current="false" data-target-page-index="2">3</a></div><a href="?topics=' + params + '&pg=2" class="lf-arrow-right" aria-label="Next Page" data-target-page-index="1"></a>');
            } else {
                $("main.mh-functions #lf-resources_pagination").html('<a class="lf-arrow-left" aria-label="Previous Page" role="link" aria-disabled="true"></a><div><a href="?topics=' + params + '" aria-label="Go To Page 1" aria-current="true" data-target-page-index="0">1</a><a href="?topics=' + params + '&pg=2" aria-label="Go To Page 2" aria-current="false" data-target-page-index="1">2</a><a href="?topics=' + params + '&pg=3" aria-label="Go To Page 3" aria-current="false" data-target-page-index="2">3</a></div><span>…</span><a href="?topics=' + params + '&pg=2" class="lf-arrow-right" aria-label="Next Page" data-target-page-index="1"></a>');
            }
        } else {
            $('main.mh-functions #lf-resources_featured-resource').removeAttr('hidden');
            var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            window.history.pushState({path:newurl},'',newurl);
            $("main.mh-functions .lf--resource-grid > a").attr('hidden', '');
            $end = 0;
            $("main.mh-functions .lf--resource-grid > a").each(function(){
                $(this).removeAttr('hidden');
                $end++;
                if($end === 12) {
                    return false;
                }
            });
            $i = 0;
            $("main.mh-functions .lf--resource-grid > a").each(function(){
                $i++;
            });
            $("main.mh-functions #lf-resources_results-count span").html('(' + $i + ')');
            $("main.mh-functions #lf-resources_pagination").html('<a class="lf-arrow-left" aria-label="Previous Page" role="link" aria-disabled="true"></a><div><a href="?" aria-label="Go To Page 1" aria-current="true" data-target-page-index="0">1</a><a href="?pg=2" aria-label="Go To Page 2" aria-current="false" data-target-page-index="1">2</a><a href="?pg=3" aria-label="Go To Page 3" aria-current="false" data-target-page-index="2">3</a></div><span>…</span><a href="?pg=2" class="lf-arrow-right" aria-label="Next Page" data-target-page-index="1"></a>');
            $("#lf-resources_no-results").attr('hidden', '');
        }
    });
	
	//ALERT BAR COOKIE

	// If the 'hide cookie is not set we show the message
	if (!readCookie('notice')) {
		$('#alert').addClass('visible');
	} else {
		$('#alert').hide();
	}
	
	// Add the event that closes the popup and sets the cookie that tells us to
	// not show it again until one day has passed.
	$('#noticeClose').click(function() {
		$('#alert').hide();
		createCookie('notice', true, 7);
		return false;
	});
	  
	// ---
	// And some generic cookie logic
	// ---
	function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
	}
	
	function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
	}
	
	function eraseCookie(name) {
	createCookie(name,"",-1);
	}
});