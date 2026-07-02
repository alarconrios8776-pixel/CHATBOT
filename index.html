<!DOCTYPE html>
<html lang="es" class="h-full bg-slate-50">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simulador de Financiación Inteligente</title>
    <!-- Tailwind CSS para el diseño responsivo y moderno -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Chart.js para visualizaciones gráficas interactivas -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <!-- Lucide Icons para un diseño de interfaz intuitivo -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#f0f7ff',
                            100: '#e0effe',
                            500: '#0284c7',
                            600: '#0369a1',
                            700: '#075985',
                            900: '#0c4a6e',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Deslizador personalizado para mejorar UX táctil */
        input[type="range"]::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background: #0284c7;
            cursor: pointer;
            transition: transform 0.1s ease-in-out;
        }
        input[type="range"]::-webkit-slider-thumb:hover {
            transform: scale(1.2);
        }
    </style>
</head>
<body class="h-full flex flex-col text-slate-800 antialiased">

    <!-- Encabezado de la Aplicación -->
    <header class="bg-gradient-to-r from-brand-900 via-brand-700 to-brand-600 text-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4 py-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="flex items-center gap-3">
                <div class="p-2 bg-white/10 rounded-xl backdrop-blur-md">
                    <i data-lucide="calculator" class="w-8 h-8 text-sky-300"></i>
                </div>
                <div>
                    <h1 class="text-2xl font-bold tracking-tight">FinancIA</h1>
                    <p class="text-xs text-sky-200">Simulador de Crédito & Asesoría Financiera Inteligente</p>
                </div>
            </div>
            <div class="flex items-center gap-2 text-sm bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                <span class="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></span>
                <span>Análisis en tiempo real listo</span>
            </div>
        </div>
    </header>

    <!-- Contenido Principal de la Aplicación -->
    <main class="flex-grow max-w-7xl w-full mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            <!-- COLUMNA IZQUIERDA: Formulario de Control e Parámetros (4 Cols de 12) -->
            <section class="lg:col-span-5 flex flex-col gap-6">
                <!-- Panel de Parámetros -->
                <div class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 flex flex-col gap-6">
                    <div class="flex items-center gap-2 pb-4 border-b border-slate-100">
                        <i data-lucide="sliders" class="w-5 h-5 text-brand-500"></i>
                        <h2 class="text-lg font-bold text-slate-900">Configura tu Financiación</h2>
                    </div>

                    <!-- Input: Valor del Activo -->
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <label for="input-asset-value" class="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                <i data-lucide="wallet" class="w-4 h-4 text-slate-400"></i>
                                Valor del Activo ($)
                            </label>
                            <input type="number" id="input-asset-value" value="50000" min="1000" max="1000000" step="500"
                                class="w-32 px-2.5 py-1 text-right font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                        </div>
                        <input type="range" id="slider-asset-value" min="1000" max="250000" step="1000" value="50000" 
                            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500">
                        <div class="flex justify-between text-[10px] text-slate-400">
                            <span>$1k</span>
                            <span>$100k</span>
                            <span>$250k+</span>
                        </div>
                    </div>

                    <!-- Input: Cuota Inicial (Opcional) -->
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <label for="input-down-payment" class="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                <i data-lucide="piggy-bank" class="w-4 h-4 text-slate-400"></i>
                                Cuota Inicial ($)
                            </label>
                            <input type="number" id="input-down-payment" value="10000" min="0" max="1000000" step="100"
                                class="w-32 px-2.5 py-1 text-right font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                        </div>
                        <input type="range" id="slider-down-payment" min="0" max="100000" step="500" value="10000" 
                            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500">
                        <div class="flex justify-between text-[10px] text-slate-400">
                            <span>$0 (Sin inicial)</span>
                            <span id="label-down-pct" class="text-brand-600 font-medium">20.00% del activo</span>
                        </div>
                    </div>

                    <!-- Input: Tasa de Interés Anual (E.A.) -->
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <label for="input-interest-rate" class="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                <i data-lucide="percent" class="w-4 h-4 text-slate-400"></i>
                                Tasa de Interés (% E.A.)
                            </label>
                            <input type="number" id="input-interest-rate" value="12.5" min="0.1" max="50" step="0.1"
                                class="w-32 px-2.5 py-1 text-right font-semibold text-brand-600 bg-brand-50 border border-brand-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500">
                        </div>
                        <input type="range" id="slider-interest-rate" min="1" max="35" step="0.1" value="12.5" 
                            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500">
                        <div class="flex justify-between text-[10px] text-slate-400">
                            <span>1% E.A.</span>
                            <span>Interés Promedio</span>
                            <span>35% E.A.</span>
                        </div>
                    </div>

                    <!-- Input: Plazo de Pago -->
                    <div class="flex flex-col gap-2">
                        <div class="flex justify-between items-center">
                            <label for="input-term" class="text-sm font-semibold text-slate-700 flex items-center gap-1.5">
                                <i data-lucide="calendar" class="w-4 h-4 text-slate-400"></i>
                                Plazo de Pago
                            </label>
                            <div class="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
                                <input type="number" id="input-term" value="5" min="1" max="360" step="1"
                                    class="w-16 px-1.5 py-0.5 text-center font-semibold bg-white rounded focus:outline-none text-slate-800">
                                <select id="select-term-type" class="bg-transparent text-xs font-semibold text-slate-600 px-1 focus:outline-none cursor-pointer">
                                    <option value="years" selected>Años</option>
                                    <option value="months">Meses</option>
                                </select>
                            </div>
                        </div>
                        <input type="range" id="slider-term" min="1" max="30" step="1" value="5" 
                            class="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-500">
                        <div class="flex justify-between text-[10px] text-slate-400">
                            <span id="term-min-label">1 Año</span>
                            <span id="term-max-label">30 Años</span>
                        </div>
                    </div>
                </div>

                <!-- Comparador de Escenarios Rápidos -->
                <div class="bg-gradient-to-br from-brand-900 to-slate-900 rounded-2xl text-white p-6 shadow-md">
                    <div class="flex items-center gap-2 mb-3">
                        <i data-lucide="layers" class="w-5 h-5 text-sky-400"></i>
                        <h3 class="font-bold">Comparación Rápida de Escenarios</h3>
                    </div>
                    <p class="text-xs text-sky-100 mb-4 leading-relaxed">Guarda tu simulación actual para contrastarla con otros valores e intereses de forma visual instantánea.</p>
                    <div class="flex gap-2">
                        <button id="btn-save-scenario-1" class="flex-1 py-2 bg-white/10 hover:bg-white/20 active:scale-95 transition rounded-lg text-xs font-semibold border border-white/15">
                            Fijar Escenario A
                        </button>
                        <button id="btn-save-scenario-2" class="flex-1 py-2 bg-white/10 hover:bg-white/20 active:scale-95 transition rounded-lg text-xs font-semibold border border-white/15">
                            Fijar Escenario B
                        </button>
                    </div>
                    <!-- Estado de comparación -->
                    <div id="comparison-drawer" class="hidden mt-4 pt-4 border-t border-white/10 text-xs flex flex-col gap-2">
                        <div class="flex justify-between text-slate-300">
                            <span>Métrica</span>
                            <span class="text-sky-300 font-semibold">Escenario A</span>
                            <span class="text-emerald-300 font-semibold">Escenario B</span>
                        </div>
                        <div class="flex justify-between py-1 border-b border-white/5">
                            <span class="text-slate-400">Valor Neto:</span>
                            <span id="comp-val-a">-</span>
                            <span id="comp-val-b">-</span>
                        </div>
                        <div class="flex justify-between py-1 border-b border-white/5">
                            <span class="text-slate-400">Cuota Mensual:</span>
                            <span id="comp-pay-a">-</span>
                            <span id="comp-pay-b">-</span>
                        </div>
                        <div class="flex justify-between py-1">
                            <span class="text-slate-400">Interés Total:</span>
                            <span id="comp-int-a">-</span>
                            <span id="comp-int-b">-</span>
                        </div>
                    </div>
                </div>
            </section>

            <!-- COLUMNA DERECHA: KPIs, Gráficos y Asesor de IA (7 Cols de 12) -->
            <section class="lg:col-span-7 flex flex-col gap-6">
                
                <!-- Resultados en Tarjetas Métricas (KPIs) -->
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <!-- Cuota Mensual Estimada -->
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Cuota Mensual</span>
                            <div class="p-1.5 bg-brand-50 rounded-lg text-brand-600">
                                <i data-lucide="trending-up" class="w-4 h-4"></i>
                            </div>
                        </div>
                        <div>
                            <span id="kpi-monthly-payment" class="text-2xl font-black text-slate-900">$0.00</span>
                            <p class="text-[11px] text-slate-400 mt-1">Sistemas de cuota fija amortizable.</p>
                        </div>
                    </div>

                    <!-- Total de Intereses a Pagar -->
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Intereses Totales</span>
                            <div class="p-1.5 bg-amber-50 rounded-lg text-amber-600">
                                <i data-lucide="shield-alert" class="w-4 h-4"></i>
                            </div>
                        </div>
                        <div>
                            <span id="kpi-total-interest" class="text-2xl font-black text-slate-900">$0.00</span>
                            <p id="kpi-interest-percentage" class="text-[11px] text-amber-600 mt-1">Equivale al 0% del activo.</p>
                        </div>
                    </div>

                    <!-- Pago Total Estimado -->
                    <div class="bg-white p-5 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between">
                        <div class="flex justify-between items-start mb-2">
                            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Desembolso Total</span>
                            <div class="p-1.5 bg-emerald-50 rounded-lg text-emerald-600">
                                <i data-lucide="banknote" class="w-4 h-4"></i>
                            </div>
                        </div>
                        <div>
                            <span id="kpi-total-payout" class="text-2xl font-black text-slate-900">$0.00</span>
                            <p class="text-[11px] text-slate-400 mt-1">Activo Neto + Costo Financiero.</p>
                        </div>
                    </div>
                </div>

                <!-- Gráficos de Simulación -->
                <div class="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6">
                    <div class="flex justify-between items-center mb-6 pb-4 border-b border-slate-100">
                        <h3 class="font-bold text-slate-900 flex items-center gap-2">
                            <i data-lucide="bar-chart-3" class="w-5 h-5 text-brand-500"></i>
                            Composición & Amortización Temporal
                        </h3>
                        <!-- Selector de vista de gráfico -->
                        <div class="flex bg-slate-100 p-1 rounded-lg text-xs font-semibold text-slate-600">
                            <button id="btn-chart-breakdown" class="px-3 py-1 rounded-md bg-white text-slate-800 shadow-sm transition">Composición</button>
                            <button id="btn-chart-amortization" class="px-3 py-1 rounded-md hover:text-slate-800 transition">Progreso de Pago</button>
                        </div>
                    </div>

                    <div class="relative w-full h-64 flex justify-center items-center">
                        <!-- Canvas del gráfico -->
                        <canvas id="financeChart"></canvas>
                    </div>
                </div>

                <!-- Integración Asesor de IA (Gemini API) -->
                <div class="bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-slate-50 border border-brand-100 rounded-2xl p-6 shadow-sm">
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                        <div class="flex items-center gap-2.5">
                            <div class="p-2 bg-gradient-to-br from-indigo-500 to-sky-500 rounded-xl text-white">
                                <i data-lucide="sparkles" class="w-5 h-5"></i>
                            </div>
                            <div>
                                <h4 class="font-bold text-slate-900 text-sm sm:text-base">Análisis de Viabilidad & Optimización con IA</h4>
                                <p class="text-xs text-slate-500">Analiza tus condiciones de pago, costo financiero e implicaciones económicas.</p>
                            </div>
                        </div>
                        <button id="btn-analyze-ai" class="w-full sm:w-auto px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 flex items-center justify-center gap-1.5">
                            <i data-lucide="zap" class="w-4 h-4"></i>
                            Obtener Diagnóstico
                        </button>
                    </div>

                    <!-- Panel de Resultados de IA -->
                    <div id="ai-response-container" class="hidden bg-white border border-slate-200/60 rounded-xl p-4 text-xs leading-relaxed text-slate-700 shadow-inner">
                        <!-- Cargando -->
                        <div id="ai-loading" class="hidden flex flex-col items-center justify-center py-6 gap-2">
                            <div class="w-8 h-8 border-4 border-brand-500 border-t-transparent rounded-full animate-spin"></div>
                            <span class="text-slate-500 font-medium">Procesando simulación con Gemini...</span>
                        </div>
                        <!-- Texto respuesta -->
                        <div id="ai-text-content" class="prose prose-xs max-w-none text-slate-600">
                            <!-- El texto generado por Gemini se renderiza aquí -->
                        </div>
                    </div>
                </div>

            </section>
        </div>

        <!-- SECCIÓN DE TABLA DE AMORTIZACIÓN (Ancho Completo) -->
        <section class="mt-8 bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-slate-100">
                <div class="flex items-center gap-2">
                    <i data-lucide="table-2" class="w-5 h-5 text-brand-500"></i>
                    <div>
                        <h3 class="font-bold text-slate-900">Tabla de Amortización Francesa (Cuota Fija)</h3>
                        <p class="text-xs text-slate-400">Visualiza la trayectoria de tu crédito pago tras pago hasta liquidar el 100% de la deuda.</p>
                    </div>
                </div>
                <!-- Botón exportar simulación -->
                <button id="btn-export-csv" class="w-full sm:w-auto px-4 py-2 bg-slate-100 hover:bg-slate-200 transition text-slate-700 text-xs font-bold rounded-xl flex items-center justify-center gap-2">
                    <i data-lucide="download" class="w-4 h-4"></i>
                    Exportar Plan (CSV)
                </button>
            </div>

            <!-- Tabla responsiva -->
            <div class="overflow-x-auto rounded-xl border border-slate-100">
                <table class="min-w-full divide-y divide-slate-200 text-left text-xs">
                    <thead class="bg-slate-50 text-slate-500 uppercase tracking-wider font-semibold">
                        <tr>
                            <th class="px-6 py-3.5">Período (Mes)</th>
                            <th class="px-6 py-3.5">Cuota Mensual</th>
                            <th class="px-6 py-3.5">Abono a Capital</th>
                            <th class="px-6 py-3.5">Pago Intereses</th>
                            <th class="px-6 py-3.5">Saldo Pendiente</th>
                        </tr>
                    </thead>
                    <tbody id="amortization-table-body" class="divide-y divide-slate-100 text-slate-600 font-medium bg-white">
                        <!-- Generado dinámicamente -->
                    </tbody>
                </table>
            </div>

            <!-- Paginación o indicador de filas ocultas -->
            <div id="table-pagination-notice" class="mt-4 text-center text-xs text-slate-400 font-medium"></div>
        </section>
    </main>

    <!-- Pie de página -->
    <footer class="bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div>
                <p class="font-semibold text-slate-300">FinancIA © 2026. Todos los derechos reservados.</p>
                <p class="mt-1 text-slate-500">Este simulador es de carácter exclusivamente educativo e informativo. Las tasas y cobros finales dependen de las instituciones financieras correspondientes.</p>
            </div>
            <div class="flex items-center gap-4">
                <a href="#" class="hover:text-white transition">Privacidad</a>
                <span class="text-slate-700">•</span>
                <a href="#" class="hover:text-white transition">Términos de Uso</a>
            </div>
        </div>
    </footer>

    <!-- LÓGICA DE APLICACIÓN FINANCIERA (JavaScript) -->
    <script>
        // Inicialización de iconos de Lucide
        lucide.createIcons();

        // Configuración de la API de Gemini (Uso de Clave Vacía por Directiva de Entorno)
        const apiKey = "";

        // Elementos del DOM - Controladores
        const inputAssetValue = document.getElementById('input-asset-value');
        const sliderAssetValue = document.getElementById('slider-asset-value');
        const inputDownPayment = document.getElementById('input-down-payment');
        const sliderDownPayment = document.getElementById('slider-down-payment');
        const labelDownPct = document.getElementById('label-down-pct');
        const inputInterestRate = document.getElementById('input-interest-rate');
        const sliderInterestRate = document.getElementById('slider-interest-rate');
        const inputTerm = document.getElementById('input-term');
        const sliderTerm = document.getElementById('slider-term');
        const selectTermType = document.getElementById('select-term-type');
        const termMinLabel = document.getElementById('term-min-label');
        const termMaxLabel = document.getElementById('term-max-label');

        // Elementos del DOM - Visualizadores KPI
        const kpiMonthlyPayment = document.getElementById('kpi-monthly-payment');
        const kpiTotalInterest = document.getElementById('kpi-total-interest');
        const kpiInterestPercentage = document.getElementById('kpi-interest-percentage');
        const kpiTotalPayout = document.getElementById('kpi-total-payout');

        // Elementos del DOM - Acciones
        const btnChartBreakdown = document.getElementById('btn-chart-breakdown');
        const btnChartAmortization = document.getElementById('btn-chart-amortization');
        const btnExportCsv = document.getElementById('btn-export-csv');
        const btnAnalyzeAi = document.getElementById('btn-analyze-ai');
        const aiResponseContainer = document.getElementById('ai-response-container');
        const aiLoading = document.getElementById('ai-loading');
        const aiTextContent = document.getElementById('ai-text-content');
        const amortizationTableBody = document.getElementById('amortization-table-body');
        const tablePaginationNotice = document.getElementById('table-pagination-notice');

        // Escenarios de comparación
        const btnSaveScenario1 = document.getElementById('btn-save-scenario-1');
        const btnSaveScenario2 = document.getElementById('btn-save-scenario-2');
        const comparisonDrawer = document.getElementById('comparison-drawer');
        const compValA = document.getElementById('comp-val-a');
        const compValB = document.getElementById('comp-val-b');
        const compPayA = document.getElementById('comp-pay-a');
        const compPayB = document.getElementById('comp-pay-b');
        const compIntA = document.getElementById('comp-int-a');
        const compIntB = document.getElementById('comp-int-b');

        let scenarioA = null;
        let scenarioB = null;

        // Variables Globales de Estado
        let activeChartType = 'breakdown'; // 'breakdown' o 'amortization'
        let chartInstance = null;
        let financialResults = {}; // Almacena el estado actual calculado

        // Formateador de Divisas en Español Latino
        const formatCurrency = (val) => {
            return new Intl.NumberFormat('es-CO', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(val);
        };

        // Formateador de porcentajes
        const formatPercentage = (val) => {
            return new Intl.NumberFormat('es-CO', {
                style: 'percent',
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }).format(val / 100);
        };

        // Sincronizar inputs numéricos y sliders
        function setupSyncedInputs(input, slider, transformFn = (v) => v) {
            input.addEventListener('input', () => {
                let val = parseFloat(input.value);
                if (isNaN(val)) return;
                // Forzar límites en el slider si el input supera el máximo visual
                if (val > slider.max) {
                    slider.max = val * 1.5;
                }
                slider.value = val;
                calculateFinance();
            });

            slider.addEventListener('input', () => {
                input.value = transformFn(slider.value);
                calculateFinance();
            });
        }

        setupSyncedInputs(inputAssetValue, sliderAssetValue);
        setupSyncedInputs(inputDownPayment, sliderDownPayment);
        setupSyncedInputs(inputInterestRate, sliderInterestRate);
        setupSyncedInputs(inputTerm, sliderTerm);

        // Cambiar configuración del término (Años vs Meses)
        selectTermType.addEventListener('change', () => {
            const isYears = selectTermType.value === 'years';
            if (isYears) {
                sliderTerm.min = 1;
                sliderTerm.max = 30;
                termMinLabel.textContent = "1 Año";
                termMaxLabel.textContent = "30 Años";
                // Ajuste proporcional del valor actual
                let val = Math.max(1, Math.min(30, Math.round(parseFloat(inputTerm.value) / 12)));
                inputTerm.value = val;
                sliderTerm.value = val;
            } else {
                sliderTerm.min = 6;
                sliderTerm.max = 360;
                termMinLabel.textContent = "6 Meses";
                termMaxLabel.textContent = "360 Meses";
                // Ajuste proporcional del valor actual
                let val = Math.max(6, Math.min(360, Math.round(parseFloat(inputTerm.value) * 12)));
                inputTerm.value = val;
                sliderTerm.value = val;
            }
            calculateFinance();
        });

        // Limitar cuota inicial para que no supere el valor del activo
        function validateDownPayment() {
            const assetValue = parseFloat(inputAssetValue.value) || 0;
            const downPayment = parseFloat(inputDownPayment.value) || 0;
            
            // Reajustar límites interactivos de cuota inicial según el valor del activo
            sliderDownPayment.max = assetValue;
            
            if (downPayment >= assetValue) {
                inputDownPayment.value = Math.round(assetValue * 0.9); // max 90% recomendado
                sliderDownPayment.value = inputDownPayment.value;
            }

            // Actualizar etiqueta del porcentaje de cuota inicial
            const pct = (parseFloat(inputDownPayment.value) / assetValue) * 100;
            labelDownPct.textContent = isNaN(pct) ? '0.00% del activo' : `${pct.toFixed(2)}% del activo`;
        }

        // --- CÁLCULO FINANCIERO CORE (FÓRMULA FRANCESA) ---
        function calculateFinance() {
            validateDownPayment();

            const assetValue = parseFloat(inputAssetValue.value) || 0;
            const downPayment = parseFloat(inputDownPayment.value) || 0;
            const annualRate = parseFloat(inputInterestRate.value) || 0;
            let term = parseInt(inputTerm.value) || 1;
            const isTermYears = selectTermType.value === 'years';

            // Convertir término a meses
            const totalMonths = isTermYears ? term * 12 : term;

            // Capital Neto a Financiar
            const principal = Math.max(0, assetValue - downPayment);

            // Tasa Mensual Equivalente a partir de la Tasa Efectiva Anual (E.A.)
            // Fórmula: i_mensual = (1 + i_anual)^(1/12) - 1
            const monthlyRate = Math.pow(1 + (annualRate / 100), 1 / 12) - 1;

            let monthlyPayment = 0;
            let totalPayout = 0;
            let totalInterest = 0;
            let schedule = [];

            if (principal > 0) {
                if (monthlyRate > 0) {
                    // Cuota Fija por método Francés: C = P * [i * (1+i)^n] / [(1+i)^n - 1]
                    monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
                } else {
                    // En caso de interés 0%
                    monthlyPayment = principal / totalMonths;
                }

                // Generar tabla de amortización
                let remainingBalance = principal;
                for (let month = 1; month <= totalMonths; month++) {
                    const interestPayment = remainingBalance * monthlyRate;
                    const principalPayment = monthlyPayment - interestPayment;
                    remainingBalance = Math.max(0, remainingBalance - principalPayment);

                    schedule.push({
                        month,
                        payment: monthlyPayment,
                        principalPayment: principalPayment,
                        interestPayment: interestPayment,
                        remainingBalance: remainingBalance
                    });
                }

                totalPayout = (monthlyPayment * totalMonths) + downPayment;
                totalInterest = (monthlyPayment * totalMonths) - principal;
            } else {
                // Si la inicial cubre el 100% del activo
                totalPayout = downPayment;
            }

            // Almacenar en estado global
            financialResults = {
                assetValue,
                downPayment,
                principal,
                annualRate,
                totalMonths,
                monthlyPayment,
                totalInterest,
                totalPayout,
                schedule
            };

            // Actualizar interfaz con nuevos KPIs
            kpiMonthlyPayment.textContent = formatCurrency(monthlyPayment);
            kpiTotalInterest.textContent = formatCurrency(totalInterest);
            kpiTotalPayout.textContent = formatCurrency(totalPayout);

            const interestPct = assetValue > 0 ? (totalInterest / assetValue) * 100 : 0;
            kpiInterestPercentage.textContent = `Equivale al ${interestPct.toFixed(1)}% del valor total del activo.`;

            // Renderizar gráficos y tablas actualizadas
            renderChart();
            renderAmortizationTable();
        }

        // --- RENDERIZADO DE GRÁFICOS (CHART.JS) ---
        function renderChart() {
            const ctx = document.getElementById('financeChart').getContext('2d');
            
            // Destruir instancia anterior para evitar sobreescritura de canvas
            if (chartInstance) {
                chartInstance.destroy();
            }

            const { downPayment, principal, totalInterest, schedule } = financialResults;

            if (activeChartType === 'breakdown') {
                // Gráfico de Pastel: Composición Total del Pago
                chartInstance = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: ['Cuota Inicial', 'Capital Financiado', 'Total Intereses'],
                        datasets: [{
                            data: [downPayment, principal, totalInterest],
                            backgroundColor: ['#0284c7', '#38bdf8', '#f59e0b'],
                            borderWidth: 2,
                            borderColor: '#ffffff'
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    usePointStyle: true,
                                    font: { family: 'ui-sans-serif, system-ui', size: 11 }
                                }
                            }
                        },
                        cutout: '60%'
                    }
                });
            } else {
                // Gráfico de Línea: Amortización Temporal del Saldo y el Capital Acumulado
                const labels = schedule.filter((_, i) => i % Math.max(1, Math.round(schedule.length / 12)) === 0 || i === schedule.length - 1).map(s => `Mes ${s.month}`);
                const dataBalance = schedule.filter((_, i) => i % Math.max(1, Math.round(schedule.length / 12)) === 0 || i === schedule.length - 1).map(s => s.remainingBalance);
                
                chartInstance = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Saldo Pendiente',
                            data: dataBalance,
                            borderColor: '#0284c7',
                            backgroundColor: 'rgba(2, 132, 199, 0.05)',
                            fill: true,
                            tension: 0.3,
                            pointRadius: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: { usePointStyle: true }
                            }
                        },
                        scales: {
                            y: {
                                ticks: {
                                    callback: function(value) {
                                        return '$' + value.toLocaleString();
                                    }
                                }
                            }
                        }
                    }
                });
            }
        }

        // Manejadores para el intercambio de vistas de gráficos
        btnChartBreakdown.addEventListener('click', () => {
            activeChartType = 'breakdown';
            btnChartBreakdown.classList.add('bg-white', 'text-slate-800', 'shadow-sm');
            btnChartAmortization.classList.remove('bg-white', 'text-slate-800', 'shadow-sm');
            renderChart();
        });

        btnChartAmortization.addEventListener('click', () => {
            activeChartType = 'amortization';
            btnChartAmortization.classList.add('bg-white', 'text-slate-800', 'shadow-sm');
            btnChartBreakdown.classList.remove('bg-white', 'text-slate-800', 'shadow-sm');
            renderChart();
        });

        // --- RENDERIZADO DE TABLA DE AMORTIZACIÓN MES A MES ---
        function renderAmortizationTable() {
            const { schedule } = financialResults;
            amortizationTableBody.innerHTML = '';

            // Mostrar solo los primeros 12 y últimos 3 meses si la lista es muy larga (evita colapsar DOM)
            const maxRows = 24;
            const threshold = schedule.length > maxRows;
            
            let displayedSchedule = schedule;
            if (threshold) {
                const firstPart = schedule.slice(0, 12);
                const lastPart = schedule.slice(-6);
                
                firstPart.forEach(row => amortizationTableBody.appendChild(createTableRow(row)));
                
                // Fila divisoria interactiva
                const dividerRow = document.createElement('tr');
                dividerRow.className = 'bg-slate-50 text-center';
                dividerRow.innerHTML = `
                    <td colspan="5" class="px-6 py-3 text-slate-400 font-semibold cursor-pointer hover:bg-slate-100 transition" id="btn-show-all-rows">
                        ... Mostrando los primeros y últimos meses (Haz clic para ver los ${schedule.length} meses completos) ...
                    </td>
                `;
                amortizationTableBody.appendChild(dividerRow);

                // Agregar evento para expandir la tabla completa al dar clic
                document.getElementById('btn-show-all-rows').addEventListener('click', () => {
                    amortizationTableBody.innerHTML = '';
                    schedule.forEach(row => amortizationTableBody.appendChild(createTableRow(row)));
                    tablePaginationNotice.textContent = `Mostrando plan completo de ${schedule.length} meses de pago.`;
                });

                lastPart.forEach(row => amortizationTableBody.appendChild(createTableRow(row)));
                tablePaginationNotice.textContent = `Mostrando 18 de ${schedule.length} meses para optimizar espacio visual.`;
            } else {
                schedule.forEach(row => amortizationTableBody.appendChild(createTableRow(row)));
                tablePaginationNotice.textContent = `Plan de pago completo detallado de ${schedule.length} meses.`;
            }
        }

        function createTableRow(row) {
            const tr = document.createElement('tr');
            tr.className = 'hover:bg-slate-50/50 transition';
            tr.innerHTML = `
                <td class="px-6 py-4 font-semibold text-slate-900">Mes ${row.month}</td>
                <td class="px-6 py-4 font-bold text-slate-800">${formatCurrency(row.payment)}</td>
                <td class="px-6 py-4 text-emerald-600">${formatCurrency(row.principalPayment)}</td>
                <td class="px-6 py-4 text-amber-600">${formatCurrency(row.interestPayment)}</td>
                <td class="px-6 py-4 text-slate-500 font-semibold">${formatCurrency(row.remainingBalance)}</td>
            `;
            return tr;
        }

        // --- ACCIÓN: EXPORTAR A ARCHIVO CSV ---
        btnExportCsv.addEventListener('click', () => {
            const { schedule } = financialResults;
            if (!schedule || schedule.length === 0) return;

            let csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "Mes,Cuota Mensual,Abono a Capital,Intereses Pagados,Saldo Pendiente\n";

            schedule.forEach(row => {
                csvContent += `${row.month},${row.payment.toFixed(2)},${row.principalPayment.toFixed(2)},${row.interestPayment.toFixed(2)},${row.remainingBalance.toFixed(2)}\n`;
            });

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", `Plan_Amortizacion_FinancIA_${Date.now()}.csv`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });

        // --- SISTEMA DE COMPARACIÓN DE ESCENARIOS ---
        function updateComparisonDrawer() {
            if (!scenarioA && !scenarioB) {
                comparisonDrawer.classList.add('hidden');
                return;
            }
            comparisonDrawer.classList.remove('hidden');

            if (scenarioA) {
                compValA.textContent = formatCurrency(scenarioA.assetValue - scenarioA.downPayment);
                compPayA.textContent = formatCurrency(scenarioA.monthlyPayment);
                compIntA.textContent = formatCurrency(scenarioA.totalInterest);
            }
            if (scenarioB) {
                compValB.textContent = formatCurrency(scenarioB.assetValue - scenarioB.downPayment);
                compPayB.textContent = formatCurrency(scenarioB.monthlyPayment);
                compIntB.textContent = formatCurrency(scenarioB.totalInterest);
            }
        }

        btnSaveScenario1.addEventListener('click', () => {
            scenarioA = { ...financialResults };
            btnSaveScenario1.textContent = "Escenario A Guardado ✓";
            btnSaveScenario1.classList.add('bg-sky-600/30', 'text-sky-300');
            updateComparisonDrawer();
            setTimeout(() => { btnSaveScenario1.textContent = "Fijar Escenario A"; }, 2000);
        });

        btnSaveScenario2.addEventListener('click', () => {
            scenarioB = { ...financialResults };
            btnSaveScenario2.textContent = "Escenario B Guardado ✓";
            btnSaveScenario2.classList.add('bg-emerald-600/30', 'text-emerald-300');
            updateComparisonDrawer();
            setTimeout(() => { btnSaveScenario2.textContent = "Fijar Escenario B"; }, 2000);
        });


        // --- INTEGRACIÓN DE INTELIGENCIA ARTIFICIAL (GEMINI API) ---
        // Implementación con exponencial backoff para estabilidad del entorno interactivo
        async function askGeminiWithBackoff(promptText, retries = 5, delay = 1000) {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            const payload = {
                contents: [{ parts: [{ text: promptText }] }],
                systemInstruction: {
                    parts: [{
                        text: "Eres un asesor financiero experto y analista de inversiones especializado en préstamos, arrendamiento y gestión patrimonial en Latinoamérica. Da tus análisis estructurados en formato HTML semántico sencillo con viñetas y negritas para facilitar la lectura inmediata."
                    }]
                }
            };

            for (let i = 0; i < retries; i++) {
                try {
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    if (response.ok) {
                        const data = await response.json();
                        return data.candidates?.[0]?.content?.parts?.[0]?.text;
                    }
                } catch (err) {
                    // El error se gestiona silenciosamente para reintentar según el flujo del entorno
                }
                await new Promise(resolve => setTimeout(resolve, delay));
                delay *= 2; // Duplicar tiempo de espera (Backoff)
            }
            throw new Error("No se pudo conectar con el Asesor de IA después de varios intentos. Por favor verifica tu conexión.");
        }

        btnAnalyzeAi.addEventListener('click', async () => {
            aiResponseContainer.classList.remove('hidden');
            aiLoading.classList.remove('hidden');
            aiTextContent.innerHTML = '';

            const { assetValue, downPayment, principal, annualRate, totalMonths, monthlyPayment, totalInterest, totalPayout } = financialResults;

            // Construcción del Prompt personalizado con los datos calculados de la interfaz
            const prompt = `
                Analiza las siguientes condiciones de financiación que tengo configuradas:
                - Valor Neto del Activo: ${formatCurrency(assetValue)}
                - Cuota Inicial aportada: ${formatCurrency(downPayment)} (${((downPayment/assetValue)*100).toFixed(2)}%)
                - Capital Real Financiado: ${formatCurrency(principal)}
                - Tasa de Interés Anual: ${annualRate}% E.A.
                - Plazo de Pago: ${totalMonths} meses
                - Cuota Mensual Estimada: ${formatCurrency(monthlyPayment)}
                - Total de Intereses a pagar: ${formatCurrency(totalInterest)}
                - Desembolso Total Acumulado: ${formatCurrency(totalPayout)}

                Por favor, genera un informe rápido que contenga:
                1. Evaluación del costo financiero (¿Es una tasa competitiva? ¿Es un crédito costoso en relación al activo?).
                2. Riesgos financieros clave de esta estructura.
                3. Tres recomendaciones tácticas personalizadas para ahorrar dinero (ej: abonos a capital, refinanciación, aumento de cuota inicial, acortar el plazo).
                Asegúrate de responder en español y usar un tono profesional, alentador y analítico.
            `;

            try {
                const rawResponse = await askGeminiWithBackoff(prompt);
                
                // Conversión opcional básica de formato markdown simple a HTML para el contenedor
                let formattedHtml = rawResponse
                    .replace(/\n\n/g, '<br><br>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\* (.*?)(?=<br>|$)/g, '<li>$1</li>');

                aiLoading.classList.add('hidden');
                aiTextContent.innerHTML = `<div class="space-y-2 text-slate-700">${formattedHtml}</div>`;
            } catch (error) {
                aiLoading.classList.add('hidden');
                aiTextContent.innerHTML = `
                    <div class="text-amber-600 font-semibold p-4 border border-amber-200 bg-amber-50 rounded-xl flex items-center gap-2">
                        <i data-lucide="alert-triangle" class="w-5 h-5"></i>
                        <span>Ocurrió un inconveniente al conectar con el Asesor de IA. Inténtalo de nuevo en unos momentos.</span>
                    </div>
                `;
                lucide.createIcons();
            }
        });

        // Ejecutar cálculo automático al cargar la página
        window.onload = function() {
            calculateFinance();
        };
    </script>
</body>
</html>