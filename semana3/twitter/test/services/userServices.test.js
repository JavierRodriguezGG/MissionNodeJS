const userService = require('./../../app/services/userServices')

describe("Test for userServices", () => {

    test("1) Create a new user using the userService", () => {
        const user = userService.create(1, "javierrogg", "Javier")
        expect(user.username).toBe("javierrogg")
        expect(user.name).toBe("Javier")
        expect(user.id).toBe(1)
        expect(user.bio).not.toBeUndefined()
    })

})