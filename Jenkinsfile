pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo '📥 Cloning GitHub repository...'
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh 'docker build -t car-ad-site .'
            }
        }

        stage('Stop Old Container') {
            steps {
                echo '🧹 Stopping old container if exists...'
                sh '''
                docker stop car-ad-container || true
                docker rm car-ad-container || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                echo '🚀 Running new container...'
                sh 'docker run -d -p 8080:80 --name car-ad-container car-ad-site'
            }
        }
    }
}
