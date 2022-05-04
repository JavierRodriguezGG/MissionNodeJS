const User = require('./../../app/models/user')

describe("Unit tests for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "javierrgg", "Javi", "Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("javierrgg")
        expect(user.name).toBe("Javi")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add getters', () => {
        const user = new User(1, "javierrgg", "Javi", "Bio")
   
        expect(user.getUsername).toBe("javierrgg")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLasUpdate).not.toBeUndefined()
    })

    test('Ad setters', () => {
        const user = new User(1, "javierrgg", "Javi", "Bio")
        user.setUsername ="Javier"
        expect(user.username).toBe("Javier")

        user.setBio = "New bio"
        expect(user.bio).toBe("New bio")
    })

})