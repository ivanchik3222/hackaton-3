from flask import Flask, jsonify, request, render_template

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

if __name__ == '__main__':
    app.run(debug=True)
