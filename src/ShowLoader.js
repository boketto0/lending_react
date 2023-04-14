function ShowLoader() {

    let user = {
        name: "John",
        age: 30
      };
      
      user.sayHi = function() {
        alert("Привет!");
      };
      user.sayHi(); // Привет!
    

    return(
        <div>
        </div>
    )

}

export default ShowLoader
