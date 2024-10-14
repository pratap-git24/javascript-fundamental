const person = {
    name:"pratap",
    rollno:123,
    getDetails : function(){
        // console.log(this.name);
        // console.log(this)
    }
   
}

// console.log(person.rollno);
// console.log(person.getDetails());
// console.log(this);

function user(username,uid,isloggedIn){
    this._username = username,
    this._uid = uid,
    this._isLoggedIn = isloggedIn
   
   // return this;
}

user.prototype.getDetails = function(){
     console.log(this._username);
    // console.log(this)
}

const userOne = new user("pratap",12,true)
//const userTwo = new user("pooja",15,false)
//console.log(userOne);
//console.log(userTwo);
userOne.getDetails();