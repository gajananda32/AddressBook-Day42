class AddressBook
{
   FirStName;
   LastName;
   Address;
   City;
   State;
   Zip;
   Phone;
   Email;
   constructor(FirStName,LastName,Address,City,State,Zip,Phone,Email)
   {
     this.FirStName=FirStName;
     this.LastName=LastName;
     this.Zip=Zip;
     this.Address=Address;
     this.City=City;
     this.State=State;
     this.Phone=Phone;
     this.Email=Email;
   }
}
let contact=new AddressBook("Joel","Thomos","shivaji nagar","Bengaluru","Karnataka",560064,"7894561230","joel@gmail.com");
console.log(contact);


//UC2

class AddressBook{
   Address;
   City;
   State;
   Zip;
   Phone;
   Email;
   constructor(FirStName,LastName,Address,City,State,Zip,Phone,Email)
   {
     this.FirStName=FirStName;
     this.LastName=LastName;
     this.Zip=Zip;
     this.Address=Address;
     this.City=City;
     this.State=State;
     this.Phone=Phone;
     this.Email=Email;
   }
   get FirStname(){
      return this._Firstname;
   }
   set FirStname(FirStName){
      let RegexFirstName=RegExp('^[A-z]{1}[a-z]{2,}$');
      if(RegexFirstName.test(FirStName))
        this._Firstname=FirStName;
        else
        throw " First Name is Incorrect"
   }
   get Lastname(){
      return this._Lastname;
   }
   set Lastname(LastName){
      let RegexLastName=RegExp('^[A-z]{1}[a-z]{2,}$');
      if(RegexLastName.test(LastName))
        this._Lastname=LastName;
        else
        throw "Last Name is Incorrect"
   }
     toString(){
      return "FirstName: "+this.FirStName+" LastName: "+this.LastName+" Address: "+this.Address+" City: "+this.City+" state: "+this.State+" Zip: "+this.Zip+" phone: "+this.Phone+" Email: "+this.Email;
     }
}
let contact=new AddressBook("joel","Thomos","shivaji nagar","Bengaluru","Karnataka",560064,"7894561230","joel@gmail.com");
try{
       contact.FirStName="jeol";
       console.log(contact.toString());
   }catch(e){
   console.log(e);
   }
