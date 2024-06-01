from flask import Flask, jsonify, request, render_template
from my_script import main_api

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route("/sko")
def sko():
    return render_template('sko.html')

@app.route("/kz")
def kz():
    return render_template('kz.html')

@app.route("/dang")
def dang():
    return render_template('dang.html')

@app.route("/api")
def api():
    return jsonify({'temp': main_api()})

if __name__ == '__main__':
    app.run(debug=True)
