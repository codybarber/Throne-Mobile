import requests
import json

url = "https://api.yelp.com/oauth2/token"

querystring = {"grant_type":"client_credentials","client_id":"wWwsqm0i25yPlwnUoQImfw","client_secret":"YTwrzqjKXn02rubF3Zm4FVdjB7yDKC1FPX0TT218p3bAoiz3wTSVGcSx9dUBJxZP"}

headers = {
    'content-type': "application/x-www-form-urlencoded",
    'cache-control': "no-cache",
    'postman-token': "af6ed118-382a-60f1-7d52-6261d89afaba"
    }

response = requests.request("POST", url, headers=headers, params=querystring)
resp_dict = json.loads(response.text)
auth_token = resp_dict['access_token']

url2 = "https://api.yelp.com/v3/businesses/search"

querystring2 = {"category":"bars restaurants stores","latitude":"33.85","longitude":"-84.37"}

headers2 = {
    'content-type': "application/json",
    'authorization': "bearer " + auth_token,
    'cache-control': "no-cache",
    'postman-token': "208112c3-7e65-8142-15a3-2f4e4689ecdc"
    }

response2 = requests.request("GET", url2, headers=headers2, params=querystring2)

search_response_dict = json.loads(response2.text)
print response2.text


# print search_response_dict['businesses'][0]
