console.log("******* Welcome To Address Book System *******");
/**
 * Regex pattern for the data 
 */
const nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
const addressRegex = RegExp('^[a-zA-z0-9#,]{4,}$');
const cityStateRegex = RegExp('^[a-zA-z]{4,}$');
const zipRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
const phoneNumberRegex = RegExp("^[0-9]{2}[-]{1}[0-9]{10}$");
const emailRegex = RegExp("^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$");

/**
 * Class contact where we have defined the constructor and the getter and setter
 * We are setting the value if the regex pattern matches.
 */
class Contact{

    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phoneNumber = params[6];
        this.email = params[7];
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get address(){
        return this._address;
    }

    get city(){
        return this._city;
    }

    get state(){
        return this._state;
    }

    get zip(){
        return this._zip;
    }

    get phoneNumber(){
        return this._phoneNumber;
    }

    get email(){
        return this._email;
    }

    set firstName(firstName){
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "**** FIRST NAME is Incorrect ****";
    }

    set lastName(lastName){
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "**** LAST NAME is Incorrect ****";
    }

    set address(address){
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "**** ADDRESS is Incorrect ****";
    }

    set city(city){
        if (cityStateRegex.test(city))
            this._city = city;
        else
            throw "**** CITY is Incorrect ****";
    }

    set state(state){
        if (cityStateRegex.test(state))
            this._state = state;
        else
            throw "**** STATE is Incorrect ****";
    }

    set zip(zip){
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "**** ZIP is Incorrect ****";
    }

    set phoneNumber(phoneNumber){
        if (phoneNumberRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "**** PHONE NUMBER is Incorrect ****";
    }

    set email(email){
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "**** EMAIL ADDRESS is Incorrect ****";
    }

    toString(){
        return "First Name : "+ this.firstName + ", Last Name : "+ this.lastName + ", Address : " + this.address + ", City : "+ this.city + ", State : "+ this.state +", Zip : "+ this.zip+ ", Phone Number : "+ this.phoneNumber + ", Email : "+ this.email;
    }
}

/**
 * Using array to store the contacts.
 * We are using the push method to add the contact in the array
 */
 let addressBookArray = new Array();

 /**
  * Function to check if the contact exists in array.
  * @param {*} firstName - We will pass the first name of the contact to edit
  * @param {*} lastName - We will pass the last name of the contact to edit
  * @returns Will return true if contact exists
  */
 function contactExists(firstName, lastName) {
     return addressBookArray.some(contact => contact.firstName == firstName && contact.lastName == lastName);
 }
 
 /**
  *  Function to edit the contact
  * @param {} firstName - We will pass the first name of the contact to edit
  * @param {*} lastName - We will pass the last name of the contact to edit
  * @param {*} property - will pass the parameter to edit
  * @param {*} newValue - New value to edit
  */
 function editContact(firstName, lastName, property, newValue) {
     if (contactExists(firstName, lastName)) {
         switch (property) {
             case "address":
                 addressBookArray.find((contact) => contact.firstName == firstName).address = newValue;
                 break;
             case "city":
                 addressBookArray.find((contact) => contact.firstName == firstName).city = newValue;
                 break;
             case "state":
                 addressBookArray.find((contact) => contact.firstName == firstName).state = newValue;
                 break;
             case "zip":
                 addressBookArray.find((contact) => contact.firstName == firstName).zip = newValue;
                 break;
             case "phoneNumber":
                 addressBookArray.find((contact) => contact.firstName == firstName).phoneNumber = newValue;
                 break;
             case "email":
                 addressBookArray.find((contact) => contact.firstName == firstName).email = newValue;
                 break;
             default:
                 console.log("Enter valid property");
         }
     }
     else {
         console.log("Contact Does Not Exist");
     }
 }

 /**
  *  Function to delete a contact
  * @param {} firstName - We will pass the first name of the contact to delete
  * @param {*} lastName - We will pass the last name of the contact to delete
  */
 function deleteContact(firstName, lastName){
    if(contactExists(firstName, lastName)){
        addressBookArray = addressBookArray.filter((contact) => contact.firstName != firstName && contact.lastName != lastName);
    }else{
        console.log("Contact Does Not Exist");
    }
}
/**
 * Function to count the contacts in the array
 * We have used the reduce method to call the specified callback function for all the elements in an array.
 * @param {*} count - count of contact
 * @returns - total count
 */
function getCountOfContacts(count) {
    count += 1;
    return count;
}

/**
 * Function to ensure there is no duplicate name
 * @param {*} contact - We will pass the contact
 */
function addContact(contact) {
    if (!contactExists(contact.firstName, contact.lastName)) 
        addressBookArray.push(contact);
    else 
        throw "Contact is Present in the Address Book";
}

/**
 *  Function to search contact by city
 * @param {*} city - we will pass the city to search for contacts
 * @returns - contacts with specific city
 */
 function searchContactByCity(firstName, city) {
    return addressBookArray.filter((contact) => contact.city == city && contact.firstName == firstName);
}
  
  /**
   * Function to search contact by state
   * @param {*} state -  we will pass the state to search for contacts
   * @returns - contacts with specific state
   */
   function searchContactByState(firstName, state) {
    return addressBookArray.filter((contact) => contact.state == state && contact.firstName == firstName);
}

/**
 * Function to view contact by city
 */
function viewContactsByCity(city){
    return addressBookArray.filter((contact) => contact.city == city);
}

function viewContactsByState(state){
    return addressBookArray.filter((contact) => contact.state == state);
}

let firstContact = new Contact("Tom", "Thomas", "Sparkle", "Pune", "Maharashtra", "410387", "91-9876543219", "tom@gmail.com");
let secondContact = new Contact("Anish", "Thomass", "Tanish", "Noida", "Delhi", "400101", "91-8765432198", "anish@gmail.com");
let thirdContact = new Contact("Nikhil", "Jadhav", "NLStreets", "NewYork", "UnitedStates", "375621", "91-4567431975", "nikhil@gmail.com");
let fourthContact = new Contact("Pranav", "Shinde", "Burj", "Dubai", "Arab", "400101", "91-8765432198", "anish@gmail.com");

try {
    addressBookArray.push(firstContact);
    addressBookArray.push(secondContact);
    addressBookArray.push(thirdContact);
    addressBookArray.push(fourthContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);

console.log("\nAfter Editing Contact")
editContact("Tom", "Thomas", "address", "Avenue");
console.log(addressBookArray);

console.log("\nAfter Deleting Contact");
deleteContact("Anish", "Thomas");
console.log(addressBookArray);

console.log("\nCount of Contacts : " + addressBookArray.reduce(getCountOfContacts, 0));

console.log("\nAdding Duplicate Contact");
try {
    addContact(firstContact);
} catch (e) {
    console.error(e);
}
console.log(addressBookArray);

console.log("\nSearch Tom In City - Pune");
console.log(searchContactByCity("Tom", "Pune"));

console.log("\nSearch Anish In State - Delhi");
console.log(searchContactByState("Anish", "Delhi"));


console.log("\nView Contacts By City : Dubai \n" );
console.log(viewContactsByCity("Dubai"));

console.log("\nView Contacts By State : UnitedStates \n" );
console.log(viewContactsByState("UnitedStates"));