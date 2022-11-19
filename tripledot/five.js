function add(a, ...b){
    console.log(a , b)//without spread
    console.log(a, "-", b)//with spread
}
add(10)
add(10,20)
add(10,20,30)