var sub = document.querySelector("button")
sub.addEventListener('click',()=>{
    var nm = document.getElementById("nm").value;
    var ph = document.getElementById("ph").value;
    var em = document.getElementById("em").value;

    if(nm=='' || ph=='' || em=='')
    alert("Please fill all the details before submitting");
    else
    alert("Thanks for writing to us... ")
    console.log(nm+ " "+ ph+ " "+ em);
    
});

document.getElementById("sign").addEventListener('click',()=>{
    console.log(document.getElementById('emi').value)
    if(document.getElementById('emi').value=='')
    alert("Please fill the email");
    else
    alert("Thanks for signing up...You will now receive updates from us");
})