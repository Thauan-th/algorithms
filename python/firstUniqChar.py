# HashMaps, one powerful resource

# We don't have to order this dictionary because python already does that for us based on insertion order
# The first key that has a value of 1 is the first unique character in the word, very simple but powerful
def firstUniqChar(word: str) -> int:
    d = {}

    for idx, ch in enumerate(word):
        if not d.get(ch):
            d[ch] = [idx, 1]
        else:
            d[ch][1] += 1

    for _, v in d.items():
        if v[1] == 1:
            return {'letter': word[v[0]], 'index': v[0], 'word': word}

    return False


print(firstUniqChar('leetcode'))
print(firstUniqChar('google'))
print(firstUniqChar('pixar'))
print(firstUniqChar('tenent'))
