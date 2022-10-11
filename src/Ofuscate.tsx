export function rotate(receta: String, msg: String) {
  const num = parseInt(receta.slice(1))
  return msg.slice(num) + msg.slice(0, num)
}


export function traspose(receta: String, msg: string) {
    const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    const num = parseInt(receta.slice(1))

    if(msg === msg.toUpperCase()){
        const temp = ABC.indexOf(msg)
        if(temp === -1) return msg
        return temp-num<0 ? ABC[ABC.length + (temp-num)] : ABC[temp-num]
    }else{
        const temp = abc.indexOf(msg)
        if(temp === -1) return msg
        return temp-num<0 ? abc[abc.length + (temp-num)] : abc[temp-num]
    }
}



export function combine(receta: String, msg: string) {
    const recetas = receta.split(':').reverse()
    recetas.forEach(r => {
        msg = r[0] === 'R' ? rotate(r, msg) : msg.split('').map(m => traspose(r, m)).join('')
    })
    return msg
}
