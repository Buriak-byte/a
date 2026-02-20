// 1
let ten = 1;

while (ten < 10) {
  ten++;
  console.log(ten);
}
//2

for (let guliver = 2; guliver <= 20; guliver++) {
  if (guliver % 2 !== 0) {
    continue;
  }

  console.log(guliver);
}

// 3

for(let seven = 1; seven <= 10; seven++){
console.log(7 * seven)

}

// 4

const n = 27
let noname = 0
while(noname < n){
  noname++;
  console.log(noname)

}
// 5

let byaka = 0
while(byaka < 20){
  byaka++;
  
  if(byaka % 3){
    console.log(byaka++);
   
  }
}