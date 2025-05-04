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
                sh 'python --version'
                sh 'pip install -r backend/requirements.txt'
            }
        }

        stage('Run Backend Server') {
            steps {
                sh 'uvicorn backend.main:app --host 127.0.0.1 --port 8000 &'
            }
        }
    }
}
