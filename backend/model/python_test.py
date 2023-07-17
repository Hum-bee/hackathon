# code
import sys
import requests
import pickle
import pandas as pd
import numpy as np
from sklearn.neighbors import KNeighborsClassifier

# bs4 module for web scraping and requests for making HTTPS requests using Python.
# response = requests.get('http://localhost:5000/products')

# filename = "./knn_model.sav"
testdf = pd.DataFrame(np.array([[273,313.96, 443.64, 6]]), columns=['PRODUCT_ID','STANDARD_COST', 'LIST_PRICE', 'WAREHOUSE_ID'])

with open("C:\\Workspace\\hackathon\\backend\\model\\knn_model.sav", 'rb') as f:
# loaded_model = pickle.load(filename)
    loaded_model = pickle.load(f)
    test_pred = loaded_model.predict(testdf)
print( test_pred[0] )
