interface User {
    first_name: string;
    last_name: string;
    user_name: string;
    password: string;
}

interface UserFixture {
    correct_user: User;
    incorrect_user: User;
}

export default UserFixture;
