years = 1

while True:
	alpost = 180 * years

	if (years == 1):
		legionsites = 249
	else:
		legionsites = 199

	legionsites = legionsites * years + 45 * years

	print("year " + str(years))

	print("alpost " + str(alpost))
	print("legionsites " + str(legionsites))

	savings = (legionsites - alpost) / legionsites * 100

	print("savings % " + str(savings))


	years += 1

	if (years > 2):
		break