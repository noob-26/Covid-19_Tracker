
//cases, deaths, recovered, todayCases

fetch('https://disease.sh/v3/covid-19/all')
.then((response) => response.json())
.then(({ cases, deaths, recovered, todayCases }) => {
    const cases__card = document.getElementById('cases');
    const deaths__card = document.getElementById('deaths');
    const recovered__card = document.getElementById('recovered');
    const newCases__card = document.getElementById('new__cases');

    cases__card.innerHTML = cases;
    deaths__card.innerHTML = deaths;
    recovered__card.innerHTML = recovered;
    newCases__card.innerHTML = todayCases;
})