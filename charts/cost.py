import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 20)

alpost = 180 * x
plt.plot(x, alpost, '-g', label='alpost')

legionsites = 199 * x + 50
plt.plot(x, legionsites, '-r', label="Legionsites")

other = 192 * x
plt.plot(x, other, '-m', label="Others")

plt.title('Website Cost')
plt.xlabel('Years')
plt.ylabel('Cost (USD)')
plt.legend(loc='upper left')
plt.grid()
plt.show()