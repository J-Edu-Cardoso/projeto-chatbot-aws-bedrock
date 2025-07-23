# 🤖 Projeto Chatbot com AWS Bedrock

Este projeto é um **chatbot inteligente** desenvolvido com **Python**, **Streamlit** e a **Amazon Bedrock**. Ele foi criado como apoio ao **Projeto Final** do curso da **Escola da Nuvem - AWS re/Start**, voltado para a capacitação em **Inteligência Artificial e Python**.

## 📚 Objetivo

Oferecer um assistente virtual que possa responder dúvidas sobre:

- Cursos gratuitos oferecidos
- Detalhes sobre carga horária e nível
- Regiões dos alunos
- Empregabilidade após os cursos
- Certificação e inscrições

O chatbot responde utilizando uma combinação de **regras personalizadas** e chamadas à API da **Amazon Bedrock (Claude v2)**, quando necessário.

---

## 🔧 Tecnologias Utilizadas

- [Python 3.x](https://www.python.org/)
- [Streamlit](https://streamlit.io/)
- [Amazon Bedrock (Claude v2)](https://aws.amazon.com/bedrock/)
- [Pandas](https://pandas.pydata.org/)
- [Boto3](https://boto3.amazonaws.com/v1/documentation/api/latest/index.html)

---
## ⚠️ Avisos antes de começar

- Verifique periodicamente o [AWS Billing Dashboard](https://console.aws.amazon.com/billing/home) para garantir que você não está gerando custos inesperados.
- Remova os recursos ao final do laboratório.
- **Nunca compartilhe prints com IDs de conta, IPs privados ou informações sensíveis.**

---
## ✅ Pré-requisitos

- Conta na AWS com acesso à criação de recursos IAM,EC2,S3,VPC
- Acesso via navegador ao Console da AWS
- Powershell | Git Bash (Windows/macOS/Linux) instalado
- Conhecimento básico de terminal/linha de comando
---

## ☁️ Configuração da AWS para usar o Bedrock

Antes de executar o chatbot, você precisa configurar o acesso à AWS corretamente. Siga os passos abaixo com atenção:

### 1. Criar uma Conta na AWS

Se ainda não tiver uma conta, acesse [aws.amazon.com](https://aws.amazon.com/) e clique em **"Criar uma conta da AWS"**.

---

### 2. Criar um Usuário IAM com Permissão para o Amazon Bedrock

1. Acesse o [Console IAM](https://console.aws.amazon.com/iam/home).
2. Vá até **"Usuários" > "Adicionar usuário"**.
3. Defina um nome (ex: `usuario-bedrock`) e selecione **Acesso programático**.
4. Na etapa de **permissões**, escolha a opção **"Anexar políticas diretamente"**.
5. Clique em **"Criar política"** e cole o seguinte JSON:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "bedrock:InvokeModel",
        "bedrock:InvokeModelWithResponseStream"
      ],
      "Resource": "*"
    }
  ]
}
```
Dê um nome para a política, como: `BedrockRuntime`

Volte para a criação do usuário e selecione essa política criada.

Finalize e salve suas chaves de acesso (Access Key e Secret Key).

✅ Como gerar sua Access Key e Secret Key

No menu lateral, clique em "Usuários"

Selecione o usuário que você criou 

Vá até a aba "Credenciais de segurança"

Na seção "Chaves de acesso", clique em "Criar chave de acesso"

Confirme e clique em "Mostrar chave de acesso"

Copie e salve imediatamente:

`Access key ID`

`Secret access key`

⚠️ Essas credenciais só aparecerão uma vez!
---

## 💻 Como instalar o AWS CLI

O AWS CLI (Command Line Interface) é uma ferramenta essencial para interagir com os serviços da AWS via terminal.

### 📥 Instalação por sistema operacional:

---

### 🪟 Windows

1. Baixe o instalador diretamente:
   👉 [Download AWS CLI para Windows](https://awscli.amazonaws.com/AWSCLIV2.msi)

2. Execute o instalador e siga os passos padrão (Next, Next... Finish).

3. Após a instalação, abra o **Prompt de Comando (CMD)** ou **PowerShell** e digite:

```bash
aws --version
```

Você verá algo como

````
aws-cli/2.x.x Python/3.x.x Windows/10 botocore/x.x.x

````

🍎 macOS
Abra o terminal e execute
```
curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
sudo installer -pkg AWSCLIV2.pkg -target /
```
Verifique se foi instalado corretamente

```
aws --version

```

🐧 Linux (Debian/Ubuntu)
Execute os comandos abaixo no terminal

```
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install

```

Verifique a instalação
```
aws --version

```

Após a instalação
Configure suas credenciais com
```
aws configure

```
Você será solicitado a inserir

`AWS Access Key ID`

`AWS Secret Access Key`

`Default region name: us-east-1`

Default output format: (pressione Enter para deixar em branco)

---

## Crie e ative um ambiente virtual
```
python -m venv .venv
source .venv/bin/activate  # Linux/Mac
.venv\Scripts\activate     # Windows

```
## Instale as dependências
```
pip install -r requirements.txt

```

##  Execute o app
```
streamlit run app.py

````
## Objetivo do Projeto

O objetivo deste repositório é compartilhar o conhecimento adquirido durante as aulas, com foco no desenvolvimento de habilidades em:

- **Fundamentos de Inteligência Artificial**  
- **Computação em Nuvem (AWS)**  
- **Boas Práticas de Desenvolvimento de Software**  
- **Trabalhos práticos com projetos colaborativos**

 Os projetos serão realizados com base em **metodologias ágeis**, organizando os alunos em **equipes (squads)**. Cada grupo terá um **tema específico de projeto** e realizará entregas por meio de **sprints**, promovendo o trabalho em equipe, comunicação efetiva e desenvolvimento iterativo e incremental. 
, o curso oferece uma introdução ao uso da **AWS** para a construção de soluções baseadas em **Cloud Computing** e **IA**.

AWS e Escola da Nuvem

![image - 2025-05-16T110140 115](https://github.com/user-attachments/assets/4e3beceb-67fd-4d0b-8667-6a58f1e8cdfe)


---

## 📍 Sobre o Desenvolvedor

**José Eduardo Cardoso**  
📧 Email: dcardprint@gmail.com  
💼 LinkedIn: [José Eduardo Cardoso - Developer](https://www.linkedin.com/in/jos%C3%A9-eduardo-cardoso-developer/)  
📍 Governador Valadares - MG  
📅 Julho de 2025  

---

## 📞 Contato

Se você tiver dúvidas ou sugestões, sinta-se à vontade para entrar em contato comigo através dos canais mencionados acima.

Este repositório faz parte de um projeto **educacional em tecnologia**, promovido pela **Escola da Nuvem** com apoio da **AWS**. Nosso objetivo é formar talentos preparados para os desafios do mercado digital, com base em práticas modernas de desenvolvimento, **metodologias ágeis**, e **computação em nuvem**.
