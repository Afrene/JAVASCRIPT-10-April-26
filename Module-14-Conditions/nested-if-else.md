🧠 Level 1 (Easy)
✅ Problem 1

👉 একটা number input নাও

যদি number > 0 → check even/odd
যদি number ≤ 0 → print "Invalid"
✅ Problem 2

👉 marks input নাও

marks ≥ 40 → pass
marks ≥ 80 → "A+"
না হলে → "Pass"
না হলে → "Fail"`
⚡ Level 2 (Medium)
✅ Problem 3

👉 age + salary input

age ≥ 18 → eligible
salary ≥ 20000 → "Loan Approved"
না হলে → "Low Salary"
না হলে → "Not Eligible"`
✅ Problem 4

👉 number input

যদি divisible by 2
আবার divisible by 3 → "Divisible by 2 & 3"
না হলে → "Only 2"
না হলে
যদি divisible by 3 → "Only 3"
না হলে → "None"`
🚀 Level 3 (Tricky)
✅ Problem 5

👉 3টা number input নাও

সবচেয়ে বড় number বের করো using nested if
✅ Problem 6

👉 login system

username check
correct হলে → password check
correct → "Login Success"
wrong → "Wrong Password"
না হলে → "User Not Found"`
🔥 Bonus Challenge (Real-life)
✅ Problem 7

👉 shopping discount system

amount ≥ 5000
VIP হলে → 20% discount
না হলে → 10%
amount ≥ 2000
VIP হলে → 10%
না হলে → 5%
না হলে → no discount
💡 Example Solution (Problem 1)
let num = -5;

if (num > 0) {
    if (num % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
} else {
    console.log("Invalid");
}