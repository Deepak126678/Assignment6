function getData()
{
    //gettting the values
    var email = document.getElementById("User").value;
    var password= document.getElementById("Age").value; 
    var telephone= document.getElementById("Fam").value; 
   
    //saving the values in local storage
    localStorage.setItem("txtValue", email);
    localStorage.setItem("txtValue1", password);
    localStorage.setItem("txtValue2", mobile);
}