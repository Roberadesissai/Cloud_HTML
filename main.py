import requests

API_URL = "https://www.stack-inference.com/run_deployed_flow?flow_id=64c136f9b77e903e81a80b44&org=4fd616bf-e63b-4287-bdfd-f2e7b2e0c888"
headers = {'Authorization':
			 'Bearer 116c699f-9f17-4741-bc58-6411357f763c',
			 'Content-Type': 'application/json'
		}

def query(payload):
 response = requests.post(API_URL, headers=headers, json=payload)
 return response.json()

output = query({"in-0": """i need help with printing the plotter lab
""", "user_id": """<USER or Conversation ID>"""})
