class UserController {
    private static Users: object[] = [];
    static getUsers(): object[] {
        UserController.Users.push({
            id: 1,
            name: "Masoud",
            age: 26
        })
        return UserController.Users
    }
}

console.log(UserController.getUsers());