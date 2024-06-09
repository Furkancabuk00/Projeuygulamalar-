from flask import Flask, request, render_template 
import requests

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/turkce')
def turkce():
    return render_template('turkce.html')


@app.route('/ingilizce')
def ingilizce():
    return render_template('ingilizce.html')



@app.route('/define', methods=['POST'])
def define():
    word = request.form['word']
    response = requests.get(f'https://api.dictionaryapi.dev/api/v2/entries/en/{word}')
    if response.status_code == 200:
        definitions = response.json()[0]['meanings'][0]['definitions']
        meaning = definitions[0]['definition']
        return render_template('ingilizce.html', word=word, meaning=meaning)
    else:
        return render_template('ingilizce.html', word=word, meaning="Kelime bulunamadı.")




if __name__ == '__main__':
    app.run(debug=True)
