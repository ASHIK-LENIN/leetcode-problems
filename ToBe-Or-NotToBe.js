
const expect = (val) => {

    const toBe = (n) => {
        if (val === n) {
            return true
        } else {
            throw new Error("Not Equal!")
        }
    }

    const notToBe = (n) => {
        if (val !== n) {
            return true
        } else {
            throw new Error("They are equal")
        }
    }

    return {
        toBe: toBe,
        notToBe: notToBe
    }
}

console.log(expect(5).notToBe(5))