# String compression - replace repeated characters with the character and the count e.g. aaa becomes a3
# If the compressed string is longer than the original, the original must be returned

# O(n) - iterates through string once
# +n for converting list to string
# Storage - list of size n + original string + last_seen + last_count
def string_compress(string):
    print(string, end=" ---> ")
    i = 1
    last_seen = string[0]
    last_count = 1
    compressed = []
    while i < len(string):
        if string[i] == last_seen:
            last_count += 1
        if string[i] != last_seen or i == len(string) - 1:
            compressed.append(last_seen)
            compressed.append(str(last_count))
            last_seen = string[i]
            last_count = 1
        i += 1
    if len(compressed) >= len(string):
        return string
    return "".join(compressed)


print(string_compress("aabcccccaaa"))
print(string_compress("aabbccdd"))
