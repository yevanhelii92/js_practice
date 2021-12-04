const someArray = [
    {
        id: 1,
        name: 'Alex'
    },
    {
        id: 2,
        name: "Elena"
    },
    {
        id: 3,
        name: "Svetlana"
    }
]


// first realization using filter

let usersId = []
function filterId(item) {
    
  if (item.id !== 0) {
    usersId.push(item.id)
  }
  return usersId
}

someArray.filter(filterId)
console.log('first realization using filter',usersId)


//  second realization using for 

function filterByID(array) {
    let users = []
    for (let item in array) {
        users.push(array[item].id)
    } 
    console.log('second realization using for ', users)
    return users
}

filterByID(someArray)


//  third realization using forEach

let userIdsByForEach = []
someArray.forEach((item)=> {
    userIdsByForEach.push(item.id)
})
console.log('third realization using forEach ', userIdsByForEach)