import { IRandom } from '../src/IRandom'

export class FakeRandom implements IRandom {

    values: number[];
    index: number;

    constructor(values: number[]) {
        this.values = values;
        this.index = 0;
    }

    random(): number {
        return this.values[this.index++];
    }
}