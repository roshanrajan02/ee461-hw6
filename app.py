import os
from flask import Flask, send_from_directory

app = Flask(__name__, static_url_path='', static_folder='ui/build/')

@app.route('/')
def index():
    return send_from_directory('ui/build/', 'index.html')

@app.route('/joinProject/<projectId>')
def joinProject(projectId):
    return {
        "message": "Joined Project " + str(projectId)
    }

@app.route('/leaveProject/<projectId>')
def leaveProject(projectId):
    return {
        "message": "Left Project " + str(projectId)
    }

@app.route('/check_in/<projectId>')
def checkIn_hardware(projectId, qty):
    return {
        "message": str(qty) + " checked in by Project " + str(projectId) 
    }

@app.route('/check_out/<projectId>')
def checkOut_hardware(projectId, qty):
    return {
        "message": str(qty) + " checked out by Project " + str(projectId)
    }

if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, port=os.environ.get('PORT', 80))