type UserRole = 'guest' | 'member' | 'admin'

type UserTS = {
    username: string
    role: 'guest' | 'member' | 'admin'
}


const users: UserTS[] = [
    { username: 'alice', role: 'guest' },
    { username: 'bob', role: 'member' },
    { username: 'charlie', role: 'admin' }
];

function fetchUserDetails(username:string): UserTS{
    const user = users.find(user => user.username === username)
    if(user){
        return user
    } else {
        throw new Error(`Brak uzytkownika o nazwie ${username}`);
    }
}