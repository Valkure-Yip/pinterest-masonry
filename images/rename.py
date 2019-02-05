import os 
  
root = os.getcwd() + "\\sissi"
i = 1
for filename in os.listdir(root): 
	print(filename)
	dst ="sissi/sissi-" + str(i) + ".jpg"
	src = "sissi/"+filename 
	os.rename(src, dst) 
	i += 1