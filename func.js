// function fun(a,b){
//     return a+b
// }
// x=22
// y=30
// z=fun(x,y)
// console.log(z+1)

// x=(a,b)=>a+b
// console.log(x(10,20))

// class Main{
//     constructor(a){
//     this.age=a 
//     }
//     name="aswathi"
//     fun(){
//         console.log(this.name)
//     }
// }
// ob=new Main(20)
// console.log(ob.age)
// ob.fun()
// ob2=new Main(21)
// console.log(ob2.age)

class Student{
    constructor(a,b,c){
    this.name=a
    this.age=b
    this.class=c
    }
    display(){
      console.log("Name:"+this.name,"Age:"+this.age,"Clas:"+this.class)
    }
}
a1=new Student("aswathi",21,"bsc")
a2=new Student("mephy",21,"bsc")
a1.display()
a2.display()


