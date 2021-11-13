import { ISprite } from './ISprite'

export interface IGameService {
    createSprite(color: number): ISprite;
    increaseScore(increment: number): void;
    gameover(): void;
}