let num = Math.floor(Math.random()*100)+1;

console.log(num);

url = 'https://jsonplaceholder.typicode.com/todos/'+num;

fetch(url).then(response=>response.json())
.then(data=>console.log(data));


async function fetchdata(url){
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);
}


for(let i=1;i<=5;i++)
{
    let num = Math.floor(Math.random()*100)+1;

    console.log(num);

    let url = 'https://jsonplaceholder.typicode.com/todos/'+num;

    fetchdata(url);
}