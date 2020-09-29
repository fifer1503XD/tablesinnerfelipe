const users = [
    {
        name: 'Erik',
        age: 29,
        email: 'erik@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/erik' },
            { name: 'twitter', url: 'twitter/erik' }
        ],
        gender: 'Male'
    },
    {
        name: 'Georg',
        age: 33,
        email: 'georg@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/georg' },
            { name: 'twitter', url: 'twitter/georg' }
        ],
        gender: 'Male'
    },
    {
        name: 'Andrea',
        age: 42,
        email: 'andrea@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/andrea' },
            { name: 'twitter', url: 'twitter/andrea' }
        ],
        gender: 'Female'
    },
    {
        name: 'Oscar',
        age: 31,
        email: 'oscar@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/oscar' },
            { name: 'twitter', url: 'twiter/oscar' }
        ],
        gender: 'Male'
    },
    {
        name: 'Daniela',
        age: 22,
        email: 'andrea@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/Daniela' },
            { name: 'twitter', url: 'twitter/Daniela' }
        ],
        gender: 'Female'
    },
]

function generartable(){
const bodytable = document.getElementById('body-table-users')
console.log(bodytable)
for (let i=0; i<users.length; i++){
const row ='<tr><td>'+ users[i].name+'</td><td>'+ users[i].email+'</td><td>'+users[i].age+'</td><td>'+users[i].gender+'</td><td>'+users[i].social[0].url+'</td><td>'+users[i].social[1].url+'</td></tr>'
bodytable.innerHTML +=row;
}
}
function generartablewomen(){
    
    const bodytable = document.getElementById('body-table-users')
    console.log(bodytable)
    for (let i=0; i<users.length; i++){
        let genero=users[i].gender;
        if(genero=='Female'){const row ='<tr><td>'+ users[i].name+'</td><td>'+ users[i].email+'</td><td>'+users[i].age+'</td><td>'+users[i].gender+'</td><td>'+users[i].social[0].url+'</td><td>'+users[i].social[1].url+'</td></tr>'
        bodytable.innerHTML +=row;}
    }
    }
    function generartablemen(){
    
        const bodytable = document.getElementById('body-table-users')
        console.log(bodytable)
        for (let i=0; i<users.length; i++){
            let genero=users[i].gender;
            if(genero=='Male'){const row ='<tr><td>'+ users[i].name+'</td><td>'+ users[i].email+'</td><td>'+users[i].age+'</td><td>'+users[i].gender+'</td><td>'+users[i].social[0].url+'</td><td>'+users[i].social[1].url+'</td></tr>'
            bodytable.innerHTML +=row;}
        }
        }
        function generartablerango(){
    
            const bodytable = document.getElementById('body-table-users')
            console.log(bodytable)
            for (let i=0; i<users.length; i++){
                let age=users[i].age;
                if(age>20 && age<40){const row ='<tr><td>'+ users[i].name+'</td><td>'+ users[i].email+'</td><td>'+users[i].age+'</td><td>'+users[i].gender+'</td><td>'+users[i].social[0].url+'</td><td>'+users[i].social[1].url+'</td></tr>'
                bodytable.innerHTML +=row;}
            }
            }
            function borrartabla(){
                const bodytable = document.getElementById('body-table-users')
                console.log(bodytable)
                for (let i=0; i<users.length; i++){
                   const row ='<tr></tr>'
                    bodytable.innerHTML +=row;}
                }
                
