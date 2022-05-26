const fs = require('fs');
// const printProfileData = profileDataArgs => {
//     for(let i = 0; i<profileDataArgs.length; i++){
//         console.log(profileDataArgs[i]);
//     }
// // };
// const generatePage = () => 'Name: Sufiyan, Github: Sufiyan11919';
// console.log(generatePage());
const profileDataArgs = process.argv.slice(2,process.argv.length);
// const profileDataArgs = process.argv.slice(2,);
//line 11 as same functonality as line 12

// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;
//destructuring the profileDataArgs in variable like line 15, 16


//funtion using arrow function and template literal that returns usrname and github name
//method:1
//  const generatePage = (userName, githubName) => `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage('Sufiyan', 'Sufiyan11919'))
//Method:2
// const generatePage = (userName, githubName) => {
//     return `
//       Name: ${userName}
//       GitHub: ${githubName}
//     `;
//   };

//Method:3
const generatePage = (name, github) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
  };

// console.log(name, github);
// console.log(generatePage(name, github));

fs.writeFile('index.html', generatePage(name, github), err => {
    if (err) throw err;
    console.log('Portfolio complete! Check out index.html to see the out!')
});