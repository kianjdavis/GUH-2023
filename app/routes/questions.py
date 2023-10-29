import random
from flask import Blueprint, request, jsonify, current_app as app

questions = Blueprint("questions", __name__)

@questions.route("/get-question", methods=["GET"])
def get_question():
    
    try:
        list = set([])
        db = app.mongo['greatunihack']
        collection = db['questions']
        collection_size = collection.count_documents({})
        rand_ques_id = random.randrange(1,collection_size)
        if rand_ques_id in list:
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