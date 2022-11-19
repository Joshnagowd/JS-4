let goToMovie = (success, failure) => {
    let amount =100;
    if(amount>600){
        success("Go to kantara with popcorn")
    }
    else{
        failure("Go to pg open laptop")
    }
}
goToMovie((msg) => {
    console.log(msg)

}, (err) =>{
    console.log(err)
})
//goToMovie(()=>{},()=>{})
//goToMovie(1,2)