class Heap {
  constructor() {
    this.heap = [];
    this.heapIdx = [];
  }

  push(num, idx) {
    this.heap.push(num);
    this.heapIdx.push(idx);
    this.bubbleDown();
  }
  getEl() {
    return this.heap;
  }
  getIdx() {
    return this.heapIdx;
  }
  bubbleDown() {
    let idx = 0;
    let element = this.heap[this.heap.length - 1];

    while (idx < this.heap.length) {
      if (element > this.heap[idx]) {
        let el = this.heap.pop();
        let elIDx = this.heapIdx.pop();
        let sliceFrontArray = this.heap.splice(idx);
        let sliceIdxArray = this.heapIdx.splice(idx);
        this.heap.push(el);
        this.heapIdx.push(elIDx);
        this.heap = this.heap.concat(sliceFrontArray);
        this.heapIdx = this.heapIdx.concat(sliceIdxArray);
        break;
      }
      idx++;
    }
  }
}

var findRelativeRanks = function (score) {
  const heap = new Heap();
  for (let i = 0; i < score.length; i++) {
    heap.push(score[i], i);
  }

  score[heap.getIdx()[0]] = "Gold Medal";
  score[heap.getIdx()[1]] = "Silver Medal";
  score[heap.getIdx()[2]] = "Bronze Medal";
  for (let i = 3; i < score.length; i++) {
    score[heap.getIdx()[i]] = `${i + 1}`;
  }
  return score;
};

findRelativeRanks([10, 3, 8, 9, 4]);
