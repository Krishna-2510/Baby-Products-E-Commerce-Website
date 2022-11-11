document.getElementById("sign").addEventListener('click',()=>{
    console.log(document.getElementById('emi').value)
    if(document.getElementById('emi').value=='')
    alert("Please fill the email");
    else
    alert("Thanks for signing up...You will now receive updates from us");
})