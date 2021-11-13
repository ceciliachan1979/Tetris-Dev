import { ISprite } from "./ISprite";

export class NullSprite implements ISprite {
    moveTo(x: number, y : number): void {

    }

    color(): number {
        return 0;
    }
}