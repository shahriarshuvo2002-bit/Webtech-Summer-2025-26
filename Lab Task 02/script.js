console.log("Connected"); 

function registerstd()
{
    
    let fname=document.getElementById("fname").value; 
    let lname=document.getElementById("lname").value; 
    let id=document.getElementById("id").value;       
    let email=document.getElementById("email").value;  
    let credit=document.getElementById("credit").value; 
    let dept=document.getElementById("dept").value;    


    document.getElementById("fnameErr").innerHTML="";
    document.getElementById("lnameErr").innerHTML="";
    document.getElementById("idErr").innerHTML="";
    document.getElementById("emailErr").innerHTML="";
    document.getElementById("creditErr").innerHTML="";
    document.getElementById("deptErr").innerHTML="";

    
    if(!fname)
    {
        document.getElementById("fnameErr").innerHTML="First name is required";
        return false; 
    }

   
    if(!lname)
    {
        document.getElementById("lnameErr").innerHTML="Last name is required";
        return false;
    }

  
    if(!id)
    {
        document.getElementById("idErr").innerHTML="Student ID is required";
        return false;
    }
  
    else if(!id.includes("-"))
    {
        document.getElementById("idErr").innerHTML="Student ID must contain '-'";
        return false;
    }

    if(!email)
    {
        document.getElementById("emailErr").innerHTML="Email is required";
        return false;
    }

    else if(!email.includes("@student.aiub.edu"))
    {
        document.getElementById("emailErr").innerHTML="Invalid Email";
        return false;
    }

    if(credit=="" || credit<0 || credit>=148)
    {
        document.getElementById("creditErr").innerHTML="Completed Credit must be between 0 and 147 credits";
        return false;
    }

    if(!dept)
    {
        document.getElementById("deptErr").innerHTML="Must select department";
        return false;
    }


    let table=document.getElementById("stdTable");
    let row=table.insertRow(); 

    row.insertCell(0).innerHTML=fname;
    row.insertCell(1).innerHTML=lname;
    row.insertCell(2).innerHTML=id;
    row.insertCell(3).innerHTML=email;
    row.insertCell(4).innerHTML=credit;
    row.insertCell(5).innerHTML=dept;

    document.getElementById("fname").value="";
    document.getElementById("lname").value="";
    document.getElementById("id").value="";
    document.getElementById("email").value="";
    document.getElementById("credit").value="";
    document.getElementById("dept").value="";

    return false; 
}
