class Emitter {
  private max: number;
  private asyncIdx: number;

  constructor(max: number) {
    this.max = max;
    this.asyncIdx = 0;
  }

  async *[Symbol.asyncIterator](): AsyncIterableIterator<number> {
    while (this.asyncIdx < this.max) {
      yield this.asyncIdx++;
    }
  }
}

async function asyncCount() {
  let emitter = new Emitter(5);

  for await (const x of emitter) {
    console.log(x);
  }
}

asyncCount();
