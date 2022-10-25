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

@app.route('/check_in/<projectId>/<hwSet>/<qty>')
def checkIn_hardware(projectId, hwSet, qty):
    return {
        "message": str(qty) + " checked in by Project " + str(projectId) + " to " + hwSet
    }

@app.route('/check_out/<projectId>/<hwSet>/<qty>')
def checkOut_hardware(projectId, hwSet, qty):
    return {
        "message": str(qty) + " checked out by Project " + str(projectId) + " from " + hwSet
    }

if __name__ == '__main__':
    app.run(host='127.0.0.1', debug=True, port=os.environ.get('PORT', 80))