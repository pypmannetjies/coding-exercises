# One away

def one_away(str1, str2):
    i = 0
    j = 0
    one_different = False
    print(str1, str2, end=" - ")
    while i < len(str1) and j < len(str2):
        if str1[i] != str2[j]:
            if one_different == True:
                return False
            one_different = True
            if len(str1) > len(str2):
                i += 2
            elif len(str2) > len(str1):
                j += 2
        i += 1
        j += 1
    return True

print(one_away("pale", "ple"))
print(one_away("pales", "pale"))
print(one_away("pale", "bale"))
print(one_away("pale", "bake")) # False
print(one_away("ple", "pale"))