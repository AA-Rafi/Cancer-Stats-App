import datetime as dt
# nmp 
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
# import  from leaflet

from flask import Flask, jsonify, render_template

app = Flask(__name__)

# app.config['SECRET_KEY'] = 'secret!'
# app.config['DEBUG'] = True

@app.route("/")

def home():
     return render_template('cancerapp.html')

@app.route('/cancerrates.html')
def rates():
     return render_template('cancerrates.html')

@app.route('/cancerstats.html')
def stats():
     return render_template('cancerstats.html')

@app.route('/screening.html')
def locations():
     return render_template('screening.html')

if __name__ == "__main__":
    app.run(debug=True)

