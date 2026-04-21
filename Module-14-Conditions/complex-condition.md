🟢 Beginner Level (1–3)
✅ Problem 1

👉 একটা number input নাও

যদি number > 0 AND even → "Positive Even"
যদি number > 0 AND odd → "Positive Odd"
না হলে → "Not Positive"
✅ Problem 2

👉 temperature input নাও

temp ≥ 30 → "Hot"
temp ≥ 20 AND < 30 → "Warm"
না হলে → "Cold"
✅ Problem 3

👉 password check

length ≥ 6 AND contains number → "Valid Password"
না হলে → "Invalid"
🟡 Intermediate Level (4–7)
✅ Problem 4

👉 marks input

marks ≥ 80 → "A+"
marks ≥ 70 AND < 80 → "A"
marks ≥ 60 AND < 70 → "B"
marks ≥ 50 AND < 60 → "C"
marks < 50 → "Fail"
✅ Problem 5

👉 age + student status

age < 18 → "Minor"
age ≥ 18 AND student → "Student Adult"
age ≥ 18 AND not student → "Regular Adult"
✅ Problem 6

👉 login system

username = "admin" AND password = "1234" → "Login Success"
username correct BUT password wrong → "Wrong Password"
না হলে → "User Not Found"
✅ Problem 7

👉 electricity bill

unit ≤ 100 → 5 taka/unit
unit ≤ 200 → 7 taka/unit
unit > 200 → 10 taka/unit

👉 total bill calculate করো

🔴 Advanced Level (8–10)
✅ Problem 8

👉 leap year check

divisible by 4 AND not by 100
OR divisible by 400
→ "Leap Year"
না হলে → "Not Leap Year"
✅ Problem 9

👉 3টা number input

biggest number বের করো using complex condition
✅ Problem 10 (Real-life 🔥)

👉 shopping discount system

amount ≥ 5000 AND VIP → 20%
amount ≥ 5000 AND not VIP → 10%
amount ≥ 2000 AND VIP → 10%
amount ≥ 2000 AND not VIP → 5%
না হলে → no discount

👉 final payable amount calculate করো

💡 Example Solution (Problem 1)
let num = 10;

if (num > 0 && num % 2 === 0) {
    console.log("Positive Even");
} else if (num > 0 && num % 2 !== 0) {
    console.log("Positive Odd");
} else {
    console.log("Not Positive");
}
🎯 তোমার কাজ

👉 আগে নিজে solve করো
👉 তারপর বলো: "solution dao (problem number)"
👉 আমি line-by-line explain করে দিবো 😄

