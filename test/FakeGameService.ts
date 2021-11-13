import { ISprite } from '../src/ISprite'
import { IGameService } from '../src/IGameService'
import { FakeSprite } from './FakeSprite'

export class FakeGameService implements IGameService {
    createSprite(color: number): ISprite
    {
        return new FakeSprite();
    }
    increaseScore(increment: number) {
    }
    gameover() {        
    }
}