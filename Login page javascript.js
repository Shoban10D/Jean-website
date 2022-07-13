function function1(){
    

    //maping 
    var user_info=["shobanraj49@gmail.com","ashwin@gmail.com","mythiliHR@gmail.com"];
    var user_pwd=["Shoban@2000","Ashwin1999","Mythili1986"];
    var const1;
    var const2;
    

     var email_Id= document.getElementById("ema").value;
     var password=document.getElementById("pwd").value;

     var infolen=user_info.length;
     var pwdlen=user_pwd.length;
     var count=0;
     var count2=0;

     for(let i=0;i<infolen;i++){
        if(email_Id==(user_info[i])){

            count++;
            const1=i;
            break;
        }               
     }
     if(count==0){
        alert("! This user does not exist !");
    } 

     for(let j=0;j<pwdlen;j++){
        if(password==(user_pwd[j])){
            count2++;
            const2=j;
            break;
        }
     }
     if(count2==0){
        alert("! Password is Incorrect !");        
    }

     if(count>0&&count2>0){
        if(const1==const2){
            alert("Thank you for Logging in "+""+email_Id);
        }else{
            alert("! Invalid username or Password");
        }
        
     }

     

     document.getElementById("blank2").innerHTML=len;
    //  document.getElementById("blank").innerHTML=password;

}


function showpass() {
    var x= document.getElementById("pwd");
    if (x.type =="password") {
        x.type = "text";
      } else {
        x.type = "password";
      }
}