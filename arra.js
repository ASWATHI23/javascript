// a=[1,2,3,"apple"]
// a[2]="banana"
// a[4]="orange"
// a[6]="mango"
// console.log(a)
// console.log(a.length)

// a="good girl"
// console.log(a.split(" "))

// a=["apple","is","red"]
// console.log(a.toString())

// a=["apple","is","red"]
// console.log(a.join(" "))

// a=["apple","is","red"]
// a.push(2)
// console.log(a)

// a=["apple","is","red"]
// a.pop()
// console.log(a)

// a=["strawberry","apple","is","red"]
// a.sort()
// console.log(a)

// a=[1,23,45,0,54,3,5]
// a.sort((a,b)=>a-b)
// console.log(a)

// a=[2,4,6,8,10,23]
// console.log(6 in a)

// sum=[1,2,3,78,908,12726].reduce((partialSum,a) => partialSum+a,0);
// console.log(sum);

// a=[1,2,3,78,908,12726]
// sum=0
// for(i of a){
//     sum+=i
// }
// console.log(sum)


// a=[1,2,78,906]
// sum=0
// function add(item){
//     return item**2
// }
// res=a.map(add)
// console.log(res)

// a=[1,2,78,906]
// sum=0
// res=a.map((item)=>item+2)
// console.log(res)

// a=[1,2,78,906]
// sum=0
// res=a.filter((item)=>item%2==0)
// console.log(res)

// a=[1,2,78,906]
// sum=0
// res=a.find((item)=>item%2==1)
// console.log(res)

a=[
    {id:1,country:"india",gold:10,silver:3,bronze:4},
    {id:2,country:"japan",gold:12,silver:31,bronze:25},
    {id:3,country:"china",gold:8,silver:20,bronze:14},
    {id:4,country:"usa",gold:5,silver:3,bronze:34},
]
// res=a.find((item)=>item.country=="japan")
// console.log(res)

// res=a.filter((item)=>item.gold>10)
// console.log(res)

// res=a.map(item=>item.silver).reduce((total,item)=>total+item)
// console.log(res)

a.sort((a,b)=>a.gold-b.gold)
console.log(a)