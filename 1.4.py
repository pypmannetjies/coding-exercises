# Palindrome Permutation
# O(n) - list is traversed once, and characters placed in dictionary
# Length of dictionary indicates whether characters in string were matched in parallel
# If 1 is left, then that character can be at the middle of the string
# Spaces are ignored
def is_palindrome_permutation(str):
    seen_chars = dict()
    for c in str.lower():
        if c == " ":
            continue
        if c in seen_chars:
            del seen_chars[c]
        else:
            seen_chars[c] = True
    result = len(seen_chars) == 0 or len(seen_chars) == 1
    print(str, "-", result)
    return result

is_palindrome_permutation("tact coa")
is_palindrome_permutation("cabba")
is_palindrome_permutation("aabb")
is_palindrome_permutation("abbba")
is_palindrome_permutation("aabbb")
is_palindrome_permutation("abcd")
is_palindrome_permutation("a")
is_palindrome_permutation("abA")