import random
from flask import Blueprint, request, jsonify, current_app as app

questions = Blueprint("questions", __name__)

@questions.route("/get-question", methods=["GET"])
def get_question():
    try:
        db = app.mongo['greatunihack']
        collection = db['questions']
        collection_size = collection.count_documents({})
        rand_ques_id = random.randrange(1,collection_size)
        random_question = collection.find_one({"id": rand_ques_id})
        return jsonify({"id": rand_ques_id, "question": random_question["questionBody"], "choice1": random_question["1"], "choice2": random_question["2"], "choice3": random_question["3"], "choice4": random_question["4"]})
    except Exception as e:
        return jsonify(str(e))

@questions.route("/verify", methods=['POST'])
def post_compare():
    try:
        received_data = request.get_json()
        q_id = received_data["questionId"]
        user_guess = received_data["c"]

        db = app.mongo['greatunihack']
        collection = db['questions']
        result = collection.find_one({"id": q_id})

        return jsonify(str(user_guess) == result["answer"])
    except Exception as e:
        return jsonify(str(e))


@questions.route("/connect", methods=['POST'])
def post_compare():
    try:
        received_data = request.get_json()
        username = received_data["username"]
        password = received_data["password"]
        query = {
            "username": username,  # 替换为第一个字段的名称
            "password": password   # 替换为第二个字段的名称
        }
        db = app.mongo['greatunihack']
        collection = db['username']
        user = collection.find(query)
        print(collection)

    except Exception as e:
        return jsonify(str(e))
    
@questions.route("/disconnect", methods=['POST'])
def post_compare():
    try:
        received_data = request.get_json()
        username = received_data["username"]
        password = received_data["password"]
        query = {
            "username": username,  # 替换为第一个字段的名称
            "password": password   # 替换为第二个字段的名称
        }
        db = app.mongo['greatunihack']
        collection = db['username']
        user = collection.find(query)

    except Exception as e:
        return jsonify(str(e))
    
@questions.route("/match", methods=['GET'])
def post_compare():
    try:
        received_data = request.get_json()
        username = received_data["username"]
        password = received_data["password"]
        
        db = app.mongo['greatunihack']
        collection = db['username']
        result = collection.find_one({"id": q_id})

        return jsonify(str(user_guess) == result["answer"])
    except Exception as e:
        return jsonify(str(e))