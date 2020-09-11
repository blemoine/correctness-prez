import fc from 'fast-check';

function isOdd(n: number): boolean {
	return n % 2 === 1;
}

describe('fc-test', () => {

it("return true for 1", () => {
  expect(isOdd(1)).toBe(true);  
})
it("return false for 2", () => {
  expect(isOdd(2)).toBe(false);  
})
it("return false for 4", () => {
  expect(isOdd(4)).toBe(false);  
})

it("return false for even number", () => {
  const spyedIsOdd = jest.fn(isOdd);
  fc.assert(
    fc.property(fc.integer(),  (n) => {
    	expect(spyedIsOdd(n * 2 )).toBe(false);
    })
  );
  console.log(spyedIsOdd.mock.calls)
})

it("return true for odd number", () => {
  fc.assert(
    fc.property(fc.integer(),  (n) => {
    	expect(isOdd(n * 2 + 1)).toBe(true);
    }),
    { seed: -44149598, path: "0:1:0:0:0:0", endOnFailure: true }
  );
})

/*     
it("isEven return true for even number", () => {
  fc.assert(
    fc.property(fc.integer(),  (n) => {
    	expect(isOdd(n * 2 + 1)).toBe(true);
    })
  );
})


   			
it("manhattan distance between a point and itself is 0", () => {
  fc.assert(
    fc.property(fc.integer(),fc.integer(),  (x1,y1) => {
    	expect(manhattan([x1,y1], [x1, y1])).toBe(0);
    })
  );
})
*/
})


