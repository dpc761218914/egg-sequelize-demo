"use strict";$(function(){var t=new Cookie,e=new Message;$(".table-action-btn__delete").click(function(a){var i=a.target.attributes["data-id"].value;$.ajax({type:"DELETE",url:"/api/admin/article?id="+i,headers:{Authorization:t.get("TEAN_ADMIN")},contentType:"application/json",dataType:"json",success:function(t){e.error(t.msg),setTimeout(function(){window.location.reload()},1e3)},error:function(t){t.status>400&&(window.href="/admin/login");var a="";a=t.responseJSON.msg?t.responseJSON.msg:t.status+": "+t.statusText,e.error(a)}})}),$(".table-action-btn__edit").click(function(t){var e=t.target.attributes["data-id"].value;window.location.href="/admin/article/edit/"+e})});