const firstName= ['abhiyan', 'kaylin', 'deeparshan', 'ram', 'gopal']
const surnameMap={
    abhiyan: 'paudel',
    kaylin: 'khanal',
    deeparshan: 'mainali',
    ram: 'sharma',
    gopal: 'dwa'
}

let output= firstName.map((item,id)=>{
    let surnameMapKey= Object.keys(surnameMap)
    let surnameMapValue= Object.values(surnameMap)

    surnameMapKey.forEach((itemKey)=>{
    if(item==itemKey)
    {
        // surnameMapValue.forEach((itemValue)=>{
        //     console.log(itemKey + " " +itemValue)
        // })
        return itemKey + surnameMapValue[id]
    }
    else{
        console.log(item)
    }
    });
})

console.log(output)