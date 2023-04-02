function toggle(e){
    console.log(e.target.name)
    if(e.target.name=="red"){
        id_inp.style.backgroundColor='red'
        id_inp.value="red"
    }
    else if(e.target.name=="grenn"){
        id_inp.style.backgroundColor='green'
        id_inp.value="green"
    }
}