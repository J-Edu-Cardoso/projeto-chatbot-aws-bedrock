from flask import Flask, request, jsonify
import pandas as pd
import os

# Carregar dados dos CSVs
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
alunos_csv = os.path.join(BASE_DIR, 'alunos.csv')
cursos_csv = os.path.join(BASE_DIR, 'cursos.csv')

alunos_df = pd.read_csv(alunos_csv) if os.path.exists(alunos_csv) else pd.DataFrame()
cursos_df = pd.read_csv(cursos_csv) if os.path.exists(cursos_csv) else pd.DataFrame()

app = Flask(__name__)

@app.route('/api/cursos', methods=['GET'])
def get_cursos():
    cursos = cursos_df.to_dict(orient='records') if not cursos_df.empty else []
    return jsonify({'cursos': cursos})

@app.route('/api/progresso', methods=['GET'])
def get_progresso():
    # Simulação: progresso dos cursos para o estudante exemplo
    progresso = [
        {'curso': 'DevOps com AWS', 'percentual': 80, 'nota': 'A'},
        {'curso': 'Banco de Dados para Iniciantes', 'percentual': 55, 'nota': 'B'}
    ]
    return jsonify({'progresso': progresso})

@app.route('/api/mensagens', methods=['GET', 'POST'])
def mensagens():
    if request.method == 'GET':
        msgs = [
            {'autor': 'professor', 'texto': 'Parabéns pelo seu progresso!'},
            {'autor': 'aluno', 'texto': 'Obrigado, professor!'}
        ]
        return jsonify({'mensagens': msgs})
    else:
        data = request.json
        # Aqui você pode salvar a mensagem recebida
        return jsonify({'status': 'ok', 'mensagem': data.get('texto', '')})

@app.route('/api/perfil', methods=['GET'])
def perfil():
    perfil = {
        'nome': 'Estudante Exemplo',
        'email': 'estudante@exemplo.com',
        'regiao': 'Sudeste',
        'cursos_concluidos': 2,
        'certificados': True
    }
    return jsonify(perfil)

@app.route('/api/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get('mensagem', '')
    # Aqui você pode integrar com o Bedrock/Claude v2 ou usar lógica local
    resposta = responder_chatbot(user_message)
    return jsonify({'resposta': resposta})

def responder_chatbot(user_input):
    # Exemplo simples, pode ser trocado por integração real
    user_input = user_input.lower()
    if 'curso' in user_input:
        cursos = cursos_df['course_name'].tolist() if not cursos_df.empty else ['DevOps com AWS', 'Banco de Dados para Iniciantes']
        return 'Cursos disponíveis: ' + ', '.join(cursos)
    if 'progresso' in user_input:
        return 'Seu progresso está ótimo! Continue assim.'
    if 'certificado' in user_input:
        return 'Seus certificados estão disponíveis para download.'
    return 'Sou um assistente virtual! Em breve responderei de verdade :)'

if __name__ == '__main__':
    app.run(debug=True, port=5000)
