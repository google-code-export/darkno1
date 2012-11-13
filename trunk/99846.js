(function($){function fixTitle(jQueryele){if(jQueryele.attr('title')||typeof(jQueryele.attr('original-title'))!='string'){jQueryele.attr('original-title',jQueryele.attr('title')||'').removeAttr('title')}}function Tipsy(element,options){this.jQueryelement=$(element);this.options=options;this.enabled=true;fixTitle(this.jQueryelement)}Tipsy.prototype={show:function(){var title=this.getTitle();if(title&&this.enabled){var jQuerytip=this.tip();jQuerytip.find('.tipsy-inner')[this.options.html?'html':'text'](title);jQuerytip[0].className='tipsy';jQuerytip.remove().css({top:0,left:0,visibility:'hidden',display:'block'}).appendTo(document.body);var pos=$.extend({},this.jQueryelement.offset(),{width:this.jQueryelement[0].offsetWidth,height:this.jQueryelement[0].offsetHeight});var actualWidth=jQuerytip[0].offsetWidth,actualHeight=jQuerytip[0].offsetHeight;var gravity=(typeof this.options.gravity=='function')?this.options.gravity.call(this.jQueryelement[0]):this.options.gravity;var tp;switch(gravity.charAt(0)){case'n':tp={top:pos.top+pos.height+this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case's':tp={top:pos.top-actualHeight-this.options.offset,left:pos.left+pos.width/2-actualWidth/2};break;case'e':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth-this.options.offset};break;case'w':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width+this.options.offset};break}if(gravity.length==2){if(gravity.charAt(1)=='w'){tp.left=pos.left+pos.width/2-15}else{tp.left=pos.left+pos.width/2-actualWidth+15}}jQuerytip.css(tp).addClass('tipsy-'+gravity);if(this.options.fade){jQuerytip.stop().css({opacity:0,display:'block',visibility:'visible'}).animate({opacity:this.options.opacity})}else{jQuerytip.css({visibility:'visible',opacity:this.options.opacity})}}},hide:function(){if(this.options.fade){this.tip().stop().fadeOut(function(){$(this).remove()})}else{this.tip().remove()}},getTitle:function(){var title,jQuerye=this.jQueryelement,o=this.options;fixTitle(jQuerye);var title,o=this.options;if(typeof o.title=='string'){title=jQuerye.attr(o.title=='title'?'original-title':o.title)}else if(typeof o.title=='function'){title=o.title.call(jQuerye[0])}title=(''+title).replace(/(^\s*|\s*$)/,"");return title||o.fallback},tip:function(){if(!this.jQuerytip){this.jQuerytip=$('<div class="tipsy"></div>').html('<div class="tipsy-arrow"></div><div class="tipsy-inner"/></div>')}return this.jQuerytip},validate:function(){if(!this.jQueryelement[0].parentNode){this.hide();this.jQueryelement=null;this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled}};$.fn.tipsy=function(options){if(options===true){return this.data('tipsy')}else if(typeof options=='string'){return this.data('tipsy')[options]()}options=$.extend({},$.fn.tipsy.defaults,options);function get(ele){var tipsy=$.data(ele,'tipsy');if(!tipsy){tipsy=new Tipsy(ele,$.fn.tipsy.elementOptions(ele,options));$.data(ele,'tipsy',tipsy)}return tipsy}function enter(){var tipsy=get(this);tipsy.hoverState='in';if(options.delayIn==0){tipsy.show()}else{setTimeout(function(){if(tipsy.hoverState=='in')tipsy.show()},options.delayIn)}};function leave(){var tipsy=get(this);tipsy.hoverState='out';if(options.delayOut==0){tipsy.hide()}else{setTimeout(function(){if(tipsy.hoverState=='out')tipsy.hide()},options.delayOut)}};if(!options.live)this.each(function(){get(this)});if(options.trigger!='manual'){var binder=options.live?'live':'bind',eventIn=options.trigger=='hover'?'mouseenter':'focus',eventOut=options.trigger=='hover'?'mouseleave':'blur';this[binder](eventIn,enter)[binder](eventOut,leave)}return this};$.fn.tipsy.defaults={delayIn:0,delayOut:0,fade:true,fallback:'',gravity:'n',html:false,live:false,offset:0,opacity:1.0,title:'title',trigger:'hover'};$.fn.tipsy.elementOptions=function(ele,options){return $.metadata?$.extend({},options,$(ele).metadata()):options};$.fn.tipsy.autoNS=function(){return $(this).offset().top>($(document).scrollTop()+$(window).height()/2)?'s':'n'};$.fn.tipsy.autoWE=function(){return $(this).offset().left>($(document).scrollLeft()+$(window).width()/2)?'e':'w'}})($);$(function(){$('a, img, span, div, .lp1, .lp4, .lp5, .lp6, .lp7, .imglp, input').tipsy({gravity:'s',opacity:0.8,html:true})});$(function(){var prow=$(".name a").attr("href");var names=$(".name a").text();$("#userlinks").prepend('<div id="navbars" class="navbars"><div class="navLeft"><div class="navRight"><ul id="navtabs" class="navtabs floatcontainer"><li id="vbtab_cms"><a class="navtab" href="http://invision.chinhphuc.info">Home</a></li><li class="selected" id="vbtab_forum"><a class="navtab" href="/forum">Forum</a></li><li id="vbtab_blog"><a class="navtab" href="blog.php">Blogs</a></li><li id="vbtab_whatsnew"><a class="navtab" href="/search?search_id=newposts">New</a></li><li id="tab_nzc0_591"><a class="navtab" href="/memberlist">Community</a></li></ul><div class="searchBox"><form align="right" class="n-search pull-left" action="/search" method="get"><a class="icon" id="dosearch" href="/search" title="Tìm kiếm nâng cao"><i class="i-search"></i></a><input name="search_keywords" type="text" class="search-query span2" placeholder="Nhập từ khóa &gt; Enter" style="background-image: none; background-position: 0% 0%; background-repeat: repeat repeat; "></form></div></div></div></div><div class="navbar"><div class="nav"><div onclick="dr_cookie();" class="thongtin" style="padding-top:16px;padding-right:30px" align="right"><span class="caret"><font color="#fff">'+names+' </font> &nbsp;&nbsp;<img src="http://i30.servimg.com/u/f30/17/70/31/89/down10.png"/></span><span class="avatar-user" style="float:left!important"><span></div><div id="cotthongtin" style="display:none"><ul class="dropdown-menu"><li><a href="'+prow+'"><div class="content"><b class="ifusername">'+names+' </b><small class="metadata">Xem trang cá nhân</small><span class="avatar-user" style="float:left!important;margin:-30px -60px 0"><span></div></a></li><li class="divider"> </li><li><a href="/profile?mode=editprofile"><i class="i-user"></i>Thay đổi thông tin</a></li><li><a href="/profile?mode=editprofile&amp;page_profil=avatars"><i class="i-picture"></i>Ðổi hình đại diện</a></li><li><a href="/profile?mode=editprofile&amp;page_profil=signature"><i class="i-pencil"></i>Sửa chữ ký</a></li><li><a href="/profile?mode=editprofile&amp;page_profil=preferences"><i class="i-cog"></i>Cài đặt tài khoản</a></li><li><a href="/profile?mode=editprofile&amp;page_profil=friendsfoes"><i class="i-heart"></i>Trang bạn bè</a></li><li class="divider"></li><li><a href="/logout" class="logout"><i class="i-off"></i>Thoát!</a></li></ul></div></div></div><div class="ifmi" style="padding-right:5px;padding-top:8px"><ul class="nav"><li class="divider-vertical"></li><li><a href="/faq" title="Trợ giúp"><i class="i-white i-question-sign"></i></a></li><li class="dropdown" onclick="fr_cookie();"><a id="friend" title="Lời mời kết bạn"><i class="i-white i-user"><span class="countfriend" style="display:none"><span class="friendnew"></span></span></i></a></li><li class="dropdown"><a onclick="tn_cookie();" id="newmes" title="Tin nhắn chưa đọc"><i class="i-white i-inbox"><span class="countmes" style="display:none"><span class="notifications"></span></span></i></a></li><li class="dropdown" onclick="tb_cookie();"><a id="newpost" title="Các bài viết từ lần truy cập trước" href="/search?search_id=newposts"><i class="i-white i-globe"><span class="countpost" style="display:none"><span class="notification"></span></span></i></a></li><li class="divider-vertical"></li></ul></div>');$(".avatar-user").load($(".name a").attr("href")+' .box-content.profile.center:eq(0) img:eq(0)')});var _0x89d7=["\x69\x6E\x76\x69\x73\x69\x6F\x6E","\x69\x6E\x64\x65\x78\x4F\x66","\x68\x72\x65\x66","\x6C\x6F\x63\x61\x74\x69\x6F\x6E","\x41\x68\x20\x68\x61\x68\x20\x68\x61\x68\x2E\x2E\x2E\x2E\x20\u0110\u1ECB\x6E\x68\x20\x76\x69\x65\x77\x73\x6F\x75\x72\x63\x65\x20\x63\u1EE7\x61\x20\x69\x6E\x76\x69\x73\x69\x6F\x6E\x2E\x63\x68\x69\x6E\x68\x70\x68\x75\x63\x2E\x69\x6E\x66\x6F\x20\x68\u1EDF\x3F\x21","\x68\x74\x74\x70\x3A\x2F\x2F\x69\x6E\x76\x69\x73\x69\x6F\x6E\x2E\x63\x68\x69\x6E\x68\x70\x68\x75\x63\x2E\x69\x6E\x66\x6F","\x72\x65\x70\x6C\x61\x63\x65","\x72\x65\x61\x64\x79","\x2F\x70\x72\x69\x76\x6D\x73\x67\x3F\x66\x6F\x6C\x64\x65\x72\x3D\x69\x6E\x62\x6F\x78","\x6C\x65\x6E\x67\x74\x68","\x69\x6D\x67\x5B\x73\x72\x63\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x69\x34\x30\x2E\x73\x65\x72\x76\x69\x6D\x67\x2E\x63\x6F\x6D\x2F\x75\x2F\x66\x34\x30\x2F\x31\x37\x2F\x37\x30\x2F\x33\x31\x2F\x38\x39\x2F\x74\x68\x72\x65\x61\x64\x31\x31\x2E\x67\x69\x66\x22\x5D","\x73\x68\x6F\x77","\x2E\x63\x6F\x75\x6E\x74\x6D\x65\x73","","\x68\x74\x6D\x6C","\x2E\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E\x73","\x23\x6E\x65\x77\x6D\x65\x73","\x69\x6E\x73\x65\x72\x74\x41\x66\x74\x65\x72","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x74\x6E\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6E\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x20\x2E\x69\x70\x62\x74\x61\x62\x6C\x65\x20\x2E\x73\x74\x61\x74\x75\x73\x65\x64\x20\x2E\x74\x6F\x70\x69\x63\x74\x69\x74\x6C\x65\x3A\x6C\x74\x28","\x29","\x6C\x6F\x61\x64","\x73\x70\x61\x6E","\x63\x68\x69\x6C\x64\x72\x65\x6E","\x65\x61\x63\x68","\x2E\x64\x72\x6F\x70\x64\x6F\x77\x6E\x20\x23\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x74\x6E","\x61\x6A\x61\x78","\x2F\x70\x72\x6F\x66\x69\x6C\x65\x3F\x6D\x6F\x64\x65\x3D\x65\x64\x69\x74\x70\x72\x6F\x66\x69\x6C\x65\x26\x70\x61\x67\x65\x5F\x70\x72\x6F\x66\x69\x6C\x3D\x66\x72\x69\x65\x6E\x64\x73\x66\x6F\x65\x73","\x69\x6D\x67\x5B\x61\x6C\x74\x3D\x22\x41\x63\x63\x65\x70\x74\x22\x5D","\x2E\x63\x6F\x75\x6E\x74\x66\x72\x69\x65\x6E\x64","\x2E\x66\x72\x69\x65\x6E\x64\x6E\x65\x77","\x23\x66\x72\x69\x65\x6E\x64","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x66\x72\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x73\x70\x61\x6E\x3E","\x3C\x73\x70\x61\x6E\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x72\x22\x3E\x3C\x2F\x73\x70\x61\x6E\x3E","\x20\x2E\x62\x6F\x72\x64\x65\x72\x77\x72\x61\x70\x2E\x63\x6C\x65\x61\x72\x20\x2E\x62\x6F\x78\x2D\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x65\x71\x28\x32\x29\x20\x2E\x66\x72\x69\x65\x6E\x64\x73\x2D\x66\x6F\x65\x73\x2D\x6C\x69\x73\x74\x3A\x6C\x74\x28","\x2E\x64\x72\x6F\x70\x64\x6F\x77\x6E\x20\x23\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x66\x72","\x2F\x73\x65\x61\x72\x63\x68\x3F\x73\x65\x61\x72\x63\x68\x5F\x69\x64\x3D\x6E\x65\x77\x70\x6F\x73\x74\x73","\x69\x6D\x67\x5B\x61\x6C\x74\x3D\x22\x42\xE0\x69\x20\x76\x69\u1EBF\x74\x20\x6D\u1EDB\x69\x22\x5D","\x2E\x63\x6F\x75\x6E\x74\x70\x6F\x73\x74","\x2E\x6E\x6F\x74\x69\x66\x69\x63\x61\x74\x69\x6F\x6E","\x23\x6E\x65\x77\x70\x6F\x73\x74","\x3C\x73\x70\x61\x6E\x20\x69\x64\x3D\x22\x64\x72\x6F\x70\x64\x6F\x77\x6E\x2D\x74\x62\x22\x20\x73\x74\x79\x6C\x65\x3D\x22\x64\x69\x73\x70\x6C\x61\x79\x3A\x6E\x6F\x6E\x65\x22\x3E\x3C\x73\x70\x61\x6E\x3E"];$(document)[_0x89d7[7]](function(){if(window[_0x89d7[3]][_0x89d7[2]][_0x89d7[1]](_0x89d7[0])>-1){}else{alert(_0x89d7[4]);window[_0x89d7[3]][_0x89d7[6]](_0x89d7[5])}});$(function(){$(document)[_0x89d7[7]](function(){$[_0x89d7[27]]({url:_0x89d7[8],success:function(_0x2c29x1){a=$(_0x89d7[10],_0x2c29x1)[_0x89d7[9]];if(a<1){}else{$(_0x89d7[12])[_0x89d7[11]]();$(_0x89d7[15])[_0x89d7[14]](_0x89d7[13]+a+_0x89d7[13]);$(_0x89d7[18])[_0x89d7[17]](_0x89d7[16]);$(_0x89d7[26])[_0x89d7[25]](function(){var _0x2c29x2=_0x89d7[8];$(this)[_0x89d7[14]](_0x89d7[19]);$(this)[_0x89d7[24]](_0x89d7[23])[_0x89d7[22]](_0x2c29x2+_0x89d7[20]+a+_0x89d7[21])})}}});$[_0x89d7[27]]({url:_0x89d7[28],success:function(_0x2c29x1){b=$(_0x89d7[29],_0x2c29x1)[_0x89d7[9]];if(b<1){}else{$(_0x89d7[30])[_0x89d7[11]]();$(_0x89d7[31])[_0x89d7[14]](_0x89d7[13]+b+_0x89d7[13]);$(_0x89d7[33])[_0x89d7[17]](_0x89d7[32]);$(_0x89d7[36])[_0x89d7[25]](function(){var _0x2c29x3=_0x89d7[28];$(this)[_0x89d7[14]](_0x89d7[34]);$(this)[_0x89d7[24]](_0x89d7[23])[_0x89d7[22]](_0x2c29x3+_0x89d7[35]+b+_0x89d7[21])})}}});$[_0x89d7[27]]({url:_0x89d7[37],success:function(_0x2c29x1){c=$(_0x89d7[38],_0x2c29x1)[_0x89d7[9]];if(c<1){}else{$(_0x89d7[39])[_0x89d7[11]]();$(_0x89d7[40])[_0x89d7[14]](_0x89d7[13]+c+_0x89d7[13]);$(_0x89d7[42])[_0x89d7[17]](_0x89d7[41])}}})})});function dr_cookie(){if(document.getElementById('cotthongtin').style.display!='block'){document.getElementById('cotthongtin').style.display="block";var a=document.getElementById('cotthongtin').style.display;my_setcookie('cotthongtin',a,false)}else{document.getElementById('cotthongtin').style.display="none";var a=document.getElementById('cotthongtin').style.display;my_setcookie('cotthongtin',a,false)}}function tn_cookie(){if(document.getElementById('dropdown-tn').style.display!='block'){document.getElementById('dropdown-tn').style.display="block";var a=document.getElementById('dropdown-tn').style.display;my_setcookie('dropdown-tn',a,false)}else{document.getElementById('dropdown-tn').style.display="none";var a=document.getElementById('dropdown-tn').style.display;my_setcookie('dropdown-tn',a,false)}}function fr_cookie(){if(document.getElementById('dropdown-fr').style.display!='block'){document.getElementById('dropdown-fr').style.display="block";var a=document.getElementById('dropdown-fr').style.display;my_setcookie('dropdown-fr',a,false)}else{document.getElementById('dropdown-fr').style.display="none";var a=document.getElementById('dropdown-fr').style.display;my_setcookie('dropdown-fr',a,false)}}function Op1Last(forum){forum==''?Where='':Where='&search_where='+forum;LoadLastPost(0)}function Op2Last(op){Link=op;LoadLastPost(0)}function LoadLastPost(page){page>0?$('.TrangTruoc').show():$('.TrangTruoc').hide();if(page==0){$('#SoTrangLT').val(1)}LinkLastPost=Link+Where+Start+page*Trang;$('#Load').show();$('#dl-lastpost').load(LinkLastPost+' form.ipbform .ipbtable tr',function(){$('#main-lastpost').empty();$(this).find('tr').length<10?$('.TrangSau').hide():$('.TrangSau').show();if($(this).is(':empty')){$('#main-lastpost').text('Không có dữ liệu')}else{$(this).find('tr').each(function(){var baicuoi=$(this).find('td:eq(2) a.topictitle').text(),linkcuoi=$(this).find('td:last a:last').attr('href'),tacgia=$(this).find('td:eq(4)').html(),guicuoi=$(this).find('td:eq(7) strong').html(),chuyenmuc=$(this).find('td:eq(3)').html(),reply=$(this).find('td:eq(5)').text(),view=$(this).find('td:eq(6)').text(),trangthai=$(this).find('td:eq(0) img').attr('alt'),daspam;daspam=1==$(this).find("td:eq(1) img[alt='You have posted in this topic.']").length?'<p style="background-color: highlight; padding: 3px;">Bạn đã tham gia thảo luận trong chủ đề này.</p>':'<p style="background-color: #FFF000; padding: 3px;">Bạn chưa tham gia thảo luận trong chủ đề này.</p>';$('<div class="dl-post"></div>').appendTo('#main-lastpost');$('.lp2').mouseover(function(){$(this).children('.intooltip').show();$(this).live('mousemove',function(event){$('.intooltip').css({'left':event.pageX-420,'top':'5px'})})});$('<span class="lp1" title="'+$(this).find('td:eq(0)').text()+'"></span>').html($(this).find('td:eq(0)').html()).appendTo('#main-lastpost .dl-post:last');$('<span class="lp2"></span>').html('<a href="'+linkcuoi+'"><span class="title">'+baicuoi+'</span></a> <span class="intooltip">Tiêu đề: <a href="'+linkcuoi+'">'+baicuoi+'</a> <hr>Tác giả: '+tacgia+' <br>Người gửi cuối: '+guicuoi+' <br>Chuyên mục: '+chuyenmuc+' <hr>Lượt trả lời: <font color="indigo">'+reply+'</font> <br>Lượt xem: <font color="green">'+view+'</font> <hr>Trạng thái: <font color="brown">'+trangthai+'</font> <br>'+daspam+'</span>').appendTo('#main-lastpost .dl-post:last');$('<span class="lp4" title="'+$(this).find('td:eq(7) a').text()+'"></span>').html($(this).find('td:eq(7) strong').html()).appendTo('#main-lastpost .dl-post:last');$('<span class="lp5" title="'+$(this).find('td:eq(3)').text()+'"></span>').html($(this).find('td:eq(3)').html()).appendTo('#main-lastpost .dl-post:last');$('<span class="lp6" title="'+reply+'"></span>').html(''+reply+'').appendTo('#main-lastpost .dl-post:last');$('<span class="lp7" title="'+view+'"></span>').html(''+view+'').appendTo('#main-lastpost .dl-post:last');$('<img src="http://i40.servimg.com/u/f40/17/70/31/89/icon_m13.gif" class="imglp" title="'+$(this).find('td:eq(7)').text().replace('by','.')+'"></img>').appendTo('#main-lastpost .dl-post:last');$('<span class="lp8" title="'+$(this).find('td:eq(1)').text()+'"></span>').html($(this).find('td:eq(1)').html()).appendTo('#main-lastpost .dl-post:last');$('<img src="http://i40.servimg.com/u/f40/17/70/31/89/thread10.gif" alt="Không có bài viết mới" title="Không có bài viết mới">').replaceWith('<img src="http://i40.servimg.com/u/f40/17/70/31/89/post_o10.gif" alt="Không có bài viết mới" title="Không có bài viết mới">')});$('#dl-lastpost').empty()}$('#Load').fadeOut()})}Link='/search?search_author=*_*&search_keywords';Start='&start=';Where='';Trang=10;$(function(){$('#jumpbox-last select').clone().appendTo('#option-lastpost');$('#option-lastpost select').removeAttr('name').removeAttr('onchange').attr('id','select-lastpost');$('.op-last-bottom').click(function(){$('.op-last-bottom').removeClass('op-last-bottom2');$(this).addClass('op-last-bottom2')});$('#option-lastpost .op-last').click(function(){$('#option-lastpost .op-last').removeClass('op-last2');$('#select-lastpost').removeClass('op-last-select');$(this).addClass('op-last2')});$('#select-lastpost').live('change',function(){$('#option-lastpost .op-last').removeClass('op-last2');$(this).addClass('op-last-select');if($(this).val()=='1'){Where='';LoadLastPost(0)}else if($(this).val()!='-1'){Where='&search_where='+$(this).val();LoadLastPost(0)}});$('.TrangTruoc').click(function(){st=parseInt($('#SoTrangLT').val())-1;$('#SoTrangLT').val(st);LoadLastPost(st-1)});$('.TrangSau').click(function(){st=parseInt($('#SoTrangLT').val())+1;$('#SoTrangLT').val(st);LoadLastPost(st-1)});$('#SoTrangLT').change(function(){ltval=parseInt($(this).val());if(ltval<1||ltval>10){$(this).val(1)}else{LoadLastPost(ltval-1)}});$('#option-lastpost .op-last:first').addClass('op-last2');LoadLastPost(0);$('#userlinks ul:last').addClass('hide');$(".mainmenu:eq(9)").after('<img src="http://i40.servimg.com/u/f40/17/70/31/89/nav_ba10.png" alt="Change background image" title="Tùy chọn hình nền" id="nav_background" />');$("#content").prepend('<div id="toggle_background" style="display: none;"><div id="custom_background"><span id="bg1"></span><span id="bg2"></span><span id="bg3"></span><span id="bg4"></span><span id="bg5"></span><span id="bg6"></span><div id="custom_url"><input type="text" placeholder=" Chọn hình nền khác bằng cách nhập một URL hình ảnh và nhấn [Thay đổi]" id="custom_input"><strong id="custom_submit">Thay đổi</strong></div></div></div>');$("#nav_background").click(function(){$("#toggle_background").slideToggle()});$("#custom_background span").click(function(){$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6 bg_custom").addClass($(this).attr("id"));my_setcookie("custom_background",$(this).attr("id"),true)});$("#custom_submit").click(function(){var urlbg=$("#custom_input").val();$("body").removeClass("bg1 bg2 bg3 bg4 bg5 bg6 bg_custom").addClass("bg_custom").css("background-image","url('"+urlbg+"')");my_setcookie("custom_background",urlbg,true)});if(my_getcookie("custom_background")==""){$("body").addClass("bg_custom").css("background-image","url("+my_getcookie("custom_background")+")")}else{$("body").addClass(my_getcookie("custom_background"))};$('.nav:contains("Thông điệp yêu thương")').closest('#main').hide();$('#left .module:eq(0)').addClass('topposter').next().remove();$('#left .module:eq(0) a[href^="/u"]').addClass('toppost');$('#left .module .box-content table tr td:nth-child(2n)').addClass('topright');$('#left .module:eq(1)').addClass('recent').next().remove();$('#left .module:eq(2)').addClass('mostview');$('#left .module:eq(2) a[href^="/t"]').addClass('topicview');$('#left .module:eq(3)').addClass('polls');$('<center><br><br><div class="mm"style="border-top:1px dashed #ccc;align:center;height:25px;"><a href="http://invision.chinhphuc.info/t1-topic#1"title="Nội quy"><img height="25px"src="http://i40.servimg.com/u/f40/17/70/31/89/iaza1519.gif"></a><a href="http://invision.chinhphuc.info/f18-forum"title="Thắc mắc Code, TUT"><img src="http://i40.servimg.com/u/f40/17/70/31/89/iaza1520.gif"></a><a href="http://invision.chinhphuc.info/f34-forum"title="Yêu cầu Skin"><img src="http://i40.servimg.com/u/f40/17/70/31/89/iaza1521.gif"></a><a href="http://invision.chinhphuc.info/c2-category"title="Khu vực chia sẻ"><img src="http://i40.servimg.com/u/f40/17/70/31/89/iaza1522.gif"></a><a href="http://facebook.com/ifcommunity"title="IFC trên Facebook"target="_blank"><img src="http://i40.servimg.com/u/f40/17/70/31/89/iaza1523.gif"></a></div></center>').insertAfter(".topicview:last");$('<div id="socialBar"><div class="socialIcons"><img src="http://i40.servimg.com/u/f40/17/70/31/89/social10.png"/></div></div>').insertAfter(".ifmi");$('<table class="ban2"><tbody><tr><td><span style="color:#000"><span style="color: black; font-size: 11pt; ">Hãy giữ nguyên nguồn bài viết khi copy bài viết từ IFC đi nơi khác hay từ nơi khác đến IFC.<br>Việc xóa, sửa nguồn khi sao chép bài viết thể hiện thái độ không tôn trọng tác giả viết ra code.<br>IFC sẽ không hỗ trợ những con người như vậy.</td></tr></tbody></table><br>').insertAfter("#navstrip");$('<div id="footerMain"><div class="footerWrap"><div class="pageWrap"><div id="footerNav"><div class="footerNavLeft"><div class="footerNavRight"><div class="footerNavWrap"><ul><li><a href="/contact"rel="nofollow"accesskey="9">Contact Us</a></li><li><a href="/forum">Forum</a></li><li><a href="archive/index.php">Archive</a></li><li><a href="#top">Top</a></li></ul></div></div></div></div><div class="footerBody"><div class="copyright"><div><div class="centerer footer-links"><del><ul><li><strong><a href="http://www.forumvi.com/"target="_blank">Free forum</a></strong>&nbsp;|&nbsp;<a href="http://www.forumvi.com/vi/invision/"target="_blank">Invision</a>&nbsp;|&nbsp;<a name="bottom" href="http://help.forumotion.com/" target="_blank">Free forum support</a>&nbsp;|&nbsp;<a name="bottom" href="/statistics" rel="nofollow">Statistics</a>&nbsp;|&nbsp;<a name="bottom" href="/contact" rel="nofollow">Liên hệ</a>&nbsp;|&nbsp;<a href="/abuse?page=%2Fforum&amp;report=1" rel="nofollow">Report an abuse</a></li></ul></del></div><br>Powered by&nbsp;<a href="http://www.forumotion.com/"id="vbulletinlink">Forumotion®</a>&nbsp;Invision.<br><strong>Skin</strong> and <strong>Mods</strong>&nbsp;by:<a href="/u5"title="miamor"><span style="color:#FF00FF">miamor</span></a><br><i class="i-barcode"></i>&nbsp;Copyright&nbsp;©&nbsp;2012&nbsp;<a href="http://invision.chinhphuc.info" target="_blank">IFC</a>.&nbsp;All rights reserved.&nbsp;<a href="#top" title="Lênđầu trang"><i class="i-arrow-up"></i></a></div><div></div></div></div></div></div></div>').insertAfter("#gfooter")});