pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Sraddhavaranasi/AI_IDS_IPS_System.git'
            }
        }
        stage('Set up Python Environment') {
            steps {
                bat '''
                python -m venv venv
                call venv\\Scripts\\activate
                pip install -r requirements.txt
                '''
            }
        }
        stage('Run Backend Server') {
            steps {
                bat '''
                call venv\\Scripts\\activate
                start /B uvicorn main:app --host 0.0.0.0 --port 8000
                '''
            }
        }
    }
}
