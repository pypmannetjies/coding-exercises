# Is Unique

# Brute force - O(n^2)
def is_unique(s):
  for i in range(len(s) - 1):
    for j in range(i + 1, len(s)):
      if s[i] == s[j]:
        return False
  return True

# Hash Table - O(n) & O(n) space complexity
def is_unique2(s):
  seen_chars = dict()
  for c in s:
    if c in seen_chars:
      return False
    seen_chars[c] = True
  return True 

# Sort first - O(n log(n))
def is_unique3(s):
  sort_s = sorted(s)
  for i in range(len(sort_s) - 1):
    if sort_s[i] == sort_s[i+1]:
      return False
  return True

def print_unique(s):
  unique = is_unique3(s)
  if unique:
    print (s, "is unique")
  else:
    print(s, " is not unique")

print_unique("a")
print_unique("ab")
print_unique("abc")
print_unique("aa")
print_unique("abcda")
print_unique("abccde")

