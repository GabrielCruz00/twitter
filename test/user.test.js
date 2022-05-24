const User = require('./../app/user.js');

describe('Unit tests for User model', () => {
    test('Create an user model', () => {
        const gabriel = new User(1, 'gabo00', 'Gabriel', 'Bio');
        expect(gabriel.id).toBe(1);
        expect(gabriel.username).toBe('gabo00');
        expect(gabriel.name).toBe('Gabriel');
        expect(gabriel.bio).toBe('Bio');
        expect(gabriel.dateCreated).not.toBeUndefined();
        expect(gabriel.lastUpdate).not.toBeUndefined();
    })
})