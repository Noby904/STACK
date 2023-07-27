// core moduls
// file system
const fs=require('fs')
// ReadLine
const readline = require('node:readline');
const { resolve } = require('path');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})



// menuliskan string ke file secar syncronus
//     try{
//         fs.writeFileSync('data/test.txt', 'Hai noby secara synchronus !!')
//     }catch(e){
//      console.log(e);
//     }

// menuliskan string ke file secar asyncronus
// fs.writeFile('data/test.txt','Hai noby secara asynchronus !!', (e) => {
//     console.log(e);
// });

// membaca isi file synchronus
// const data=fs.readFileSync('data/test.txt','utf-8');
// console.log(data);

// membaca isi file asynchronus
// fs.readFile('data/test.txt', 'utf-8',(err, data)=>{
//     if (err) throw err;
//     console.log(data)
// })

// membuat folder data jika belum ada
const dirpath='./data'
if (!fs.existsSync(dirpath)) {
  fs.mkdirSync(dirpath)
}
//membuat file contacts.js jjika belum ada
const dataPath='./data/contacts.json'
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, '[]', 'utf-8')
}

const daftarPertanyaan = (pertanyaan) =>{
  return new Promise((resolve, reject)=>{
    rl.question(pertanyaan, (nama) => {
      resolve(nama)
    }) 
  })
}
// const pertanyaan2 = () =>{
//   return new Promise((resolve, reject)=>{
//     rl.question('Inputkan email anda : ', (email) => {
//       resolve(email)
//     }) 
//   })
// }

const main = async () => {
  const nama = await daftarPertanyaan('Masukkan nama anda ; ');
  const email = await daftarPertanyaan('Masukkan email anda : ');
  const noHp = await daftarPertanyaan('Masukkan NO. Hp anda : ');

  const contact={nama, email, noHp}
        const file = fs.readFileSync('data/contacts.json', 'utf8')
        const contacts=JSON.parse(file)

        contacts.push(contact)

        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

        console.log('Terimakasih sudah mengimputkan data anda')

        rl.close();
}

main();

// rl.question('Inputkan nama anda : ', (nama) => {
//     rl.question('Inputkan no. hp anda : ', (noHp) => {
//         const contact={nama, noHp}
//         const file = fs.readFileSync('data/contacts.json', 'utf8')
//         const contacts=JSON.parse(file)

//         contacts.push(contact)

//         fs.writeFileSync('data/contacts.json', JSON.stringify(contacts))

//         console.log('Terimakasih sudah mengimputkan data anda')

//         rl.close();
//       });
// });
