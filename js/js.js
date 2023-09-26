

var currentPage = window.location.href;

var navLinks = document.querySelectorAll('.nav-link');


navLinks.forEach(function (link) {

 
    if (link.href === currentPage) {
        link.classList.add('active-link');
    }


});


var herOneLeft =document.getElementById("herOneLeft");
var heroOneTemp =document.getElementById("heroOneTemp");
var superHero =document.getElementById("superHero");
var heroTow =document.getElementById("heroTow");
var heroLock= document.getElementById("heroLock");
var heroLockFace= document.getElementById("heroLockFace");
var heroPower= document.getElementById("heroPower");
var heroPlam= document.getElementById("heroPlam")




var componentHerOone =  document.getElementById("componentHerOone");
var componentHerOtemp = document.getElementById("componentHerOtemp");
var componentSuperHero= document.getElementById("componentSuperHero");
var componentHeroTow= document.getElementById("componentHeroTow");
var componentHeroLock = document.getElementById("componentHeroLock");
var componentHeroLockFace =document.getElementById("componentHeroLockFace");
var componentheroPower =document.getElementById("componentheroPower");
var componentHeroPlam =document.getElementById("componentHeroPlam")




var allcomponent = document.querySelectorAll('.all-comonent');


//////////////////// hero one Left ////////////////////

herOneLeft.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



    componentHerOone.classList.add("show")
})



//////////////////// Hero One Temp ////////////////////

heroOneTemp.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentHerOtemp.classList.add("show")
})



//////////////////// Super Hero ////////////////////

superHero.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentSuperHero.classList.add("show")
})

////////////////////   Hero Tow  ////////////////////

heroTow.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentHeroTow.classList.add("show")
})


////////////////////   Hero Lock  ////////////////////

heroLock.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentHeroLock.classList.add("show")
})




////////////////////    hero Lock Face  ////////////////////

heroLockFace.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentHeroLockFace.classList.add("show")
})



////////////////////     hero Power   ////////////////////

heroPower.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentheroPower.classList.add("show")
})



////////////////////     hero palm   ////////////////////

heroPlam.addEventListener('click',function()
{

    
allcomponent.forEach(function (component) {

        component.classList.remove('show');


});



componentHeroPlam.classList.add("show")
})

