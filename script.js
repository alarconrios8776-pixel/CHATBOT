

Ir al contenido
Uso de Correo de Unidad Educativa Fiscomisional Sagrado Corazón con lectores de pantalla

Conversaciones
 
Política del programa
Con la tecnología de Google
Última actividad de la cuenta: hace 7 minutos
Detalles
<!DOCTYPE html>
<html lang="es" class="h-full">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MundoExplora AI - Conserje Inteligente de Viajes</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts (Inter) -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- FontAwesome para Iconos -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <style>
        body {
            font-family: 'Inter', sans-serif;
        }
        /* Custom scrollbar para una estética cibernética oscura */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: #020617; /* slate-950 */
        }
        ::-webkit-scrollbar-thumb {
            background: #1e293b; /* slate-800 */
            border-radius: 9999px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #10b981; /* emerald-500 */
        }
    </style>
</head>
<body class="min-h-screen bg-slate-950 text-slate-100 flex flex-col antialiased">

    <!-- HEADER PRINCIPAL -->
    <header class="border-b border-slate-800 bg-slate-900/80 backdrop-blur px-6 py-4 flex flex-wrap items-center justify-between sticky top-0 z-30 gap-4">
        <div class="flex items-center space-x-3">
            <div class="w-10 h-10 bg-gradient-to-tr from-amber-400 to-emerald-400 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/10">
                <i class="fa-solid fa-paper-plane text-slate-950 text-lg"></i>
            </div>
            <div>
                <h1 class="text-xl font-bold tracking-tight bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                    MundoExplora AI
                </h1>
                <p class="text-xs text-slate-400 font-medium">Conserje y Planificador Experto de Viajes</p>
            </div>
        </div>

        <div class="flex items-center space-x-3">
            <!-- Selector/Indicador de API Key -->
            <button id="btn-config" class="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs px-3 py-1.5 rounded-lg border border-slate-700 hover:border-emerald-500/40 transition-all flex items-center gap-2">
                <i class="fa-solid fa-key text-amber-400"></i>
                <span id="api-status-text">Configurar API Key</span>
            </button>

            <div class="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
                <span class="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                <span class="text-[10px] sm:text-xs font-semibold text-emerald-400">Gemini 2.5 & Imagen 4</span>
            </div>
        </div>
    </header>

    <!-- CUERPO PRINCIPAL (GRID) -->
    <main class="flex-1 max-w-7xl w-full mx-auto p-4 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
        
        <!-- COLUMNA IZQUIERDA: CHATBOT (7 Columnas) -->
        <section class="lg:col-span-7 flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl h-[calc(100vh-140px)] min-h-[500px]">
            
            <!-- Cabecera de Chat -->
            <div class="p-4 bg-slate-900/50 border-b border-slate-800 flex items-center justify-between shrink-0">
                <div class="flex items-center space-x-3">
                    <div class="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span class="font-semibold text-slate-200 text-sm">ViajesBot — Chat de Planificación Inteligente</span>
                </div>
                <span class="text-xs text-slate-400 hidden sm:inline">Envía mensajes o arrastra una fotografía</span>
            </div>

            <!-- Caja contenedora de mensajes -->
            <div id="chat-messages" class="flex-1 overflow-y-auto p-4 space-y-4">
                <!-- Se poblará dinámicamente con JavaScript -->
            </div>

            <!-- Atajos Rápidos -->
            <div class="p-3 bg-slate-950 border-t border-slate-800/80 shrink-0">
                <p class="text-[11px] text-slate-400 mb-2 font-medium uppercase tracking-wider">Destinos de Tendencia e Ideas rápidas:</p>
                <div class="flex flex-wrap gap-2">
                    <button onclick="applyQuickDestiny('Kioto, Japón')" class="text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-850 rounded-full px-3 py-1.5 transition-all hover:border-emerald-500/40 hover:text-emerald-300">
                        🇯🇵 Kioto, Japón
                    </button>
                    <button onclick="applyQuickDestiny('Venecia, Italia')" class="text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-850 rounded-full px-3 py-1.5 transition-all hover:border-emerald-500/40 hover:text-emerald-300">
                        🇮🇹 Venecia, Italia
                    </button>
                    <button onclick="applyQuickDestiny('Cancún, México')" class="text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-850 rounded-full px-3 py-1.5 transition-all hover:border-emerald-500/40 hover:text-emerald-300">
                        🇲🇽 Cancún, México
                    </button>
                    <button onclick="applyQuickDestiny('Reikiavik, Islandia')" class="text-xs bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-850 rounded-full px-3 py-1.5 transition-all hover:border-emerald-500/40 hover:text-emerald-300">
                        🇮🇸 Reikiavik
                    </button>
                </div>
            </div>

            <!-- Formulario de entrada de Chat -->
            <form id="chat-form" class="p-4 border-t border-slate-800 bg-slate-900/50 flex flex-col space-y-3 shrink-0">
                <!-- Preview de imagen adjunta -->
                <div id="image-preview-container" class="hidden items-center space-x-2 bg-slate-950 p-2 rounded-lg border border-slate-800 w-fit">
                    <img id="image-preview-element" src="" alt="Preview" class="h-10 w-10 object-cover rounded-md">
                    <span class="text-xs text-slate-300">Imagen lista para procesar</span>
                    <button type="button" onclick="clearSelectedImage()" class="text-red-400 hover:text-red-300 text-xs font-bold px-1">✕</button>
                </div>

                <div class="flex items-center space-x-2">
                    <!-- Input de Archivo (Oculto) -->
                    <label class="flex items-center justify-center w-11 h-11 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-emerald-500/30 text-slate-300 hover:text-emerald-400 rounded-xl cursor-pointer transition-all shrink-0">
                        <i class="fa-solid fa-camera text-lg"></i>
                        <input id="input-image" type="file" accept="image/*" class="hidden">
                    </label>

                    <!-- Caja de texto -->
                    <input
                        id="input-text"
                        type="text"
                        autocomplete="off"
                        placeholder="Escribe un destino, presupuesto o adjunta una foto para planificar..."
                        class="flex-1 bg-slate-950 text-slate-100 placeholder-slate-500 border border-slate-850 focus:border-emerald-500/55 focus:ring-1 focus:ring-emerald-500/50 rounded-xl px-4 py-2.5 text-sm focus:outline-none transition-all"
                    />

                    <!-- Botón de Envío -->
                    <button
                        type="submit"
                        class="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-slate-950 font-bold px-4 py-2.5 rounded-xl flex items-center justify-center transition-all shadow-lg shadow-emerald-500/10 shrink-0"
                    >
                        <i class="fa-solid fa-paper-plane text-lg"></i>
                    </button>
                </div>
            </form>
        </section>

        <!-- COLUMNA DERECHA: PANEL DE CONTROL DE VIAJE (5 Columnas) -->
        <section class="lg:col-span-5 flex flex-col space-y-6 h-[calc(100vh-140px)] min-h-[500px] overflow-y-auto pr-1">
            
            <!-- TARJETA DE DESTINO -->
            <div class="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl flex flex-col">
                
                <!-- Visual / Imagen postal generada -->
                <div class="relative h-48 bg-slate-950 flex items-center justify-center overflow-hidden">
                    <!-- Overlay de Carga -->
                    <div id="postcard-loader" class="absolute inset-0 bg-slate-950/80 flex flex-col items-center justify-center space-y-3 z-10 hidden">
                        <div class="w-8 h-8 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
                        <p class="text-xs text-amber-300 font-medium">Generando postal de ensueño por Imagen 4...</p>
                    </div>

                    <!-- Postal renderizada o placeholder -->
                    <div id="postcard-placeholder" class="text-center p-6 flex flex-col items-center">
                        <i class="fa-regular fa-image text-slate-700 text-4xl mb-2 animate-pulse"></i>
                        <p class="text-xs text-slate-500 font-medium px-4">Introduce un destino y la IA de Imagen 4 pintará una postal espectacular de tu viaje.</p>
                    </div>
                    <img id="postcard-img" src="" alt="Destino de Viaje" class="w-full h-full object-cover hidden transform hover:scale-105 transition-transform duration-500">

                    <!-- Badge flotante de destino -->
                    <div class="absolute top-4 left-4 bg-slate-900/95 backdrop-blur border border-slate-700/80 px-3 py-1.5 rounded-lg z-20">
                        <span id="board-destination" class="text-xs font-bold text-amber-300">📍 Explora Destinos</span>
                    </div>

                    <!-- Badge de Días -->
                    <div class="absolute bottom-4 right-4 bg-emerald-500 text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-lg shadow-lg z-20">
                        <span id="board-days">7</span> días sugeridos
                    </div>
                </div>

                <!-- Detalles de la planificación interactiva -->
                <div class="p-5 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                        <h3 class="text-md font-bold text-slate-100 mb-1.5 flex items-center gap-2">
                            <i class="fa-solid fa-route text-emerald-400 text-xs"></i>
                            Itinerario a medida
                        </h3>
                        <p id="board-itinerary" class="text-xs text-slate-400 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850">
                            Escribe en el chat a dónde te gustaría viajar o arrastra una imagen. Generaremos una estructura presupuestaria y un itinerario a medida aquí.
                        </p>
                    </div>

                    <!-- DESGLOSE DE PRESUPUESTOS -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                          <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Estimación de Presupuesto</span>
                          <span class="text-sm font-bold text-emerald-400">
                            $<span id="board-total-budget">1,050</span> USD <span class="text-[10px] text-slate-500 font-normal">/ pers</span>
                          </span>
                        </div>

                        <div class="space-y-2.5 bg-slate-950/50 p-3 rounded-xl border border-slate-850">
                            <!-- Vuelos -->
                            <div>
                                <div class="flex justify-between text-xs text-slate-400 mb-1">
                                    <span class="flex items-center gap-1.5">✈️ Vuelos</span>
                                    <span id="txt-budget-flights">$450 USD</span>
                                </div>
                                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div id="bar-budget-flights" class="bg-amber-400 h-full rounded-full transition-all duration-1000" style="width: 42%"></div>
                                </div>
                            </div>

                            <!-- Hoteles -->
                            <div>
                                <div class="flex justify-between text-xs text-slate-400 mb-1">
                                    <span class="flex items-center gap-1.5">🏨 Hoteles</span>
                                    <span id="txt-budget-hotels">$350 USD</span>
                                </div>
                                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div id="bar-budget-hotels" class="bg-emerald-400 h-full rounded-full transition-all duration-1000" style="width: 33%"></div>
                                </div>
                            </div>

                            <!-- Alimentación -->
                            <div>
                                <div class="flex justify-between text-xs text-slate-400 mb-1">
                                    <span class="flex items-center gap-1.5">🍲 Alimentación</span>
                                    <span id="txt-budget-food">$150 USD</span>
                                </div>
                                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div id="bar-budget-food" class="bg-teal-400 h-full rounded-full transition-all duration-1000" style="width: 14%"></div>
                                </div>
                            </div>

                            <!-- Actividades -->
                            <div>
                                <div class="flex justify-between text-xs text-slate-400 mb-1">
                                    <span class="flex items-center gap-1.5">🎟️ Actividades</span>
                                    <span id="txt-budget-activities">$100 USD</span>
                                </div>
                                <div class="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                                    <div id="bar-budget-activities" class="bg-blue-400 h-full rounded-full transition-all duration-1000" style="width: 11%"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CHECKLIST DE PREPARATIVOS -->
                    <div>
                        <h4 class="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">Checklist Requerido para este destino</h4>
                        <ul id="board-checklist" class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            <!-- Inyectado dinámicamente -->
                            <li class="flex items-center space-x-2 text-xs text-slate-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-850">
                                <span class="text-emerald-400 font-bold">✓</span>
                                <span class="truncate">Pasaporte vigente</span>
                            </li>
                            <li class="flex items-center space-x-2 text-xs text-slate-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-850">
                                <span class="text-emerald-400 font-bold">✓</span>
                                <span class="truncate">Seguro de Viaje</span>
                            </li>
                        </ul>
                    </div>

                    <!-- Botón de Cotizar / Reservar -->
                    <button
                        id="btn-open-booking"
                        class="w-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 font-extrabold text-sm py-3 rounded-xl transition-all shadow-lg shadow-amber-500/10 text-center"
                    >
                        💼 Cotizar & Reservar Itinerario con un Operador
                    </button>
                </div>
            </div>

            <!-- GARANTÍA -->
            <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-xl flex items-center space-x-4">
                <div class="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                    <i class="fa-solid fa-shield-halved text-emerald-400 text-lg"></i>
                </div>
                <div>
                    <h4 class="text-sm font-bold text-slate-200">Garantía MundoExplora</h4>
                    <p class="text-xs text-slate-400 mt-0.5 leading-relaxed">
                        Nuestras sugerencias inteligentes son certificadas y supervisadas por operadores turísticos autorizados.
                    </p>
                </div>
            </div>
        </section>
    </main>

    <!-- MODAL DE CONFIGURACIÓN DE API KEY -->
    <div id="modal-config" class="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div class="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div>
                    <h3 class="text-lg font-bold text-slate-100">Configuración de API</h3>
                    <p class="text-xs text-slate-400">Configura tu clave para interactuar con Gemini e Imagen</p>
                </div>
                <button id="btn-close-config" class="text-slate-400 hover:text-slate-200 text-xl font-bold">✕</button>
            </div>
            <div class="p-5 space-y-4">
                <div>
                    <label class="block text-xs font-semibold text-slate-400 mb-1.5">Gemini API Key</label>
                    <input
                        id="input-api-key"
                        type="password"
                        placeholder="AIzaSy..."
                        class="w-full bg-slate-950 text-slate-100 border border-slate-800 focus:border-emerald-500 rounded-lg px-3 py-2 text-sm focus:outline-none"
                    />
                    <p class="text-[10px] text-slate-500 mt-2 leading-relaxed">
                        Ingresa una clave de la consola de Google AI Studio para habilitar el uso directo de los modelos de Gemini 2.5 Flash, Imagen 4 y TTS Conversacional en este navegador de manera privada y segura.
                    </p>
                </div>
                <div class="pt-2 flex justify-end space-x-2">
                    <button id="btn-save-config" class="bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-lg text-xs hover:bg-emerald-400 transition-all">
                        Guardar Configuración
                    </button>
                </div>
            </div>
        </div>
    </div>

    <!-- MODAL DE PRE-RESERVA -->
    <div id="modal-booking" class="fixed inset-0 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 z-50 hidden">
        <div class="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            <div class="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950">
                <div>
                    <h3 class="text-lg font-bold text-slate-100">Reservar Itinerario</h3>
                    <p class="text-xs text-slate-400">Pre-reservación formal libre de compromisos</p>
                </div>
                <button id="btn-close-booking" class="text-slate-400 hover:text-slate-200 text-xl font-bold">✕</button>
            </div>

            <form id="booking-form" class="p-5 space-y-4">
                <!-- Información previsualizada -->
                <div class="bg-slate-950 p-3 rounded-xl border border-slate-800 flex items-center justify-between">
                    <div>
                        <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Destino Seleccionado</span>
                        <p id="modal-booking-dest" class="text-sm font-bold text-amber-300">Explora Destinos</p>
                    </div>
                    <div class="text-right">
                        <span class="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Total estimado</span>
                        <p id="modal-booking-price" class="text-sm font-bold text-emerald-400">$1,050 USD</p>
                    </div>
                </div>

                <!-- Campos del Formulario -->
                <div class="space-y-3">
                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Nombre Completo</label>
                        <input
                            id="book-name"
                            type="text"
                            required
                            placeholder="Ej. Sofía Valenzuela"
                            class="w-full bg-slate-950 text-slate-100 border border-slate-800 focus:border-amber-500 rounded-lg px-3 py-2 text-sm focus:outline-none"
                        />
                    </div>

                    <div>
                        <label class="block text-xs font-semibold text-slate-400 mb-1">Correo Electrónico</label>
                        <input
                            id="book-email"
                            type="email"
                            required
                            placeholder="sofia@gmail.com"
                            class="w-full bg-slate-950 text-slate-100 border border-slate-800 focus:border-amber-500 rounded-lg px-3 py-2 text-sm focus:outline-none"
                        />
                    </div>

                    <div class="grid grid-cols-2 gap-3">
                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Fecha de Viaje</label>
                            <input
                                id="book-date"
                                type="date"
                                required
                                class="w-full bg-slate-950 text-slate-100 border border-slate-800 focus:border-amber-500 rounded-lg px-3 py-2 text-xs focus:outline-none"
                            />
                        </div>

                        <div>
                            <label class="block text-xs font-semibold text-slate-400 mb-1">Viajeros</label>
                            <input
                                id="book-passengers"
                                type="number"
                                min="1"
                                max="10"
                                required
                                value="1"
                                class="w-full bg-slate-950 text-slate-100 border border-slate-800 focus:border-amber-500 rounded-lg px-3 py-2 text-sm focus:outline-none"
                            />
                        </div>
                    </div>
                </div>

                <!-- Botón de Enviar Formulario -->
                <div id="booking-btn-container" class="pt-2">
                    <button
                        type="submit"
                        class="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-extrabold py-3 rounded-xl hover:from-emerald-300 hover:to-teal-400 transition-all text-sm"
                    >
                        Confirmar Pre-Reserva Gratis
                    </button>
                </div>
            </form>
        </div>
    </div>

    <!-- JAVASCRIPT LOGIC -->
    <script>
        
        // Estado de la aplicación
        const state = {
            apiKey: localStorage.getItem('MUNDO_EXPLORA_API_KEY') || '',
            messages: [
                {
                    id: 'welcome',
                    role: 'assistant',
                    text: '¡Hola! Soy tu planificador de viajes inteligente de **MundoExplora**. 🌍✈\n\n¿A dónde te gustaría viajar hoy? Puedo ayudarte a diseñar itinerarios detallados, estimar presupuestos o descubrir joyas ocultas.\n\n*Consejo*: Puedes subir la foto de un paisaje o monumento aquí para que identifique dónde es y te planifique una escapada única.',
                    timestamp: new Date()
                }
            ],
            selectedImage: null,
            isTyping: false,
            playingAudioId: null,
            audioElements: {},
            tripData: {
                destination: "Explora Destinos",
                days: 7,
                budget: {
                    vuelos: 450,
                    hoteles: 350,
                    comida: 150,
                    actividades: 100
                },
                checklist: ["Pasaporte vigente", "Seguro de viaje internacional", "Adaptador de corriente"],
                itinerarySummary: "Selecciona un destino o escribe en el chat tus preferencias para estructurar tu viaje ideal aquí.",
                generatedImage: null
            }
        };

        // Función de ayuda para reintentar llamadas a APIs con retroceso exponencial
        async function fetchWithRetry(url, options, retries = 5, delay = 1000) {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status}`);
                }
                return response;
            } catch (error) {
                if (retries === 0) throw error;
                await new Promise(resolve => setTimeout(resolve, delay));
                return fetchWithRetry(url, options, retries - 1, delay * 2);
            }
        }

        // Conversor PCM16 de base64 a un blob WAV reproducible
        function pcmToWav(pcmBase64, sampleRate = 24000) {
            const binaryString = atob(pcmBase64);
            const len = binaryString.length;
            const bytes = new Uint8Array(len);
            for (let i = 0; i < len; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
            const buffer = bytes.buffer;
            const wavHeader = new ArrayBuffer(44);
            const view = new DataView(wavHeader);

            const writeString = (view, offset, string) => {
                for (let i = 0; i < string.length; i++) {
                    view.setUint8(offset + i, string.charCodeAt(i));
                }
            };

            writeString(view, 0, 'RIFF');
            view.setUint32(4, 36 + buffer.byteLength, true);
            writeString(view, 8, 'WAVE');
            writeString(view, 12, 'fmt ');
            view.setUint32(16, 16, true);
            view.setUint16(20, 1, true); // PCM format
            view.setUint16(22, 1, true); // Mono channel
            view.setUint32(24, sampleRate, true);
            view.setUint32(28, sampleRate * 2, true); // Byte rate (SampleRate * Align)
            view.setUint16(32, 2, true); // Block align
            view.setUint16(34, 16, true); // Bits per sample
            writeString(view, 36, 'data');
            view.setUint32(40, buffer.byteLength, true);

            const combined = new Uint8Array(wavHeader.byteLength + buffer.byteLength);
            combined.set(new Uint8Array(wavHeader), 0);
            combined.set(new Uint8Array(buffer), wavHeader.byteLength);

            const blob = new Blob([combined], { type: 'audio/wav' });
            return URL.createObjectURL(blob);
        }


        // Función para llamar al API de Texto Gemini con reintentos
        async function callGeminiText(userPrompt, chatHistory, base64Image = null) {
            if (!state.apiKey) {
                return "🚨 **Error: API Key no configurada.** Por favor presiona el botón 'Configurar API Key' arriba para ingresar tu credencial.";
            }

            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${state.apiKey}`;
            
            // Preparar el prompt del sistema
            const systemPrompt = `Eres el Agente Experto de Viajes principal de 'MundoExplora'. Tu propósito es guiar al usuario en la planificación y cotización de sus viajes con un tono entusiasta, descriptivo y altamente servicial. Usa emojis y formato Markdown enriquecido para estructurar la información (listas, negritas, etc.).
            
            CRUCIAL: Si el usuario te está pidiendo un itinerario, cotización, destino específico o guía, al final de tu respuesta (separado por dos líneas vacías), debes incluir SIEMPRE un bloque JSON exacto encerrado en etiquetas <trip_data>...</trip_data> para que nuestra interfaz web pueda actualizar el panel interactivo del usuario de inmediato.
            
            Ejemplo de formato requerido al final (oculto visualmente pero parseable):
            <trip_data>
            {
              "destination": "Kioto, Japón",
              "days": 6,
              "budget": {
                "vuelos": 1200,
                "hoteles": 800,
                "comida": 400,
                "actividades": 300
              },
              "checklist": ["Pasaporte vigente", "Visa si aplica", "Tarjeta JR Pass", "Reservar templos"],
              "itinerarySummary": "Exploración de templos milenarios, bosques de bambú, degustación de ramen artesanal y noche tradicional en Ryokan."
            }
            </trip_data>
            
            Sé realista y preciso con los precios estimados en dólares (USD). Ajusta la checklist al destino.`;

            // Formatear el historial para la API de Gemini
            const contents = [];
            
            // Añadir el mensaje actual con la imagen si existe
            if (base64Image) {
                const base64Data = base64Image.split(',')[1];
                const mimeType = base64Image.split(';')[0].split(':')[1];
                contents.push({
                    role: "user",
                    parts: [
                        { text: userPrompt },
                        { inlineData: { mimeType: mimeType, data: base64Data } }
                    ]
                });
            } else {
                // Si no hay imagen, incorporamos un historial básico simplificado para mantener el contexto
                const recentHistory = chatHistory.slice(-6).map(msg => ({
                    role: msg.role === 'assistant' ? 'model' : 'user',
                    parts: [{ text: msg.text }]
                }));
                contents.push(...recentHistory);
                contents.push({
                    role: "user",
                    parts: [{ text: userPrompt }]
                });
            }

            const payload = {
                contents,
                systemInstruction: { parts: [{ text: systemPrompt }] }
            };

            try {
                const response = await fetchWithRetry(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await response.json();
                return data.candidates?.[0]?.content?.parts?.[0]?.text || "No obtuve una respuesta clara, por favor intenta de nuevo.";
            } catch (err) {
                console.error(err);
                return "Lo siento, tuve un problema de conexión al procesar tu solicitud de viaje. ¿Podrías volver a intentarlo?";
            }
        }

        // Función para llamar a Imagen-4 y obtener una postal del destino
        async function generateDestinationPostcard(destinationName) {
            if (!state.apiKey) return;
            
            const loader = document.getElementById('postcard-loader');
            loader.classList.remove('hidden');

            const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${state.apiKey}`;
            const payload = {
                instances: { 
                    prompt: `A beautiful cinematic travel postcard of ${destinationName}, high dynamic range, breathtaking scenic photography, 4k, professional travel magazine cover` 
                },
                parameters: { sampleCount: 1 }
            };

            try {
                const response = await fetchWithRetry(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await response.json();
                if (data.predictions?.[0]?.bytesBase64Encoded) {
                    const imageUrl = `data:image/png;base64,${data.predictions[0].bytesBase64Encoded}`;
                    state.tripData.generatedImage = imageUrl;
                    renderTripData();
                }
            } catch (err) {
                console.error("Error al generar postal:", err);
            } finally {
                loader.classList.add('hidden');
            }
        }


        // Función para reproducir por Voz usando Gemini TTS
        async function speakMessage(messageId, textToSpeak, buttonElement) {
            if (state.playingAudioId === messageId) {
                state.audioElements[messageId]?.pause();
                state.playingAudioId = null;
                updateSpeechButton(buttonElement, false, false);
                return;
            }

            if (state.audioElements[messageId]) {
                state.audioElements[messageId].play();
                state.playingAudioId = messageId;
                updateSpeechButton(buttonElement, true, false);
                return;
            }

            if (!state.apiKey) {
                alert("Por favor configure su API Key para escuchar el audio.");
                return;
            }

            try {
                state.playingAudioId = messageId;
                updateSpeechButton(buttonElement, true, true); // Loading state

                // Limpiar etiquetas ocultas del texto
                const cleanedText = textToSpeak.replace(/<trip_data>[\s\S]*?<\/trip_data>/g, "").replace(/[*#_~`]/g, "");
                const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-tts:generateContent?key=${state.apiKey}`;
                const payload = {
                    contents: [{ parts: [{ text: `Dilo con calidez de agente de viajes: ${cleanedText.slice(0, 400)}` }] }],
                    generationConfig: {
                        responseModalities: ["AUDIO"],
                        speechConfig: {
                            voiceConfig: {
                                prebuiltVoiceConfig: { voiceName: "Aoede" } // Voz alegre
                            }
                        }
                    },
                    model: "gemini-2.5-flash-preview-tts"
                };

                const response = await fetchWithRetry(url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload)
                });
                const data = await response.json();
                const pcmBase64 = data.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
                
                if (pcmBase64) {
                    const wavUrl = pcmToWav(pcmBase64, 24000);
                    const audio = new Audio(wavUrl);
                    audio.onended = () => {
                        state.playingAudioId = null;
                        updateSpeechButton(buttonElement, false, false);
                    };
                    state.audioElements[messageId] = audio;
                    audio.play();
                    updateSpeechButton(buttonElement, true, false); // Active state
                } else {
                    state.playingAudioId = null;
                    updateSpeechButton(buttonElement, false, false);
                }
            } catch (err) {
                console.error("Error con TTS:", err);
                state.playingAudioId = null;
                updateSpeechButton(buttonElement, false, false);
            }
        }

        function updateSpeechButton(button, isActive, isLoading) {
            if (!button) return;
            if (isLoading) {
                button.innerHTML = `
                    <i class="fa-solid fa-circle-notch animate-spin text-amber-400"></i>
                    <span>Cargando voz...</span>
                `;
            } else if (isActive) {
                button.innerHTML = `
                    <i class="fa-solid fa-pause text-amber-400"></i>
                    <span>Pausar voz</span>
                `;
            } else {
                button.innerHTML = `
                    <i class="fa-solid fa-volume-high text-amber-400"></i>
                    <span>Escuchar Audio</span>
                `;
            }
        }


        // Renderizado del historial del Chat en el DOM
        function renderMessages() {
            const chatContainer = document.getElementById('chat-messages');
            chatContainer.innerHTML = '';

            state.messages.forEach(msg => {
                const isUser = msg.role === 'user';
                const displayableText = msg.text.replace(/<trip_data>[\s\S]*?<\/trip_data>/g, "");

                // Formateador markdown básico para el HTML (Negritas, saltos de línea, listas)
                let htmlContent = displayableText
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>')
                    .replace(/\n/g, '<br>');

                const messageDiv = document.createElement('div');
                messageDiv.className = `flex ${isUser ? 'justify-end' : 'justify-start'}`;

                let innerHtml = `
                    <div class="max-w-[85%] rounded-2xl px-4 py-3 shadow-md ${
                        isUser 
                            ? 'bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-tr-none' 
                            : 'bg-slate-800 text-slate-100 rounded-tl-none border border-slate-700/50'
                    }">
                `;

                if (msg.image) {
                    innerHtml += `
                        <div class="mb-2 rounded-lg overflow-hidden border border-slate-700 max-h-48">
                            <img src="${msg.image}" alt="Imagen Adjunta" class="w-full h-full object-cover">
                        </div>
                    `;
                }

                innerHtml += `
                        <div class="text-sm leading-relaxed whitespace-pre-wrap font-sans">
                            ${htmlContent}
                        </div>
                `;

                if (!isUser && msg.id !== 'welcome') {
                    innerHtml += `
                        <div class="mt-2.5 pt-2 border-t border-slate-700/50 flex items-center justify-between">
                            <button 
                                class="btn-speak flex items-center space-x-1.5 text-xs text-amber-300 hover:text-amber-200 transition-colors bg-slate-900/40 px-2.5 py-1.5 rounded-lg"
                                data-id="${msg.id}"
                                data-text="${encodeURIComponent(displayableText)}"
                            >
                                <i class="fa-solid fa-volume-high text-amber-400"></i>
                                <span>Escuchar Audio</span>
                            </button>
                            <span class="text-[10px] text-slate-400">ViajesBot AI</span>
                        </div>
                    `;
                }

                innerHtml += `</div>`;
                messageDiv.innerHTML = innerHtml;
                chatContainer.appendChild(messageDiv);
            });

            // Añadir indicadores de escritura
            if (state.isTyping) {
                const typingDiv = document.createElement('div');
                typingDiv.className = 'flex justify-start';
                typingDiv.innerHTML = `
                    <div class="bg-slate-800 border border-slate-700/50 rounded-2xl rounded-tl-none px-4 py-3 flex items-center space-x-2">
                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce"></div>
                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                        <div class="w-2 h-2 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        <span class="text-xs text-slate-400 ml-1">Planificando tu itinerario perfecto...</span>
                    </div>
                `;
                chatContainer.appendChild(typingDiv);
            }

            // Scroll automático
            chatContainer.scrollTop = chatContainer.scrollHeight;

            // Asignar listeners a los botones de audio
            document.querySelectorAll('.btn-speak').forEach(btn => {
                btn.addEventListener('click', function() {
                    const id = this.getAttribute('data-id');
                    const text = decodeURIComponent(this.getAttribute('data-text'));
                    speakMessage(id, text, this);
                });
            });
        }

        // Renderizado del Panel Lateral de Viajes en el DOM
        function renderTripData() {
            const data = state.tripData;

            // Textos
            document.getElementById('board-destination').innerText = `📍 ${data.destination}`;
            document.getElementById('board-days').innerText = data.days;
            document.getElementById('board-itinerary').innerText = data.itinerarySummary;

            // Presupuestos
            const total = Object.values(data.budget).reduce((a, b) => a + b, 0);
            document.getElementById('board-total-budget').innerText = total.toLocaleString();

            document.getElementById('txt-budget-flights').innerText = `$${data.budget.vuelos} USD`;
            document.getElementById('txt-budget-hotels').innerText = `$${data.budget.hoteles} USD`;
            document.getElementById('txt-budget-food').innerText = `$${data.budget.comida} USD`;
            document.getElementById('txt-budget-activities').innerText = `$${data.budget.actividades} USD`;

            // Barras de progreso
            document.getElementById('bar-budget-flights').style.width = `${(data.budget.vuelos / total) * 100 || 0}%`;
            document.getElementById('bar-budget-hotels').style.width = `${(data.budget.hoteles / total) * 100 || 0}%`;
            document.getElementById('bar-budget-food').style.width = `${(data.budget.comida / total) * 100 || 0}%`;
            document.getElementById('bar-budget-activities').style.width = `${(data.budget.actividades / total) * 100 || 0}%`;

            // Checklist
            const checklistContainer = document.getElementById('board-checklist');
            checklistContainer.innerHTML = '';
            data.checklist.forEach(item => {
                const li = document.createElement('li');
                li.className = "flex items-center space-x-2 text-xs text-slate-300 bg-slate-950 px-3 py-2 rounded-lg border border-slate-850";
                li.innerHTML = `
                    <span class="text-emerald-400 font-bold">✓</span>
                    <span class="truncate">${item}</span>
                `;
                checklistContainer.appendChild(li);
            });

            // Postal generada
            const postcardImg = document.getElementById('postcard-img');
            const postcardPlaceholder = document.getElementById('postcard-placeholder');
            if (data.generatedImage) {
                postcardImg.src = data.generatedImage;
                postcardImg.classList.remove('hidden');
                postcardPlaceholder.classList.add('hidden');
            } else {
                postcardImg.classList.add('hidden');
                postcardPlaceholder.classList.remove('hidden');
            }

            // Datos del Modal de Reserva
            document.getElementById('modal-booking-dest').innerText = data.destination;
            document.getElementById('modal-booking-price').innerText = `$${total.toLocaleString()} USD`;
        }

        // Parsear el marcado <trip_data> oculto que proviene de Gemini
        function processTripDataTag(text) {
            const match = text.match(/<trip_data>([\s\S]*?)<\/trip_data>/);
            if (match) {
                try {
                    const parsed = JSON.parse(match[1].trim());
                    state.tripData.destination = parsed.destination || state.tripData.destination;
                    state.tripData.days = parsed.days || state.tripData.days;
                    state.tripData.budget = parsed.budget || state.tripData.budget;
                    state.tripData.checklist = parsed.checklist || state.tripData.checklist;
                    state.tripData.itinerarySummary = parsed.itinerarySummary || state.tripData.itinerarySummary;
                    state.tripData.generatedImage = null; // Limpiar para que cargue la nueva postal

                    renderTripData();

                    // Disparar generación de postal con Imagen 4
                    if (parsed.destination) {
                        generateDestinationPostcard(parsed.destination);
                    }
                } catch (e) {
                    console.error("No se pudo parsear el bloque de viaje:", e);
                }
            }
        }

        // Actualizar el estado visual del boton API Key en el header
        function renderApiKeyStatus() {
            const textEl = document.getElementById('api-status-text');
            if (state.apiKey) {
                textEl.innerText = "API Key Guardada ✓";
                textEl.className = "text-emerald-400 font-semibold";
            } else {
                textEl.innerText = "Configurar API Key";
                textEl.className = "text-slate-200";
            }
        }


        // Limpiar la imagen seleccionada para subir
        function clearSelectedImage() {
            state.selectedImage = null;
            document.getElementById('image-preview-container').classList.add('hidden');
            document.getElementById('input-image').value = '';
        }

        // Atajos Rápidos
        function applyQuickDestiny(destinyName) {
            const input = document.getElementById('input-text');
            input.value = `Planifiquemos un viaje increíble a ${destinyName}. Dame un presupuesto estimado de vuelos y hoteles, checklist e itinerario resumido.`;
            input.focus();
        }

        // ENVIAR MENSAJE (Form Handler)
        async function handleSendMessage(e) {
            e.preventDefault();
            const textInput = document.getElementById('input-text');
            const userPrompt = textInput.value.trim();
            const base64Image = state.selectedImage;

            if (!userPrompt && !base64Image) return;

            // Agregar mensaje del usuario al estado
            const userMsgId = crypto.randomUUID();
            state.messages.push({
                id: userMsgId,
                role: 'user',
                text: userPrompt || "Analiza esta imagen para planificar mi viaje",
                image: base64Image,
                timestamp: new Date()
            });

            // Resetear inputs del formulario
            textInput.value = '';
            clearSelectedImage();

            state.isTyping = true;
            renderMessages();

            // Consultar Gemini
            const botResponse = await callGeminiText(
                userPrompt || "¿Qué destino es este en la imagen y qué me recomiendas hacer allí para planear un viaje?",
                state.messages,
                base64Image
            );

            state.isTyping = false;
            
            // Añadir respuesta de Gemini
            const botMsgId = crypto.randomUUID();
            state.messages.push({
                id: botMsgId,
                role: 'assistant',
                text: botResponse,
                timestamp: new Date()
            });

            renderMessages();
            processTripDataTag(botResponse);
        }

        // Subida y lectura de imágenes
        document.getElementById('input-image').addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = function() {
                    state.selectedImage = reader.result;
                    document.getElementById('image-preview-element').src = reader.result;
                    document.getElementById('image-preview-container').classList.remove('hidden');
                    document.getElementById('image-preview-container').classList.add('flex');
                };
                reader.readAsDataURL(file);
            }
        });

        // Eventos de Modales
        const modalConfig = document.getElementById('modal-config');
        const modalBooking = document.getElementById('modal-booking');

        document.getElementById('btn-config').addEventListener('click', () => {
            document.getElementById('input-api-key').value = state.apiKey;
            modalConfig.classList.remove('hidden');
        });

        document.getElementById('btn-close-config').addEventListener('click', () => {
            modalConfig.classList.add('hidden');
        });

        document.getElementById('btn-save-config').addEventListener('click', () => {
            const keyVal = document.getElementById('input-api-key').value.trim();
            state.apiKey = keyVal;
            localStorage.setItem('MUNDO_EXPLORA_API_KEY', keyVal);
            renderApiKeyStatus();
            modalConfig.classList.add('hidden');
        });

        document.getElementById('btn-open-booking').addEventListener('click', () => {
            modalBooking.classList.remove('hidden');
        });

        document.getElementById('btn-close-booking').addEventListener('click', () => {
            modalBooking.classList.add('hidden');
        });

        // Enviar pre-reserva simulada
        document.getElementById('booking-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btnContainer = document.getElementById('booking-btn-container');
            const name = document.getElementById('book-name').value;
            const email = document.getElementById('book-email').value;
            const date = document.getElementById('book-date').value;
            const passengers = parseInt(document.getElementById('book-passengers').value) || 1;
            const total = Object.values(state.tripData.budget).reduce((a, b) => a + b, 0) * passengers;

            // Estado de carga de reserva
            btnContainer.innerHTML = `
                <button disabled class="w-full bg-slate-850 text-slate-400 py-3 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 border border-slate-800">
                    <i class="fa-solid fa-circle-notch animate-spin text-emerald-400"></i>
                    <span>Procesando reserva...</span>
                </button>
            `;

            setTimeout(() => {
                // Confirmación exitosa en el botón
                btnContainer.innerHTML = `
                    <button disabled class="w-full bg-emerald-500 text-slate-950 py-3 rounded-xl font-extrabold text-sm">
                        ✓ ¡Pre-Reserva Solicitada con Éxito!
                    </button>
                `;

                // Añadir mensaje del bot al historial del chat confirmando la reserva
                setTimeout(() => {
                    state.messages.push({
                        id: crypto.randomUUID(),
                        role: 'assistant',
                        text: `🎉 **¡Felicidades, ${name}!** He reservado preventivamente tu viaje de ${state.tripData.days} días a **${state.tripData.destination}** para el *${date}* para *${passengers} persona(s)*.\n\nNos pondremos en contacto contigo en tu correo \`${email}\` con los tiquetes oficiales y la cotización final de **$${total.toLocaleString()} USD**. ¡Prepara tus maletas! ✈💼`,
                        timestamp: new Date()
                    });

                    renderMessages();
                    modalBooking.classList.add('hidden');
                    
                    // Reestablecer el botón del modal
                    btnContainer.innerHTML = `
                        <button type="submit" class="w-full bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-extrabold py-3 rounded-xl hover:from-emerald-300 hover:to-teal-400 transition-all text-sm">
                            Confirmar Pre-Reserva Gratis
                        </button>
                    `;
                    // Limpiar el form
                    document.getElementById('booking-form').reset();
                    document.getElementById('book-passengers').value = "1";
                }, 1500);

            }, 2000);
        });

        // Evento Submit del Chat
        document.getElementById('chat-form').addEventListener('submit', handleSendMessage);

        // Inicialización de la aplicación
        window.onload = function() {
            renderMessages();
            renderTripData();
            renderApiKeyStatus();
        };

    </script>
</body>
</html>
agencia_de_viajes_inteligente.html
Mostrando agencia_de_viajes_inteligente.html.