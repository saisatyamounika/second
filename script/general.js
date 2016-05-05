/**
 * Created by Mounika on 5/3/2016.
 */
$(document).ready(function() {
   $("a.mobile").click(function() {
$(".sidebar").slideToggle("fast");
   });
    window.onresize=function(event){
if($(window).width()>320){
    $(".sidebar").show();
}
    }
});