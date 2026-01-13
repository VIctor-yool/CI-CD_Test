const {add, square} = require("./math.util.js")
const fc = require("fast-check")

test("add 함수 테스트", () => {
    expect(add(1, 2)).toBe(3);
});

test("add 함수 패스트 체크 테스트", () => {
    fc.assert(fc.property(fc.integer(), (a, b) => {
        expect(add(a, b)).toBe(a + b);
        expect(add(b, a)).toBe(b + a);
    })
);
});