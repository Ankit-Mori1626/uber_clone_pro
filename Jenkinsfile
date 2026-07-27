pipeline {
    agent any

    environment {
        DOCKERHUB_USER = 'ankitmori1626'
        // Use the ID you defined in Jenkins Credentials, NOT the raw secret string
        DOCKER_CREDS   = credentials('docker-cred') 
    }

    stages {
        stage('Build & Push Backend Image') {
            steps {
                script {
                    // Fixed image tag name to match the push command
                    sh "docker build -t ${DOCKERHUB_USER}/uber-backend:latest ./Backend"
                    
                    // Log into Docker Hub securely using environment variables populated by Jenkins
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
                    sh "kubectl apply -f k8s/mongodb/pvc.yml"
                    sh "kubectl apply -f k8s/frontend/*.yml"
                    sh "kubectl apply -f k8s/backend/*.yml"
                    sh "kubectl apply -f k8s/mongodb/mongodb-deployment.yml"
                }
            }
        }
    }
}
