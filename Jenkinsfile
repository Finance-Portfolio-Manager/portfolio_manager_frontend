pipeline {
    agent any

    stages {

        stage('Build Docker') {
            steps {
                sh 'docker build -t dev/finportman-app .'
            }
        }

        /* stage('Deploy') { */
        /*     steps { */
        /*         build 'ApexStocks-Compose' */
        /*     } */
        /* } */

    }
}
