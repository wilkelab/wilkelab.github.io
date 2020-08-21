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

function resetFilters(){
  let ar = document.getElementsByClassName("pub-yr");
  for(let el of ar){
    if (el.classList.contains("pub-yr-active")){
      el.classList.remove("pub-yr-active");
    }
  }
  showActiveYears()
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