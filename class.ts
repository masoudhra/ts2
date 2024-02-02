// Class -> User
// backend -> create data & read DB send to frontend
// front -> read & send data from/to backend 
// type profile = {
//     name: string;
//     mobile: string;
//     age: number;
// }
// type EditProfile = {
//     name?: string | undefined;
//     mobile?: string | undefined;
//     age?: number | undefined;
// }
// class User{
//     private name: string;
//     protected mobile: string;
//     private age: number;
//     constructor(name: string, mobile: string, age: number){
//         this.name = name;
//         this.mobile = mobile;
//         this.age = age
//     }
//     getUserProfile(): profile{
//         return {
//             name: this.name,
//             mobile: this.mobile,
//             age: this.age
//         }
//     }
//     editUserProfile(profileOBJ : EditProfile): EditProfile{
//         if(profileOBJ.age){
//             this.age = profileOBJ.age
//         }
//         if(profileOBJ.name){
//             this.name = profileOBJ.name
//         }
//         if(profileOBJ.mobile){
//             this.mobile = profileOBJ.mobile
//         }
//         return {
//             name: this.name,
//             mobile: this.mobile,
//             age: this.age
//         }
//     }
// }
// const user : User = new User("Masoud Ramezani", "0936485435", 33)
// user.editUserProfile({age: 35})
// console.log(user.getUserProfile());



// type Profile = {
//     name: string;
//     mobile: string;
//     age: number;
// }

// class User{
//     name: string;
//     mobile: string;
//     age: number;

//     constructor(name: string, mobile: string, age: number){
//         this.name = name;
//         this.mobile = mobile;
//         this.age = age;

//     }

//     getUserProfile():Profile {
//         return{
//             name: this.name,
//             mobile: this.mobile,
//             age: this.age
//         }
//     }

// }
// const user : User = new User("Masoud Ramezani", "0936485435", 33)
// console.log(user.getUserProfile())


type Profile = {
    name: string;
    mobile: string;
    age: number;
}

class User{
    name: string;
    mobile: string;
    age: number;

    constructor(name: string, mobile: string, age: number){
        this.name = name;
        this.mobile = mobile;
        this.age = age;
    }

    getIUserData():Profile{
        return{
            name: this.name,
            mobile: this.mobile,
            age: this.age
        }
    }
}
const user : User = new User("Masoud Ramezani", "0936485435", 33);
console.log(user.getIUserData())