import Semaphore from './Semaphore';

describe('Semaphore', () => {
  const log: string[] = [];
  beforeAll(() => {
    log.length = 0;
  });

  test('Semaphor(10)', async () => {
    const semaphore = new Semaphore(10);
    const pushQueue = [...new Array(15)];
    let remaining = pushQueue.length;
    const pushFinished = pushQueue.reduce<Promise<void>>(async (acc, _, index) => {
      await acc;
      await semaphore.acquire();
      log.push(`PUSH#${index}`);
    }, Promise.resolve());
    const pullFinished = new Promise<void>(resolve => {
      const pull = () => {
        if (remaining === 0) resolve();
        else {
          log.push(`PULL#${remaining}`);
          semaphore.release();
          remaining -= 1;
          setTimeout(pull, 10);
        }
      };
      setTimeout(pull, 10);
    });
    await Promise.all([pushFinished, pullFinished]);
    expect(log).toEqual([
      'PUSH#0',
      'PUSH#1',
      'PUSH#2',
      'PUSH#3',
      'PUSH#4',
      'PUSH#5',
      'PUSH#6',
      'PUSH#7',
      'PUSH#8',
      'PUSH#9',
      'PULL#15',
      'PUSH#10',
      'PULL#14',
      'PUSH#11',
      'PULL#13',
      'PUSH#12',
      'PULL#12',
      'PUSH#13',
      'PULL#11',
      'PUSH#14',
      'PULL#10',
      'PULL#9',
      'PULL#8',
      'PULL#7',
      'PULL#6',
      'PULL#5',
      'PULL#4',
      'PULL#3',
      'PULL#2',
      'PULL#1',
    ]);
  });
  test('Semaphore(0)', async () => {
    const semaphore = new Semaphore(0);
    const pullQueue = [...new Array(15)];
    const pullFinished = pullQueue.reduce<Promise<void>>(async (acc, _, index) => {
      await acc;
      await semaphore.acquire();
      log.push(`PULL#${index}`);
    }, Promise.resolve());
    let remaining = pullQueue.length;
    const pushFinished = new Promise<void>(resolve => {
      const push = (step = 1) => {
        for (let i = 0; i < step; i += 1) {
          if (remaining === 0) {
            resolve();
            return;
          }
          log.push(`PUSH(${step}:${i + 1})`);
          semaphore.release();
          remaining -= 1;
        }
        setTimeout(() => push(step + 1), 10);
      };
      setTimeout(push, 10);
    });
    await Promise.all([pushFinished, pullFinished]);
    expect(log).toEqual([
      'PUSH(1:1)',
      'PULL#0',
      'PUSH(2:1)',
      'PUSH(2:2)',
      'PULL#1',
      'PULL#2',
      'PUSH(3:1)',
      'PUSH(3:2)',
      'PUSH(3:3)',
      'PULL#3',
      'PULL#4',
      'PULL#5',
      'PUSH(4:1)',
      'PUSH(4:2)',
      'PUSH(4:3)',
      'PUSH(4:4)',
      'PULL#6',
      'PULL#7',
      'PULL#8',
      'PULL#9',
      'PUSH(5:1)',
      'PUSH(5:2)',
      'PUSH(5:3)',
      'PUSH(5:4)',
      'PUSH(5:5)',
      'PULL#10',
      'PULL#11',
      'PULL#12',
      'PULL#13',
      'PULL#14',
    ]);
  });
});
