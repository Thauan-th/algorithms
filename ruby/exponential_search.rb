# frozen_string_literal: true

# Exponential Search - Exponential search is a search algorithm that builds on binary search.
# It works by finding the range in which the target value is located and then using binary search to find the value.
# The algorithm works by doubling the range size each time until the target value is found or the range is too large.
# Very useful when the target value is located at the end of the array or the array is very large.

# The exponential search algorithm is only applicable to sorted sequences.
def binary_search(nums, n, low, high)
  while low < high
    mid = ((low + high) / 2).to_i

    if nums[mid] == n
      puts "position: #{mid}"
      return mid
    elsif nums[mid] < n
      low = mid + 1
    else
      high = mid
    end
  end

  -1
end

def exponential_search(arr, target)
  return 0 if arr[0] == target

  n = arr.size
  right = 1

  right *= 2 while right < n && arr[right] < target

  return right if arr[right] == target

  binary_search(arr, target, (right % 2).to_i, [right, n - 1].min)
end

a = (1..100).to_a
b = (1..200).to_a 
c = (1..400).to_a 

exponential_search(a, 45)
exponential_search(b, 32)
exponential_search(c, 88)
