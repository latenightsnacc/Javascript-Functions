const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for loop
// for(let i=0; i < companies.length; i++){
//     console.log(companies[i])
// }

// forEach loop 
// the callback function can take in 3 arguments
// the iterator(company), the index, the entire array (companies)
// companies.forEach(function(company) {
//     console.log(company);
// })

// companies.forEach(company => console.log(company));
  
// Get 21 and Older 
// filter with a for loop 
// let canDrink = [];
// for(let i=0; i < ages.length; i++){
//     ages[i] >= 21 ? canDrink.push(ages[i]) : null;
// }
// console.log(canDrink);

// filter : allows you to filter an array 

// get ages of people that can drink
const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

// get all retail companies 
const retailCompanies = companies.filter(company => company.category === 'Retail');
// console.log(retailCompanies);
 
// get all companies that lasted ten years
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
// console.log(lastedTenYears)

// map: creates an array from anything

// create an array of company names
const companyNames = companies.map(company => company.name);
// console.log(companyNames)

// create a date map for companies
const testMap = companies.map(company => {
    return `${company.name} [${company.start} - ${company.end}]`
})
// console.log(testMap)

const agesSqrRoot = ages
.map(age => Math.floor(Math.sqrt(age)))
.map(age => age * 2);
// console.log(agesSqrRoot);

// srot: sort companies by start year
const sortedCompanies = companies.sort((a, b) => {
    a.start > b.start ? 1 : -1;
});
// console.log(sortedCompanies);

const sortAges = companies.sort((a,b) => a.start > b.start ? 1 : -1);
console.log(sortAges);
