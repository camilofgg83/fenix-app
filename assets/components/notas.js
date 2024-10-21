document.addEventListener('DOMContentLoaded', () => {
    class NotasAdjuntas extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <style>
                @import '/assets/styles/app.css'; /* Importa tus estilos globales si es necesario */
            </style>
            <div class="contenedorPrincipal">
                <div class="cardFormulario">
                    <h2 class="tittleCard">Notas</h2>
                    <div class="form-group">
                        <div class="input-group full-width">
                            <textarea placeholder="Ingresa la Nueva Nota" rows="2" required></textarea>
                            <label for="">Nueva Nota</label>
                        </div>
                        <button id="buttonAttachment" disabled="disabled">Guardar</button>
                    </div>
                    <h2 class="h2TimeLine">Actividad Reciente</h2>
                    <ul>
                        <li class="timeLineItem">
                            <div class="drafTimeLine">
                                <div class="circleIconTimeLine">
                                    <span class="material-symbols-outlined itemAttachment">
                                        note_alt
                                    </span>
                                </div>
                                <div class="lineTimeLine">
                            
                                </div>
                            </div>
                            <div class="cardTimeLine">
                                <div class="inforCardTimeLine">
                                    
                                    <span>Prueba de una nota para dimensionar el ancho de la misma para que no se dañee el diseño del card</span>
                                    <div class="userTimeLine">
                                        <div class="photoUser">
                                            <img src="" alt="User">
                                        </div>
                                        <span>Actividad por NombreUsuario</span>
                                    </div>
                                </div>
                                <div class="activitiesTimeLine">
                                    <span class="timeAgo">Hace 3 horas</span>
                                    <span class="material-symbols-outlined iconTimeLine">
                                        Delete
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="timeLineItem">
                            <div class="drafTimeLine">
                                <div class="circleIconTimeLine">
                                    <span class="material-symbols-outlined itemAttachment">
                                        note_alt
                                    </span>
                                </div>
                                <div class="lineTimeLine">
                            
                                </div>
                            </div>
                            <div class="cardTimeLine">
                                <div class="inforCardTimeLine">
                                    
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsam sunt nihil distinctio, animi tenetur nostrum excepturi nesciunt aut suscipit vero dolorem commodi incidunt magni voluptates laboriosam neque perspiciatis temporibus!</span>
                                    <div class="userTimeLine">
                                        <div class="photoUser">
                                            <img src="" alt="User">
                                        </div>
                                        <span>Actividad por NombreUsuario</span>
                                    </div>
                                </div>
                                <div class="activitiesTimeLine">
                                    <span class="timeAgo">Ayer</span>
                                    <span class="material-symbols-outlined iconTimeLine">
                                        Delete
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="timeLineItem">
                            <div class="drafTimeLine">
                                <div class="circleIconTimeLine">
                                    <span class="material-symbols-outlined itemAttachment">
                                        note_alt
                                    </span>
                                </div>
                                <div class="lineTimeLine">
                            
                                </div>
                            </div>
                            <div class="cardTimeLine">
                                <div class="inforCardTimeLine">
                                    
                                    <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit ipsam sunt nihil distinctio, animi tenetur nostrum excepturi nesciunt aut suscipit vero dolorem commodi incidunt magni voluptates laboriosam neque perspiciatis temporibus!</span>
                                    <div class="userTimeLine">
                                        <div class="photoUser">
                                            <img src="" alt="User">
                                        </div>
                                        <span>Actividad por NombreUsuario</span>
                                    </div>
                                </div>
                                <div class="activitiesTimeLine">
                                    <span class="timeAgo">Ayer</span>
                                    <span class="material-symbols-outlined iconTimeLine">
                                        Delete
                                    </span>
                                </div>
                            </div>
                        </li>
                        
                    </ul>

                </div>
            </div>
            `;
        }
    }

    customElements.define('notas-adjuntas', NotasAdjuntas);
});
