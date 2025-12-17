// Etape 1: Recupéré fichier JSON
// par declaré comme une variable
const JSON_LINK = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/escape-game.json";
// Etape 2: Récupérer les données de dans
// utilise fetch


fetch(JSON_LINK)
    .then(response => response.json())
    .then(data => {
        // Etape 3: Liste nos element HTML
        // By creating variables
        // head
        let Header = document.getElementById("backgroundImage");
        // avantages
        let ADvantages = document.getElementById("avantages");
        // produits
        let Activities = document.getElementById("events");
        // services
        let Services = document.getElementById("services");
        // Témoinages
        let Avis = document.getElementById("witness");
        //Etape 4: Affiche le succes de récuperation 
        console.log("Données récupérer avec succées",data);
        // Etape 5: Div avec une H1, p, et 2 button dans le header
            // Pour le div
            const newDiv = document.createElement("div");
            newDiv.classList.add("banner-title")
            // Nos element dans le div
            // title
            const insertH1 = document.createElement("h1");
            insertH1.textContent = data.nomCommercial;
            // paragraphe
            const insertp = document.createElement("p");
            insertp.textContent = data.phraseAccroche;
            // div pour les button
            const divButtons = document.createElement("div");
            divButtons.classList.add("buttons");
            // button buy
            const buyButton = document.createElement("a");
            buyButton.textContent = data.texteAppelAction;
            // button explore
            // const exploreButton = document.createElement("a");
            // exploreButton.textContent = "Explorer";
            // Etape 5: On inject les element using appendchild
            divButtons.appendChild(buyButton);
            // divButtons.appendChild(exploreButton);

            newDiv.appendChild(insertH1);
            newDiv.appendChild(insertp);
            newDiv.appendChild(divButtons);
            // Etape 6: On l'affiche sur site
            Header.appendChild(newDiv);
            Header.appendChild(divButtons);

            // Partie Avantages
            //  Etape 7:Créé le partie avantages

            //  Créé un container 
            const containerAvantages = document.createElement("div");
            // Add a class
            containerAvantages.classList.add("container-avantages");

            // div pour le strong, h2, p
            const divtexts = document.createElement("div");
           

            let avantagesTitle = document.createElement("h2");
            avantagesTitle.textContent = "Nos Advantages";

            let advantagesParagraph = document.createElement("p");
            advantagesParagraph.textContent = "Qualité sans égale dans chaque détail";
            
            
            divtexts.appendChild(avantagesTitle);
            divtexts.appendChild(advantagesParagraph);
            containerAvantages.appendChild(divtexts);

            // Un div pour les cartes
            const cardDiv = document.createElement("div");
            cardDiv.classList.add("container-cards");

            // Loop pour les cartes
            const imojis = ["👽","👻","🎮"];
            const pees = ["Plongez dans un univers où chaque détail compte et où l’esprit est constamment mis à l’épreuve. Nos énigmes captivantes sont conçues pour stimuler la réflexion, renforcer l’esprit d’équipe et offrir des expériences immersives inoubliables. ", 
                "Nos maîtres du jeu passionnés sont au cœur de votre aventure. Attentifs, dynamiques et toujours à l’écoute, ils vous accompagnent à chaque étape pour vous immerger pleinement dans l’expérience.", 
                "Chaque décor a été pensé dans les moindres détails pour vous plonger dans une ambiance unique et réaliste. Jeux de lumière, effets sonores et scénographies soignées s’unissent pour créer une immersion totale."];
            data.avantagesClients.forEach((element, index) => {
                const eachdiv = document.createElement("div");
                let paras = document.createElement("p");
                let cards = document.createElement("h3"); 
                let cardsTitle = document.createElement("span");
                cardsTitle.textContent = imojis[index];
                paras.textContent = pees[index];
                cards.textContent = element;
                eachdiv.appendChild(cardsTitle);
                eachdiv.appendChild(cards);
                eachdiv.appendChild(paras);
                cardDiv.appendChild(eachdiv);
                

            });
            // Affichier le
            ADvantages.appendChild(containerAvantages);
            ADvantages.appendChild(cardDiv);


            // Etape 8: Créé le partie Events (Activité)
            const pourEvents = document.createElement("div");
            pourEvents.classList.add("card-container");
            // Use for each pour les event cards
            data.activites.forEach(elementDeux => {
                const cardAct = document.createElement("div");
                // créé un variable pour event titre
                let nomActivite = document.createElement("h4");
                nomActivite.textContent = elementDeux.nom;
                // description
                let descActivite = document.createElement("p");
                descActivite.textContent = elementDeux.description;
                // images
                let images = document.createElement("img");
                images.classList.add("eventImages")
                images.src = elementDeux["image-url"];
                // Affichier

                cardAct.appendChild(images);
                cardAct.appendChild(nomActivite);
                cardAct.appendChild(descActivite);
                pourEvents.appendChild(cardAct);
                
            });
            Activities.appendChild(pourEvents);
            // test
            console.log(Activities);

            // Etape 9: Créé le partie Témoinage (Avis)
            const pourAvis = document.createElement("div")
            pourAvis.classList.add("reviews-container")

            data.temoignages.forEach(elementTrois => {
                const reviews = document.createElement("div")
                // prénom
                let names = document.createElement("h4");
                names.textContent = elementTrois.prenom;
                // Experience
                let experiences = document.createElement("strong");
                experiences.textContent = elementTrois.typeExperience;
                // Avis
                let comment = document.createElement("p");
                comment.textContent = elementTrois.commentaire;
                // Grade
                let review = document.createElement("span")
                review.textContent = "Review: " + elementTrois.note + "/5";

                // Affiche
                reviews.appendChild(names);
                reviews.appendChild(experiences);
                reviews.appendChild(comment);
                reviews.appendChild(review);
                pourAvis.appendChild(reviews);
            });
            Avis.appendChild(pourAvis);

        

    })

