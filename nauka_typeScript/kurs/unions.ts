type UserRole = 'guest' | 'member' | 'admin'

type UserTS = {
    id: number
    username: string
    role: 'guest' | 'member' | 'admin'
}

type updatedUser = Partial<UserTS>


let userIdValue = 1

const users: UserTS[] = [
    { id: userIdValue++, username: 'alice', role: 'guest' },
    { id: userIdValue++, username: 'bob', role: 'member' },
    { id: userIdValue++, username: 'charlie', role: 'admin' }
];


function updateUser(id: number, updates: updatedUser): UserTS{
    const user = users.find(user => user.id === id)
    if(!user){
        throw new Error(`Brak uzytkownika`); 
    }
    Object.assign(user, updates)
    return user 
}

function fetchUserDetails(username:string): UserTS{
    const user = users.find(user => user.username === username)
    if(!user){
        throw new Error(`Brak uzytkownika`); 
    }
    return user
}

function addNewUserTS(newUser: Omit<UserTS, 'id'>): UserTS {
    const user: UserTS = { id: userIdValue++, ...newUser};
    users.push(user);
    return user
}

updateUser(2, { username: 'Booba'})
addNewUserTS({username: 'blacker', role: 'admin'})

console.log(users)