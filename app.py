from flask import Flask, render_template, redirect, url_for, request, session, jsonify, send_file
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import *
from werkzeug.security import generate_password_hash, check_password_hash
from werkzeug.utils import secure_filename
from flask_migrate import Migrate
import os
from sqlalchemy.orm import contains_eager
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func, functions
import datetime

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:123@localhost/jadval'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = True
app.config['UPLOAD_FOLDER'] = 'static/img'
app.config['SECRET_KEY'] = 'aaaa'
db = SQLAlchemy(app)
migrate = Migrate(app, db)


class Lists(db.Model):
    id = Column(Integer, primary_key=True)
    text = Column(String)
    do = Column(Boolean)
    progress = Column(Boolean)
    done = Column(Boolean)


@app.route('/')
def hello_world():
    return render_template('index.html')


@app.route('/add', methods=['POST', "GET"])
def add():
    if request.method == "POST":
        name = request.form.get('name')
        add = Lists(do=True,
                    progress=False,
                    done=False,
                    text=name
                    )
        db.session.add(add)
        db.session.commit()
        dos = Lists.query.filter(Lists.do).all()
        serialized = []
        for do in dos:
            serialized_do = {
                "session": True,
                "name": do.text,
                "id": do.id,
            }
            serialized.append(serialized_do)
        progress = Lists.query.filter(Lists.progress).all()
        progress_1 = []
        for progres in progress:
            serialized_do = {
                "session": True,
                "name": progres.text,
                "id": progres.id,
            }
            progress_1.append(serialized_do)
        dones = Lists.query.filter(Lists.done).all()
        done_1 = []
        for done in dones:
            serialized_do = {
                "session": True,
                "name": done.text,
                "id": done.id,
            }
            done_1.append(serialized_do)
        return jsonify({"do": serialized, "progress": progress_1, "done": done_1})
    return render_template('index.html')


@app.route('/api', methods=['POST', "GET"])
def api():
    if request.method == "GET":
        dos = Lists.query.filter(Lists.do).all()
        serialized = []
        for do in dos:
            serialized_do = {
                "name": do.text,
                "id": do.id,
            }
            serialized.append(serialized_do)
        progress = Lists.query.filter(Lists.progress).all()
        progress_1 = []
        for progres in progress:
            serialized_do = {
                "name": progres.text,
                "id": progres.id,
            }
            progress_1.append(serialized_do)
        dones = Lists.query.filter(Lists.done).all()
        done_1 = []
        for done in dones:
            serialized_do = {
                "name": done.text,
                "id": done.id,
            }
            done_1.append(serialized_do)
        return jsonify({"do": serialized, "progress": progress_1, "done": done_1})


@app.route('/delete', methods=['POST', "GET"])
def delete():
    if request.method == "POST":
        name = request.form.get('name')
        filter = Lists.query.filter(Lists.id == name).first()
        db.session.delete(filter)
        db.session.commit()
        dos = Lists.query.filter(Lists.do).all()
        serialized = []
        for do in dos:
            serialized_do = {
                "session": True,
                "name": do.text,
                "id": do.id,
            }
            serialized.append(serialized_do)
        progress = Lists.query.filter(Lists.progress).all()
        progress_1 = []
        for progres in progress:
            serialized_do = {
                "session": True,
                "name": progres.text,
                "id": progres.id,
            }
            progress_1.append(serialized_do)
        dones = Lists.query.filter(Lists.done).all()
        done_1 = []
        for done in dones:
            serialized_do = {
                "session": True,
                "name": done.text,
                "id": done.id,
            }
            done_1.append(serialized_do)
        return jsonify({"do": serialized, "progress": progress_1, "done": done_1})
    return render_template('index.html')


@app.route('/edit', methods=['POST', "GET"])
def edit():
    if request.method == "POST":
        name = request.form.get('name')
        ids = request.form.get('id')
        Lists.query.filter(Lists.id == ids).update({
            "text": name,
        })
        db.session.commit()
        dos = Lists.query.filter(Lists.do).all()
        serialized = []
        for do in dos:
            serialized_do = {
                "session": True,
                "name": do.text,
                "id": do.id,
            }
            serialized.append(serialized_do)
        progress = Lists.query.filter(Lists.progress).all()
        progress_1 = []
        for progres in progress:
            serialized_do = {
                "session": True,
                "name": progres.text,
                "id": progres.id,
            }
            progress_1.append(serialized_do)
        dones = Lists.query.filter(Lists.done).all()
        done_1 = []
        for done in dones:
            serialized_do = {
                "session": True,
                "name": done.text,
                "id": done.id,
            }
            done_1.append(serialized_do)
        return jsonify({"do": serialized, "progress": progress_1, "done": done_1})
    return render_template('index.html')


@app.route('/done', methods=['POST', "GET"])
def done():
    if request.method == "POST":
        data = request.json
        for item in data.get('do', []):
            ids = item.get('text')
            Lists.query.filter(Lists.id == ids).update({
                "do": True,
                "progress": False,
                "done": False,
            })
            db.session.commit()
        for item in data.get('progress', []):
            ids = item.get('text')
            Lists.query.filter(Lists.id == ids).update({
                "do": False,
                "progress": True,
                "done": False,
            })
            db.session.commit()
        for item in data.get('done', []):
            ids = item.get('text')
            Lists.query.filter(Lists.id == ids).update({
                "do": False,
                "progress": False,
                "done": True,
            })
            db.session.commit()
        dos = Lists.query.filter(Lists.do).all()
        serialized = []
        for do in dos:
            serialized_do = {
                "session": True,
                "name": do.text,
                "id": do.id,
            }
            serialized.append(serialized_do)
        progress = Lists.query.filter(Lists.progress).all()
        progress_1 = []
        for progres in progress:
            serialized_do = {
                "session": True,
                "name": progres.text,
                "id": progres.id,
            }
            progress_1.append(serialized_do)
        dones = Lists.query.filter(Lists.done).all()
        done_1 = []
        for done in dones:
            serialized_do = {
                "session": True,
                "name": done.text,
                "id": done.id,
            }
            done_1.append(serialized_do)
        return jsonify({"do": serialized, "progress": progress_1, "done": done_1})
    return render_template('index.html')


if __name__ == '__main__':
    app.run()
