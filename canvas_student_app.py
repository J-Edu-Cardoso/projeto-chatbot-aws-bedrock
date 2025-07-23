import streamlit as st
import pandas as pd

st.set_page_config(page_title="Canvas Student - Escola Tecnologia para Todos", page_icon="🎓", layout="wide")

# Carregar dados
try:
    alunos_df = pd.read_csv("alunos.csv")
    cursos_df = pd.read_csv("cursos.csv")
except Exception as e:
    st.error(f"Erro ao carregar os dados: {e}")
    st.stop()

# Sidebar - Menu de navegação
st.sidebar.title("Menu")
menu = st.sidebar.radio("Navegue pelo portal:", [
    "Página Inicial",
    "Meus Cursos",
    "Notas & Progresso",
    "Mensagens",
    "Perfil"
])

# Página Inicial
if menu == "Página Inicial":
    st.title("🎓 Bem-vindo(a) ao Portal do Estudante!")
    st.markdown("""
    Aqui você encontra todas as informações sobre seus cursos, progresso e comunicação com a escola.
    """)
    st.image("https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=900&q=80", use_column_width=True)
    st.subheader("Cursos disponíveis:")
    st.dataframe(cursos_df)

# Meus Cursos
elif menu == "Meus Cursos":
    st.title("📚 Meus Cursos Matriculados")
    # Simulação: todos os cursos disponíveis
    st.dataframe(cursos_df)
    st.info("Clique em um curso para acessar o conteúdo (simulação)")
    for idx, row in cursos_df.iterrows():
        with st.expander(f"{row['course_name']} ({row['level']})"):
            st.write(f"Duração: {row['duration_weeks']} semanas")
            st.write("Conteúdo programático: ... (simulação)")
            st.button(f"Acessar {row['course_name']}")

# Notas & Progresso
elif menu == "Notas & Progresso":
    st.title("📈 Notas & Progresso")
    # Simulação de progresso
    progresso = pd.DataFrame({
        'Curso': cursos_df['course_name'],
        'Progresso (%)': [80, 55, 100][:len(cursos_df)],
        'Nota Final': ["A", "B", "A"][:len(cursos_df)]
    })
    st.dataframe(progresso)

# Mensagens
elif menu == "Mensagens":
    st.title("💬 Mensagens")
    st.write("Aqui você pode visualizar mensagens da escola e enviar dúvidas para os professores.")
    st.success("Mensagem de exemplo: Parabéns pelo seu progresso!")
    st.text_area("Escreva sua mensagem", "Olá, tenho uma dúvida sobre o curso...")
    st.button("Enviar mensagem")

# Perfil
elif menu == "Perfil":
    st.title("👤 Meu Perfil")
    st.write("Nome: Estudante Exemplo")
    st.write("E-mail: estudante@exemplo.com")
    st.write("Região: Sudeste")
    st.write("Cursos concluídos: 2")
    st.write("Certificados: Disponíveis para download")
    st.button("Baixar Certificados")
