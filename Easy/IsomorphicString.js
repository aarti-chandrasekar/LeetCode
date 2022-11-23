/*
Given two strings s and t, determine if they are isomorphic.
Two strings s and t are isomorphic if the characters in s can be replaced to get t.
All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"
Output: true
*/

console.log("Is isomorphic : "+ isomorphicString("egg", "add"));
console.log("Is isomorphic : "+ isomorphicString("foo", "bar"));
console.log("Is isomorphic : "+ isomorphicString("paper", "title"));
console.log("Is isomorphic : "+ isomorphicString("paper", "titie"));

function isomorphicString(s, t){
    var len = s.length;
    var schar;
    var tchar;
    var sMap = new Map();
    var tMap = new Map();


    for (var i=0; i<len; i++){
        schar = s.charAt(i);
        tchar = t.charAt(i);

        sMapping = sMap.get(schar);
        if (sMapping != undefined && sMapping != tchar){
            return false;
        }

        tMapping = tMap.get(tchar);
        if (tMapping != undefined && tMapping != schar){
            return false;
        }
        
        sMap.set(schar, tchar);
        tMap.set(tchar, schar);
    }

    return true;
}