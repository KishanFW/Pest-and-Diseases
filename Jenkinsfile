pipeline {
    agent any

    tools {
        nodejs "NodeJS"   // configure NodeJS in Jenkins global tools
    }

    environment {
        GIT_REPO = 'https://github.com/KishanFW/Pest-and-Diseases'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: "${GIT_REPO}"
            }
        }

        stage('Build Frontend') {
            steps {
                dir('Doctor-Crop') {
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Backend') {
            steps {
                dir('DoctorCrop_Backend') {
                    sh 'composer install'
                    sh 'php artisan config:cache'
                }
            }
        }
    }
}
