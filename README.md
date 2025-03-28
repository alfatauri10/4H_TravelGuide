# 4H_TravelGuide


# Software Requirements Specification
for
Roma Eternal Wonders 
 una guida Turistica Web Bilingue
4H Travel Guide
Version 1.0 approved
Prepared by Alfandari Jacopo
company_name
Data ultima modifica: 27/03/2025


# Table of Contents
1. Introduzione	1
1.1 Descrizione generale (Purpose)	1
2. Requisiti Funzionali (RF)	2
2.1 Requisiti Funzionali Globali (di tutte le pagine)	2
2.1.1 RF-0: Switch lingua (IT/EN)	2
2.1.2 RF-1: Link alla HomePage della stessa lingua	2
2.1.3 Stile comune a tutte le pagine	3
2.1.4 RF-2: Header (con navbar) comune a tutte le pagine	3
2.1.5 RF-3: Footer comune a tutte le pagine	3
2.1.6 RF-4: Contenuto comune a tutte le pagine	3
2.1.7 RF-5: Navigazione responsive	4
2.2 Requisiti Funzionali Singole Pagine	5
2.2.1 RF-6: Home pages in lingua (IT/EN)	6
2.2.2 RF-7:  Menù a tendina	7
2.2.3 RF-8: Page monumenti	8
3. Stack tecnologico ⚙️	9
4. Repository GitHub per il VCS (Versioning Control Software)	10
5. TEST SUITE	10
4.1 RF-9 TEST CASES HOMEPAGE	10
4.2 RF-10 TEST CASES PAGE DOCUMENT	10


# Revision History
Name
Date
Reason For Changes
Version
JAlfandari
27/04/2025
First release
1.0












# Introduzione
# Descrizione generale (Purpose)
Il sito è una guida turistica digitale in italiano e inglese che presenta 6 monumenti iconici di Roma:

Piazza del Popolo e Basiliche gemelle 
Altare della Patria 
Ara Pacis 
Pantheon 
Piazza di Spagna 
Fontana di Trevi 


Caratteristiche principali 

✅ Solo consultazione (nessuna interazione complessa)  
🌍 Bilingue (italiano/inglese) con switch tramite bandiere  
🗺️ Mappe integrate (Google Maps) per ogni monumento  
📱 Design responsive (mobile-first)  

Priorità lingua: Impostare l’italiano come lingua predefinita.

Per il momento non sono previste funzionalità di registrazione e autenticazione utente, né altre funzionalità di backend.  Da considerarsi come sviluppi futuri.

















Requisiti Funzionali (RF)
Segue una descrizione dettagliata di tutti i requisiti che dovranno essere rispettati nell’implementazione delle pagine del sito web.
Requisiti Funzionali Globali (di tutte le pagine)
Tutte le pagine web da sviluppare dovranno avere i seguenti requisiti.
RF-0: Switch lingua (IT/EN) 

Ogni pagina dovrà avere un’icona a forma di bandiera (🇮🇹/🇬🇧) per lo switch di lingua (da IT a EN e da EN a IT).

Esempio:
pagina in IT deve avere bandiera 🇬🇧 che rimanda alla pagina in EN
pagina in EN deve avere bandiera 🇮🇹 che rimanda alla pagina in IT

RF-1: Link alla HomePage della stessa lingua 
Ogni pagina dovrà avere un’icona a forma di casa (🏠) che rimanda alla homePage nella stessa lingua

Esempio: 
 pagina in IT → clicco sull’icona homePage 🏠 → homePage in IT









Stile comune a tutte le pagine 
Ogni pagina dovrà avere lo stesso stile. 
Segue un’immagine delle varie sezioni di una pagina web.

RF-2: Header (con navbar) comune a tutte le pagine
Ogni pagina dovrà avere lo stesso stile per l’header.
RF-3: Footer comune a tutte le pagine
Ogni pagina dovrà avere lo stesso stile per il footer.

RF-4: Contenuto comune a tutte le pagine
Ogni pagina dovrà avere lo stesso stile per il contenuto. 

RF-5: Navigazione responsive

 Ogni pagina dovrà adattarsi perfettamente alla dimensione di qualsiasi schermo (mobile, tablet, desktop) garantendo una user-experience ottimale.

























Requisiti Funzionali Singole Pagine

     Le singole pagine web da sviluppare dovranno avere i seguenti requisiti.
RF-6: Home pages in lingua (IT/EN) 
La home page di default dovrà essere quella in IT.
 La home page dovrà contenere una galleria di sei immagini scorrevoli visualizzabili a gruppi di tre.
Le immagini della galleria dovranno:
rappresentare i sei monumenti 
al passaggio del mouse sulle immagini, si dovrà visualizzare testo descrittivo
essere cliccabili: al click su ognuna di queste immagini il sito dovrà aprire (nella stessa scheda) la pagina corrispondente al monumento nella lingua della home page in cui ci si trova
La home page dovrà avere un’icona a forma di bandiera (🇮🇹/🇬🇧) per lo switch di lingua (da IT a EN e da EN a IT).
Dovrà rispettare gli stili comuni. (RF-2, RF-3, RF-4)

RF-7: 	Menù a tendina 


Cliccando sulle tre linee situate in alto a destra, si aprirà un menu a tendina, con lo sfondo che passerà in secondo piano, diventando oscurato rispetto al menu appena visualizzato. Il menu conterrà i seguenti elementi:
	LOGO; COMPANY_NAME
     guida turistica web bilingue

Home Page.
Chi siamo.  
—-----------------------------------------------------
Contattaci.
Un'icona della mail accompagnata dall'indirizzo email (da definire).
—------------------------------------------------------
Inoltre, saranno presenti tre icone dei seguenti social network: Facebook, Instagram e YouTube.



RF-8: Page monumenti
Dovranno avere una sezione testo in cui inserire
History and construction of the monument
How it is used today
Recent facts (reconstructions, damages, films where it appeared, advertisements, ecc...)                                   
Legends and fun facts
Dovranno contenere galleria immagini
Dovranno contenere mappa Google interattiva
Dovrà avere un’icona a forma di bandiera (🇮🇹/🇬🇧) per lo switch di lingua (RF-0).
Dovrà contenere icona Home che rimanda alla home page nella stessa lingua (RF-1)







Stack tecnologico ⚙️
HTML5
CSS
JavaScript
Google Maps Embed
GitHub
AMBIENTI DI SVILUPPO
INTELLIJ COME IDE
cross-browser (chrome, safari, firefox, ecc…)
Repository GitHub per il VCS (Versioning Control Software)
A questo LINK c’è la repository del progetto.
TEST SUITE
4.1 RF-9 TEST CASES HOMEPAGE
TODO LISTA CASI DI TEST
4.2 RF-10 TEST CASES PAGE DOCUMENT

TODO LISTA CASI DI TEST
6. RIFERIMENTI UTILI
https://www.deborasilvestri.it/







