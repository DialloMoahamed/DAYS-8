  // Reponse numero 1
  const personAccount = {
    firstName: "Mohamed",
    lastName: "Attahir",
    incomes: 50000,
    expenses: 4000,
    totalIncome: 60000,
    totalExpense: 35000,
    accountInfo: 'Compt courant',
    addIncome: 12000,
    addExpense: 50000,
    accountBalance: 30000
}


// Reponse numero 2
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

function signUp() {
   recup = prompt('Inscrivez vous')
    if (Object.keys(users).includes(Object.values(recup))) {
        return "Vous avez dèja un compt";
    }
}
console.log(signUp());