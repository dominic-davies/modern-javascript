// Lexical Scope
// Global Scope  -- defined outside code block eg varOne.  Always exists.
// Local Scope  --  defined inside a code block

// code block

// scope trees

// Global(name)
// Local
// Local
// Local

// let name = "Dom"

// if (true) {
//   if (true) {
//   }
// }
// if (true) {
// }

// Hoisting

// Adam — Teaching Assistant  · 3 months ago  Answer
// It's again due to hoisting:

// if (true) {
//     console.log(name)
//     let name = 'Mike'
// It's trying to console.log the let name = "Mike" because the let name declaration is hoisted to the top of the nearest scope (the "if" block), but you can't access a variable declared with let or const until after it has been physically declared in the code.

// If you remove the let then it just means it's re-assigning the let name = "Andrew" so it's not an issue.
