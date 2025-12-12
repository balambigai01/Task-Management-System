from flask import Flask, request, jsonify
from flask_cors import CORS

"""
Flask API for Task Classification
---------------------------------

This service exposes a single POST endpoint `/predict` that analyzes a
task description and returns:

1. Priority  -> high / medium / low  
2. Status    -> done / progress / todo  

The classification is performed using simple keyword-based rules.

Example Request:
{
    "description": "Finish the urgent report immediately."
}

Example Response:
{
    "priority": "high",
    "status": "todo"
}
"""

# Create Flask app
app = Flask(__name__)

# Enable Cross-Origin Resource Sharing
CORS(app)

def classify_task(description):
    """
     Classify a task description into priority and status.

     Parameters:
        description (str): Text describing the task.

     Returns:
        tuple: (priority, status)
               priority -> "high", "medium", "low"
               status   -> "done", "progress", "todo"
    """
    description = description.lower()

    # Priority rules
    if "urgent" in description or "immediately" in description or "critical" in description:
        priority = "high"
    elif "soon" in description or "important" in description:
        priority = "medium"
    else:
        priority = "low"

    # Status rules
    if "completed" in description or "finished" in description or "done" in description:
        status = "done"
    elif "working" in description or "progress" in description:
        status = "progress"
    else:
        status = "todo"

    return priority, status

@app.post("/predict")
def predict():
    data = request.json
    description = data.get("description", "")

    priority, status = classify_task(description)

    return jsonify({
        "priority": priority,
        "status": status
    })

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)


