const name  = 'ram'
let surname = 'thapa'

let obj = {
    [name]: surname
}

console.log(obj)
//expected output 
// {
// 'ram': 'thapa'
// }

console.log({[name]: surname})