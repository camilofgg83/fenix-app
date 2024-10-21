document.addEventListener('DOMContentLoaded', () => {
    class PersonaJuridica extends HTMLElement {
        connectedCallback() {
            this.innerHTML = `
            <style>
                @import '/assets/styles/app.css'; /* Importa tus estilos globales si es necesario */
            </style>
            <div class="contenedorDeContenidos">
                <div class="contenedorPrincipal">
                    <div class="cardFormulario">
                        <h3>Información Principal</h3>
                        <div class="form-group">
                            <div class="input-group half-width">
                                <input type="text" placeholder="NIT" required>
                                <label>NIT</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="text" placeholder="Razón Social" required>
                                <label>Razón Social</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="text" placeholder="Nombre Comercial" required>
                                <label>Nombre Comercial</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="text" placeholder="Teléfono" required>
                                <label>Teléfono</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="text" placeholder="Celular" required>
                                <label>Celular</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="email" placeholder="Correo Electrónico" required>
                                <label>Correo Electrónico</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="date" required>
                                <label>Fecha de Registro</label>
                            </div>
                            <div class="input-group half-width">
                                <input type="date">
                                <label>Fecha Actualización</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        }
    }

    customElements.define('persona-juridica', PersonaJuridica);
});
