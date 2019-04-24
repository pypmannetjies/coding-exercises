# Is permutation

# Hash table - O(n + n + n) - populate hash table, go through s2, go through table again at end = O(n)
def is_perm(s1, s2):
  if (len(s1) != len(s2)):
    return False

  chars_s1 = dict()
  for c1 in s1:
    if c1 in chars_s1:
      chars_s1[c1] = chars_s1[c1] + 1
    else:
      chars_s1[c1] = 1
  for c2 in s2:
    if c2 not in chars_s1:
      return False
    chars_s1[c2] = chars_s1[c2] - 1
  for k,v in chars_s1.items():
    if v != 0:
      return False
  return True

def print_perm(s1, s2):
  if (is_perm(s1, s2)):
    print(s1, "and", s2, "are permutations")
  else:
    print(s1, "and", s2, "are not permutations")

print_perm("a", "a")
print_perm("a", "b")
print_perm("ab", "ba")
print_perm("abc", "bad")
print_perm("abc", "cab")
print_perm("abcd", "cab")
