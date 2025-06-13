const firstName = ['kaylin', 'james', 'maria', 'john', 'sarah'];

const surnameMap = {
    kaylin: 'khanal',
    james: 'smith',
    gopal: 'hamal',
    shiva: 'shrestha',
    sarah: 'johnson',
}

// expected output : 
// 'kaylin khanal', 'james smith', 'maria', 'john', 'sarah johnson'];

const output = firstName.map((item)=>{
    if(surnameMap[item]){
        return `${item} ${surnameMap[item]}`
    }else{
        return item
    }
})

console.log(output)



// const output = firstName.map((names)=>{
//   if(surnameMap[names]){
//     console.log(`${names} ${surnameMap[names]}`);
//   }
// })

