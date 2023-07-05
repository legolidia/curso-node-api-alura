import pandas as pd
from pymongo import MongoClient

# Conecte-se ao seu banco de dados MongoDB
uri = 'mongodb+srv://admin:lfs123@teste.vhm25nb.mongodb.net/teste?tlsAllowInvalidCertificates=true'
client = MongoClient(uri)
db = client.teste

# Execute uma consulta para obter os dados do banco
collection = db.streams
data = list(collection.find())

# Crie um DataFrame do pandas com os dados obtidos
df = pd.DataFrame(data)

# Imprima o DataFrame no terminal
print(df)
