var drpn=document.getElementById("hover");
var ul=document.getElementById("drpn1");
var rot=document.getElementById("menurotate");
var about=document.getElementById("about");
var waiting=document.getElementById("wait11");
var parent=document.getElementById("pare");
var loaders=document.getElementById("about-page-id");
var i=document.getElementById("fas-t");
about.addEventListener("click",wait);
drpn.addEventListener("click",function (){
    rot.style.transitionDuration='0.5s';
    if(ul.style.display === 'block'){
        ul.style.display = 'none';
        rot.style.transform="rotate(0deg)";
        }
    else {
        ul.style.display = 'block';
        rot.style.transform="rotate(180deg)";
    }
});
function wait(){
    if(waiting.style.display==='block'){
        waiting.style.display='none';
    }
    else {
        waiting.style.display='block'
        parent.style.display='none'
    }
    loader();
    setTimeout(loader,3000);
}
i.addEventListener("click",Reset);
function Reset(){
    waiting.style.display='none';
    parent.style.display='block'
}

function loader(){
    if(loaders.style.display === 'none'){
        loaders.style.display='block';
    }
    else{
        loaders.style.display='none'
    }
}
/*---------------------------------------------------------- */
var T=["1-bertrand_russell_image.jpg","2-einstein.jpg","3-Locke-John-LOC.jpg","4-nietzsche187c-copie-4.jpg","5-plato-philosophy-explained.jpg","6-socrates-drawing.jpg","7-spinoza-categorie.jpg","8-Thomas_Hobbes.jpg"];
var T1=new Array();
T1[0]="It is undesirable to believe a proposition when there is no ground whatever for supposing it true";T1[1]="We cannot solve our problems with the same thinking we used when we created them.";
T1[2]="No man's knowledge here can go beyond his experience";T1[3]="Is man merely a mistake of God's? Or God merely a mistake of man's?";
T1[4]="You can discover more about a person in an hour of play than in a year of conversation";T1[5]="There is only one good, knowledge, and one evil, ignorance";
T1[6]="I can control my passions and emotions if I can understand their nature";T1[7]="The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short";
var T2=["bertrand russell","Albert einstein","Jhon locke","friedrich Nietzsche","Platon","Socrates Drawing","Spinoza","Thomas Hobbes"];
var i=1;
setInterval(function (){
    document.getElementById("imgquotes-id").src="quotes/"+T[i];
    document.getElementById("p2").textContent=T1[i];
    document.getElementById("p1").textContent="-- "+T2[i];
    i++;
    if(i==7){i=0;}
},4000);
/***************************************** */
window.onscroll=function(){
    if(window.scrollY >= 100){
        document.getElementById("all-header-id").classList.add("fix");
        document.getElementById("Header-Right-id").classList.add("back");
    }
    else{
        document.getElementById("all-header-id").classList.remove("fix");
        document.getElementById("Header-Right-id").classList.remove("back");
    }
}