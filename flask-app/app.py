from flask import Flask, request
import json

app = Flask(__name__)

rezervari_filename = "rezervari.txt"

@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

def save_rezervari_info(info_json):
    info = ""
    keys = list(info_json.keys())
    for key in keys:
        info += info_json[key] + ","
    info = info[:-1]
    info += "\n"
    with open(rezervari_filename, "a+") as f:
        f.write(info)
            
def load_rezervari_info():
    with open(rezervari_filename, "r") as f:
        data = f.readlines()
    return data

@app.route('/')
def hello_world():
    return 'Hello, world! Se audeeeeeee?'

@app.route('/save-consultation', methods=['POST'])
def save_consultation():
    info = request.json
    print(info)
    save_rezervari_info(info)
    
    return {
        "success": True
    }

@app.route('/consultation', methods=['GET'])
def load_rezervare_info():
    data = load_rezervari_info()
    return json.dumps(data)

@app.route('/save-contact-message', methods=["POST"])
def save_contact_message():
    email = request.form["email"]
    message = request.form["message"]
    
    print("email", email)
    print("message", message)
    
    return {
        "success": True,
        "confirmation": "Datele au fost primite cu succes!"
    }


if __name__ == '__main__':
    app.run(debug=True, port=5000)
    