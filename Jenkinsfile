pipeline {
    agent any

    /* environment { */
    /*     REACT_APP_API_URL = credentials('REACT_APP_API_URL') */
    /* } */

    stages {
        /* stage('Build React') { */
        /*     steps { */
        /*         sh 'REACT_APP_API_URL=${REACT_APP_API_URL} npm run build' */
        /*     } */
        /* } */

        stage('Build Docker') {
            steps {
                sh 'docker build -t dev/finportman-app .'
            }
        }

        stage('Deploy') {
            steps {
                build 'ApexStocks-Compose'
            }
        }
    }
}
