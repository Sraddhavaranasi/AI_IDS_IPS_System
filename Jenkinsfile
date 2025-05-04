pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
               git branch: 'main', url: 'https://github.com/Sraddhavaranasi/AI_IDS_IPS_System.git'
            }
        }
       stage('Set up Python Environment') {
            steps {
                bat '''
                C:\\Users\\sradd\\AppData\\Local\\Programs\\Python\\Python311\\python.exe -m venv venv
                call venv\\Scripts\\activate
                C:\\Users\\sradd\\AppData\\Local\\Programs\\Python\\Python311\\python.exe -m pip install --upgrade pip
                C:\\Users\\sradd\\AppData\\Local\\Programs\\Python\\Python311\\python.exe -m pip install -r requirements.txt
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
