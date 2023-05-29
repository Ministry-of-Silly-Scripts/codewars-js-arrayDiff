# Notes

## Description

Your goal in this kata is to implement a difference function, which subtracts one array from another and returns the result.

It should remove all values from array a, which are present in array b keeping their order.

```
arrayDiff([1,2],[1]) == [2]
```

If a value is present in b, all of its occurrences must be removed from the other:

```
arrayDiff([1,2,2,2,3],[2]) == [1,3]
```

## Domain

- input: 
    - two arrays with integers (ex: `([1, 2], [1]`), each with undefined number of elements
- output:
    - single array with integers
- difference function which substracts one array from another
- it should remove ALL elements from the first array that are present in the second array keeping the others

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

TODO:
# Pomodoro 2 🍅:
- it should loop through the first array and remove the elements that are equal to the first element of the second array ✅

# Pomodoro 1 🍅:
- initial setup
    - update README ✅
    - change function name in files located in src and test folders ✅
    - update package.json ✅
    - update NOTES ✅
- domain discussion ✅
- it should return an empty array if the first array is empty (nothing to subtract from) ✅
- it should return an the first array if the second array is empty ✅
- it should loop through the first array and remove the elements that are equal to the first element of the second array 🚧