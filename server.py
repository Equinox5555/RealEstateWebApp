from flask import Flask

from realestate_com_au import RealestateComAu

app = Flask(__name__)

@app.route('/data')
def get_listings():

    api = RealestateComAu()

    listings = api.search(locations=["seventeen seventy, qld 4677"], channel="buy", keywords=["tenant"], exclude_keywords=["pool"])


    return {'name': 'Colin'}

if __name__ == '__main__':
    app.run(debug=True)