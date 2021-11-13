import { Game } from '../src/Game'
import { Button } from '../src/Button'
import { FakeRandom } from './FakeRandom'
import { FakeGameService } from './FakeGameService'
import assert from 'assert'

describe('Game', function () {

    it('Empty board', function () {
        let fakeRandom: FakeRandom = new FakeRandom([]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        let expected: string = `
00000
00000
00000
00000
00000
00000
00000
00000
00000
00000
`;
        assert(expected == game.debugBoard());
    });

    it('Generated a T', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 0]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        let expected: string = `
01110
00100
00000
00000
00000
00000
00000
00000
00000
00000
`;
        assert(expected == game.debugBoard());
    });

    it('Drop a T', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 0]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        for (let i = 0; i < 10; i++) {
            game.next(Button.None);
        }
        let expected: string = `
00000
01110
00100
00000
00000
00000
00000
00000
00000
00000
`;
        assert(expected == game.debugBoard());
    });



    it('Drop a T to bottom', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 0, 1, 0]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 10; j++) {
                game.next(Button.None);
            }
        }
        let expected: string = `
00000
00000
00000
00000
00000
00000
00000
00000
01110
00100
`;
        assert(expected == game.debugBoard());
    });

    it('Generated a T rotated 1', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 1]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        let expected: string = `
01000
01100
01000
00000
00000
00000
00000
00000
00000
00000
`;
        assert(expected == game.debugBoard());
    });

    it('Generated a T rotated 2', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 2]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        let expected: string = `
00100
01110
00000
00000
00000
00000
00000
00000
00000
00000
`;
        assert(expected == game.debugBoard());
    });

    it('Generated a T rotated 3', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 3]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        let expected: string = `
00100
01100
00100
00000
00000
00000
00000
00000
00000
00000
`;
        assert(expected == game.debugBoard());
    });

    it('Stack Correctly', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 3, 1, 3, 1, 3]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        for (let i = 0; i < 80; i++) {
            game.next(Button.None)
        }
        game.next(Button.None);
        game.next(Button.Right);
        for (let i = 0; i < 59; i++) {
            game.next(Button.None)
        }
        game.next(Button.None);
        let expected: string = `
00100
01100
00100
00000
00000
00010
00110
00110
01100
00100
`;
        assert(expected == game.debugBoard());
    });

    it('Clear Correctly', function () {
        let fakeRandom: FakeRandom = new FakeRandom([1, 2, 1, 1, 1, 3]);
        let fakeGameService: FakeGameService = new FakeGameService();
        let game: Game = new Game(5, 10, fakeRandom, fakeGameService);
        game.next(Button.None);
        for (let i = 0; i < 90; i++) {
            game.next(Button.None);
        }
        game.next(Button.None);
        for (let i = 0; i < 80; i++) {
            game.next(Button.Left);
        }
        game.next(Button.None);
        for (let i = 0; i < 80; i++) {
            game.next(Button.Right);
        }

        let expected: string = `
00000
00000
00000
00000
00000
00000
00000
00000
00000
10001
`;
        assert(expected == game.debugBoard());
    });
});