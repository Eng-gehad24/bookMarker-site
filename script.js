var siteName=document.getElementById('nameInput');
var siteUrl=document.getElementById('siteInput');
var btnSubmit=document.getElementById('btn');
var tableBody=document.getElementById('tableBody')
var siteList=[];
if(localStorage.getItem('list')!==null){
    siteList=JSON.parse(localStorage.getItem('list'));
    display();
}
function createBookmarker(){
    if(validationName()==true&validationUrl()==true){
        var site={
            sName:siteName.value, 
            sUrl:siteUrl.value
        }
        siteList.push(site)
        localStorage.setItem('list',JSON.stringify(siteList))
        clearForm()
        display()
        console.log(siteList)
    }else{
        alert(`invalid data...
        name must have 3 character at minimum....
        url must have (. then 2 character)
        
        `)
    }
   
}
function clearForm(){
    siteName.value='';
    siteUrl.value='';
}
function display(){
    var trs='';
    for(var i=0;i<siteList.length;i++){
       trs+=`
       <tr class="">
       <td>${i+1}</td>
       <td>${siteList[i].sName}</td>
       <td><a href="${siteList[i].sUrl}"><button onclick=" goToWebPage()" class="btn btn-success text-white fw-medium"><i class="fa fa-eye pe-2"></i>Visit</button></a></td>
       <td>
       <button  onclick="deleteForm(${i})" class="btn btn-danger fw-medium"><i class="fa fa-trash pe-2""></i>Delete</button></td>
   </tr>
       `  
    }
    document.getElementById('tableBody').innerHTML=trs;
}
function deleteForm(index){
    siteList.splice(index,1)
    localStorage.setItem('list',JSON.stringify(siteList))
    console.log(siteList)
    display()
}
// var innerUrl=document.getElementById('siteInput');
// var webUrl=innerUrl.getAttribute(url);
// function visit(sUrl) {
//     window.location.href=sUrl;
// }
// var btnVisit=document.getElementById('btnVisit');
// btnVisit.addEventListener("click",function() {
//     goToWebPage(${siteList[i].sUrl});
//   });
// var btnVisit=document.getElementById('btnVisit');
function goToWebPage(sUrl) {
    window.location.href = sUrl;
  }
function validationName(){
    var nameRegex=/[A-za-z]{3,}/;
    var nameVlue=siteName.value;
    if(nameRegex.test(nameVlue)==true){
       return true;
    }else{
       return false;
    }

}
function validationUrl(){
    var urlRegex=/^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3}$/;
    var urlVlue=siteUrl.value;
    if(urlRegex.test(urlVlue)==true){ 
       return true;
    }else{
        return false;
    }
}