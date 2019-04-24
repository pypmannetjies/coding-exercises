# Array rotation
def rotate(arr):
    print_nicely(arr)
    print()

    n = len(arr)
    if n == 0 or len(arr[0] != n): 
        return arr

    

    return arr

def print_nicely(arr):
    for a in arr:
        print(a)

print_nicely(rotate(
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
))