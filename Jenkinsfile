pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'ankitmori1626'
        DOCKER_CREDS = credentials('dckr_pat_HRW7x16stl9wsQZ26aW_nHQIWPk')
    }
    stages {
        stage('Checoout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Ankit-Mori1626/uber_clone_pro.git'
            }
        }
        stage('Build & Push Backend Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_USER}/uber-backend-latest ./backend"
                    sh "echo \$DOCKER_CREDS_PSW | docker login -u \$DOCKER_CREDS_USR --password-stdin"
                    sh "docker push ${DOCKERHUB_USER}/uber-backend:latest"
                }
            }
        }
        stage('Build & Push Frontend Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKERHUB_USER}/uber-frontend:latest ./frontend"
                    sh "docker push ${DOCKERHUB_USER}/uber-frontend:latest"
                }
            }
        }
        stage('Deploy to K8s') {
            steps {
                script {
                    sh "kubectl apply -f k8s/pvc.yml"
                    sh "kubectl apply -f k8s/"
                }
            }
        }
    }
    post {
        always {
            sh "docker logouot"
        }
    }
}
    
    
