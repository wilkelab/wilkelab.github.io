/*----------------------*/
/*--- Filter by year ---*/
/*----------------------*/
/*- show/hide filter -*/
function toggleFilters(){
  let filterYears = document.getElementById("filter-wrap");
  if(filterYears.style.display != 'block'){
    filterYears.style.display = 'block';
    document.getElementById("filter-toggle").innerText="Filter by Year ▴";
  }
  else{
    filterYears.style.display = 'none';
    document.getElementById("filter-toggle").innerText="Filter by Year ▾";
  }
}
/*- select a year (make a button active/inactive) -*/
function toggleYears(btn){
  let data = document.getElementById('year-' + btn.innerText.toLowerCase());
  if(btn.classList.contains("pub-yr-active")){
    btn.classList.remove("pub-yr-active");
  }
  else{
    btn.classList.add("pub-yr-active");
  }
  showActiveYears()
}
/*- show info for selecter years -*/
function showActiveYears(){
  let allYears = document.getElementsByClassName("pub-yr");
  let activeYears = document.getElementsByClassName("pub-yr-active")
  if(activeYears && activeYears.length > 0){
    for(let yr of allYears){
      let data = document.getElementById('year-' + yr.innerText.toLowerCase());
      if(yr.classList.contains("pub-yr-active")){
        data.style.display = "block";
      }
      else{
        data.style.display = "none";
      }
    }
  }
  else{
    for(let yr of allYears){
      document.getElementById('year-' + yr.innerText.toLowerCase()).style.display = "block";
    }
  }
}
/*- reset filter (set all buttons inactive) -*/
function resetFilters(){
  let ar = document.getElementsByClassName("pub-yr");
  for(let el of ar){
    if (el.classList.contains("pub-yr-active")){
      el.classList.remove("pub-yr-active");
    }
  }
  showActiveYears()
}
/*----------------------------*/
/*--- Menu-drawer (mobile) ---*/
/*----------------------------*/
/*- close menu-drawer (for button in menu) -*/
function closeMenu(){
  let mo = document.getElementById("menu-overlay");
  mo.style.display = "none";
  document.getElementsByTagName("body")[0].style.overflowY = "auto";
}
/*- open menu-drawer (for button in menu) -*/
function openMenu(){
  document.getElementById("menu-overlay").style.display = "block";
  document.getElementsByTagName("body")[0].style.overflowY = "hidden"
}
/*- close menu-drawer (for overlay under menu-drawer) -*/
function hideOverlay(){
  let mo = document.getElementById("menu-overlay");
  if(event.target == mo){
    mo.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
  }
}
/*----------------------------*/
/*--- Scroll-on-top button ---*/
/*----------------------------*/
/*- bind a function on scrolling -*/
window.onscroll = watchScroll
/*- show/hide button -*/
function watchScroll(){
  if (window.scrollY > 55){
    document.getElementsByClassName("btn-scroll-top")[0].style.display = "block";
  }
  else{
    document.getElementsByClassName("btn-scroll-top")[0].style.display = "none";
  }
}
/*- scrolling on top -*/
function scrollOnTop(){
  window.scrollTo(0, 0);
}

//fix links temporary
window.onload = function(){
  ar = document.getElementsByTagName("a")
  for(let i = 0; i< ar.length; i++){
    if(ar[i].pathname.substring(0,9) == "/classes/"){
      ar[i].href = ar[i].href.replace("/classes/", "/wilkelabtest/classes/")
      console.log(ar[i])
    } 
  }
}