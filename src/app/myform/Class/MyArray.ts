export class MyArray {
    length: number = 2;
    height: number = 2;
    matrix: number[][] = [];

    constructor(length: number, height: number, defaultValue: number = 0) {
        this.length = length;
        this.height = height;
        this.matrix = new Array<number[]>(height)
        for (let i = 0; i < height; i++) {
            this.matrix[i] = new Array<number>(length).fill(defaultValue);
        }
    }
    getValue(x: number, y: number): number {
        if (x < 0 || x >= this.length || y < 0 || y >= this.height) {
            throw new Error("Index out of bounds");
        }
        return this.matrix[y][x];
    }

    setValue(x: number, y: number, value: number): void {
        if (x < 0 || x >= this.length || y < 0 || y >= this.height) {
            throw new Error("Index out of bounds");
        }
        this.matrix[y][x] = value;
    }

    viewMatrix(): string {
        let s = '[';
        for (let i = 0; i < this.height; i++){
            for (let j = 0; j < this.length; j++){
                s = s + this.getValue(i, j) + ' ';
            }
            s = s + '] '
        }
        return s;
    }
}