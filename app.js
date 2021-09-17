const getData=()=> {
    fetch(`https://restcountries.eu/rest/v2/all`)
    .then(res => res.json())
    .then(data => loadData(data))
}
getData();

const loadData=(data)=> {
console.log(data[0]);
const container= document.getElementById('container');
const  countryHtml= data.map(value =>getCountryHtml(value));
container.innerHTML=countryHtml.join(' ');

}

const getCountryHtml= country=> {
    return `
    <div class="div">
    <h1>${country.name}</h1>
    <h4> ${country.capital}</h4>
    <img src="${country.flag}" alt="">
</div>
    `
}