const User = require('./../../app/models/user')

describe("Unit tests for User class", () => {
    test('Create an User object', () => {
        const user = new User(1, "javierrgg", "Javi", "Bio", "datecreated", "lastupdate")

        expect(user.id).toBe(1)
        expect(user.username).toBe("javierrgg")
        expect(user.name).toBe("Javi")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("datecreated")
        expect(user.lastUpdated).toBe("lastupdate")
    });

})