jQuery(document).ready(function($){$('.search-form input[type=text]').focus();if($('.items-list').length){$('.items-list').masonry({itemSelector:'.item'});}$('.btn-download').on('click',function(){var data_did=$(this).attr('data-did'),data_name=$(this).attr('data-name'),data_point=$(this).attr('data-point');$('.downloader').html('');$('.btn-download').show();$('.btn-close').hide();if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest()}else{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}xmlhttp.open("GET",dsz.url+"/data/vdl.php?v="+data_did+"");xmlhttp.onreadystatechange=function(){if(xmlhttp.readyState==4&&xmlhttp.status==200){$('#downloader-'+data_did).html(xmlhttp.responseText);$(this).text("Stop");}};xmlhttp.send(null);$(this).hide();$('#item-'+data_did+' .btn-close').show();});$('.btn-close').on('click',function(){var data_did=$(this).attr('data-did');$('.downloader').html('');$(this).hide();$('.btn-download').show();});});