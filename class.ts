// clas -> user

type profile = {
  name: string;
  mobile: string;
  age: number;
};
type EditProfile = {
  name?: string;
  mobile?: string;
  age?: number;
};

class User {
  name: string;
  mobile: string;
  age: number;
  constructor(name: string, mobile: string, age: number) {
    this.name = name;
    this.mobile = mobile;
    this.age = age;
  }
  getUserProfile(): profile {
    return {
      name: this.name,
      mobile: this.mobile,
      age: this.age,
    };
  }
  editUserProfile(profileOBJ: EditProfile): profile {
    for (const key in profileOBJ) {
      this[key] = profileOBJ[key];
    }
    return {
      name: this.name,
      mobile: this.mobile,
      age: this.age,
    };
  }
}
const user: User = new User("Masoud Ramezani", "64684684", 33);
console.log(user);