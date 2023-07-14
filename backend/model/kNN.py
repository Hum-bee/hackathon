import pickle
import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsClassifier
import sys

for line in sys.stdin:
    if 'Exit' == line.rstrip():
        break
    print(f'Processing Message from sys.stdin *****{line}*****')
print("Done")

testdf = pd.DataFrame(np.array([[273,313.96, 443.64, 6]]), columns=['PRODUCT_ID','STANDARD_COST', 'LIST_PRICE', 'WAREHOUSE_ID'])
print(testdf)

filename = "knn_model.sav"
loaded_model = pickle.load(open(filename, 'rb'))
test_pred = loaded_model.predict(testdf)
# result = loaded_model.score(X_test, Y_test)
print("Pred Category: ", test_pred[0] )
