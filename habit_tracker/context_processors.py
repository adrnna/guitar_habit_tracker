import json

def load_text_content(request):
    json_file_path = 'habit_tracker/static/textContent.json'
    with open(json_file_path) as json_file:
        text_content = json.load(json_file)
    
    return {'textContent': text_content}
