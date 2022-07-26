import matplotlib.pyplot as plt
import numpy as np

numOfLegions = 12704

x = np.linspace(0, 5)

alpost = 180 * x * numOfLegions
plt.plot(x, alpost, '-g', label='alpost')

legionsites = (199 * x + 50) * numOfLegions
plt.plot(x, legionsites, '-r', label="Legionsites")

other = 192 * x * numOfLegions
plt.plot(x, other, '-m', label="Others")

plt.title('Total Cost')
plt.xlabel('Years')
plt.ylabel('Cost (USD)')
plt.legend(loc='upper left')
plt.grid()


# after plotting the data, format the labels
current_values = plt.gca().get_yticks()
# using format string '{:.0f}' here but you can choose others
plt.gca().set_yticklabels(['{:,.0f}'.format(x) for x in current_values])


plt.show()