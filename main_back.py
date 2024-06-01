from flask import Flask, jsonify, request, render_template
from my_script import main_api

app = Flask(__name__)

@app.route("/")
def api():
    return jsonify({'temp': main_api()})

if __name__ == '__main__':
    app.run(debug=True)
