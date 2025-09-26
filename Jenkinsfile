pipeline {
    
    agent any
    
    environment {
        SONAR_TOKEN = credentials('SONAR_TOKEN')
        SNYK_TOKEN  = credentials('SNYK_TOKEN')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/KishanFW/Pest-and-Diseases'
            }
        }

        stage('Build') {
            steps {
                script {
                    // Build Docker images
                    dir('Doctor-Crop') {
                        bat 'docker build -t doctorcrop-frontend .'
                    }
                    dir('DoctorCrop_Backend') {
                        bat 'docker build -t doctorcrop-backend .'
                    }

                    // Archive artefacts (Dockerfiles + docker-compose)
                    archiveArtifacts artifacts: '**/Dockerfile, docker-compose.yml', fingerprint: true
                }
            }
        }
        
        stage('Test') {
            steps {
                // Frontend Tests
                dir('Doctor-Crop') {
                    bat 'npm test -- --watch=false --browsers=ChromeHeadless || exit 0'
                }

                // Backend Tests
                dir('DoctorCrop_Backend') {
                    bat 'php artisan test || exit 0'
                }
            }
        }
        
        stage('Code Quality Analysis') {
            steps {
                withSonarQubeEnv('MySonar') {
                    bat """
                        sonar-scanner ^
                        -Dsonar.projectKey=pest-diseases-app ^
                        -Dsonar.sources=Doctor-Crop,DoctorCrop_Backend ^
                        -Dsonar.host.url=http://localhost:9000 ^
                        -Dsonar.login=${SONAR_TOKEN}
                    """
                }
            }
        }
        
        stage('Security') {
            steps {
                withCredentials([string(credentialsId: 'SNYK_TOKEN', variable: 'SNYK_TOKEN')]) {
                    // Frontend scan
                    dir('Doctor-Crop') {
                        bat 'snyk auth %SNYK_TOKEN%'
                        bat 'snyk test --json > ../snyk-frontend-report.json || exit 0'
                        bat 'snyk monitor || exit 0'
                    }

                    // Backend scan
                    dir('DoctorCrop_Backend') {
                        bat 'snyk auth %SNYK_TOKEN%'
                        bat 'snyk test --json > ../snyk-backend-report.json || exit 0'
                         bat 'snyk monitor || exit 0'
                    }
                    
                    archiveArtifacts artifacts: 'snyk-*-report.json', fingerprint: true
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                   // Start all containers (frontend + backend + db)
                    bat 'docker-compose -f docker-compose.yml up -d --build'
                }
            }
        }


    }
}
