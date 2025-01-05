# frozen_string_literal: true

# Binary Search - One of the most common algorithms in computer science, binary search is used to quickly find a value in a sorted sequence. 
# This algorithm works by keeping track of the range of possible positions for the value we are searching for. 
# It then repeatedly divides this range in half until the value is found or the range is empty.

# Is important to note that the binary search algorithm is only applicable to sorted sequences.
def binary_search(nums, n)
  low = 0
  high = nums.size
  steps = 0

  while low < high
    steps += 1

    mid = ((low + high) / 2).to_i

    if nums[mid] == n
      puts "steps: #{steps}"
      return mid
    elsif nums[mid] < n
      low = mid + 1
    else
      high = mid
    end
  end

  -1
end


a = (1..10).to_a
b = (1..20).to_a # 2x A
c = (1..40).to_a # 2x B

binary_search(a, 3) # 2
binary_search(b, 3) # 3
binary_search(c, 3) # 4
