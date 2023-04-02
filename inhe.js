class Parent{
    fun(){
        console.log("parent class")
    }
}

class Child{
    name="child"
}
c=new Child()
console.log(c.name)
c.fun()