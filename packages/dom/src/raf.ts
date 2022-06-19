let _raf = (callback: FrameRequestCallback) => +setTimeout(callback, 16);
let _caf = (num: number) => clearTimeout(num);

if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
  _raf = (callback: FrameRequestCallback) =>
    window.requestAnimationFrame(callback);
  _caf = (handle: number) => window.cancelAnimationFrame(handle);
}

let rafUUID = 0;
const rafIds = new Map<number, number>();

function cleanup(id: number) {
  rafIds.delete(id);
}

export function raf(callback: () => void, times = 1): number {
  rafUUID += 1;
  const id = rafUUID;

  function callRef(leftTimes: number) {
    if (leftTimes === 0) {
      // Clean up
      cleanup(id);

      // Trigger
      callback();
    } else {
      // Next raf
      const realId = _raf(() => {
        callRef(leftTimes - 1);
      });

      // Bind real raf id
      rafIds.set(id, realId);
    }
  }

  callRef(times);

  return id;
}

raf.cancel = (id: number) => {
  const realId = rafIds.get(id);
  if (!realId) {
    throw new Error('realId dont existed');
  }
  cleanup(realId);
  return _caf(realId);
};
