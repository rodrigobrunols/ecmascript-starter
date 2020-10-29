// Classes
import {soma} from './functions';


class User{

    constructor(email , password, admin=false) {
        this.email= email;
        this.password = password;
        this.admin = admin;
    }

    isAdmin() {
        return this.admin;
    }
}

class Admin extends User {

    constructor(email, password) {
        super(email, password, true);
    }

}

// const RodrigoUser = new Admin('rodrigo.leoncio' , 'rodrigobrunols@gmail.com');
// console. log(RodrigoUser);

//Array 
const users = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const ages = [];

users.map(({idade}) => {
 ages.push(idade);
})
console.log(ages);

 const adults = users.filter(item => {
     return item.idade > 18  && item.empresa ==='Rocketseat'
 });
console. log(adults);

const worksAtGoogle = users.find(item =>{
    return item.empresa === 'Google' ;
})

console.log(worksAtGoogle);


 
const maxFifty = users.map(item => {
    item.idade*=2;
    return item;
   }).filter((item) => {
       return item.idade <= 50
   })
   console.log(maxFifty);


   const array = [1,2,3,4,5,6];

   const [x, ...y] = array;

   console.log(x)
   console.log(y)

   function soma(...params) {
      return  params.reduce((total, item) => total + item)
   }

    console.log(soma(1,2,3,4,5,6))

    const usuario = {
        nome: 'Diego', 
        idade: 23, 
        endereco: {
            cidade:'Rio do Sul' , 
            uf:'SC' ,
             pais:'Brasil'
            }
    }

    const usuario2 = {...usuario, nome:'Gabriel'}

    console.log(usuario2)