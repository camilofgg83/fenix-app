document.addEventListener('DOMContentLoaded', () => {
    class ArchivosAdjuntos extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <style>
                @import '/assets/styles/app.css'; /* Importa tus estilos globales si es necesario */
            </style>
            <div class="contenedorPrincipal">
                <div class="cardFormulario">
                    <h2>Archivos Adjuntos</h2>
                    <div class="form-group">
                        <div class="drag">
                            <span class="material-symbols-outlined">
                                upload_file
                            </span>
                            <span>Arrastre el archivo que desea subir o haga click para seleccionarlo</span>
                        </div>
                        <div class="input-group full-width">
                            <textarea placeholder="Comentario" rows="3" required></textarea>
                            <label for="">Comentario</label>
                        </div>
                        <button id="buttonAttachment" disabled="disabled">Guardar</button>
                    </div>
                    <h2 class="h2TimeLine">Actividad Reciente</h2>
                    <ul>
                        <li class="timeLineItem">
                            <div class="drafTimeLine">
                                <div class="circleIconTimeLine">
                                    <span class="material-symbols-outlined itemAttachment">
                                        Description
                                    </span>
                                </div>
                                <div class="lineTimeLine">
                            
                                </div>
                            </div>
                            <div class="cardTimeLine">
                                <div class="inforCardTimeLine">
                                    <span class="nameFile">nombreArchivo.ext</span>
                                    <span>Comentario</span>
                                    <div class="userTimeLine">
                                        <div class="photoUser">
                                            <img src="" alt="User">
                                        </div>
                                        <span>Actividad por NombreUsuario</span>
                                    </div>
                                </div>
                                <div class="activitiesTimeLine">
                                    <span class="timeAgo">Time Ago</span>
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
                                        Description
                                    </span>
                                </div>
                                <div class="lineTimeLine">
                            
                                </div>
                            </div>
                            <div class="cardTimeLine">
                                <div class="inforCardTimeLine">
                                    <span class="nameFile">nombreArchivo.ext</span>
                                    <span>Comentario</span>
                                    <div class="userTimeLine">
                                        <div class="photoUser">
                                            <img src="" alt="User">
                                        </div>
                                        <span>Actividad por $NombreUsuario</span>
                                    </div>
                                </div>
                                <div class="activitiesTimeLine">
                                    <span class="timeAgo">Time Ago</span>
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

    customElements.define('archivos-adjuntos', ArchivosAdjuntos);
});
