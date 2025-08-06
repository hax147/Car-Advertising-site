pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                echo '📥 Cloning GitHub repository...'
                // No command needed here; Jenkins clones the repo automatically
            }
        }

        stage('Build Docker Image') {
            steps {
                echo '🐳 Building Docker image...'
                sh 'docker build -t car-ad-site .'
            }
        }

        stage('Stop and Remove Old Container') {
            steps {
                echo '🧹 Cleaning up old container...'
                sh '''
                docker stop car-ad-container || true
                docker rm car-ad-container || true
                '''
            }
        }

        stage('Run New Container') {
            steps {
                echo '🚀 Running updated container...'
                sh 'docker run -d -p 8080:80 --name car-ad-container car-ad-site'
            }
        }
    }
}
