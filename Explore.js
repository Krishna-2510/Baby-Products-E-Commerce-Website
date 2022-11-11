
var arr=document.querySelectorAll('.items');
console.log(arr);
var items=[];
function show(n){
        document.getElementById('outerbox').style.display='block';
        arr.forEach((e,i) => {
            console.log(i);
            if(i==n-1)
            {
                console.log("found blocked")
                e.style.display='block';
            }
            else
            e.style.display='none';
        });
}

document.getElementById("sign").addEventListener('click',()=>{
    console.log(document.getElementById('emi').value)
    if(document.getElementById('emi').value=='')
    alert("Please fill the email");
    else
    alert("Thanks for signing up...You will now receive updates from us");
})