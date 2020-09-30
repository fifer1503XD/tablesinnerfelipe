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
        name: 'Maria',
        age: 15,
        email: 'maria@uaq.mx',
        social: [
            { name: 'facebook', url: 'facebook/Maria' },
            { name: 'twitter', url: 'twitter/Maria' }
        ],
        gender: 'Female'
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
        name: 'Antonia',
        age: 35,
        email: 'antonia@hotmail.com',
        social: [
            { name: 'facebook', url: 'facebook/antonia' },
            { name: 'twitter', url: 'twitter/antonia' }
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
        name: 'Felipe',
        age: 28,
        email: 'felipe@academlo.com',
        social: [
            { name: 'facebook', url: 'facebook/felipe' },
            { name: 'twitter', url: 'twiter/felipe' }
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
            function generartablecorreo(){
                const bodytable = document.getElementById('body-table-users')
                console.log(bodytable)
                for (let i=0; i<users.length; i++){
                    let email=users[i].email;
                    if(email.includes('@academlo')){const row ='<tr><td>'+ users[i].name+'</td><td>'+ users[i].email+'</td><td>'+users[i].age+'</td><td>'+users[i].gender+'</td><td>'+users[i].social[0].url+'</td><td>'+users[i].social[1].url+'</td></tr>'
                    bodytable.innerHTML +=row;}
                }
                }
            function borrartabla(){
                const bodytable = document.getElementById('body-table-users')
                console.log(bodytable)
                for (let i=0; i<users.length; i++){
                   const row ='<tr></tr>'
                    bodytable.innerHTML =row;}
                }
                function borrarcard(){
                    const bodycard = document.getElementById('content-cards')
                    console.log(bodycard)
                    for (let i=0; i<users.length; i++){
                       const row =''
                       bodycard.innerHTML =row;}
                    }    
                
                function generarcard(){
                    const bodycard = document.getElementById('content-cards')
                    console.log(bodycard)
                    for (let i=0; i<users.length; i++){
                        let genero=users[i].gender;
                        if(genero=='Female'){
                    const row ='<div class="col mb-4"><div class="card border-primary mb-3" style="width: 18rem;"><img id="imagencard" src="https://image.freepik.com/foto-gratis/color-rosa-electrico-abstraccion_23-2147734201.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">USUARIO'+i+'</h5><p class="card-text"> Nombre : '+users[i].name+'</p><p class="card-text">Email: '+users[i].email+'</p><p class="card-text"> Edad: '+users[i].age+'</p><p class="card-text"> Genero: '+users[i].gender+'</p><p class="card-text">Facebook: '+users[i].social[0].url+'</p><p class="card-text"Twitter :>'+users[i].social[1].url+'</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>'
                    bodycard.innerHTML +=row;}
                        else{
                            const row ='<div class="col mb-4"><div class="card" style="width: 18rem;"><img id="imagencard" src="https://image.freepik.com/foto-gratis/color-fondo-decorativo-azul-degradado-diagonal-textura-rayada_76263-671.jpg" class="card-img-top" alt="..."><div class="card-body"><h5 class="card-title">USUARIO'+i+'</h5><p class="card-text"> Nombre : '+users[i].name+'</p><p class="card-text">Email: '+users[i].email+'</p><p class="card-text"> Edad: '+users[i].age+'</p><p class="card-text"> Genero: '+users[i].gender+'</p><p class="card-text">Facebook: '+users[i].social[0].url+'</p><p class="card-text"Twitter :>'+users[i].social[1].url+'</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>'
                            bodycard.innerHTML +=row;}  
                        }
                    
                    }   
                
                
                