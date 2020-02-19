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

ng serve -o

ng --version

ng build --prod

Update :
ng update @angular/core @angular/cli

Redirection :
    { path: 'notfound', component: ErreurComponent },
    { path: '', redirectTo: 'accueil', pathMatch: 'full' },
    { path: '**', redirectTo: '/notfound' }