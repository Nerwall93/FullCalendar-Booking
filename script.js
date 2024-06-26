document.addEventListener("DOMContentLoaded", function() {
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    var calendarEl = document.getElementById("calendar");
    var calendar = new FullCalendar.Calendar(calendarEl, { 
        slotLabelFormat: [ //Format TimeLine
            { day: '2-digit', month: 'short' }, 
        ],
        nowIndicator: true, //Affiche le temps actuel
        resourceAreaWidth: 200, //Largeur Resources
        locale: 'fr', //Langue française
        headerToolbar: { //Bouton header
            left: "prev,next today",
            center: "title",
            right: "resourceTimelineWeek,resourceTimelineMonth,dayGridMonth,listWeek"
        },
        buttonText: { //Traduction des textes
            today: 'Aujourd\'hui',
            resourceTimelineWeek: 'Semaine',
            month: 'Mois',
            dayGridMonth: 'Calendrier',
            listWeek: 'Liste',
        },
        initialView: 'resourceTimelineWeek', //Page par defaut
        views: { //Midifier la vue
            resourceTimelineWeek: { 
                type: 'resourceTimelineWeek',
                duration: { days: 15 } //Récurrence de 15 jours
            },

            listWeek: {
                type: 'dayGridWeek',
                duration: { days: 7 } //Récurrence de 7 jours
            },

        },

        slotDuration: { hours: 24 }, //Jour en 24heures
        editable: true, //Drag & Drop
        selectable: true, //Jour clicable
        showNonCurrentDates: false, //Pas afficher les jours qui ne sont pas dans le mois
        resources: [
            { id: '1', building: 'Appartement Paris', title: 'Appartement Paris', eventTextColor: "black",},
            { id: '2', building: 'Appartement Gueliz', title: 'Appartement Gueliz', eventTextColor: "black" },
            { id: '3', building: 'Chalet du Lac', title: 'Chalet du Lac', eventTextColor: "black" },
        ],
        events: [
            //Appartement 1
            {
                title: "Emily Johnson",
                description: "Airbnb",
                start: new Date(y, m, d+2, 11),
                end: new Date(y, m, d+4, 10),
                borderColor: '#003580', // Couleur de la bordure
                allDay: false,
                backgroundColor: '#AACDFF',
                resourceId: 1,
                slotEventOverlap: false
            },
            {
                title: "Emily Johnson",
                description: "Airbnb",
                start: new Date(y, m, d+4, 15),
                end: new Date(y, m, d+10, 8),
                borderColor: '#830000', // Couleur de la bordure
                allDay: false,
                backgroundColor: '#FFCBCD',
                resourceId: 1,
                slotEventOverlap: false
            },
            {
                title: "Emily Johnson",
                description: "Airbnb",
                start: new Date(y, m, d+11, 15),
                end: new Date(y, m, d+20, 11),
                borderColor: '#830000',
                allDay: false,
                backgroundColor: '#FFCBCD',
                resourceId: 1,
                slotEventOverlap: false
            },

            //Appartement 2
            {
                title: "Emily Johnson",
                description: "Airbnb",
                start: new Date(y, m, d-2, 15),
                end: new Date(y, m, d+2, 11),
                borderColor: '#830000',
                allDay: false,
                backgroundColor: '#FFCBCD',
                resourceId: 2,
                slotEventOverlap: false
            },
            {
                title: "Emily Johnson",
                description: "Booking",
                start: new Date(y, m, d+2, 13),
                end: new Date(y, m, d+4, 11),
                borderColor: '#003580',
                allDay: false,
                backgroundColor: '#AACDFF',
                resourceId: 2,
                slotEventOverlap: false
            },
            {
                title: "Emily Johnson",
                description: "Booking",
                start: new Date(y, m, d+4, 15),
                end: new Date(y, m, d+10, 10),
                borderColor: '#003580',
                allDay: false,
                backgroundColor: '#AACDFF',
                resourceId: 2,
                slotEventOverlap: false
            },

            //Appartement 3
            {
                title: "Emily Johnson",
                description: "Direct",
                start: new Date(y, m, d+0, 11),
                end: new Date(y, m, d+3, 8),
                borderColor: '#046C00', // Couleur de la bordure
                allDay: false,
                backgroundColor: '#98E8BA',
                resourceId: 3,
                slotEventOverlap: false
            },
            {
                title: "Emily Johnson",
                description: "Direct",
                start: new Date(y, m, d+3, 12),
                end: new Date(y, m, d+8, 8),
                borderColor: '#046C00', // Couleur de la bordure
                allDay: false,
                backgroundColor: '#98E8BA',
                resourceId: 3,
                slotEventOverlap: false
            },
            {
                title: "Emily Johnson",
                description: "Airbnb",
                start: new Date(y, m, d+10, 15),
                end: new Date(y, m, d+13, 11),
                borderColor: '#830000',
                allDay: false,
                backgroundColor: '#FFCBCD',
                resourceId: 3,
                slotEventOverlap: false
            },
        ],
        eventContent: function (arg) { //Centrer le texte des évènements
            /*if (arg.event.start.getDate() <= arg.event.end.getDate()){
                return {
                    html: '<div class="fc-content">' +
                            '<div class="fc-title">' + 'Check In &emsp;&emsp;&emsp;&emsp;' + arg.event.title + '</div>' +
                        '</div>'
                };
            }else{
                return {
                    html: '<div class="fc-content">' +
                            '<div class="fc-title">' + 'Check Out &emsp;&emsp;&emsp;&emsp;' + arg.event.title + '</div>' +
                        '</div>'
                };
            }*/
            return {
                html: '<div class="fc-content">' +
                              '<div class="fc-title" style="margin-left: 10px; font-weight: lighter;">' + arg.event.title + '</div>' +
                              '<div class="fc-description" style="padding-top: 3px; font-size: 100%; margin-left: 10px;">' + arg.event.extendedProps.description + '</div>' +
                            '</div>'
            };
        },
        
        eventClassNames: 'custom-event-class', //Largeur des events

        /*eventClick: function(info) { //Click sur l'event
            alert('Event: ' + info.event.title);
        },
        
        eventDidMount: function(info) {
            var eventElement = info.el;
            var eventInfo = info.event;
            var resourceInfo = info.resource;
      
            eventElement.addEventListener('mouseenter', function() {
              // Créer un élément de div pour afficher les informations de èl'événement
              var hoverElement = document.createElement('div');
              hoverElement.classList.add('event-hover');
                hoverElement.innerHTML = '<strong>' + eventInfo.title + '</strong><br>' +
                    'Appartement : ' +  '<br>' + 'Tarif : ' + '<br>' + 'Quantité : ' + '<br>';
      
              // Positionner l'élément de hover par rapport à l'événement
              var rect = eventElement.getBoundingClientRect();
              hoverElement.style.top = rect.bottom + 'px';
              hoverElement.style.left = rect.left + 'px';
      
              // Ajouter l'élément de hover à la page
              document.body.appendChild(hoverElement);
      
              // Supprimer l'élément de hover lorsque la souris quitte l'événement
              eventElement.addEventListener('mouseleave', function() {
                hoverElement.remove();
              });
            });
        }*/
    });
    calendar.render();

    // Associer la fonction au clic du bouton
    document.getElementById('toggleResourceWidth').addEventListener('click', function() {
        // Modification de la largeur de resources
        if (calendar.getOption('resourceAreaWidth') === 0) {
            calendar.setOption('resourceAreaWidth', 200); // Rétablir la largeur par défaut
            document.getElementById('toggleResourceWidth').innerText = "Masquer les ressources";
        } else {
            calendar.setOption('resourceAreaWidth', 0); // Réduire la largeur à 0
            document.getElementById('toggleResourceWidth').innerText = "Afficher les ressources";
        }
    });
});
