from os import listdir, getcwd
from os.path import isfile, join

mypath = getcwd()
onlyfiles = [f for f in listdir(mypath) if isfile(join(mypath, f))]

state = 0
f1 = open("out.txt", "w")

for f in onlyfiles:
	with open(f) as t:
		for line in t:
			f1.write(line)
		t.close()

f1.close()

f2 = open("final.txt", "w")

with open("out.txt") as f3:
	for line in f3:
		if "/*" in line:
			i = line.find("/*")
			f2.write(line[0:i])
			state = 1
		if "*/" in line:
			i = line.find("*/")
			f2.write(line[i+2:])
			state = 0
		elif "//" in line:
			i = line.find("//")
			f2.write(line[0:i])
		elif state == 0:
			f2.write(line)
			
f2.close()
f3.close()
