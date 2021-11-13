import { ISprite } from '../src/ISprite'

export class FakeSprite implements ISprite {
    moveTo(x: number, y: number): void {
    }
    color(): number {
        return 1;
    }
}