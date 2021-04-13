function validate()
{
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var message = document.getElementById('message'); 
    
   var e = new etudiant(name.value,email.value,phone.value,message.value);
  
   if (!e.validateName())
   {
     name.style.borderColor = "red";
     
   }
   else
   {
     name.style.borderColor = "green";   
   }
  
   if (!e.validatephone())
   {
     phone.style.borderColor = "red" ;
    
   }
   else
   {
     phone.style.borderColor = "green";   
   }
   
   if (!e.validateEmail())
   {
     email.style.borderColor = "red" ;
    
   }
   else
   {
     email.style.borderColor = "green";   
   }
   
}
//création du constructeur de la classe étudiant
function etudiant(name,email,phone,message)
{
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
    
}
//propriétée de la classe étudiant qui
//permet de réccupérer le nom
etudiant.prototype.getName = function()
{
    return this.name;
}
//propriétée de la classe étudiant qui
//permet de modifier le nom
etudiant.prototype.setName = function(name)
{
    this.name = name ;
}

//propriétée de la classe étudiant qui
//permet de réccupérer le mail
etudiant.prototype.getMail = function()
{
    return this.email;
}
//propriétée de la classe étudiant qui
//permet de modifier le mail
etudiant.prototype.setMail = function(email)
{  
    this.email = email;
    
}
  
//propriétée de la classe étudiant qui
//permet de modifier le tel
etudiant.prototype.setPhone = function(phone)
{
    
    this.phone = phone;
    
}
//propriétée de la classe étudiant qui
//permet de réccupérer le tel
etudiant.prototype.getPhone = function()
{
    return this.phone;
}

//fonction permettant de valider le nom
etudiant.prototype.validateName = function()
{
     var status;
    
   for(var i = 0; i < this.name.length; i++) 
    {
        if(((this.name.charCodeAt(i)>= "A".charCodeAt(0))&&(this.name.charCodeAt(i)<= "Z".charCodeAt(0)))||
           ((this.name.charCodeAt(i)>= "a".charCodeAt(0))&&(this.name.charCodeAt(i)<= "z".charCodeAt(0))))
        {
             status = true; 
            
        }
        else
        {
            status = false;
        }
    }
    
    return status; 
    
  
}


//fonction permettant de valider le numéro de tel
etudiant.prototype.validatePhone = function() 
{
    
    var phoneRegEx = /^(\(\d{3}\)) ?\d{3}-\d{4}/;
    if (phoneRegEx.test(this.phone))
    {
      return true;  //code
    }
    else
    {
        return false;
    }
    
    
}
//fonction permettant de valider le email
etudiant.prototype.validateEmail = function() 
{
    
    var emailRegEx = /[a-zA-Z0-9]+(\.|_|-)?[a-zA-Z0-9]+@teccart\.qc\.ca/;
    if (emailRegEx.test(this.email))
    {  
      return true;  //code
    } 
    else
    {
        return false;
    }
    
    
}

etudiant.prototype.validateMessage = function()
{
     var status;
    
   for(var i = 0; i < this.message.length; i++) 
    {
        if(((this.message.charCodeAt(i)>= "A".charCodeAt(0))&&(this.message.charCodeAt(i)<= "Z".charCodeAt(0)))||
           ((this.message.charCodeAt(i)>= "a".charCodeAt(0))&&(this.message.charCodeAt(i)<= "z".charCodeAt(0))))
        {
             status = true; 
            
        }
        else
        {
            status = false;
        }
    }
    
    return status; 
}
    
function clear()
{
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";
    document.getElementById('message').value="";
    
}

var boutonElt = document.getElementById("supp");
boutonElt.addEventListener("click",clear);
    
    
function send()
{
    alert("qq");
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('phone').value="";
    document.getElementById('message').value="";
    alert("vos informations ont été bien enregistré , Merci!");
    
}

var seend = document.getElementById("envoie");
seend.addEventListener("click",send);
    