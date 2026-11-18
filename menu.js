//Nested Side Bar Menu (Mar 20th, 09)
//By Dynamic Drive: http://www.dynamicdrive.com/style/

var menuids=["sidebarmenu1"] //Enter id(s) of each Side Bar Menu's main UL, separated by commas

function initsidebarmenu(){
for (var i=0; i<menuids.length; i++){
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
    ultags[t].parentNode.getElementsByTagName("a")[0].className+=" subfolderstyle"
  if (ultags[t].parentNode.parentNode.id==menuids[i]) //if this is a first level submenu
   ultags[t].style.left=ultags[t].parentNode.offsetWidth+"px" //dynamically position first level submenus to be width of main menu item
  else //else if this is a sub level submenu (ul)
    ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth+"px" //position menu to the right of menu item that activated it
    ultags[t].parentNode.onmouseover=function(){
      this.getElementsByTagName("ul")[0].style.display="block"
    }
    ultags[t].parentNode.onmouseout=function(){
     this.getElementsByTagName("ul")[0].style.display="none"
    }
  }
  for (var t=ultags.length-1; t>-1; t--){ //loop through all sub menus again, and use "display:none" to hide menus (to prevent possible page scrollbars
  ultags[t].style.visibility="visible"
  ultags[t].style.display="none"
  }
  }
}

if (window.addEventListener)
window.addEventListener("load", initsidebarmenu, false)
else if (window.attachEvent)
window.attachEvent("onload", initsidebarmenu)

document.write("<p>Naila, Aboru Haruku</p>")
document.write("<ul id=\"sidebarmenu1\">")
document.write("<li><a href=\"home_ned.html\" target=\"_self\">Home</a></li>")

document.write("<li><a href=\"#\">Oprichting LLS</a>")
document.write("  <ul>")
document.write("<li><a href=\"oprichting_geschiedenis_ned.html\" target=\"_self\">Geschiedenis</a></li>")
document.write("<li><a href=\"oprichting_huidigbestuur_ned.html\" target=\"_self\">Huidig Bestuur</a></li>")
document.write("</ul>")
document.write("</li>")


document.write("<li><a href=\"agenda_ned.html\" target=\"_self\">Agenda</a></li>")

document.write("<li><a href=\"#\">Activiteiten</a>")
document.write("  <ul>")
document.write("<li><a href=\"activiteiten_huidig_ned.html\" target=\"_self\">Huidig</a></li>")
document.write("  <li><a href=\"activiteiten_verleden_ned.html\" target=\"_self\">Verleden</a></li>")
document.write("</ul>")
document.write("</li>")

document.write("<li><a href=\"#\">Algemene informatie</a>")
document.write("  <ul>")
document.write("<li><a href=\"informatie_aboru_ned.html\" target=\"_self\">Aboru</a></li>")
document.write("  <li><a href=\"informatie_familienamen_ned.html\" target=\"_self\">Familienamen</a></li>")
document.write("<li><a href=\"informatie_aborulied.html\" target=\"_self\">Aborulied</a></li>")
document.write("</ul>")
document.write("</li>")

document.write("<li><a href=\"fotoalbum.html\" target=\"_self\">Foto's + Album 55 Jaar </a></li>")
document.write("<li><a href=\"videoalbum.html\" target=\"_self\">Video Album 55 Jaar </a></li>")


document.write("<li><a href=\"#\">Mededelingen</a>")
document.write("  <ul>")
document.write("  <li><a href=\"mededelingen_overlijdensbericht.html\" target=\"_self\">Overlijdensbericht</a></li>")
document.write("  <li><a href=\"mededelingen_overig.html\" target=\"_self\">Overige Mededelingen</a></li>")
document.write("</ul>")
document.write("</li>")


document.write("<li><a href=\"#\">Reisverslagen</a>")
document.write("  <ul>")
document.write("  <li><a href=\"Reisverslagen_Jean-Paul Soumokil & Joanne Stoker.html\" target=\"_self\">Reisverslagen_Jean-Paul Soumokil & Joanne Stoker</a></li>")
document.write("  <li><a href=\"Reisverslagen_Feiko KUIPER.html\" target=\"_self\">Reisverslagen_Feiko KUIPER</a></li>")
document.write("  <li><a href=\"Reisverslagen_In de voetsporen van oma en opa.[7970].html\" target=\"_self\">Reisverslagen_In de voetsporen van oma en opa.[7970]</a></li>")

document.write("</ul>")
document.write("</li>")

document.write("  <li><a href=\"contact_gegevens_ned.html\" target=\"_self\">Informatie/Contact</a></li>")






