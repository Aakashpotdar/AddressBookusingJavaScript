let AddressBook=new Map();

let FirstName='Aakash';
let LastName='Potdar';
let Address='MallikarjunNagar';
let City='Solapur';
let Sate='MH';
let Zip=47837;
let PhoneNumber='+918003728743';
let Email='Aakash@gmail.com';
addData(FirstName,LastName,Address,City,Sate,PhoneNumber,Email,Zip);

FirstName='shubham';
LastName='Roddy';
Address='Vijapur Road';
City='Solapur';
Sate='MH';
Zip=47837;
PhoneNumber='+916754894302';
Email='shubs@gmail.com';
addData(FirstName,LastName,Address,City,Sate,PhoneNumber,Email,Zip);

function CheckNameValidation(name)
{
    let regexName = /^([A-Z][a-z]{3}[a-z]+)$/;
    if(regexName.test(name))
    {
        console.log('the name is valid : '+name);
        return true;
    }
    else
    {
        console.log('the name is Invalid : '+name);
        return false;
    }
    console.log('-----------------------------------');
}

console.log('cheking First name validation: '+CheckNameValidation(FirstName));
console.log('-----------------------------------');
console.log('cheking last name validation: '+CheckNameValidation(LastName));
console.log('-----------------------------------');

function CheckAddressValidation(CheckAddress)
{
    let regex = /^([A-Z][a-z]{4}[a-z]+)$/;
    if(regex.test(CheckAddress))
    {
        console.log('the Details are valid ');
        return true;
    }
    else
    {
        console.log('the Details are Invalid ');
        return false;
    }
    console.log('-----------------------------------');
}
console.log('cheking Address validation: '+CheckAddressValidation(Address));
console.log('-----------------------------------');
console.log('cheking City name validation: '+CheckAddressValidation(City));
console.log('-----------------------------------');

function CheckPhoneNumberValidation(number)
{
    let regexNumber = /^[+]{1}[9][1][6-9][0-9]{9}$/;
    if(regexNumber.test(number))
    {
        console.log('the Details are valid ');
        return true;
    }
    else
    {
        console.log('the Details are Invalid ');
        return false;
    }
    console.log('-----------------------------------');
}
console.log('cheking mobile number validation: '+CheckPhoneNumberValidation(PhoneNumber));
console.log('-----------------------------------');

function addData(firstName,lastName,address,city,sate,phoneNumber,email,zip){
let Data=new Array();
Data.push(firstName);
Data.push(lastName);
Data.push(address);
Data.push(city);
Data.push(sate);
Data.push(phoneNumber);
Data.push(email);
Data.push(zip);
AddressBook.set(FirstName,Data);
}

console.log(AddressBook)


console.log('chking the data is available for name : Aakash '+AddressBook.has('Aakash'));

AddressBook.get('Shubham');

FirstName='shubham';
LastName='Roddy';
Address='Vijapur Road';
City='Bengloru';
Sate='KA';
Zip=478342;
PhoneNumber='+916754894364';
Email='shubham@gmail.com';
addData(FirstName,LastName,Address,City,Sate,PhoneNumber,Email,Zip);

console.log(AddressBook);

console.log(AddressBook.delete('shubham'));

console.log(AddressBook);

console.log('size of Address book : '+AddressBook.size);
