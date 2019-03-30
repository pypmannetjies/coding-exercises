# URLify

# In place - O(n)
# String must be converted to array due to Strings being immutable in Python
# Easier approach - just insert asa chars are copied into array
# This approach follows the Java solution from the book
def urlify(url, num_chars):
  url = list(url)

  count_spaces = 0
  for i in range(num_chars):
    if url[i] == " ":
      count_spaces += 1

  if count_spaces == 0:
    return url

  pointer = count_spaces * 2 + num_chars - 1
  print(pointer)
  for i in reversed(range(num_chars)):
    if (url[i] == " "):
      url[pointer] =  "0"
      url[pointer - 1] =  "2"
      url[pointer - 2] =  "%"
      pointer -= 3
    else:
      url[pointer] = url[i]
      pointer -= 1
  return "".join(url)

print(urlify("Mr John Smith        ", 13))