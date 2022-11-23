/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

Example 1:
Input: s = "abc", t = "ahbgdc"
Output: true
*/

// var s = "abc";
// var t = "ahbgdc";

// var s = "axc";
// var t = "ahbgdc";

// var s = "aec";
// var t = "abcde";

var s = "abc";
var t = "";

console.log(s + " is a subsequence of " + t + " ? : " + isSubsequence(s,t));

function isSubsequence(s, t){
    var tlen = t.length;
    var slen = s.length;

    if (slen > tlen){
        return false;
    }

    //for each letter in s iterate through the letters in t
    // the index of the t loop is not reset to 0 for each letter in s
    var ti = 0;
    for (var si=0; si<slen; si++){ 
        var schar = s.charAt(si);
        var found = false;
        while (ti < tlen){
            var tchar = t.charAt(ti);
            ti++;
            if (schar == tchar) {
                found = true;
                break;
            }
        }

        if (found == false){
            return false;
        }
    }

    return true;
}