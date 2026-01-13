import numpy as np
from numpy import array

x = array([[0], [1]])
y = array([[1], [2]])
z = array([[3], [1]])

#1
print(x+y+z)

#2
print(x - (2*(y.T)))

#3
print(x*z)

#4
print(x.T.dot(z))

#5
print(x.T.dot(y))

#6
print(x.dot(y.T))