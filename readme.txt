Ajouter bootstrap :

    - yarn add bootstrap jquery popper.js

    - angular.json :
        "styles": [
            "src/styles.css",
            "./node_modules/bootstrap/dist/css/bootstrap.min.css"
        ]
        "scripts": [
            "./node_modules/jquery/dist/jquery.slim.min.js",
            "./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
        ]

        (JSON with comments)


ng g c components/accueil


ng serve -o


ng --version


ng build --prod


Update :
ng update @angular/core @angular/cli
https://update.angular.io/


Redirection :
    { path: 'notfound', component: ErreurComponent },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', redirectTo: '/notfound' }
et en production, à la racine, fichier ".htaccess" :
    RewriteEngine On
        RewriteBase /
        RewriteRule ^index.html$ - [L]
        RewriteCond %{REQUEST_FILENAME} !-f
        RewriteCond %{REQUEST_FILENAME} !-d
        RewriteRule . /index.html [L]


Angular material :
https://material.angular.io/