import datetime as dt
import numpy as np
import pandas as pd
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify, render_template

app = Flask(__name__)
@app.route("/")

def home():
     return render_template('cancerapp.html')

# def about():
#      return render_template('aboutcancer.html')

# def stats():
#      return render_template('cancerstats.html')

# def locations():
#      return render_template('screening.html')

if __name__ == "__main__":
    app.run(debug=True)

