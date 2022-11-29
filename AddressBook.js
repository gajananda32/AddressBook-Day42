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