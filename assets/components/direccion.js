class DireccionMapa extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.map = null;
        this.marker = null;
        this.mapInitialized = false;

        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css">
            <link rel="stylesheet" href="/assets/styles/app.css">
            
            <div class="cardFormulario scrollable-form">
                <h3>Direcciones</h3>
                <!-- Formulario -->
                <div class="form-group">
                    <div class="input-group half-width">
                        <select name="" id="">
                            <option value="0">Seleccione el País</option>
                            <option value="1">Colombia</option>
                        </select>
                    </div>
                    <div class="input-group half-width">
                        <select name="" id="">
                            <option value="0">Seleccione el Departamento</option>
                            <option value="1">Cundinamarca</option>
                        </select>
                    </div>
                    <div class="input-group half-width">
                        <select name="" id="">
                            <option value="0">Seleccione la Ciudad</option>
                            <option value="1">Bogotá</option>
                        </select>
                    </div>
                    <div class="input-group half-width">
                        <input type="text" placeholder="Barrio">
                        <label for="">Barrio</label>
                    </div>
                                    
                    <div class="input-group half-width">
                        <input type="text" placeholder="Dirección">
                        <label for="">Dirección</label>
                    </div>
                    <div class="input-group half-width">
                        <input type="text" placeholder="Código Postal">
                        <label for="">Código Postal</label>
                    </div>
                    <div class="input-group full-width">
                        <input type="text" placeholder="Información Adicional">
                        <label for="">Información Adicional</label>
                    </div>
                    
                    <div class="input-group full-width">
                        
                        <label for="">Ubicación Mapa</label>
                        <div id="map"></div>

                        <!-- Campos ocultos para almacenar la latitud y longitud seleccionadas -->
                        <input type="hidden" id="latitud" name="latitud">
                        <input type="hidden" id="longitud" name="longitud">
                    </div> 
                </div>
                
            </div>
                
        `;
    }

    connectedCallback() {
        this.loadLeaflet(); // Llama a loadLeaflet al conectar el componente
    }
    
    disconnectedCallback() {
        if (this.map) {
            this.map.off(); // Desvincular todos los eventos
            this.map.remove(); // Eliminar el mapa
            this.map = null; // Limpiar la referencia del mapa
        }
    }
    
    loadLeaflet() {
        if (!window.L) {
            const leafletScript = document.createElement('script');
            leafletScript.src = "https://unpkg.com/leaflet@1.7.1/dist/leaflet.js";
            leafletScript.onload = () => {
                console.log("Leaflet script si se ejecuta");
                this.initMap();
            };
            document.head.appendChild(leafletScript);
        } else {
            this.initMap();
        }
    }

    initMap() {
        if (this.mapInitialized) return;

        const mapContainer = this.shadowRoot.querySelector('#map');
        this.map = L.map(mapContainer).setView([4.60971, -74.08175], 13); // Bogotá
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        // Añadir el marcador
        this.marker = L.marker([4.60971, -74.08175], { draggable: true }).addTo(this.map);

        // Evento para actualizar latitud y longitud
        this.marker.on('dragend', (event) => {
            const position = event.target.getLatLng();
            this.shadowRoot.querySelector('#latitud').value = position.lat;
            this.shadowRoot.querySelector('#longitud').value = position.lng;
        });

        // Ajustar el tamaño del mapa
        setTimeout(() => {
            this.map.invalidateSize();
        }, 200);

        this.mapInitialized = true;
    }

    // guardarDireccion() {
    //     const latitud = this.shadowRoot.querySelector('#latitud').value;
    //     const longitud = this.shadowRoot.querySelector('#longitud').value;

    //     fetch('/guardar_direccion', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ latitud: latitud, longitud: longitud })
    //     })
    //     .then(response => response.json())
    //     .then(data => console.log("Datos guardados con éxito: ", data))
    //     .catch(error => console.error("Error al guardar la dirección: ", error));
    // }
}

customElements.define('direccion-mapa', DireccionMapa);
